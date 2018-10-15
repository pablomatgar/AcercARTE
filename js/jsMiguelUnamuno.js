( function(win, doc) {
            var audioPlayer = doc.getElementById("audiomiguelunamuno");
            var subtitles = doc.getElementById("textomiguelunamuno");
            var syncData = [
                  {"end": "3","start": "1","text": "\n \n Una de las aulas está \n \n" },
                  {"end": "4","start": "3","text": "dedicada a Miguel \n \n" },
                  {"end": "5","start": "4","text": "de Unamuno.\n \n" },
                  {"end": "7","start": "5","text": "Fue catedrático de Griego \n \n" },
                  {"end": "9","start": "8","text": "y tres veces rector \n \n" },
                  {"end": "10","start": "9","text": "de la universidad.\n \n" },
                  {"end": "15","start": "11","text": "Nació en Bilbao en 1864 \n \n" },
                  {"end": "20","start": "16","text": "y murió en Salamanca en 1936.\n \n" },
                  {"end": "23","start": "20","text": "Este aula que ahora está \n \n" },
                  {"end": "25","start": "23","text": "dedicada a Miguel de Unamuno \n \n" },
                  {"end": "27","start": "25","text": "era donde se enseñaba Derecho \n \n" },
                  {"end": "28","start": "27","text": "Canónico. \n" },
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
                        subtitles.children[index].style.background = '#F5F6CE';
                        if( audioPlayer.currentTime == audioPlayer.duration || audioPlayer.currentTime == '00.00' )
                subtitles.children[index].style.background = 'transparent';
                });
            });
        }(window, document));



// Copyright 2018 by Roberto Iglesias Pérez and Pablo Mateos García
