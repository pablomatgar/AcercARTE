( function(win, doc) {
            var audioPlayer = doc.getElementById("audiopatio");
            var subtitles = doc.getElementById("textopatio");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n En la plaza es donde se encuentran\n \n" },
                  {"end": "3","start": "2","text": "los edificios históricos\n \n" },
                  {"end": "5","start": "4","text": "de la Universidad de Salamanca.\n \n" },
                  {"end": "9","start": "6","text": "Fueron construidos en el S.XV\n\n" },
                  {"end": "11","start": "9","text": "(finales de la Edad Media).\n \n" },
                  {"end": "14","start": "12","text": "En el centro del patio \n\n" },
                  {"end": "16","start": "14","text": "hay una estatua de Fray Luis,\n \n" },
                  {"end": "18","start": "16","text": "un intelectual religioso\n \n" },
                  {"end": "19","start": "18","text": "de la época.\n \n" },
                  {"end": "22","start": "21","text": "Tambien era profesor \n\n" },
                  {"end": "24","start": "22","text": "en la Universidad.\n \n" },
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

