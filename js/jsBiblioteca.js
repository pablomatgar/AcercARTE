( function(win, doc) {
            var audioPlayer = doc.getElementById("audiobiblioteca");
            var subtitles = doc.getElementById("textobiblioteca");
            var syncData = [
                  {"end": "3","start": "0.5","text": "\n \n La Biblioteca Histórica de la Universidad\n \n" },
                  {"end": "5.5","start": "3","text": "de Salamanca está en el segundo piso\n\n " },
                  {"end": "8.5","start": "5.5","text": "del edificio de las Escuela Mayores.\n \n" },
                  {"end": "13.5","start": "8.5","text": "Fue fundada cerca del año 1220 \n \n" },
                  {"end": "17","start": "13.5","text": "por orden del rey Alfonso IX de León.\n \n" },
                  {"end": "19.5","start": "17","text": "Al principio se conocía como \n \n" },
                  {"end": "21.5","start": "19.5","text": "el Estudio Salmantino,\n \n" },
                  {"end": "26","start": "21.5","text": "y en el año 1250 pasó a ser \n \n" },
                  {"end": "28","start": "26","text": "el espacio de la biblioteca. \n \n" },
                  {"end": "31","start": "28","text": "En la actualidad los fondos de esta \n \n" },
                  {"end": "34","start": "31","text": "biblioteca están considerados Patrimonio \n \n" },
                  {"end": "36","start": "34","text": "Histórico  Español por su gran \n \n" },
                  {"end": "38","start": "36","text": "valor y antigüedad. \n \n" },
                  {"end": "41","start": "38","text": "El acceso a la Biblioteca Histórica \n \n" },
                  {"end": "44","start": "41","text": "está limitado a los investigadores,\n \n" },
                  {"end": "47","start": "44","text": "debido a que su principal función es \n \n" },
                  {"end": "50","start": "47","text": "guardar y proteger toda la colección.\n \n" },
                  {"end": "53.5","start": "50","text": "Dentro de los fondos de la colección \n \n" },
                  {"end": "56.5","start": "53.5","text": "encontramos: documentos históricos, \n \n " },
                  {"end": "59.5","start": "56.5","text": "otros relacionados con Salamanca \n \n" },
                  {"end": "62.5","start": "59.5","text": "y también universitarios. \n \n" },
                  {"end": "67","start": "62.5","text": "La sala es rectangular con estanterías de  \n \n" },
                  {"end": "69","start": "67","text": "estilo Barroco en las que se colocan  \n \n" },
                  {"end": "71.5","start": "69","text": "algunos de los libros de la colección. \n \n" },
                  {"end": "74.5","start": "71.5","text": "También destaca la colección de globos \n \n" },
                  {"end": "77.5","start": "74.5","text": "terrestres y muebles antiguos que \n \n" },
                  {"end": "79","start": "77.5","text": "están repartidos por la sala.\n \n" },
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
