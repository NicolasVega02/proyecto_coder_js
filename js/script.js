let preguntas = [
    {
        pregunta: "Pregunta 1: ¿Quién le dio a Luffy el sombrero de paja?",
        opciones: ["A - Monkey D Garp", "B - Kosuki Oden", "C - Silvers Rayleigh", "D - Akagami Shanks"],
        respuesta: "D - Akagami Shanks",
    },
    {
        pregunta: "Pregunta 2: ¿Quién es el primer nakama de Luffy?",
        opciones: ["A - Nami", "B - Sanji", "C - Zoro", "D - Ussop."],
        respuesta: "C - Zoro",
    },
    {
        pregunta: "Pregunta 3: ¿Cómo se llama el estilo de pelea de Roronoa Zoro?",
        opciones: ["A - Yontoryu", "B - Santoryu", "C - Ittoryu", "D - Nitoryu"],
        respuesta: "B - Santoryu",
    },
    {
        pregunta: "Pregunta 4: ¿Cuál es el nombre del rey de los piratas?",
        opciones: ["A - Gold Roger", "B - Monkey D Luffy", "C - Edward Newgate", "D - Gol D Roger."],
        respuesta: "D - Gol D Roger",
    },
    {
        pregunta: "Pregunta 5: ¿En qué isla conocieron a Franky el Cyborg?",
        opciones: ["A - Wano Kuni", "B - Dressrosa", "C - Water Seven", "D - Punk Hazard"],
        respuesta: "C - Water Seven",
    },
    {
        pregunta: "Pregunta 6: ¿Qué habilidad brinda la Mera Mera no mi?",
        opciones: ["A - Logia de Fuego", "B - Logia de Magma", "C - Logia de Lodo", "D - Zoan de Fénix"],
        respuesta: "A - Logia de Fuego",
    },
    {
        pregunta: "Pregunta 7: ¿Cómo se llama la fruta del diablo que comió Buggy el payaso?",
        opciones: ["A - Gomu Gomu", "B - Ito Ito", "C - Inu Inu", "D - Bara Bara"],
        respuesta: "D - Bara Bara",
    },
    {
        pregunta: "Pregunta 8: ¿Quién es el líder de la armada revolucionaria?",
        opciones: ["A - Sabo", "B - Monkey D Dragon", "C - Portgas D Ace", "D - Dr. Vegapunk"],
        respuesta: "B - Monkey D Dragon"
    },
    {
        pregunta: "Pregunta 9: ¿Cuáles son las armas ancestrales?",
        opciones: ["A - Urano, Pluton y Poseidon", "B - Saturno, Pluton y Júpiter", "C - Apollo, Venus y Poseidon", "D - Pluton, Poseidon y Mercurio"],
        respuesta: "A - Urano, Pluton y Poseidon"
    },
    {
        pregunta: "Pregunta 10: ¿Quién es el décimo capitán titánico de Barbanegra?",
        opciones: ["A - Shiryu de la niebla", "B - Jesus Burgess", "C - Kuzan Aokiji", "D - Avalo Pizarro."],
        respuesta: "C - Kuzan Aokiji"
    }
];


let formJugador = document.getElementById("formJugador");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let nacionalidad = document.getElementById("nacionalidad");
let formPreguntas = document.getElementById("formPreguntas");
let resultado = document.getElementById("resultado");
let recompensa = document.getElementById("recompensa");
let ranking = document.getElementById("ranking")


let jugador;

let jugadorLS
let correcto = 0;
let incorrecto = 50;
let berriesTotales = 0;
let listaJugadores = JSON.parse(localStorage.getItem("listaJugadores")) || [];
let listaJugadoresenLS




console.log(listaJugadores)

class Jugador {
    constructor(nombre, edad, nacionalidad, recompensa) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.recompensa = recompensa;
    }
}


function mostrarPreguntas() {
    formPreguntas.innerHTML = "";
    preguntas.forEach((element, index) => {
        let pregunta = document.createElement("p");
        pregunta.id = "pregunta";
        pregunta.innerText = element.pregunta;
        formPreguntas.append(pregunta);
        
        element.opciones.forEach((opcion, i) => {
            let input = document.createElement("input");
            input.type = "radio";
            input.name = "opciones-" + index;
            input.value = opcion;
            
            let label = document.createElement("label");
            label.innerText = opcion;
            label.prepend(input);
            
            formPreguntas.append(label);
            
            
        });
    });
    
    formPreguntas.hidden = false;
    let button = document.createElement("button")
    button.type="submit"
    button.name = "enviarRespuestas"
    button.innerText = "enviar"
            formPreguntas.append(button)
}
        
function evaluarRespuestas() {
            berriesTotales = 0;
            
            preguntas.forEach((pregunta, index) => {
                let opciones = document.getElementsByName("opciones-" + index);
                
                opciones.forEach(opcion => {
                    if (opcion.checked && opcion.value === pregunta.respuesta) {
                        berriesTotales += 65000000;
                    } else {
                        berriesTotales += incorrecto;
                    }
                });
            });
            
            return berriesTotales;
        }
        
        formJugador.addEventListener("submit", (e) => {
            e.preventDefault();
            jugador = new Jugador(nombre.value, edad.value, nacionalidad.value, 0);
            formJugador.hidden = true;
            mostrarPreguntas();
            
            
        });
        
        formPreguntas.addEventListener("submit", (e) => {
            e.preventDefault();
    let respuestasCorrectas = evaluarRespuestas();
    jugador.recompensa = respuestasCorrectas;
    
    mostrarResultado();
    
    
    
    
});



let juegoNuevo = document.getElementById("juegoNuevo");
    juegoNuevo.addEventListener("submit", () => {
    formPreguntas.hidden = true
    formJugador.hidden = false
    nombre.value = ""
    edad.value = ""
    nacionalidad.value = ""
     
    formJugador.addEventListener("submit", (e) => {
        e.preventDefault();
        jugador = new Jugador(nombre.value, edad.value, nacionalidad.value, 0);
        formJugador.hidden = true;
        mostrarPreguntas();
        
        
    });
    
}); 
let finalizar = document.getElementById("finalizar");
finalizar.addEventListener("submit", (e) => { 
    e.preventDefault();
    formJugador.hidden
    formPreguntas.hidden
    mostrarRanking()
    console.log(finalizar)

})
function mostrarRanking(){
    console.log(listaJugadores.index)
}



function mostrarResultado() {
    resultado.hidden = false
    if (berriesTotales === 650000000) {
        berriesTotales += 4914800000;
       recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres el REY DE LOS PIRATAS!";
    } else if (berriesTotales < 650000000 && berriesTotales >= 500000000) {
        berriesTotales += 3000000000;
        recompensa.innerText ="¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres un Emperador Pirata!";
    } else if (berriesTotales < 500000000 && berriesTotales >= 400000000) {
        berriesTotales += 1000000000;
        recompensa.innerText ="¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres el Comandante de un Emperador Pirata!";
    } else if (berriesTotales < 400000000 && berriesTotales >= 300000000) {
        recompensa.innerText ="¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. Eres un pirata muy buscado y en ascenso. ¡Debes cuidar tu espalda del Gobierno Mundial y los Emperadores!";
    } else if (berriesTotales < 300000000 && berriesTotales >= 100000000) {
        recompensa.innerText ="¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres parte de los SUPERNOVA! Según la Marina, ¡la peor generación de piratas desde hace 20 años! Eres aún un novato, pero de seguro te esperan grandes aventuras.";
    } else if (berriesTotales < 100000000 && berriesTotales >= 30000000) {
        recompensa.innerText ="¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres un pirata con buena reputación, pero ese es tu techo! Lo lamento.";
    } else if (berriesTotales < 30000000 && berriesTotales >= 500) {
        recompensa.innerText ="Tu recompensa es de " + berriesTotales + " Berries. ¡Lo que tienes de pirata lo tienes de guapo!";
    }
    
    
    
    listaJugadores.push(jugador);
    
    localStorage.setItem("listaJugadores", JSON.stringify(listaJugadores))




}







