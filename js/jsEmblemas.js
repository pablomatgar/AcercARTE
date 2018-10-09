( function(win, doc) {
            var audioPlayer = doc.getElementById("audioemblemas");
            var subtitles = doc.getElementById("textoemblemas");
            var syncData = [
                  {"end": "5","start": "1","text": "\n \n Los emblemas son imágenes que servían \n \n como ejemplo para los estudiantes.\n \n" },
                  {"end": "10","start": "6","text": "En el patio interior del edificio \n \n  hay siete emblemas.\n \n" },
                  {"end": "17","start": "10","text": "Los emblemas de izquierda a derecha\n \n  son: La Templanza, la Victoria del amor,\n \n" },
                  {"end": "21","start": "17","text": "dos temas mitológicos, un acertijo \n \n  con jeroglíficos, \n \n" },
                  {"end": "28","start": "22","text": "la Justicia y la Concordia, la Prudencia \n \n  y la continuidad del tiempo. \n \n" },
                  {"end": "36","start": "28","text": "“El sueño de Polífilo” Es el título del \n \n libro que utilizaron como ejemplo \n \n para hacer los emblemas.\n \n" },
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

