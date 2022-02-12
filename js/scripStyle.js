//variables del Nav
var inicio = document.querySelector('.inicio');
var iniciarJuego = document.querySelector(".juego");
var agregaPalabra = document.querySelector('.agrega-palabra')
var dev = document.querySelector('.dev')

//variables de los Div's
var contenedor = document.getElementById('contenedor'); //esta en el inicio
var juego = document.getElementById('iniciar-juego');  //esta en iniciarjuego
var incluirPalabra = document.getElementById('incluye-palabra'); //esta en agregaPalabra
var creador = document.getElementById('creador'); //esta en dev


inicio.addEventListener('click', function(event){ //pantalla iniial
    event.preventDefault();

    mostrar('contenedor');
    ocultar('iniciar-juego');
    ocultar('incluye-palabra')
    ocultar('creador');
    
    
    /*   if(contenedor.classList.contains('invisible')){ //contains busca la clase dela etiqueta html
        quitaInvisible(contenedor);
    }else{
        //alert("Usted, ya esta en el inicio");
    }*/
})

iniciarJuego.addEventListener('click', function(event){ //Pantalla del juego
    event.preventDefault();
    // console.log('probrando ocultar el saludo');
    
    mostrar('iniciar-juego');
    ocultar('contenedor')
    ocultar('incluye-palabra')
    ocultar('creador');
    
})

agregaPalabra.addEventListener('click', function(event){ //patanlla agregar palabra
    event.preventDefault();
    console.log('click en agregar palabra');
    mostrar('incluye-palabra');
    ocultar('iniciar-juego');
    ocultar('contenedor');
    ocultar('creador');
})

dev.addEventListener('click', function(event){ // pantala muestra datos del
    event.preventDefault();
    console.log('aqui van los datos del desarrollador');
    mostrar('creador');
    setInterval(matrix, 50);
    ocultar('incluye-palabra');
    ocultar('iniciar-juego');
    ocultar('contenedor');
})

   
function mostrar(valor){
       //valor.classList.add('invisible');
       document.getElementById(valor).style.display = 'flex';
}

function ocultar(valor){
      //  valor.classList.remove('invisible');
        document.getElementById(valor).style.display = 'none';
}