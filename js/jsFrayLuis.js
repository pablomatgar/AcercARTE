( function(win, doc) {
            var audioPlayer = doc.getElementById("audiofrayluis");
            var subtitles = doc.getElementById("textofrayluis");
            var syncData = [
                  {"end": "2","start": "1","text": "\n \n Hay otra aula dedicada a \n \n" },
                  {"end": "4","start": "2","text": "Fray Luis de León.\n \n" },
                  {"end": "6","start": "4","text": "Con catorce años llegó \n \n" },
                  {"end": "7","start": "6","text": "a Salamanca.\n \n" },
                  {"end": "9","start": "8","text": "Dió clase de teología \n \n" },
                  {"end": "10","start": "9","text": "en la universidad.\n \n" },
                  {"end": "13","start": "11","text": "Él dijo la famosa frase \n \n" },
                  {"end": "16","start": "13","text": "“Como decíamos ayer...” \n \n" },
                  {"end": "18","start": "16","text": "La clase está igual que \n \n" },
                  {"end": "20","start": "18","text": "cuando Fray Luis vivía.\n \n" },
                  {"end": "22","start": "20","text": "En las mesas los estudiantes \n \n" },
                  {"end": "23","start": "22","text": "ponían los nombres.\n \n" },
                  {"end": "28","start": "24","text": "Murió en 1591 y su cuerpo está \n \n" },
                  {"end": "30","start": "28","text": "en la capilla de este Edificio.\n" },
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

