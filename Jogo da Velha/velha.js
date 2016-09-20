var jogador = 0; // 0 ou 1
var jogadas = 0;
var contX = 0;
var contO = 0;
var contE = 0;

if (!localStorage.jogadorX) {
	localStorage.jogadorX = 0;
}
elem = document.getElementById("x");
elem.innerHTML = localStorage.jogadorX;

if (!localStorage.jogadorO) {
	localStorage.jogadorO = 0;
}
elem = document.getElementById("o");
elem.innerHTML = localStorage.jogadorO;

if (!localStorage.jogadorE) {
	localStorage.jogadorE = 0;
}
elem = document.getElementById("e");
elem.innerHTML = localStorage.jogadorE;


function verificarJogo (){
	fim = false;
	if (verificar(1,2,3) ||
		verificar(4,5,6) ||
		verificar(7,8,9) ||
		verificar(1,5,9) ||
		verificar(1,4,7) ||
		verificar(3,5,7) ||
		verificar(2,5,8) ||
		verificar(3,6,9))
	{
		alert("Parabéns jogador" + " " + jogador  + ", você ganhou!");
		fim = true;
		gravaDados(jogador);

	}else if(jogadas>=9){
		alert("Jogo empatado!");
		gravaDados(2);
		fim = true;
	}

	if(fim){
	var teste = confirm("Deseja continuar jogando?");
		if(teste){
			game_restart();
		}else{
			game_stop();
		}
	}
}

function jogar(casa){
	var bg = casa.style.backgroundImage;
		if (bg=="" || bg=="none"){
			casa.style.backgroundImage = 'url("'+ jogador +'.jpg")'; 

			jogadas = jogadas + 1;
			verificarJogo();
			
			if(jogador==0){
				jogador=1;
			}else{
				jogador=0;
			}
		}
	
}

function verificar (c1, c2, c3) {
	bg1 = document.getElementById('casa' + c1);
	bg1 = bg1.style.backgroundImage;

	bg2 = document.getElementById('casa' + c2);
	bg2 = bg2.style.backgroundImage;

	bg3 = document.getElementById('casa' + c3);
	bg3 = bg3.style.backgroundImage;

	if (bg1==bg2 && bg1==bg3 && bg1!=""){
		return true;
	}	
	return false;
}

function game_restart(){
	for (i=1; i<=9; i++){
		obj = document.getElementById("casa"+i);
		obj.style.backgroundImage = "";
	}	
	jogadas = 0;
}	

function game_stop(){
	for (i=1; i<=9; i++){
		obj = document.getElementById("casa"+i);
		obj.onclick = "";
	}
}

//function atualizaPlacar(j){ essa função é substituída pela gravarDados
	//if (j==0){
		//contX++;
		//elem = document.getElementById("x");
		//elem.innerHTML = contX;
	//}else if (j==1){
		//contO++;
		//elem = document.getElementById("o");
		//elem.innerHTML = contO;
	//}else{
		//contE++;
		//elem = document.getElementById("e");
		//elem.innerHTML = contE;
	//}
//}

function gravaDados(j){
	if (j == 0) {
		localStorage.jogadorX = parseInt(localStorage.jogadorX) + 1;
		elem = document.getElementById("x");
		elem.innerHTML = localStorage.jogadorX;

	}else if(j==1){
		localStorage.jogadorO = parseInt(localStorage.jogadorO) + 1;
		elem = document.getElementById("o");
		elem.innerHTML = localStorage.jogadorO;

	}else{
		localStorage.jogadorE = parseInt(localStorage.jogadorE) + 1;
		elem = document.getElementById("e");
		elem.innerHTML = localStorage.jogadorE;
	}

}