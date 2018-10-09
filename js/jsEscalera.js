( function(win, doc) {
            var audioPlayer = doc.getElementById("audioescalera");
            var subtitles = doc.getElementById("textoescalera");
            var syncData = [
                  {"end": "4","start": "0","text": "\n \n La escalera es una de las partes \n \n  más importantes de la Universidad.\n \n" },
                  {"end": "9","start": "6","text": "Tiene tres tramos (1), con diferentes \n \n imágenes en relieve.\n \n" },
                  {"end": "12","start": "10","text": "Los alumnos usaban los relieves  \n \n como consejos\n \n" },
                  {"end": "16","start": "13","text": "y con estos consejos alcanzaban \n \n el conocimiento. \n \n \n" },
                  {"end": "20","start": "19","text": "Primer tramo \n \n \n", "class": "TITULO"},
                  {"end": "23","start": "21","text": "En la primera imagen, encontramos \n \n  al Peregrino (2)\n \n" },
                  {"end": "27","start": "24","text": "tiene que superar las pruebas que \n \n vemos en los relieves.\n \n " },
                  {"end": "31","start": "27","text": "En la parte de fuera de la escalera \n \n está el Gaitero, \n \n" },
                  {"end": "34","start": "31","text": "que representa los vicios y al mal \n \n  estudiante.\n \n " },
                  {"end": "39","start": "35","text": "Después del Peregrino aparece la \n \n Danza Morisca,\n \n " },
                  {"end": "43","start": "40","text": "aquí los personajes están bailando y \n \n celebrando el amor.\n \n" },
                  {"end": "49","start": "44","text": "Todos bailan alrededor de una mujer que \n \n representa la lujuria (3),\n \n" },
                  {"end": "55","start": "50","text": "pero el Peregrino tiene que alejarse de \n \n estos vicios para conseguir su objetivo. \n \n \n" },
                  {"end": "57","start": "56","text": "Segundo tramo \n \n \n", "class": "TITULO" },
                  {"end": "61","start": "58","text": "Aparecen varias escenas con personajes \n \n desnudos,\n \n" },
                  {"end": "65","start": "62","text": "y en el centro hay una flor que separa \n \n  estas escenas.\n \n " },
                  {"end": "69","start": "66","text": "En el lado derecho aparece una mujer \n \n sobre un hombre, \n \n" },
                  {"end": "72","start": "70","text": "y una araña que representa el mal.\n \n " },
                  {"end": "76","start": "73","text": "En el lado izquierdo aparece un hombre \n \n sobre una mujer,\n \n " },
                  {"end": "81","start": "77","text": "y una abeja, que representa el trabajo \n \n bien hecho.\n \n" },
                  {"end": "88","start": "82","text": "Alrededor de las escenas, un indio con flechas \n \n que expulsa a un salvaje (4). \n \n \n" },
                  {"end": "93","start": "92","text": "Tercer tramo \n \n \n", "class": "TITULO" },
                  {"end": "97","start": "94","text": "Primero aparece “Cupido (5) Cautivo”,\n \n" },
                  {"end": "101","start": "98","text": "con una venda en los ojos y atrapado \n \n en una red,\n \n " },
                  {"end": "105","start": "101","text": "esta red simboliza la lujuria provocada \n \n por la mujer. \n \n" },
                  {"end": "112","start": "106","text": "Las alas están en el suelo, pero el arco \n \n y las flechas aún las tiene en la mano. \n \n " },
                  {"end": "118","start": "113","text": "Si seguimos vemos jinetes que están \n \n persiguiendo a unos toros,\n \n " },
                  {"end": "123","start": "119","text": "los toros son un símbolo de las \n \n pasiones descontroladas,\n \n" },
                  {"end": "130","start": "124","text": "Representan la lucha del hombre intentando \n \n controlar las pasiones de la naturaleza.\n \n" },
                  {"end": "138","start": "131","text": "Cuando lo consiguen, aparecen cuatro caballeros \n \n que se dirigen a la última figura. \n \n " },
                  {"end": "146","start": "139","text": "Los caballeros representan a los hombres que han \n \n conseguido dominar las pasiones para \n \n alcanzar la sabiduría.\n \n " },
                  {"end": "151","start": "147","text": "El último personaje se conoce como \n \n El Estudiante,\n \n" },
                  {"end": "156","start": "152","text": "se señala el corazón representando \n \n el Triunfo del estudiante,\n \n" },
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

var elements = document.getElementsByClassName('TITULO');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = "50";
}

// Copyright 2018 by Roberto Iglesias Pérez and Pablo Mateos García
