( function(win, doc) {
            var audioPlayer = doc.getElementById("audiovitrinas");
            var subtitles = doc.getElementById("textovitrinas");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n Los objetos que se exponen\n \n" },
                  {"end": "3","start": "2","text": "en la primera vitrina,\n \n" },
                  {"end": "4","start": "3.5","text": "son los primeros documentos\n \n" },
                  {"end": "7","start": "5.5","text": "sobre la fundación de la Universidad.\n \n" },
                  {"end": "10","start": "8","text": "No son los documentos originales,\n \n" },
                  {"end": "14","start": "11","text": "son facsimiles, es decir, \n \n" },
                  {"end": "15","start": "14","text": "son unas copias exactas, \n \n" },
                  {"end": "20","start": "16","text": "para evitar que los roben o se deterioren. \n \n \n \n" },
                  {"end": "23","start": "21","text": "La segunda vitrina tiene facsimiles \n \n" },
                  {"end": "26","start": "24","text": "de los libros más importantes de la Biblioteca.\n \n " },
                  {"end": "29","start": "27","text": "En uno de ellos todavía se pueden ver\n \n" },
                  {"end": "32","start": "30","text": "las marcas de la censura.\n \n" },
                  {"end": "35","start": "33","text": "Cuando las autoridades pensaban\n \n " },
                  {"end": "37","start": "35","text": "que el texto estaba confundido o \n \n" },
                  {"end": "40","start": "38","text": "era peligroso lo que decía\n \n " },
                  {"end": "41","start": "40","text": "arrancaban las hojas \n \n" },
                  {"end": "44","start": "42","text": "o tachaban con tinta la escritura. \n \n \n \n" },
                  {"end": "46","start": "44","text": "En la siguente galería del claustro,\n \n " },
                  {"end": "49","start": "46","text": "las vitrinas tienen unos instrumentos \n \n" },
                  {"end": "50","start": "49","text": "que utilizaban los profesores\n \n " },
                  {"end": "52","start": "51","text": "para las clases de biología,  \n \n" },
                  {"end": "55","start": "52.5","text": "geografía, medicina. \n \n \n \n" },
                  {"end": "57","start": "55","text": "La última vitrina tiene las herramientas \n \n" },
                  {"end": "60","start": "58","text": "que se utilizaban para imprimir libros. \n \n" },
                  {"end": "63","start": "61","text": "Los libreros de Salamanca eran un grupo \n \n" },
                  {"end": "65","start": "64","text": "muy numeroso en la ciudad,  \n \n" },
                  {"end": "67","start": "65","text": "tenían que vender libros \n \n " },
                  {"end": "69","start": "67","text": "para todos los estudiantes. \n \n" },
                  {"end": "71","start": "69","text": "Por eso, sus tiendas se ubican \n \n" },
                  {"end": "74","start": "72","text": "en la calle delante de la Fachada Rica. \n \n " },
                  {"end": "77","start": "75","text": "En las primeras máquinas para imprimir, \n \n" },
                  {"end": "81","start": "78","text": "se colocaban las letras una a una \n \n " },
                  {"end": "83","start": "81","text": "para construir las palabras \n \n" },
                  {"end": "84","start": "83","text": "y después las frases. \n \n" },
                  {"end": "88","start": "85","text": "Hoy ya no es necesario\n \n " },
                  {"end": "89","start": "88","text": "realizar este difícil trabajo \n \n" },
                  {"end": "93","start": "90","text": "y se utilizan las imprentas electrónicas,\n \n " },
                  {"end": "94","start": "93","text": "muy parecida a la que hay \n \n" },
                  {"end": "98","start": "94","text": "también en la vitrina.\n \n" },
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

