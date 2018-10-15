( function(win, doc) {
            var audioPlayer = doc.getElementById("audioparaninfo");
            var subtitles = doc.getElementById("textoparaninfo");
            var syncData = [
                  {"end": "2","start": "1","text": "\n \n El paraninfo es la sala donde \n \n" },
                  {"end": "4","start": "2","text": "se celebran los actos oficiales \n \n" },
                  {"end": "5","start": "4","text": "de la universidad.\n \n" },
                  {"end": "9","start": "6","text": "Aquí se entregan algunos premios y \n \n" },
                  {"end": "11","start": "9","text": "se celebra el inicio y el fin \n \n" },
                  {"end": "13","start": "11","text": "del curso universitario.\n \n" },
                  {"end": "16","start": "14","text": "También se celebra el nombramiento \n \n" },
                  {"end": "19","start": "16","text": "de nuevos doctorados honoris causa (1).\n \n" },
                  {"end": "22","start": "20","text": "Esta sala está muy decorada. \n \n" },
                  {"end": "26","start": "23","text": "Hay una bandera militar, del príncipe \n \n" },
                  {"end": "28","start": "26","text": "don Juan, hijo de los Reyes católicos.\n \n" },
                  {"end": "32","start": "30","text": "Esta bandera militar también se \n \n" },
                  {"end": "33","start": "32","text": "llama pendón.\n \n" },
                  {"end": "37","start": "35","text": "Esta bandera recuerda a las primeras \n \n" },
                  {"end": "40","start": "37","text": "clases que se celebraban en la Catedral \n \n" },
                  {"end": "42","start": "40","text": "Vieja para educar a sacerdotes.\n \n" },
                  {"end": "47","start": "44","text": "En esta bandera hay una tiara (2) \n \n" },
                  {"end": "49","start": "47","text": "con las llaves pontificias (3) sobre \n \n" },
                  {"end": "50","start": "49","text": "terciopelo rojo. \n \n" },
                  {"end": "54","start": "52","text": "En las paredes hay tapices \n \n" },
                  {"end": "56","start": "54","text": "del año 1600.\n \n" },
                  {"end": "60","start": "57","text": "Antes los tapices decoraban \n \n" },
                  {"end": "61","start": "60","text": "las paredes de las aulas.\n \n" },
                  {"end": "65","start": "62","text": "Algunas veces se colocaban en \n \n" },
                  {"end": "66","start": "65","text": "el exterior del edificio.\n \n" },
                  {"end": "70","start": "68","text": "Todos los tapices cuentan la historia \n \n" },
                  {"end": "73","start": "70","text": "de la Gran Zenobia, reina de Palmira \n \n" },
                  {"end": "76","start": "74","text": "y el emperador Aureliano. \n \n \n" },
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
