( function(win, doc) {
            var audioPlayer = doc.getElementById("audiomiguelunamuno");
            var subtitles = doc.getElementById("textomiguelunamuno");
            var syncData = [
                  {"end": "4","start": "1","text": "\n \n Una de las aulas está \n \n dedicada a Miguel \n \n de Unamuno.\n \n" },
                  {"end": "10","start": "5","text": "Fue catedrático de Griego \n \n y tres veces rector \n \n de la universidad.\n \n" },
                  {"end": "20","start": "11","text": "Nació en Bilbao en 1864 \n \n y murió en Salamanca en 1936.\n \n" },
                  {"end": "28","start": "20","text": "Este aula que ahora está \n \n dedicada a Miguel de Unamuno \n \n era donde se enseñaba Derecho \n \n Canónico. \n" },
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
