( function(win, doc) {
            var audioPlayer = doc.getElementById("audioescuelasmayores");
            var subtitles = doc.getElementById("textoescuelasmayores");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n En este edificio se estudiaban \n\n" },
                  {"end": "4","start": "2","text": "las carreras universitarias como:\n \n" },
                  {"end": "7","start": "4","text": "Medicina, Derecho, \n\n" },
                  {"end": "10","start": "7","text": "Filosofía o Teología.\n \n" },
                  {"end": "13","start": "11","text": "Cuando terminaban los estudios \n\n" },
                  {"end": "16","start": "13","text": "podían licenciarse o doctorarse (1).\n \n " },
                  {"end": "20","start": "17","text": "Aquí se encuentra el Aula Miguel de Unamuno \n\n" }, 
                  {"end": "23","start": "20","text": "y el Aula Fray Luis de León.\n \n " },  
                  {"end": "29","start": "25","text": "Pulsa los botones con el nombre de cada aula \n\n" },     
                  {"end": "33","start": "29","text": "para saber más información sobre ellas.\n \n \n" },                              
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
