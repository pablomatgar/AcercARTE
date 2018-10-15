( function(win, doc) {
            var audioPlayer = doc.getElementById("audiozaguan");
            var subtitles = doc.getElementById("textozaguan");
            var syncData = [
                  {"end": "3","start": "1","text": "\n \n Este espacio que hoy es la puerta trasera,\n \n" },
                  {"end": "7","start": "4","text": "durante los primeros años fue la entrada principal,\n \n" },
                  {"end": "10","start": "8","text": "por esta razón el techo \n \n" },
                  {"end": "11","start": "10","text": "está tan ricamente decorado.\n \n" },
                  {"end": "15","start": "13","text": "El artesonado (1) es de madera,\n \n" },
                  {"end": "18","start": "16","text": "el relieve de la parte de \n \n" },
                  {"end": "20","start": "18","text": "abajo está realizado en yeso,\n \n" },
                  {"end": "23","start": "21","text": "las formas y colores están inspirados \n \n" },
                  {"end": "26","start": "23","text": "en el arte hispanomusulmán (2),\n \n" },
                  {"end": "30","start": "27","text": "por eso se considera de estilo mudéjar (3). \n \n \n \n " },
                  {"end": "36","start": "33","text": "Antes de la construcción de la Fachada Rica,\n \n" },
                  {"end": "38","start": "36","text": "los estudiantes entraban \n \n" },
                  {"end": "40","start": "38","text": "al edificio por esta sala.\n \n" },
                  {"end": "44","start": "41","text": "Cuando todavía no existía un gran edificio,\n \n " },
                  {"end": "48","start": "45","text": "las clases también se impartían en la Catedral.\n \n" },
                  {"end": "52","start": "49","text": "Esta puerta se abre justo a la misma calle,\n \n" },
                  {"end": "56","start": "53","text": "los estudiantes podían entrar directamente.\n \n " },
                  {"end": "60","start": "57","text": "Por eso, cuando entramos al patio,\n \n" },
                  {"end": "63","start": "60","text": "podemos ver los relieves del piso superior, \n \n " },
                  {"end": "65","start": "64","text": "estaban colocados para \n \n" },
                  {"end": "66","start": "65","text": "avisar a los estudiantes\n \n" },
                  {"end": "69","start": "67","text": "de cómo se tenían que comportar.\n \n \n " },
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

