( function(win, doc) {
            var audioPlayer = doc.getElementById("audiofranciscosalinas");
            var subtitles = doc.getElementById("textofranciscosalinas");
            var syncData = [
                  {"end": "5","start": "0","text": "\n \n Francisco Salinas nació en Burgos en 1514,\n \n" },
                  {"end": "8","start": "6","text": "fue profesor de música de la Universidad \n \n" },
                  {"end": "11","start": "8","text": "de Salamanca más de 20 años.\n \n" },
                  {"end": "15","start": "12","text": "y murió en Salamanca en 1590.\n \n" },
                  {"end": "18","start": "16","text": "Mientras trabajaba en la universidad, \n \n" },
                  {"end": "21","start": "19","text": "conoció a Fray Luis de León,\n \n" },
                  {"end": "24","start": "22","text": "y le llegó a admirar tanto que quiso \n \n" },
                  {"end": "26","start": "24","text": "dedicarle una oda (1).\n \n" },
                  {"end": "30","start": "27","text": "Todo su trabajo se perdió y solo se \n \n" },
                  {"end": "33","start": "30","text": "conserva un gran libro con anotaciones.\n \n" },
                  {"end": "36","start": "34","text": "En el libro vemos como las notas \n \n" },
                  {"end": "39","start": "36","text": "musicales antes eran cuadradas, al \n \n" },
                  {"end": "42","start": "39","text": "contrario que ahora que las notas son redondas. \n \n \n" },
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
