// BASE DE CONOCIMIENTO
const conocimiento = [

    {
        claves: ["unidad 1", "identidad docente"],
        respuesta: "La Unidad 1 trabaja la construcción de la identidad docente, la reflexión sobre la práctica y el análisis de la escuela."
    },

    {
        claves: ["unidad 2", "planificación"],
        respuesta: "La Unidad 2 se centra en la planificación de clases, secuencias didácticas y uso de tecnologías."
    },

    {
        claves: ["unidad 3", "observación"],
        respuesta: "La Unidad 3 aborda la observación institucional, análisis de clases y reflexión crítica."
    },

    {
        claves: ["unidad 4", "residencia"],
        respuesta: "La Unidad 4 trata la residencia pedagógica, con implementación de clases reales y reflexión docente."
    },

    {
        claves: ["evaluación"],
        respuesta: "La evaluación analiza los aprendizajes mediante distintos instrumentos y criterios."
    },

    {
        claves: ["tic", "tecnologia"],
        respuesta: "Las TIC permiten innovar en la enseñanza y crear recursos digitales adaptados a los estudiantes."
    },

    {
        claves: ["fechas", "cronograma", "cuatrimestre"],
        respuesta: "📅 El programa se organiza por meses: \n- Marzo-Abril: Unidad 1 \n- Mayo: Unidad 2 \n- Junio: Evaluación \n- Agosto: Unidad 2 \n- Septiembre: Unidad 3 \n- Octubre-Noviembre: Residencia \n- Noviembre: Evaluación final."
    },

    {
        claves: ["cuando es el parcial", "examen"],
        respuesta: "📝 Las evaluaciones se ubican en: \n- Junio (primer cuatrimestre) \n- Noviembre (segundo cuatrimestre)."
    }

];


// ENVIAR MENSAJE
function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage("user", message);

    let response = getBotResponse(message);

    setTimeout(() => {
        addMessage("bot", response);
    }, 500);

    input.value = "";
}


// MOSTRAR MENSAJE
function addMessage(sender, text) {
    let chatbox = document.getElementById("chatbox");
    let message = document.createElement("p");

    message.className = sender;
    message.innerText = text;

    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}


// RESPUESTA DEL BOT
function getBotResponse(input) {

    input = input.toLowerCase();

    if (input.includes("hola")) {
        return "👋 ¡Hola! Soy Patricia 😊 ¿En qué puedo ayudarte?";
    }

    for (let item of conocimiento) {
        for (let clave of item.claves) {
            if (input.includes(clave)) {
                return item.respuesta;
            }
        }
    }

    return "🤔 No encontré eso en el programa. Probá con unidades, evaluación, TIC o residencia.";
}


// BIENVENIDA
window.onload = function() {
    addMessage("bot", "👋 ¡Hola! Soy Patricia, tu asistente de Práctica Docente III.");
    
    setTimeout(() => {
        addMessage("bot", "📚 Puedo ayudarte con unidades, evaluación, TIC, fechas y residencia.");
    }, 500);

    setTimeout(() => {
        addMessage("bot", "💬 Escribí tu pregunta cuando quieras 😊");
    }, 1000);
};
