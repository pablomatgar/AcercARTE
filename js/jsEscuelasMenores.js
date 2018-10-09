( function(win, doc) {
            var audioPlayer = doc.getElementById("audioescuelasmenores");
            var subtitles = doc.getElementById("textoescuelasmenores");
            var syncData = [
                  {"end": "6","start": "1","text": "\n \n Aquí se estudiaba el “bachillerato” \n\npara después entrar en la Universidad.\n \n" },
                  {"end": "11","start": "7","text": "Algunas de las asignaturas \n\nque estudiaban eran:\n \n" },
                  {"end": "15","start": "11","text": "Gramática, música \n\ny retórica (1).\n \n \n" },
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

