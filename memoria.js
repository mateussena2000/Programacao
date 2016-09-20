var e1;
var e2;
var count = 0;
var fv;
var imgs = [];

loadDoc();

function mostrar(){
    for (i=1; i<=36; i++){
        elem = document.getElementById("img"+i);
        var pos = imgs[i];
        var fig = "url(img/" + pos + ".jpg)";
        elem.style.backgroundImage=fig;
    }
    setTimeout(desvirar, 2000); 
}

function desvirar(){
    for (i=1; i<=36; i++){
        elem = document.getElementById("img"+i);
        elem.style.backgroundImage="";
    } 
}

function vira(){
    if (e1.style.backgroundImage!=e2.style.backgroundImage) {
    e1.style.backgroundImage = "";
    e2.style.backgroundImage = "";
    count = 0;
    clearTimeout(fv);
    }else{
        e1.onclick = "";
        e2.onclick = "";
        count = 0;
    }
fim();
}

function clique(casa){
    if (count!=2) {
    elem = document.getElementById(casa);
    var bg = elem.style.backgroundImage;
    if(bg == "none" || bg == ""){
        if(count==0){ 
            e1 = elem;
        }else{
           e2 = elem; 
        } 
        
        count++;
        var s = casa;
        id = s.substr(3);
        var fig = "url(img/" + imgs[id] + ".jpg)";
        elem.style.backgroundImage=fig;

        if(count==2)
            fv = setTimeout(vira, 400);
        }
    }
   
}


function loadDoc() {
   var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var txt = xhttp.responseText;
            vet = JSON.parse(txt);
            for (i=1; i<=36; i++){
                imgs[i] = vet[i];
            }
            mostrar();
        }
    }

xhttp.open("GET", "http://10.177.1.85/json/rand.php?max=18", true);
xhttp.send();

}

function fim (){
    var verificar = 0;
    for (var i = 1; i<=36; i++) {
        elem = document.getElementById("img"+i);
        var bg = elem.style.backgroundImage;
        if(bg == "none" || bg == ""){ 
            verificar = verificar+1;
        }
    }
    if (verificar==0) {
        var a = confirm("Deseja continuar jogando?");
        if (a) {
            loadDoc();
        }   
    }
}
