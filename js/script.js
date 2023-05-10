//Simulador de Recompensas del mundo de ONE PIECE !
//quiz de 10 preguntas mas o menos, cada repuesta representa una letra , a esa letra se le agrega un valor que se le va a agregar al total de la recompensa final
//una vez finalizado el quiz se informa el total de la recompensa y el rango alcanzado (rey pirata, yonkou,comandante de yonkou, shichibukai, supernova).

alert("¡¿Cuanto sabes de One Piece?!");

let usuario = prompt("Ingresa tu nombre futuro... ¡REY DE LOS PIRATAS!");

while (!isNaN(usuario) || usuario == undefined) {
    usuario = prompt("Valor incorrecto. Reingrese su nombre");
};
let correcto = 0;
let incorrecto = 50;
let berriesTotales = 0;
let error;


primeraPregunta();
segundaPregunta();
terceraPregunta();
cuartaPregunta();
quintaPregunta();
sextaPregunta();
septimaPregunta();
octavaPregunta();
novenaPregunta();
decimaPregunta();
mostrarResultado(); 






//  <<<----------------------------Funciones de Preguntas----------------------------------->>>

// PREGUNTA 1

function primeraPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 1: ¿Quien le dio a luffy el sombrero de paja? A - Monkey D Garp / B - Kosuki Oden / C - Silvers Rayleigh / D - Akagami Shanks.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 30000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 2 

function segundaPregunta(){
    do {
        error = false;
        let res = prompt("Pregunta 2: ¿Quien es el primer nakama de luffy? A - Nami / B - Sanji / C - Zoro / D - Ussop.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 30000000;
                berriesTotales += correcto;
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 3

function terceraPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 3: ¿Como se llama el estilo de pelea de Roronoa Zoro? A - Yontoryu / B - Santoryu / C ittoryu / D - Nitoryu.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "B"){
                correcto = 30000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 4

function cuartaPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 4: ¿Cual es el nombre del rey de los piratas? A - Gold Roger / B - Monkey D Luffy / C - Edward Newgate / D - Gol D Roger.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 30000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 5

function quintaPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 5: ¿En que isla conocieron a Franky el Cyborg? A - Wano Kuni / B - Dresrrosa / C - Water Seven / D - Punk Hazard.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 30000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 6

function sextaPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 6: ¿Que habilidad brinda la Mera Mera no mi? A - Logia de Fuego / B - Logia de Magma / C - Logia de lodo / D - Zoan de Fenix. ");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "A"){
                correcto = 100000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 7

function septimaPregunta(){ 
    do {
        error = false;
        let res = prompt("Pregunta 7: ¿Como se llama la fruta del diablo que comio buggy el payaso? A - Gomu Gomu / B - ito ito / C - inu inu / D - bara bara ");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "D"){
                correcto = 100000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
}

//PREGUNTA 8

function octavaPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 8: ¿Quien es el lider de la armada revolucionaria? A - Sabo / B - Monkey D Dragon / C - Portgas D Ace / D - Dr. Vegapunk.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "B"){
                correcto = 100000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 9

function novenaPregunta(){  
    do {
        error = false;
        let res = prompt("Pregunta 9: ¿Cuales son la armas ancestrales? A - Urano, Pluton y Poseidon / B - Saturno, Pluton y Jupiter / C - Apollo, Venus y Poseidon / D - Pluton, Poseidon y Mercurio.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "A"){
                correcto = 100000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//PREGUNTA 10

function decimaPregunta(){
    
    do {
        error = false;
        let res = prompt("Pregunta 10: ¿Quien es el decimo capitan titanico de Barbanegra? A - Shiryu de la niebla / B - Jesus Burgess / C - Kuzan Aokiji / D - Avalo Pizarro.");
        let resMayuscula = res.toUpperCase();
        
        if(resMayuscula != "A" && resMayuscula != "B" && resMayuscula != "C" && resMayuscula != "D") {
            error = true
            alert("Opcion Invalida")
        }
        if (!error){
            if (resMayuscula == "C"){
                correcto = 100000000
                berriesTotales += correcto
                console.log (berriesTotales)
                alert ("Correcto! " + usuario + ", sigue sumando berries!")
            }else {
                berriesTotales = berriesTotales + incorrecto
                console.log (berriesTotales)
                alert ("Incorrecto! " + usuario + ", mejor suerte en la siguiente pregunta!")
            }
        }
    } while (error)
    
}

//<<----------------------------------FUNCION PARA MOSTRAR EL RESULTADO FINAL------------------------------------>>

function mostrarResultado(){
    if (berriesTotales === 650000000){
        berriesTotales = berriesTotales + 4914800000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres el REY DE LOS PIRATAS!")
    
    }else if (berriesTotales < 650000000 && berriesTotales >= 500000000){
        berriesTotales += 3000000000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres un Emperador Pirata!")
    
    }else if (berriesTotales < 500000000 && berriesTotales >= 400000000){
        berriesTotales += 1000000000
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres el Comandante de un  Emperador Pirata!")
    
    }else if (berriesTotales < 400000000 && berriesTotales >= 300000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres un pirata muy buscado y en ascenso! debes cuidar tu espalda del gobierno mundial y los emperadores")
    
    }else if (berriesTotales < 300000000 && berriesTotales >= 100000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres parte de los SUPERNOVA segun la marina la peor generacion de piratas desde hace 20 años! eres aun un novato pero de seguro te esperan grandes aventuras!")
    
    }else if (berriesTotales < 100000000 && berriesTotales >= 30000000){
        alert (" Felicidades tu recompensa es de " + berriesTotales + "$$ millones de Berries!! eres un pirata con buena reputacion pero ese es tu techo, lo lamento T.T ")
    
    }else if (berriesTotales < 30000000 && berriesTotales >= 500){
        alert (" Tu recompensa es de " + berriesTotales + "$$ Berries!! lo que tienes de pirata lo tienes de guapo!")
    }
}









