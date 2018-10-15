( function(win, doc) {
            var audioPlayer = doc.getElementById("audioescalera");
            var subtitles = doc.getElementById("textoescalera");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n La escalera es una de las partes \n \n" },
                  {"end": "4","start": "3","text": "más importantes de la Universidad.\n \n" },
                  {"end": "7","start": "6","text": "Tiene tres tramos (1), con diferentes \n \n" },
                  {"end": "9","start": "8","text": "imágenes en relieve.\n \n" },
                  {"end": "11","start": "10","text": "Los alumnos usaban los relieves  \n \n" },
                  {"end": "12","start": "11","text": "como consejos\n \n" },
                  {"end": "15","start": "13","text": "y con estos consejos alcanzaban \n \n" },
                  {"end": "16","start": "15","text": "el conocimiento. \n \n \n" },
                  {"end": "20","start": "19","text": "Primer tramo \n \n \n", "class": "TITULO"},
                  {"end": "22","start": "21","text": "En la primera imagen, encontramos \n \n" },
                  {"end": "23","start": "22","text": "al Peregrino (2)\n \n" },
                  {"end": "25","start": "24","text": "tiene que superar las pruebas que \n \n" },
                  {"end": "27","start": "25","text": "vemos en los relieves.\n \n " },
                  {"end": "29","start": "27","text": "En la parte de fuera de la escalera \n \n" },
                  {"end": "31","start": "30","text": "está el Gaitero, \n \n" },
                  {"end": "33","start": "31","text": "que representa los vicios y al mal \n \n " },
                  {"end": "34","start": "33","text": "estudiante.\n \n " },
                  {"end": "38","start": "35","text": "Después del Peregrino aparece la \n \n" },
                  {"end": "39","start": "38","text": "Danza Morisca,\n \n " },
                  {"end": "42","start": "40","text": "aquí los personajes están bailando y \n \n" },
                  {"end": "43","start": "42","text": "celebrando el amor.\n \n" },
                  {"end": "47","start": "44","text": "Todos bailan alrededor de una mujer que \n \n" },
                  {"end": "49","start": "47","text": "representa la lujuria (3),\n \n" },
                  {"end": "52","start": "50","text": "pero el Peregrino tiene que alejarse de \n \n" },
                  {"end": "55","start": "52","text": "estos vicios para conseguir su objetivo. \n \n \n" },
                  {"end": "57","start": "56","text": "Segundo tramo \n \n \n", "class": "TITULO" },
                  {"end": "61","start": "58","text": "Aparecen varias escenas con personajes \n \n" },
                  {"end": "62","start": "61","text": "desnudos,\n \n" },
                  {"end": "64","start": "62","text": "y en el centro hay una flor que separa \n \n" },
                  {"end": "65","start": "64","text": "estas escenas.\n \n " },
                  {"end": "68","start": "66","text": "En el lado derecho aparece una mujer \n \n" },
                  {"end": "69","start": "68","text": "sobre un hombre, \n \n" },
                  {"end": "72","start": "70","text": "y una araña que representa el mal.\n \n " },
                  {"end": "75","start": "73","text": "En el lado izquierdo aparece un hombre \n \n" },
                  {"end": "76","start": "75","text": "sobre una mujer,\n \n " },
                  {"end": "80","start": "77","text": "y una abeja, que representa el trabajo \n \n" },
                  {"end": "81","start": "80","text": "bien hecho.\n \n" },
                  {"end": "86","start": "82","text": "Alrededor de las escenas, un indio con flechas \n \n" },
                  {"end": "88","start": "86","text": "que expulsa a un salvaje (4). \n \n \n" },
                  {"end": "93","start": "92","text": "Tercer tramo \n \n \n", "class": "TITULO" },
                  {"end": "97","start": "94","text": "Primero aparece “Cupido (5) Cautivo”,\n \n" },
                  {"end": "100","start": "98","text": "con una venda en los ojos y atrapado \n \n" },
                  {"end": "101","start": "100","text": "en una red,\n \n " },
                  {"end": "104","start": "101","text": "esta red simboliza la lujuria provocada \n \n" },
                  {"end": "105","start": "104","text": "por la mujer. \n \n" },
                  {"end": "109","start": "106","text": "Las alas están en el suelo, pero el arco \n \n" },
                  {"end": "112","start": "109","text": "y las flechas aún las tiene en la mano. \n \n " },
                  {"end": "116","start": "113","text": "Si seguimos vemos jinetes que están \n \n" },
                  {"end": "118","start": "116","text": "persiguiendo a unos toros,\n \n " },
                  {"end": "121","start": "119","text": "los toros son un símbolo de las \n \n" },
                  {"end": "123","start": "121","text": "pasiones descontroladas,\n \n" },
                  {"end": "127","start": "124","text": "Representan la lucha del hombre intentando \n \n" },
                  {"end": "130","start": "127","text": "controlar las pasiones de la naturaleza.\n \n" },
                  {"end": "134","start": "131","text": "Cuando lo consiguen, aparecen cuatro caballeros \n \n" },
                  {"end": "138","start": "134","text": "que se dirigen a la última figura. \n \n " },
                  {"end": "142","start": "139","text": "Los caballeros representan a los hombres que han \n \n" },
                  {"end": "145","start": "142","text": "conseguido dominar las pasiones para \n \n" },
                  {"end": "146","start": "145","text": "alcanzar la sabiduría.\n \n " },
                  {"end": "150","start": "147","text": "El último personaje se conoce como \n \n" },
                  {"end": "151","start": "150","text": "El Estudiante,\n \n" },
                  {"end": "154","start": "152","text": "se señala el corazón representando \n \n" },
                   {"end": "156","start": "154","text": "el Triunfo del estudiante,\n \n" },
                  {"end": "161","start": "157","text": "un símbolo del Amor puro por el conocimiento. \n \n \n" }, 
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
