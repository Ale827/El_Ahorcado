var pantallaAhorcado = document.querySelector('#ahorcado');
var pantallaLetras = document.querySelector('#letras');
var pincel = pantallaAhorcado.getContext("2d");
//var error = 0;

//base del  ahorcado
	pincel.fillStyle = "black";
	pincel.lineWidth = 8;
	pincel.beginPath();
	pincel.moveTo(102,400);
	pincel.lineTo(30,440);
	pincel.lineTo(170,440);
	pincel.lineTo(98,400);
	pincel.stroke();
	
	
	//funcion para crear al ahorcado
function dibujaAhorcado (error){
	
	if(error > 0){//mastil
		pincel.fillStyle = "darkgreen";
		pincel.fillRect(95,20,10,380);
	}
	if(error > 1){// brazo del mastil
	pincel.fillStyle = "darkgreen"; 
	pincel.fillRect(100,20,300,10);
	}
	if(error > 2){//cuerda
		pincel.fillStyle = "darkgreen"; 
		pincel.fillRect(390,20,5,60);
	}
	if(error > 3){//cabeza
		pincel.lineWidth = 5;
		pincel.fillStyle = "black";
		pincel.beginPath(); //propiedades para crear un circulo
		pincel.arc(393,115,35,0,2* Math.PI);
		pincel.stroke();
	}
	if(error > 4){//cuerpo
		pincel.fillStyle = "black"
		pincel.fillRect(387,149,10,150);
	}
	if(error > 5){//brazo derecho
		pincel.translate(310, 122);
		pincel.rotate(Math.PI / 5); //Roto la el elemento
		pincel.translate(-289, -180);
			
		pincel.fillStyle = "black" 
		pincel.fillRect(289,180,100,5);
		pincel.setTransform(1, 0, 0, 1, 0, 0); // se reinicia la matriz de transformación a la matriz identidad
		
	}
	if(error > 6){//brazo izquierdo
		pincel.translate(395, 180);
		pincel.rotate(Math.PI / -5); //Roto la el elemento
		pincel.translate(-395, -180);
		
		pincel.fillStyle = "black" 
		pincel.fillRect(392,180,100,5);
		pincel.setTransform(1, 0, 0, 1, 0, 0);
	}
	if(error > 7){//pierna derecha
		pincel.translate(288,295);
		pincel.rotate(Math.PI / -4);
		pincel.translate(-289,-294);
		
		pincel.fillStyle = "black"; 
		pincel.fillRect(259,365,100,5);
		pincel.setTransform(1, 0, 0, 1, 0, 0);
	}
	if(error > 8){	//pierna izquierda
		pincel.translate(315, 100);
		pincel.rotate(Math.PI / 4); //Roto la el elemento
		pincel.translate(-289, -180);
		
		pincel.fillStyle = "black" 
		pincel.fillRect(485,260,100,5);
		pincel.setTransform(1, 0, 0, 1, 0, 0);
	}

}
		
//funcion crear linea de letras
function dibujaLinea(valor){
	var linea = pantallaLetras.getContext("2d");
	linea.lineWidth = 5;
	linea.beginPath();
	linea.moveTo(35 + valor, 65);
	linea.lineTo(valor, 65);
	linea.stroke();
	
}
function agregarLinea(cantidad){
	for(i=0; i< cantidad; i++){
		dibujaLinea(50*i);
	}
}

//funcion crear letras
function dibujaLetras(valor, posicion){
	var letra = pantallaLetras.getContext("2d");
	letra.lineWidth=3;
	letra.font = "bold 45px Arial";
	letra.strokeStyle = "RGBA(0, 0, 0, 100)";
	letra.strokeText(valor, posicion,50);
}
function agregaLetra (palabra, letra){
	for(i = 0; i <palabra.length; i++){
        if(palabra.charAt(i) == letra){
          dibujaLetras(letra,50*i);

        }
        
    }
}





 //limpia el camvas
function limpiarCanvas(){
	pantallaLetras.width = pantallaLetras.width;
}
function limpiarCanvasAhorcado(){
	pantallaAhorcado.width = pantallaAhorcado.width;
	
	pincel.fillStyle = "black";
	pincel.lineWidth = 8;
	pincel.beginPath();
	pincel.moveTo(102,400);
	pincel.lineTo(30,440);
	pincel.lineTo(170,440);
	pincel.lineTo(98,400);
	pincel.stroke();
	error= 0;
}


