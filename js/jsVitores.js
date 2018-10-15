( function(win, doc) {
            var audioPlayer = doc.getElementById("audiovitores");
            var subtitles = doc.getElementById("textovitores");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n ¿Qué son y qué función tenían?\n \n \n", "class":"TITULO" },
                  {"end": "5","start": "3","text": "Los vítores son un símbolo característico \n \n" },
                  {"end": "7","start": "6","text": "de la ciudad de Salamanca.\n \n" },
                  {"end": "11","start": "8","text": "Sirven para reconocer el trabajo de los \n \n" },
                  {"end": "13","start": "11","text": "nuevos doctores (1) o cátedras (2) \n \n" },
                  {"end": "15","start": "13","text": "y algunos estudiantes.\n \n" },
                  {"end": "22","start": "16","text": "En latín “vitor” V-I-T-O-R \n \n" },
                  {"end": "23","start": "22","text": "significa vencedor. \n \n" },
                  {"end": "27","start": "24","text": "Son de color rojo oscuro, un \n \n"},
                  {"end": "29","start": "27","text": "color que significa el triunfo. \n \n"},
                  {"end": "32","start": "30","text": "En la parte de abajo \n \n" },
                  {"end": "33","start": "32","text": "tienen una media luna,\n \n" },
                  {"end": "37","start": "34","text": "Es el símbolo del papa Benedicto XIII.\n \n " },
                  {"end": "41","start": "38","text": "También está la fecha y el nombre \n \n" },
                  {"end": "43","start": "41","text": "de la persona a la que pertenece. \n \n \n" },
                  {"end": "47","start": "45","text": "Tipos de vítores\n \n \n", "class":"TITULO" },
                  {"end": "50","start": "47","text": "Durante la dictadura de Francisco Franco \n \n" },
                  {"end": "53","start": "51","text": "el símbolo de la media luna se \n \n" },
                  {"end": "57","start": "53","text": "cambió por la letra “C”. VICTOR.\n \n " },
                  {"end": "59","start": "57","text": "Cambia un poco el significado, \n \n" },
                  {"end": "61","start": "59","text": "que quiere decir: victorioso.\n \n" },
                  {"end": "65","start": "62","text": "A veces hay otros dibujos como una \n \n" },
                  {"end": "67","start": "65","text": "espada, una pluma, el escudo \n \n" },
                  {"end": "69","start": "67","text": "de un colegio, etc.\n \n \n" },
                  {"end": "73","start": "71","text": "Dónde se encuentran\n \n \n", "class":"TITULO" },
                  {"end": "75","start": "73","text": "Los encontramos en las fachadas de \n \n" },
                  {"end": "78","start": "75","text": "los edificios más importantes y dentro \n \n" },
                  {"end": "80","start": "78","text": "de los edificios de la universidad. \n \n" },
                  {"end": "85","start": "81","text": "Un ejemplo es el Colegio Fonseca. \n \n" },
                  {"end": "88","start": "85","text": "Muchos vítores se han perdido por la \n \n" },
                  {"end": "90","start": "88","text": "Guerra de la Independencia y \n \n" },
                  {"end": "92","start": "90","text": "las Desamortizaciones (3).\n \n \n" },
                  {"end": "96","start": "94","text": "Detalles curiosos\n \n \n", "class":"TITULO" },
                  {"end": "98","start": "96","text": "Los Vítores más altos, están \n \n" },
                  {"end": "99","start": "98","text": "a 12 metros de altura. \n \n" },
                  {"end": "102","start": "100","text": "Son imágenes hechas con \n \n" },
                  {"end": "103","start": "102","text": "permiso de la universidad.\n \n " },
                  {"end": "106","start": "104","text": "La leyenda dice que se pintaban \n \n" },
                  {"end": "107","start": "106","text": "con sangre de toro.\n \n " },
                  {"end": "110","start": "108","text": "Pero en realidad se pintaban con \n \n" },
                  {"end": "113","start": "110","text": "sangre de vaca mezclada con aceite.\n \n" },
                  {"end": "115","start": "114","text": "Las primeras veces que se \n \n" },
                  {"end": "118","start": "115","text": "hacen es en el Renacimiento (4).\n \n \n" },
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

