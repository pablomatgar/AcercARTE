
$(function(){
    $(".button-collapse").sideNav();
    $('.modal').modal();
}); 

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio1");
            var subtitles = doc.getElementById("texto1fach");
            var syncData = [
                  {"end": "2.5","start": "1","text": "\n \n En este medallón aparecen" },
                  {"end": "4","start": "2.5","text": "\n\nlos Reyes católicos.\n \n" },
                  {"end": "5.5","start": "4","text": "Isabel de Castilla y \n \n" },
                  {"end": "7","start": "5.5","text": "Fernando de Aragón \n\n" },
                  {"end": "8","start": "7","text": "que con su matrimonio \n\n" },
                  {"end": "10","start": "8","text": "formaron la monarquía española.\n \n" },
                  {"end": "12","start": "11","text": "Se construyó años \n \n" },
                  {"end": "14","start": "12","text": "después de su muerte.\n \n" },
                  {"end": "16.5","start": "14","text": "Ponen su imagen para agradecer \n\n" },
                  {"end": "19","start": "16.5","text": "su ayuda a la universidad. \n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio2");
            var subtitles = doc.getElementById("texto2fach");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n  En él se representan" },
                  {"end": "4","start": "2","text": "\n\nlos lugares que reinaba," },
                  {"end": "6","start": "4","text": "\n\nheredados de sus antepasados.\n \n" },
                  {"end": "8","start": "6","text": "Es el núcleo de la fachada \n\n" },
                  {"end": "10","start": "8","text": "y refleja el poder \n\n" },
                  {"end": "12","start": "10","text": "de la monarquía española.\n \n \n" },
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


( function(win, doc) {
            var audioPlayer = doc.getElementById("audio3");
            var subtitles = doc.getElementById("texto3fach");
            var syncData = [
                  {"end": "1","start": "0","text": "\n \n En este escudo \n\n" },
                  {"end": "2","start": "1","text": "se ve un águila \n\n" },
                  {"end": "4","start": "2","text": "de dos cabezas coronadas.\n \n" },
                  {"end": "7","start": "5","text": "Es el símbolo de Carlos V \n\n" },
                  {"end": "9","start": "7","text": "como heredero del Sacro Imperio \n\n" },
                  {"end": "11","start": "9","text": "Romano Germánico.\n" },
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



( function(win, doc) {
            var audioPlayer = doc.getElementById("audio4");
            var subtitles = doc.getElementById("texto4fach");
            var syncData = [
                  {"end": "2","start": "1","text": "\n \n Es un águila coronada," },
                  {"end": "4","start": "2","text": " \n\nsímbolo de San Juan \n\n" },
                  {"end": "5","start": "4","text": "Evangelista.\n \n" },
                  {"end": "7","start": "5","text": "Isabel la Católica \n\n" },
                  {"end": "8","start": "7","text": "lo tomó como símbolo \n\n" },
                  {"end": "9","start": "8","text": "de su reinado.\n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio5");
            var subtitles = doc.getElementById("texto5fach");
            var syncData = [
                  {"end": "2","start": "1","text": "\n \nVemos a Carlos V\n\n" },
                  {"end": "3","start": "2","text": "representado como un" },
                  {"end": "4","start": "3","text": "\n\nemperador romano.\n \n" },
                  {"end": "6","start": "5","text": "La forma de vestir \n\n" },
                  {"end": "7","start": "6","text": "y su posición \n\n" },
                  {"end": "8","start": "7","text": "son comunes \n\n" },
                  {"end": "10","start": "8","text": "en los emperadores romanos.\n \n" },
                  {"end": "12","start": "11","text": "Esto se puede ver \n\n" },
                  {"end": "14","start": "12","text": "en las monedas romanas. \n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio6");
            var subtitles = doc.getElementById("texto6fach");
            var syncData = [
                  {"end": "2","start": "1","text": "\n \n No se sabe con seguridad \n\n" },
                  {"end": "3","start": "2","text": "si es Isabel la Católica \n\n" },
                  {"end": "4","start": "3","text": "o su hija \n\n" },
                  {"end": "6","start": "4","text": "Juana I de Castilla.\n \n" },
                  {"end": "8","start": "7","text": "En la imagen solo vemos \n\n" },
                  {"end": "10","start": "8","text": "una mujer vestida y peinada \n\n" },
                  {"end": "12","start": "10","text": "como una emperatriz romana.\n \n" },
                  {"end": "13","start": "12","text": "Este medallón \n\n" },
                  {"end": "15","start": "13","text": "y el de Carlos V \n\n" },
                  {"end": "16","start": "15","text": "miran hacia el blasón,\n \n" },
                  {"end": "19","start": "16","text": "para destacar así su importancia.\n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio7");
            var subtitles = doc.getElementById("texto7fach");
            var syncData = [
                  {"end": "1","start": "0","text": "\n \n Personaje mitológico \n\n" },
                  {"end": "3","start": "1","text": "que representa la sabiduría\n\n" },
                  {"end": "4","start": "3","text": "y es capaz de \n\n" },
                  {"end": "6","start": "5","text": "conocer el futuro.\n" },
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


( function(win, doc) {
            var audioPlayer = doc.getElementById("audio8");
            var subtitles = doc.getElementById("texto8fach");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n Emperador romano.\n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio9");
            var subtitles = doc.getElementById("texto9fach");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n Emperador romano.\n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio10");
            var subtitles = doc.getElementById("texto10fach");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n Emperador romano. \n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio11");
            var subtitles = doc.getElementById("texto11fach");
            var syncData = [
                  {"end": "1","start": "0","text": "\n \nLa religión\n\n" },
                  {"end": "2","start": "1","text": "siempre se ha \n\n" },
                  {"end": "3","start": "2","text": "ocupado de la educación.\n \n" },
                  {"end": "5","start": "4","text": "El Papa es el \n\n" },
                  {"end": "6","start": "5","text": "mayor poder de \n\n" },
                  {"end": "7","start": "6","text": "la Iglesia Católica,\n \n" },
                  {"end": "9","start": "7","text": "Por estas dos razones\n\n" },
                  {"end": "10","start": "9","text": "aparece el Papa \n\n" },
                  {"end": "11","start": "10","text": "en la fachada \n\n" },
                  {"end": "12","start": "11","text": "de la Universidad.\n \n" },
                  {"end": "15","start": "14","text": "\n\nEl Papa aparece \n\n" },
                  {"end": "16","start": "15","text": "sentado en un trono\n\n" },
                  {"end": "18","start": "16","text": "y por encima de él, \n \n" },
                  {"end": "19","start": "18","text": "los símbolos papales:\n\n" },
                  {"end": "21","start": "20","text": "una “Tiara Papal”,\n\n" },
                  {"end": "23","start": "22","text": "el gorro que lleva el Papa; \n \n" },
                  {"end": "25","start": "24","text": "y detrás de la tiara\n\n" },
                  {"end": "27","start": "26","text": "dos llaves cruzadas,\n\n" },
                  {"end": "28","start": "27","text": "que son el símbolo\n\n" },
                  {"end": "29","start": "28","text": "de San Pedro.\n \n" },
                  {"end": "31","start": "30","text": "Acompañando al Papa\n\n" },
                  {"end": "33","start": "31","text": "hay seis figuras\n\n " },
                  {"end": "36","start": "33","text": "vestidas de cardenales.\n " },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio12");
            var subtitles = doc.getElementById("texto12fach");
            var syncData = [
                  {"end": "1","start": "0","text": "\n \n En el centro está \n\n" },
                  {"end": "2","start": "1","text": "la Diosa Venus desnuda\n\n" },
                  {"end": "4","start": "2","text": "y apoyada en una columna.\n \n" },
                  {"end": "5","start": "4","text": "En el lado derecho\n\n" },
                  {"end": "7","start": "5","text": "de la imagen,\n\n" },
                  {"end": "8","start": "7","text": "un medallón \n\n" },
                  {"end": "10","start": "8","text": "con el rostro del Dios Baco.\n \n" },
                  {"end": "12","start": "11","text": "Y en el lado izquierdo\n\n" },
                  {"end": "13","start": "12","text": "otro medallón \n\n" },
                  {"end": "17","start": "13","text": "con la cara del Dios Marte, Ares.\n" },
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





( function(win, doc) {
            var audioPlayer = doc.getElementById("audio13");
            var subtitles = doc.getElementById("texto13fach");
            var syncData = [
                  {"end": "1","start": "0","text": "\n \n En el centro\n\n" },
                  {"end": "2","start": "1","text": "está el semidios\n\n" },
                  {"end": "3","start": "2","text": "Hércules desnudo,\n \n" },
                  {"end": "4","start": "3","text": "Está apoyado\n\n" },
                  {"end": "5","start": "4","text": "en una maza\n\n" },
                  {"end": "6","start": "5","text": "y con la piel\n\n " },
                  {"end": "7","start": "6","text": "de un león.\n \n" },
                  {"end": "10","start": "9","text": "Aparece en la fachada\n\n" },
                  {"end": "11","start": "10","text": "porque los reyes\n\n" },
                  {"end": "13","start": "11","text": "se creían sus herederos.\n \n" },
                  {"end": "15","start": "14","text": "En el lado derecho\n\n" },
                  {"end": "16","start": "15","text": "está Fedra,\n\n" },
                  {"end": "18","start": "17","text": "mujer de Teseo\n\n" },
                  {"end": "20","start": "18","text": "que está en el otro lado, \n \n" },
                  {"end": "22","start": "21","text": "Los dos personajes\n\n" },
                  {"end": "24","start": "23","text": "están en un medallón. \n" },
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

( function(win, doc) {
            var audioPlayer = doc.getElementById("audioinfo");
            var subtitles = doc.getElementById("textoinfofach");
            var syncData = [
                  {"end": "2","start": "0","text": "\n \n Es de estilo Plateresco,\n\n" },
                  {"end": "3","start": "2","text": "que se reconoce por\n\n" },
                  {"end": "5","start": "3","text": "tener mucha decoración\n\n" },
                  {"end": "6","start": "5","text": "de escultura,\n \n" },
                  {"end": "12","start": "6","text": "Como: Angelitos,\n\n" },
                  {"end": "10","start": "8","text": "vegetación, niños,\n\n" },
                  {"end": "12","start": "10","text": "jarrones, etc.\n \n" },
                  {"end": "14","start": "13","text": "Toda la fachada\n\n" },
                  {"end": "15","start": "14","text": "está cubierta de decoración.\n \n" },
                  {"end": "18","start": "16","text": "Para entrar al edificio,\n\n" },
                  {"end": "20","start": "18","text": "se entra por dos\n\n" },
                  {"end": "21","start": "20","text": "arcos escarzanos (1). \n \n" },
                  {"end": "23","start": "22","text": "La fachada se\n\n" },
                  {"end": "24","start": "23","text": "divide en tres\n\n" },
                  {"end": "25","start": "24","text": "niveles horizontales. \n \n" },
                  {"end": "27","start": "26","text": "Los niveles uno\n\n" },
                  {"end": "28","start": "27","text": "y dos están divididos\n\n" },
                  {"end": "30","start": "29","text": "con columnas en\n\n" },
                  {"end": "31","start": "30","text": "cinco zonas y\n\n" },
                  {"end": "34","start": "32","text": "el tercero en tres zonas.\n \n \n" },
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
