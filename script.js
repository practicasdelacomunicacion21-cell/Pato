// 🧠 BASE DE CONOCIMIENTO (Programa Práctica Docente III)
const conocimiento = [

    {
        claves: ["unidad 1", "identidad docente", "experiencia pedagógica"],
        respuesta: "La Unidad 1 trabaja la construcción de la identidad docente, la reflexión sobre la práctica, narrativas pedagógicas, autoevaluación y el análisis de la escuela como institución social y cultural."
    },

    {
        claves: ["unidad 2", "planificación", "intervenciones didácticas"],
        respuesta: "La Unidad 2 se centra en el diseño de intervenciones didácticas: planificación de clases, secuencias didácticas, proyectos interdisciplinarios, trabajo colaborativo y uso de tecnologías."
    },

    {
        claves: ["unidad 3", "observación", "práctica crítica"],
        respuesta: "La Unidad 3 aborda la observación institucional: análisis de clases, registros, diagnósticos, entrevistas y reflexión sobre las dinámicas escolares desde una mirada crítica e inclusiva."
    },

    {
        claves: ["unidad 4", "residencia", "intervención docente"],
        respuesta: "La Unidad 4 trata la residencia pedagógica: planificación y ejecución de clases reales, evaluación, ajustes pedagógicos y reflexión sobre la práctica mediante memorias."
    },

    {
        claves: ["evaluación", "taller 1"],
        respuesta: "El Taller Integrador I se enfoca en la evaluación de los aprendizajes: enfoques, instrumentos, acreditación y la dimensión subjetiva de evaluar."
    },

    {
        claves: ["tic", "tecnologia", "taller 2"],
        respuesta: "El Taller Integrador II aborda el uso de TIC: diseño de recursos digitales, integración tecnológica, adaptación a la diversidad e innovación educativa."
    },

    {
        claves: ["cronograma", "tiempos", "cuatrimestre"],
        respuesta: "El programa se organiza por cuatrimestres: en el primero se trabaja Unidad 1, 2 y evaluación; en el segundo, profundización, observación, residencia y TIC."
    },

    {
        claves: ["programa", "materia"],
        respuesta: "Práctica Docente III articula teoría y práctica, promoviendo reflexión crítica, trabajo colaborativo, uso de TIC y formación progresiva hasta la residencia docente."
    }
    {
    claves: ["fechas", "cronograma", "cuatrimestre"],
    respuesta: "📅 El programa se organiza por meses: \n- Marzo-Abril: Unidad 1 \n- Mayo: Unidad 2 \n- Junio: Evaluación (Taller I) \n- Agosto: Unidad 2 \n- Septiembre: Unidad 3 \n- Octubre-Noviembre: Residencia \n- Noviembre: Evaluación final (Taller II)."
},
{
    claves: ["cuando es el parcial", "examen", "evaluacion"],
    respuesta: "📝 Las evaluaciones no tienen fechas exactas en el programa, pero se ubican en: \n- Junio (primer cuatrimestre) \n- Noviembre (segundo cuatrimestre)."
}
];


// 📩 ENVIAR MENSAJE
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


// 💬 MOSTRAR MENSAJES EN PANTALLA
function addMessage(sender, text) {
    let chatbox = document.getElementById("chatbox");
    let message = document.createElement("p");

    message.className = sender;
    message.innerText = text;

    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}


// 🤖 RESPUESTA DEL BOT (INTELIGENTE)
function getBotResponse(input) {

    input = input.toLowerCase();

    // saludo
    if (input.includes("hola") || input.includes("buenas")) {
        return "👋 ¡Hola! Estoy para ayudarte 😊 Podés preguntarme sobre unidades, evaluación, TIC o residencia.";
    }

    // búsqueda en el programa
    for (let item of conocimiento) {
        for (let clave of item.claves) {
            if (input.includes(clave)) {
                return item.respuesta;
            }
        }
    }

    return "🤔 No encontré eso en el programa. Probá preguntando por unidades, evaluación, TIC o residencia.";
}

window.onload = function() {
    addMessage("bot", "👋 ¡Hola! Soy Patricia, tu asistente de Práctica Docente III.");
    
    setTimeout(() => {
        addMessage("bot", "📚 Estoy para ayudarte con el programa: unidades, evaluación, TIC y residencia.");
    }, 500);

    setTimeout(() => {
        addMessage("bot", "💬 Haceme una pregunta cuando quieras 😊");
    }, 1000);
};
