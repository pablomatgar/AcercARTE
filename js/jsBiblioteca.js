( function(win, doc) {
            var audioPlayer = doc.getElementById("audiobiblioteca");
            var subtitles = doc.getElementById("textobiblioteca");
            var syncData = [
                  {"end": "8","start": "1","text": "\n \n La Biblioteca Histórica de la Universidad\n\n de Salamanca está en el segundo piso\n\n del edificio de las Escuela Mayores.\n \n" },
                  {"end": "16","start": "9","text": "Fue fundada cerca del año 1220 \n \n por orden del rey Alfonso IX de León.\n \n" },
                  {"end": "21","start": "17","text": "Al principio se conocía como \n \n el Estudio Salmantino,\n \n" },
                  {"end": "27","start": "22","text": "y en el año 1250 pasó a ser \n \n el espacio de la biblioteca. \n \n" },
                  {"end": "38","start": "28","text": "En la actualidad los fondos de esta \n \n biblioteca están considerados Patrimonio \n \n Histórico  Español por su gran \n \n valor y antigüedad. \n \n" },
                  {"end": "44","start": "39","text": "El acceso a la Biblioteca Histórica \n \n está limitado a los investigadores,\n \n" },
                  {"end": "50","start": "45","text": "debido a que su principal función es \n \n guardar y proteger toda la colección.\n \n " },
                  {"end": "62","start": "51","text": "Dentro de los fondos de la colección \n \n encontramos: documentos históricos, \n \n otros relacionados con Salamanca \n \n y también universitarios. \n \n" },
                  {"end": "70","start": "63","text": "La sala es rectangular con estanterías de  \n \n estilo Barroco en las que se colocan  \n \n algunos de los libros de la colección. \n \n" },
                  {"end": "79","start": "72","text": "También destaca la colección de globos \n \n  terrestres y muebles antiguos que \n \n están repartidos por la sala.\n \n" },
                ];
            createSubtitle();


            function createSubtitle()
            {
                var element;
                for (var i = 0; i < syncData.length; i++) {
                    element = doc.createElement('span');
                    element.setAttribute("id", "c_" + i);
                    element.innerText = syncData[i].text + " ";
                    subtitles.appendChild(element);
                }
            }

            audioPlayer.addEventListener("timeupdate", function(e){
                syncData.forEach(function(element, index, array){
                    if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
                        subtitles.children[index].style.background = '#BF7C5A';
                        if( audioPlayer.currentTime == audioPlayer.duration || audioPlayer.currentTime == '00.00' )
                subtitles.children[index].style.background = 'transparent';
                });
            });
        }(window, document));



// Copyright 2018 by Roberto Iglesias Pérez and Pablo Mateos García
