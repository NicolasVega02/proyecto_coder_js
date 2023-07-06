let preguntas 
let formJugador = document.getElementById("formJugador");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let nacionalidad = document.getElementById("nacionalidad");
let formPreguntas = document.getElementById("formPreguntas");
let resultado = document.getElementById("resultado");
let recompensa = document.getElementById("recompensa");
let ranking = document.getElementById("ranking")
let limpiarRankingButton = document.getElementById("limpiarRanking");
let juegoNuevo = document.getElementById("juegoNuevo");
let jugador;
let jugadorLS
let correcto = 0;
let incorrecto = 50;
let berriesTotales = 0;
let listaJugadores = JSON.parse(localStorage.getItem("listaJugadores")) || [];
let listaJugadoresenLS
 
 
// FETCH 
fetch("https://raw.githubusercontent.com/NicolasVega02/proyecto_coder_js/main/JSON/preguntas.json")
         .then(response => response.json())
         .then(data => { preguntas = data});



// CLASES
class Jugador {
    constructor(nombre, edad, nacionalidad, recompensa) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.recompensa = recompensa;
    }
}

//FUNCIONES

function mostrarPreguntas() {
    
    Toastify({
        text: "Nuevo Jugador Agregado",
        style: {
            background: "#e63946",
            
          }
    }).showToast();
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
    button.innerText = "Enviar"
    button.className ="botonEnviar"
    formPreguntas.append(button)
}

function evaluarRespuestas() {
    berriesTotales = 65;
            
    preguntas.forEach((pregunta, index) => {
        let opciones = document.getElementsByName("opciones-" + index);
                
            opciones.forEach(opcion => {
                    if (opcion.checked && opcion.value === pregunta.respuesta) {
                        berriesTotales += 65;
                    }
                console.log(berriesTotales)
            });
    });        
    return berriesTotales;
}

function mostrarRanking() {
    formPreguntas.hidden = true;
    formJugador.hidden = true;
    ranking.hidden = false;

    listaJugadoresenLS = JSON.parse(localStorage.getItem("listaJugadores"));
    ranking.innerHTML = "<h2>Ranking de Jugadores</h2>";
    
    listaJugadoresenLS.sort((a, b) => b.recompensa - a.recompensa);
    
    listaJugadoresenLS.forEach((jugador, index) => {
      let jugadorRank = document.createElement("p");
      jugadorRank.innerText = `Pirata ${index + 1}: ${jugador.nombre} - ${jugador.recompensa} millones de Berries`;
      ranking.appendChild(jugadorRank);
    });
    
    
}
function mostrarResultado() {
    resultado.hidden = false
    if (berriesTotales === 650) {
        berriesTotales = 5564;
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres el REY DE LOS PIRATAS!";
    } else if (berriesTotales < 649 && berriesTotales >= 500) {
        berriesTotales += 300;
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres un Emperador Pirata!";
    } else if (berriesTotales < 500 && berriesTotales >= 400) {
        berriesTotales += 100;
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres el Comandante de un Emperador Pirata!";
    } else if (berriesTotales < 400 && berriesTotales >= 300) {
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. Eres un pirata muy buscado y en ascenso. ¡Debes cuidar tu espalda del Gobierno Mundial y los Emperadores!";
    } else if (berriesTotales < 300 && berriesTotales >= 100) {
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres parte de los SUPERNOVA! Según la Marina, ¡la peor generación de piratas desde hace 20 años! Eres aún un novato, pero de seguro te esperan grandes aventuras.";
    } else if (berriesTotales < 100 && berriesTotales >= 30) {
        recompensa.innerText = "¡Felicidades! Tu recompensa es de " + berriesTotales + " millones de Berries. ¡Eres un pirata con buena reputación, pero ese es tu techo! Lo lamento.";
    } else if (berriesTotales === 0) {
        recompensa.innerText = "Tu recompensa es de " + berriesTotales + " Berries. ¡Lo que tienes de pirata lo tienes de guapo!";
    }
    jugador.recompensa = berriesTotales
    listaJugadores.push(jugador);
    localStorage.setItem("listaJugadores", JSON.stringify(listaJugadores))
    console.log(berriesTotales)
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

finalizar.addEventListener("click", (e) => {
    e.preventDefault();
    formJugador.hidden = true
    mostrarRanking();
});

limpiarRankingButton.addEventListener("click", () => {
    localStorage.removeItem("listaJugadores");
    ranking.hidden = true;
  });










