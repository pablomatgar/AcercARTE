
$(function(){
    $(".button-collapse").sideNav();
    $('.modal').modal();
}); 

( function(win, doc) {
            var audioPlayer = doc.getElementById("audio1");
            var subtitles = doc.getElementById("texto1fach");
            var syncData = [
                  {"end": "3","start": "1","text": "\n \n En este medallón aparecen \n\nlos Reyes católicos.\n \n" },
                  {"end": "10","start": "4","text": "Isabel de Castilla y \n\nFernando de Aragón \n\nque con su matrimonio \n\nformaron la monarquía española.\n \n" },
                  {"end": "13","start": "11","text": "Se construyó años \n\ndespués de su muerte.\n \n" },
                  {"end": "19","start": "14","text": "Ponen su imagen para agradecer \n\nsu ayuda a la universidad. \n" },
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
                  {"end": "3","start": "1","text": "\n \n  En él se representan \n\nlos lugares que reinaba, \n\nheredados de sus antepasados.\n \n" },
                  {"end": "10","start": "4","text": "Es el núcleo de la fachada \n\ny refleja el poder \n\nde la monarquía española.\n \n \n" },
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
                  {"end": "3","start": "1","text": "\n \n En este escudo \n\nse ve un águila \n\nde dos cabezas coronadas.\n \n" },
                  {"end": "10","start": "4","text": "Es el símbolo de Carlos V \n\ncomo heredero del Sacro Imperio \n\nRomano Germánico.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Es un águila coronada, \n\nsímbolo de San Juan \n\nEvangelista.\n \n" },
                  {"end": "10","start": "4","text": "Isabel la Católica \n\nlo tomó como símbolo \n\nde su reinado.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Vemos a Carlos V\n\n representado como un \n\nemperador romano.\n \n" },
                  {"end": "10","start": "4","text": "La forma de vestir \n\ny su posición \n\nson comunes \n\nen los emperadores romanos.\n \n" },
                  {"end": "13","start": "11","text": "Esto se puede ver \n\nen las monedas romanas. \n" },
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
                  {"end": "3","start": "1","text": "\n \n No se sabe con seguridad \n\nsi es Isabel la Católica \n\no su hija \n\nJuana I de Castilla.\n \n" },
                  {"end": "10","start": "4","text": "En la imagen solo vemos \n\nuna mujer vestida y peinada \n\ncomo una emperatriz romana.\n \n" },
                  {"end": "13","start": "11","text": "Este medallón \n\ny el de Carlos V \n\nmiran hacia el blasón,\n \n" },
                  {"end": "19","start": "14","text": "Para destacar su importancia.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Personaje mitológico \n\nque representa la sabiduría\n\n y es capaz de \n\nconocer el futuro.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Emperador romano.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Emperador romano.\n" },
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
                  {"end": "3","start": "1","text": "\n \n Emperador romano. \n" },
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
                  {"end": "3","start": "1","text": "\n \n La religión \n\nsiempre se ha \n\nocupado de la educación.\n \n" },
                  {"end": "6","start": "4","text": "El Papa es el \n\nmayor poder de \n\nla Iglesia Católica,\n \n" },
                  {"end": "9","start": "7","text": "Por estas dos razones\n\n aparece el Papa \n\nen la fachada \n\nde la Universidad.\n \n" },
                  {"end": "11","start": "10","text": "\n\nEl Papa aparece \n\nsentado en un trono\n\n y por encima de él, \n \n" },
                  {"end": "13","start": "12","text": "Los símbolos papales,\n\n una “Tiara Papal”,\n\n el gorro que lleva el Papa \n \n" },
                  {"end": "15","start": "14","text": "Y detrás de la tiara\n\n dos llaves cruzadas,\n\n que son el símbolo\n\n de San Pedro.\n \n" },
                  {"end": "36","start": "16","text": "Acompañando al Papa\n\n hay seis figuras\n\n vestidas de cardenales.\n " },
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
                  {"end": "3","start": "1","text": "\n \n En el centro está \n\nla Diosa Venus desnuda\n\n y apoyada en una columna.\n \n" },
                  {"end": "10","start": "4","text": "En el lado derecho\n\n de la imagen,\n\n un medallón \n\ncon el rostro del Dios Baco,\n \n" },
                  {"end": "13","start": "11","text": "Y en el lado izquierdo\n\n otro medallón \n\ncon la cara del Dios Marte.\n" },
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
                  {"end": "3","start": "1","text": "\n \n En el centro\n\n está el semidios\n\n Hércules desnudo,\n \n" },
                  {"end": "10","start": "4","text": "Está apoyado\n\n en una maza\n\n y con la piel\n\n de un león.\n \n" },
                  {"end": "13","start": "11","text": "Aparece en la fachada\n\n porque los reyes\n\n se creían sus herederos.\n \n" },
                  {"end": "19","start": "14","text": "En el lado derecho\n\n está Fedra,\n\n mujer de Teseo\n\n que está en el otro lado, \n \n" },
                  {"end": "19","start": "14","text": "Los dos personajes\n\n están en un medallón. \n" },
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
                  {"end": "5","start": "1","text": "\n \n Es de estilo Plateresco,\n\n que se reconoce por\n\n tener mucha decoración\n\n de escultura,\n \n" },
                  {"end": "12","start": "6","text": "Como: Angelitos,\n\n vegetación, niños,\n\n jarrones, etc.\n \n" },
                  {"end": "15","start": "13","text": "Toda la fachada\n\n está cubierta de decoración.\n \n" },
                  {"end": "20","start": "16","text": "Para entrar al edificio,\n\n se entra por dos\n\n arcos escarzanos (1). \n \n" },
                  {"end": "25","start": "21","text": "La fachada se\n\n divide en tres\n\n niveles horizontales. \n \n" },
                  {"end": "34","start": "26","text": "Los niveles uno\n\n y dos están divididos\n\n con columnas en\n\n cinco zonas y\n\n el tercero en tres zonas.\n \n \n" },
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
