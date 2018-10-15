( function(win, doc) {
            var audioPlayer = doc.getElementById("audiocapilla");
            var subtitles = doc.getElementById("textocapilla");
            var syncData = [
                  {"end": "3","start": "1","text": "\n \n La capilla de la Universidad de Salamanca \n \n" },
                  {"end": "5","start": "3","text": "es la tercera que se construye.\n \n" },
                  {"end": "8","start": "6","text": "Es un gran espacio que ocupa dos pisos.\n \n" },
                  {"end": "13","start": "9","text": "Antes el piso superior era la biblioteca. \n \n" },
                  {"end": "16","start": "14","text": "La biblioteca estaba en el piso \n \n" },
                  {"end": "19","start": "16","text": "superior para evitar inundaciones. \n \n" },
                  {"end": "23","start": "20","text": "Ahí estaba la bóveda del cielo de Salamanca.\n \n" },
                  {"end": "26.5","start": "24","text": "Esta bóveda pintada está ahora en \n \n" },
                  {"end": "28.5","start": "26.5","text": "las escuelas menores y queda menos \n \n" },
                  {"end": "30","start": "28.5","text": "de la mitad.\n \n" },
                  {"end": "32.5","start": "30","text": "Al principio la capilla se utilizaba \n \n" },
                  {"end": "35","start": "32.5","text": "para guardar el dinero de la universidad y \n \n" },
                  {"end": "37","start": "35","text": "celebrar reuniones de rectores. \n \n" },
                  {"end": "40.5","start": "38","text": "También se encuentran  las cenizas del \n \n" },
                  {"end": "43.5","start": "40.5","text": "famoso escritor y profesor de la Universidad\n \n" },
                  {"end": "46","start": "43.5","text": "de Salamanca, Fray Luis de León. \n \n" },
                  {"end": "50","start": "47","text": "El retablo del fondo es de mármol de colores.\n \n " },
                  {"end": "53.5","start": "51","text": "En la parte inferior de este retablo \n \n" },
                  {"end": "57","start": "53.5","text": "está el sagrario (1), es de plata.\n \n " },
                  {"end": "60","start": "58","text": "En el cuadro central aparece la \n \n" },
                  {"end": "62","start": "60","text": "Virgen María con algunos estudiantes\n \n " },
                  {"end": "63.5","start": "62","text": "de la universidad.\n \n " },
                  {"end": "66.5","start": "64","text": "Este cuadro se abre y hay un espacio\n \n" },
                  {"end": "69.5","start": "66.5","text": "para enseñar algunos objetos importantes\n \n" },
                  {"end": "71","start": "69.5","text": "de las ceremonias religiosas\n \n \n " },
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
