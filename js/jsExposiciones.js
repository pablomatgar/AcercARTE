( function(win, doc) {
            var audioPlayer = doc.getElementById("audioexposiciones");
            var subtitles = doc.getElementById("textoexposiciones");
            var syncData = [
                  {"end": "3","start": "0","text": "\n \n En esta habitación se guardan objetos religiosos,\n \n" },
                  {"end": "8","start": "5","text": "Estos objetos se utilizaban en las ceremonias \n \n" },
                  {"end": "10","start": "8","text": "de la capilla de la Universidad.\n \n" },
                  {"end": "14","start": "11","text": "Los objetos de metal se usaban en las misas,\n \n" },
                  {"end": "18","start": "15","text": "como: atriles, copas y cruces.\n \n" },
                  {"end": "22","start": "20","text": "También se guardan las figuras de \n \n" },
                  {"end": "24","start": "22","text": "los santos y relicarios (1).\n \n" },
                  {"end": "27","start": "25","text": "En la habitación destaca\n \n" },
                  {"end": "29","start": "27","text": "el Arca de Caudales,\n \n","class":"CURSIVA" },
                  {"end": "32","start": "30","text": "era la antigua caja fuerte.\n \n" },
                  {"end": "34","start": "33","text": "Se guardaban piezas de valor \n \n" },
                  {"end": "36","start": "34","text": "y documentos importantes.\n \n \n" },
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
