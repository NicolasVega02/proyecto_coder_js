//Simulador de Recompensas del mundo de ONE PIECE !
//quiz de 10 preguntas mas o menos, cada repuesta representa una letra , a esa letra se le agrega un valor que se le va a agregar al total de la recompensa final
//una vez finalizado el quiz se informa el total de la recompensa y el rango alcanzado (rey pirata, yonkou,comandante de yonkou, shichibukai, supernova).

alert("¡¿Cuanto sabes de One Piece?!");

let cantidadJugadores = parseInt( prompt("Ingrese la cantidad de jugadores"));

class jugadores {
  constructor(nombre , recompensa) {
    this.nombre = prompt("Ingresa tu nombre futuro... ¡REY DE LOS PIRATAS!");
    this.edad = prompt("Ingrese su edad");
    this.nacionalidad = prompt("Ingrese su país de origen");
    this.recompensa = recompensa;
  }
}


let correcto = 0;
let incorrecto = 50;
let berriesTotales = 0;
let error;
// let listaJugadores = [];
// let jugador = new jugadores();
let listaJugadores = [];

for (let i = 0; i < cantidadJugadores ; i++) {
    let jugador = new jugadores(0);
    berriesTotales = 0;

    primeraPregunta(jugador);
    segundaPregunta(jugador);
    terceraPregunta(jugador);
    cuartaPregunta(jugador);
    quintaPregunta(jugador);
    sextaPregunta(jugador);
    septimaPregunta(jugador);
    octavaPregunta(jugador);
    novenaPregunta(jugador);
    decimaPregunta(jugador);
    mostrarResultado(jugador);
    
    
    console.log (jugador)
    
    console.log("Se busca " + jugador.nombre + " recompensa = " + berriesTotales + "  $berries");
    
    jugador.recompensa = berriesTotales;
    listaJugadores.push(jugador);

    
    console.log (listaJugadores)
}

listaJugadores.sort((jugadorA, jugadorB) => jugadorB.recompensa - jugadorA.recompensa);

console.log ("<-------------------------------------------------------------------------->")

console.log("Recompensas ordenadas de mayor a menor");

listaJugadores.forEach((jugador) => {
  console.log(jugador);
});

let ranking = "";

listaJugadores.forEach((jugador, index) => {
  ranking += `${index + 1}. ${jugador.nombre} - Recompensa: ${jugador.recompensa} millones de berries\n`;
});


alert("Ranking de jugadores por recompensa:\n"  + ranking);



//  <<<----------------------------Funciones de Preguntas----------------------------------->>>

// PREGUNTA 1

function primeraPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 1: ¿Quien le dio a luffy el sombrero de paja?\nA - Monkey D Garp \nB - Kosuki Oden \nC - Silvers Rayleigh \nD - Akagami Shanks.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 30000000
                berriesTotales += correcto
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 2 

function segundaPregunta(objeto){
    do {
        error = false;
        let res = prompt("Pregunta 2: ¿Quien es el primer nakama de luffy? \nA - Nami  \nB - Sanji  \nC - Zoro  \nD - Ussop.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 30000000;
                berriesTotales += correcto;
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 3

function terceraPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 3: ¿Como se llama el estilo de pelea de Roronoa Zoro? \nA - Yontoryu  \nB - Santoryu  \nC ittoryu  \nD - Nitoryu.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "B"){
                correcto = 30000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 4

function cuartaPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 4: ¿Cual es el nombre del rey de los piratas? \nA - Gold Roger  \nB - Monkey D Luffy  \nC - Edward Newgate  \nD - Gol D Roger.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 30000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 5

function quintaPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 5: ¿En que isla conocieron a Franky el Cyborg? \nA - Wano Kuni  \nB - Dresrrosa \nC - Water Seven  \nD - Punk Hazard.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 30000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 6

function sextaPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 6: ¿Que habilidad brinda la Mera Mera no mi? \nA - Logia de Fuego  \nB - Logia de Magma  \nC - Logia de lodo  \nD - Zoan de Fenix. ");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "A"){
                correcto = 100000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 7

function septimaPregunta(objeto){ 
    do {
        error = false;
        let res = prompt("Pregunta 7: ¿Como se llama la fruta del diablo que comio buggy el payaso? \nA - Gomu Gomu  \nB - ito ito  \nC - inu inu  \nD - bara bara ");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 100000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 8

function octavaPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 8: ¿Quien es el lider de la armada revolucionaria? \nA - Sabo  \nB - Monkey D Dragon  \nC - Portgas D Ace  \nD - Dr. Vegapunk.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "B"){
                correcto = 100000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 9

function novenaPregunta(objeto){  
    do {
        error = false;
        let res = prompt("Pregunta 9: ¿Cuales son la armas ancestrales? \nA - Urano, Pluton y Poseidon  \nB - Saturno, Pluton y Jupiter  \nC - Apollo, Venus y Poseidon  \nD - Pluton, Poseidon y Mercurio.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "A"){
                correcto = 100000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 10

function decimaPregunta(objeto){
    
    do {
        error = false;
        let res = prompt("Pregunta 10: ¿Quien es el decimo capitan titanico de Barbanegra? \nA - Shiryu de la niebla  \nB - Jesus Burgess  \nC - Kuzan Aokiji  \nD - Avalo Pizarro.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 100000000
                berriesTotales += correcto
                
                alert ("Correcto! " + objeto.nombre + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                
                alert ("Incorrecto! " + objeto.nombre + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//<<----------------------------------FUNCION PARA MOSTRAR EL RESULTADO FINAL------------------------------------>>

function mostrarResultado(){
    if (berriesTotales === 650000000){
        berriesTotales = berriesTotales + 4914800000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres el REY DE LOS PIRATAS!")
    
    }else if (berriesTotales < 650000000 && berriesTotales >= 500000000){
        berriesTotales += 3000000000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres un Emperador Pirata!")
    
    }else if (berriesTotales < 500000000 && berriesTotales >= 400000000){
        berriesTotales += 1000000000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres el Comandante de un  Emperador Pirata!")
    
    }else if (berriesTotales < 400000000 && berriesTotales >= 300000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres un pirata muy buscado y en ascenso! debes cuidar tu espalda del gobierno mundial y los emperadores")
    
    }else if (berriesTotales < 300000000 && berriesTotales >= 100000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres parte de los SUPERNOVA segun la marina la peor generacion de piratas desde hace 20 años! eres aun un novato pero de seguro te esperan grandes aventuras!")
    
    }else if (berriesTotales < 100000000 && berriesTotales >= 30000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! \neres un pirata con buena reputacion pero ese es tu techo, lo lamento T.T ")
    
    }else if (berriesTotales < 30000000 && berriesTotales >= 500){
        alert (" Tu recompensa es de " + berriesTotales + "$$ Berries!! \nlo que tienes de pirata lo tienes de guapo!")
    }

}








