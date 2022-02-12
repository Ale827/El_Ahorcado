var palabraSecreta= ['alura', 'oracle', 'javascript', 'manzana', 'sopa'];
var palabraAgregada = [];
var letrasUsadas= [];
var letraFail = [];
var letraCorrecta = [];
var palabra = "";
var letraErronea = document.getElementById('letraErronea');
var contErrores = 0;


var iniciarJuego = document.getElementById('dos');
iniciarJuego.addEventListener('click', function (event){
  event.preventDefault();
  reiniciar();
    
  var secreto = seleccionarUbicacion(); 
  palabra = palabraSecreta[secreto]

  agregarLinea(palabraSecreta[secreto].length);
  
  
  window.addEventListener('keypress',keyApretada,false);
})

var nuevaPalabra = document.getElementById('btn-aceptar');
nuevaPalabra.addEventListener('click',function(event){
  event.preventDefault();
 
  agregarPalabra();
//console.log(palabraSecreta);
  ocultar('incluye-palabra');
  mostrar('contenedor')

})

var btnX = document.querySelector('.close-btn');
btnX.addEventListener('click', function(event){
  event.preventDefault();
  setInterval(window.location.reload(), 500);
})

var elAhorcado = document.querySelector('.regresar');
elAhorcado.addEventListener('click', function(event){
  event.preventDefault()
  window.location.reload();
})


//funciones
function seleccionarUbicacion (){
  var indice = palabraSecreta.length - 1;
  if (indice > 4){
    return indice = palabraSecreta.length - 1;
  }else{
    return Math.round(Math.random()* indice);
  }
}

function keyApretada(event){
  
  var letra = event.key;
  console.log(letra);
  if(!letrasUsadas.includes(letra)){
    letrasUsadas.push(letra);
      
    if(buscarLetraEnPalabra(palabra, letra)){
      letraCorrecta.push(letra)
      agregaLetra(palabra,letra);
      ganar()
    }
    else{
      fallo(letra);
      perder();
    }
  }

}


function buscarLetraEnPalabra(palabra,letra){
  var resultado = false;
  for(i= 0; i < palabra.length; i++){
    if(palabra.charAt(i) == letra){
      resultado = true;
      break;
    }
  }
  return resultado;
}

function fallo(letra){
  if(!palabra.includes(letra)){
    if(letraFail.length<9){
    letraFail.push(letra);
      dibujaAhorcado(letraFail.length);
      letraErronea.textContent = letraFail.join('');
    }
  }
}

function reiniciar(){
  letraErronea.textContent = '';
  letrasUsadas=[];
  letraCorrecta=[];
  letraFail =[];
  limpiarCanvas();
  limpiarCanvasAhorcado();
}

function ganar (){
  const letraNoRepetidas = palabra.split('').filter(function(letra,index,self){
    return self.indexOf(letra) == index;
  });
  console.log(letraNoRepetidas,letraCorrecta);
  if (letraNoRepetidas.length == letraCorrecta.length){
    letraErronea.style.color='green';
    letraErronea.textContent="Ganaste!";
    setTimeout(function () { location.reload(1); }, 2000);

    //setInterval(window.location.reload(), 5000);
  }
}

function perder (){
  if (letraFail.length ==9){
    letraErronea.style.color='red';
    letraErronea.textContent="Ah Perdido! Mejor suerte la proxima";
    setTimeout(function () { location.reload(1); }, 4000);
    
  }

}

function agregarPalabra(){
  var pIngresada = document.getElementById('ingreso');
  palabraSecreta.push(pIngresada.value);
  console.log(palabraSecreta);
}




