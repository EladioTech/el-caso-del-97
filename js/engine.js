// ==========================================
// ACTO II INTEGRADO
// ==========================================
const STORY_ACTO2 = {
    "n_acto2_inicio": {
        id: "n_acto2_inicio",
        text: `Han pasado unos meses desde aquella noche en la que dibujaste el mapa.

Lo has intentado dejar estar. Has vuelto a tu vida. Pero el mapa sigue ahí, en el cajón.

Y un día, leyendo un foro de madrugada, encuentras algo. Un artículo de una revista médica. Habla de "agrupaciones espacio-temporales" de mielitis transversa en zonas rurales.

Y menciona un caso... en un pueblo muy parecido al tuyo.

*De repente, el mapa vuelve a la mesa.*`,
        effects: { deseo: 2, verdad: 1, archivo: 1 },
        options: [
            { text: "Leer el artículo entero", next: "n_acto2_articulo", effects: { deseo: 2, verdad: 1 } },
            { text: "Escribirle al autor del artículo", next: "n_acto2_contacto", effects: { comunidad: 2, esperanza: 1 } },
            { text: "Cerrar el ordenador y no volver a pensar en ello", next: "n_acto2_abandono", effects: { duelo: 3, esperanza: -2 } }
        ]
    },
    "n_acto2_abandono": {
        id: "n_acto2_abandono",
        text: `Cierras el ordenador. Decides no investigar. Volver a tu vida. Dejar el mapa en el cajón.

Y lo consigues. Durante un tiempo. Pero el mapa sigue ahí. Y la pregunta también.`,
        effects: { duelo: 2, misterio: 2 },
        options: [
            { text: "Fin del acto", next: "FINAL_EVALUAR" }
        ]
    },
    "n_acto2_articulo": {
        id: "n_acto2_articulo",
        text: `El artículo es denso. Lleno de estadísticas y palabras raras. Pero hay un párrafo que te llama la atención:

*"Las agrupaciones de mielitis transversa parainfecciosa en áreas rurales sugieren la existencia de un desencadenante ambiental común, probablemente infeccioso."*

Traducido: *hubo un virus, o algo, que afectó a varios, pero como nadie apuntó los casos en un mismo sitio, no se pudo demostrar.*

Y entonces lo ves claro: **no es que no hubiera una causa. Es que nadie miró a tiempo.**`,
        effects: { verdad: 3, rabia: 1, deseo: 2 },
        unlock: "epidemiologia",
        options: [
            { text: "Decidir mirar tú, ahora", next: "n_acto2_contacto", effects: { deseo: 2, esperanza: 2 } }
        ]
    },
    "n_acto2_contacto": {
        id: "n_acto2_contacto",
        text: `Consigues el correo del autor. Le escribes. Le cuentas tu caso. Le cuentas los otros tres. Le envías el mapa.

Y esperas. Pasan los días. Casi te olvidas.

Hasta que un día, suena el teléfono.`,
        effects: { comunidad: 2, confianza: 1, esperanza: 2 },
        options: [
            { text: "Contestar", next: "n_acto2_llamada" }
        ]
    },
    "n_acto2_llamada": {
        id: "n_acto2_llamada",
        text: `La voz al otro lado es amable, pero profesional.

—Hemos revisado su mapa —dice—. Es muy interesante. La agrupación que ha descrito cumple los criterios para ser estudiada.

—¿Y qué significa eso?

—Significa que vamos a abrir una línea de investigación. Significa que no está solo.

Cuelgas el teléfono. Tienes las manos temblando. Por primera vez, alguien con bata te ha dicho: *"te escucho"*.`,
        effects: { verdad: 2, confianza: 3, comunidad: 3, esperanza: 3 },
        unlock: "linea_tiempo",
        options: [
            { text: "Abrir el cajón y sacar el diario", next: "n_acto2_diario", effects: { duelo: 2, archivo: 2 } }
        ]
    },
    "n_acto2_diario": {
        id: "n_acto2_diario",
        sound: "audio/diario.mp3",
        text: `Sacas el cuaderno viejo. El de tapa azul. El que empezaste en el hospital.

Al abrirlo, ves tus propias palabras del 97. Y de repente, te das cuenta de que, en medio de todo ese dolor, hubo cosas que no recordabas.

Cosas buenas. Cosas tan buenas que te hacen sonreír. Cosas que te recuerdan que, aunque la vida te cambió, no te quitó todo.

El día que tu madre te saco la bici a la ventana, la California BMX, y bajaste la cuesta.

El día que un amigo te dijo: "súbete a mi espalda".

El día que te trajeron a Rocky.`,
        effects: { duelo: 1, esperanza: 3, archivo: 1 },
        unlock: "diario_97",
        options: [
            { text: "Escribir sobre la bici", next: "n_acto2_bici", effects: { esperanza: 2, rabia: -1 } },
            { text: "Escribir sobre Rocky", next: "n_acto2_rocky", effects: { esperanza: 2, duelo: 1 } }
        ]
    },
    "n_acto2_bici": {
        id: "n_acto2_bici",
        image: "img/california.jpg", // <--- AÑADE ESTA LÍNEA
        text: `Te acuerdas de la bici. La California BMX 3. Tu madre la dejó apoyada en la ventana, bajaste la calle a toda velocidad, sin poder frenar, hasta que paraste en la riguerilla.

Fue peligroso. Fue una locura. Pero fue **tuyo**.

Porque durante esos segundos, no había una silla. No había un diagnóstico. Solo tú, la bici y la calle.`,
        effects: { esperanza: 3, duelo: 1, comunidad: 1 },
        options: [
            { text: "Seguir pasando páginas", next: "n_acto2_rocky", effects: { esperanza: 1 } }
        ]
    },
    "n_acto2_rocky": {
        id: "n_acto2_rocky",
        image: "img/rocky.jpg", // <--- AÑADE ESTA LÍNEA
        text: `Y entonces, pasas la página, y llegas a Rocky.

Un perro lobo. Te lo trajo un amigo de Sigüenza, un compañero de rehabilitación. Rocky no te veía como un chico en silla. Te veía como su humano.

Fue tu mejor amigo en los años más duros. El que estaba a tu lado cuando no podías andar, y el que te miraba como si pudieras correr.`,
        effects: { duelo: 2, esperanza: 4, comunidad: 1 },
        unlock: "sueno_orilla",
        options: [
            { text: "Pasar la página... ¿y Chini?", next: "n_acto2_chini", effects: { esperanza: 1 } },
            { text: "Cerrar el diario, con una sonrisa", next: "n_acto2_sueno", effects: { esperanza: 2, misterio: 1 } }
        ]
    },
    "n_acto2_chini": {
        id: "n_acto2_chini",
        image: "img/chini.jpg", // <--- AÑADE ESTA LÍNEA
        text: `Sigues pasando páginas. Y entonces, llegas a ella.

**Chini.**

Una gatita gris atigrada. Tu madre la trajo a casa el mismo día de la lesión.

Recuerdas la primera vez que la viste al volver del hospital. Tú entrabas en silla de ruedas. Ella te miró, se asustó, y se escondió debajo del sofá.

Pero con los días, fue saliendo. Primero una pata. Luego la cabeza. Luego el ronroneo.

Y en algún momento, se subió a tus faldas. Y se quedó allí. Sin miedo. Sin ruedas. Solo Chini y tú. **Mi gatita Chinita**`,
        effects: { duelo: 1, esperanza: 3, comunidad: 1 },
        unlock: "diario_97",
        options: [
            { text: "Escribir sobre Chini", next: "n_acto2_chini_escribir", effects: { esperanza: 2, duelo: -1 } }
        ]
    },
    "n_acto2_chini_escribir": {
        id: "n_acto2_chini_escribir",
        text: `Escribes sobre ella. Sobre lo pequeña que era. Sobre lo mucho que te hizo reír.

Y te das cuenta de algo: la silla de ruedas asustó a Chini, pero solo por unos días. Después, la silla se convirtió en parte del paisaje. Parte de ti.

A veces, los animales aceptan las cosas mucho mejor que las personas.`,
        effects: { esperanza: 3, duelo: 1, misterio: 1 },
        options: [
            { text: "Seguir pasando páginas", next: "n_acto2_sueno", effects: { esperanza: 1 } }
        ]
    },
    "n_acto2_sueno": {
        id: "n_acto2_sueno",
        sound: "audio/olas.mp3",
        text: `Esa noche, sueñas.

Estás en la orilla del mar. Corres. El agua te llega a los tobillos. Está fría. Está viva.

Y no te duele nada. Las piernas responden. El cuerpo recuerda.

Al despertar, no sientes tristeza. Sientes que, por un momento, tu cerebro ha vuelto a conectar los cables.`,
        effects: { esperanza: 3, duelo: 2, misterio: 2 },
        unlock: "sueno_orilla",
        options: [
            { text: "Levantarte, y seguir con el día", next: "n_acto2_final_verdadero", effects: { esperanza: 3, duelo: 2 } }
        ]
    },
    "n_acto2_final_verdadero": {
        id: "n_acto2_final_verdadero",
        text: `Han pasado unos años desde aquella llamada.

El estudio epidemiológico no encontró una cura milagrosa. Pero encontraron algo importante: **un registro**. Alguien, en algún despacho, puso por escrito los casos. Los unió. Los miró.

Y eso, en medicina, es el primer paso para que algún día, otro chico de 18 años en un pueblo, reciba una respuesta.`,
        effects: { verdad: 2, duelo: 2, esperanza: 3 },
        options: [
            { text: "Seguir adelante", next: "n_acto3_inicio", effects: { esperanza: 2 } }
        ]
    }
};

// ==========================================
// ACTO III: LA VERDAD Y LA PAZ
// ==========================================
const STORY_ACTO3 = {
    "n_acto3_inicio": {
        id: "n_acto3_inicio",
        text: `El investigador te ha enviado un correo. No es una cura, pero es información. La información que a ti no te dieron en 1997.

Abres el archivo adjunto. Es un resumen de la literatura médica actual sobre la mielitis transversa.

Y por primera vez, alguien pone en palabras lo que tú viviste.`,
        effects: { archivo: 2, verdad: 2 },
        options: [
            { text: "Leer sobre los '3 pilares'", next: "n_acto3_pilares", effects: { deseo: 1, verdad: 1 } },
            { text: "Leer sobre el tratamiento", next: "n_acto3_tratamiento", effects: { rabia: 1, verdad: 1 } }
        ]
    },
    "n_acto3_pilares": {
        id: "n_acto3_pilares",
        text: `El texto habla de los tres pilares clínicos:

1. **Déficit motor:** la paraparesia o cuadriparesia que se instala en horas o días.
2. **Déficit sensitivo:** la pérdida de sensibilidad por debajo de un nivel (en tu caso, más o menos a la altura del ombligo).
3. **Disautonomía:** la retención urinaria, el estreñimiento, la disfunción.

Lo lees y asientes. *Eso es exactamente lo que me pasó.* No era un pinchazo. No era un sueño. Era una inflamación de la médula espinal que interrumpió las vías motoras y sensitivas.

No estabas loco. No te lo estabas inventando. Tenías una enfermedad con nombre y apellidos.`,
        effects: { verdad: 3, duelo: 1, esperanza: 2 },
        unlock: "mielitis",
        options: [
            { text: "Seguir leyendo", next: "n_acto3_tratamiento", effects: { deseo: 1 } }
        ]
    },
    "n_acto3_tratamiento": {
        id: "n_acto3_tratamiento",
        text: `El artículo menciona el tratamiento de choque: metilprednisolona a dosis altas durante 5 o 7 días. Y si no funciona, plasmaféresis.

Y luego, una frase que te hiela la sangre: **"El tiempo es médula"**.

Traducido: cuanto antes te traten, mejor es el pronóstico. 

Recuerdas tu ingreso. Recuerdas los días de espera hasta que llegó el diagnóstico. Y luego, el alta, y el verano en el pueblo antes de volver a rehabilitación. 

Y entonces, la rabia vuelve. Pero esta vez no es una rabia ciega. Es una rabia con información.`,
        effects: { rabia: 3, verdad: 3, culpa: 1 },
        options: [
            { text: "Dejar que la rabia hable", next: "n_acto3_rabia", effects: { rabia: 2, verdad: 1 } },
            { text: "Transformar la rabia en otra cosa", next: "n_acto3_paz", effects: { esperanza: 3, duelo: 2 } }
        ]
    },
    "n_acto3_rabia": {
        id: "n_acto3_rabia",
        text: `Gritas. Gritas a la pantalla del ordenador.

*"¿Por qué no me lo dijeron? ¿Por qué no me trataron antes?"*

Y es una pregunta justa. La medicina no siempre llega a tiempo. Y cuando no llega, alguien paga el precio. En este caso, tú.

Pero la rabia, aunque justa, no te devuelve las piernas.`,
        effects: { rabia: 3, duelo: 2, verdad: 1 },
        options: [
            { text: "Respirar hondo", next: "n_acto3_paz", effects: { duelo: 2, esperanza: 1 } }
        ]
    },
    "n_acto3_paz": {
        id: "n_acto3_paz",
        text: `Respiras hondo. Y dejas que la rabia se vaya.

Porque la rabia te ha acompañado durante años. Pero también te ha empujado a buscar, a dibujar el mapa, a llamar al investigador, a recuperar a Rocky y a Chini en el diario.

La rabia fue el motor. Pero ahora ya no lo necesitas.

Tienes la verdad. No la que querías, pero la que hay. Y con eso, por primera vez, puedes hacer algo que llevas 30 años sin hacer: pasar la página.`,
        effects: { esperanza: 4, duelo: 3, verdad: 2 },
        unlock: "incertidumbre",
        options: [
            { text: "Escribir una carta al chico de 18 años que fuiste", next: "n_acto3_carta", effects: { duelo: 3, esperanza: 2 } }
        ]
    },
    "n_acto3_carta": {
        id: "n_acto3_carta",
        text: `Coges un bolígrafo. Y escribes.

*"Hola. Sé que tienes miedo. Sé que no entiendes nada. Sé que estás en una cama de hospital, y que el mundo se ha detenido.*

*Quiero que sepas que vas a salir de esta. No como entraste. Pero vas a salir.*

*Vas a volver a casa. Vas a tener un perro que se va a llamar Rocky. Vas a tener una gatita que se va a llamar Chini. Vas a hacer amigos. Vas a reír.*

*Y un día, vas a entender lo que te pasó. No del todo. Pero lo suficiente.*

*Y ese día, vas a saber que no fue culpa tuya. Y que, a pesar de todo, mereció la pena."*`,
        effects: { duelo: 3, esperanza: 3, verdad: 2 },
        options: [
            { text: "Cerrar el cuaderno", next: "n_acto3_final", effects: { esperanza: 2 } }
        ]
    },
    "n_acto3_final": {
        id: "n_acto3_final",
        text: `Cierras el cuaderno.

Han pasado casi 30 años desde aquella noche de mayo. El mundo ha cambiado. Tú has cambiado.

No tienes todas las respuestas. No sabes qué virus fue. No sabes por qué te tocó a ti.

Pero sabes que no estás solo. Sabes que hay un registro. Sabes que hay un investigador que ha escuchado. Sabes que hay un chico de El Hoyo del Pinar que también sigue adelante. Sabes que hay una mujer, de la que nunca supiste el nombre, que también sobrevivió.

Y sabes, sobre todo, que has contado tu historia. Y que contarla, a veces, es la única cura que existe.`,
        effects: { duelo: 3, esperanza: 3, comunidad: 3 },
        options: [
            { text: "¿Y si esto sirviera para alguien más?", next: "n_acto4_inicio", effects: { esperanza: 1 } }
        ]
    }
};

// ==========================================
// ACTO IV: EL LEGADO (LA DIVULGACIÓN)
// ==========================================
const STORY_ACTO4 = {
    "n_acto4_inicio": {
        id: "n_acto4_inicio",
        text: `Cierras el cuaderno. Y entonces, te das cuenta de algo.

Toda esta información (los 3 pilares, el mimetismo, el mapa, la historia de Rocky y Chini) no puede quedarse en un cajón. Si a ti te hubiera venido bien tenerla en 1997, a otros les vendrá bien ahora.

Decides crear un documento. Una guía. Un archivo abierto.

*"El caso del 97"*.`,
        effects: { deseo: 2, comunidad: 2, esperanza: 2 },
        options: [
            { text: "¿Para quién lo escribo?", next: "n_acto4_para_quien", effects: { verdad: 1 } }
        ]
    },
    "n_acto4_para_quien": {
        id: "n_acto4_para_quien",
        text: `No lo escribes para los médicos. Ellos ya tienen sus libros.
No lo escribes para los investigadores. Ellos ya tienen sus estudios.

Lo escribes para **los que vienen detrás**.

Para el chico de 18 años que se acaba de despertar en una cama de hospital sin saber qué le pasa. Para su madre, que no entiende por qué no puede andar. Para el chico de "El Hoyo del Pinar", que un día buscará en internet a ver si hay alguien más como él.`,
        effects: { comunidad: 3, esperanza: 3 },
        options: [
            { text: "Escribir la primera página", next: "n_acto4_escribir", effects: { archivo: 2, duelo: 1 } }
        ]
    },
    "n_acto4_escribir": {
        id: "n_acto4_escribir",
        text: `Te sientas frente al ordenador. Y empiezas a teclear.

*"Hola. Me llamo Eladio. Y en 1997, algo me pasó.*

*No fue un pinchazo. No fue un sueño. Fue una mielitis transversa aguda parainfecciosa.*

*Y esto es lo que me hubiera gustado saber entonces."*`,
        effects: { archivo: 3, verdad: 2, esperanza: 2 },
        options: [
            { text: "Explicar los 3 pilares", next: "n_acto4_3pilares", effects: { verdad: 2 } },
            { text: "Hablar del mimetismo", next: "n_acto4_mimetismo", effects: { verdad: 2 } }
        ]
    },
    "n_acto4_3pilares": {
        id: "n_acto4_3pilares",
        text: `*"1. El déficit motor: las piernas dejan de responder de repente.*
*2. El déficit sensitivo: dejas de notar el tacto por debajo de un nivel.*
*3. La disautonomía: no puedes controlar la vejiga o el intestino.*

*No estás loco. No te lo estás inventando. Es una enfermedad real. Y tiene nombre."*`,
        effects: { verdad: 2, archivo: 2 },
        options: [
            { text: "Seguir escribiendo", next: "n_acto4_cierre", effects: { esperanza: 1 } }
        ]
    },
    "n_acto4_mimetismo": {
        id: "n_acto4_mimetismo",
        text: `*"A veces, una infección banal (un catarro, una gripe) hace que tu sistema inmune se vuelva loco. Ataca a tu propia médula por error. Eso se llama mimetismo molecular."*

*"Y no, no es culpa tuya. No hiciste nada mal. Solo te tocó."*`,
        effects: { verdad: 2, duelo: 1, culpa: -1 },
        options: [
            { text: "Seguir escribiendo", next: "n_acto4_cierre", effects: { esperanza: 1 } }
        ]
    },
    "n_acto4_cierre": {
        id: "n_acto4_cierre",
        text: `Terminas de escribir. Lees lo que has puesto.

Y por primera vez, sientes que todo tiene sentido. El dolor, la búsqueda, el mapa, el diario, los animales. Todo encaja.

No has encontrado una cura. Pero has encontrado **una voz**. Y esa voz, ahora, es tuya.`,
        effects: { duelo: 2, esperanza: 3, comunidad: 3 },
        options: [
            { text: "Publicar el documento", next: "n_acto4_publicar", effects: { esperanza: 2 } }
        ]
    },
    "n_acto4_publicar": {
        id: "n_acto4_publicar",
        text: `Le das a "Publicar".

Y el documento se sube a un foro. A una página web. A un grupo de afectados.

Pasan los días. Y empiezan a llegar respuestas.

*"Gracias. Me pasó lo mismo hace dos años."*
*"Gracias. Mi hija tiene esto y no sabía qué hacer."*
*"Gracias. Por fin alguien lo explica."*`,
        effects: { comunidad: 4, esperanza: 4, verdad: 1 },
        unlock: "incertidumbre",
        options: [
            { text: "Fin de la historia", next: "FINAL_EVALUAR" }
        ]
    }
};

// ==========================================
// CONFIGURACIÓN MAESTRA (Integrada)
// ==========================================
const CASO97_CONFIG = {
    saveKey: "caso97_save", metaKey: "caso97_meta", prefijoFinal: "FINAL_",
    sonidoTecleo: "audio/tecleo_maquina.mp3", sonidoClick: "audio/ding_archivo.mp3",
    titulo: "EL CASO DEL 97", subtitulo: "Un expediente abierto sobre una noche de mayo.",
    botonComenzar: "Abrir el expediente", botonContinuar: "Retomar la investigación",
    botonNueva: "Empezar de cero", botonReiniciar: "Volver a empezar",
    confirmNuevaPartida: "¿Quieres empezar de cero?",

    statsVisible: {
        deseo: { etiqueta: "Deseo de saber", max: 10 },
        confianza: { etiqueta: "Confianza médica", max: 10 },
        dominio: { etiqueta: "Control del relato", max: 10 },
        misterio: { etiqueta: "Tolerancia a la duda", max: 10 }
    },
    statsOcultas: {
        verdad: { max: 10 }, sospecha: { max: 10 }, comunidad: { max: 10 },
        duelo: { max: 10 }, archivo: { max: 10 }, rabia: { max: 10 },
        culpa: { max: 10 }, esperanza: { max: 10 }
    },
    temas: ["theme-97", "theme-hospital", "theme-virus", "theme-archivo", "theme-mapa", "theme-duelo"],
    enciclopedia: {
        mielitis: { titulo: "Mielitis transversa", texto: "Inflamación de la médula espinal." },
        parainfecciosa: { titulo: "¿Qué significa 'parainfecciosa'?", texto: "Que ocurre junto a una infección." },
        virus: { titulo: "Qué es un virus", texto: "Material genético que necesita una célula huésped." },
        mimetismo: { titulo: "Mimetismo molecular", texto: "El sistema inmune confunde lo propio con lo ajeno." },
        epidemiologia: { titulo: "Cómo se estudia un brote", texto: "Se buscan patrones espacio-temporales." },
        incertidumbre: { titulo: "La incertidumbre en medicina", texto: "A veces la respuesta es 'no lo sabemos'." }
    },
    recompensas: {
        diario_97: { tipo: "diario", titulo: "Diario — mayo del 97", texto: "Fragmentos de un diario." },
        informe_alta: { tipo: "documento", titulo: "Informe de alta", texto: "Alta hospitalaria tras 39 días." },
        linea_tiempo: { tipo: "explicacion", titulo: "Línea de tiempo", texto: "Cuatro casos. Una comarca." },
        sueno_orilla: { tipo: "sueño", titulo: "El sueño de la orilla", texto: "Corres por la orilla del mar." }
    },
    finales: {
        FINAL_PATRON: { cond: (v) => v.comunidad >= 6 && v.archivo >= 5, endTitle: "FIN — EL PATRÓN", endText: "Cuatro casos no son una prueba.", desbloquea: ["linea_tiempo"] },
        FINAL_SOSPECHA: { cond: (v) => v.sospecha >= 6 && v.verdad < 4, endTitle: "FIN — LA SOSPECHA", endText: "Tener una hipótesis no es tener razón.", desbloquea: [] },
        FINAL_VERDAD: { cond: (v) => v.verdad >= 6 && v.duelo >= 4, endTitle: "FIN — LO QUE SE PUEDE SABER", endText: "No todo se puede saber.", desbloquea: ["informe_alta"] },
        FINAL_DUELO: { cond: (v) => v.duelo >= 6, endTitle: "FIN — EL DESPUÉS", endText: "El 97 no terminó en junio del 97.", desbloquea: ["diario_97"] },
        FINAL_ABIERTO: { cond: () => true, endTitle: "FIN DEL ACTO II — LA BÚSQUEDA CONTINÚA", endText: "No hay una respuesta definitiva. Pero hay un mapa, hay un diario, y hay un perro que te espera.", desbloquea: ["sueno_orilla", "diario_97"] }
    },
    mensajeFinActo: `
    <div class="end-demo-message">
      <div class="end-demo-title">✦ FIN DEL ACTO ✦</div>
      <p class="end-demo-text">El expediente no se cierra. Solo se pasa de página.</p>
      <p class="end-demo-thanks">A los casos que sostienen esta historia, y a los que vendrán.</p>
    </div>`,
    notaFinal: "Esta obra es ficción inspirada en hechos reales. Los datos médicos se basan en informes reales, ficcionalizados. No sustituye el consejo de un profesional sanitario."
};

// ==========================================
// MOTOR DEL JUEGO
// ==========================================
const GameEngine = {
    state: { currentNode: "n_97_inicio", variables: {}, history: [], endingsSeen: [], meta: { enciclopedia: [], recompensas: [], partidas: 0 } },
    config: null, elements: {}, pendingOptions: [], imageTimer: null, typeInterval: null, currentText: "", typingAudio: null,

    init() {
        this.config = CASO97_CONFIG;
        const statsVis = Object.keys(this.config.statsVisible);
        const statsOcu = Object.keys(this.config.statsOcultas);
        statsVis.forEach(k => this.state.variables[k] = 0);
        statsOcu.forEach(k => this.state.variables[k] = 0);

        this.elements = {
            titleScreen: document.getElementById('title-screen'), gameScreen: document.getElementById('game-screen'),
            endScreen: document.getElementById('end-screen'), sceneImage: document.getElementById('scene-image'),
            sceneText: document.getElementById('scene-text'), optionsContainer: document.getElementById('options-container'),
            endTitle: document.getElementById('end-title'), endText: document.getElementById('end-text'),
            bgAudio: document.getElementById('bg-audio'), sfxAudio: document.getElementById('sfx-audio'),
            imagePhase: document.getElementById('image-phase'), textPhase: document.getElementById('text-phase'),
            optionsPhase: document.getElementById('options-phase')
        };

        document.title = this.config.titulo;
        const h1 = document.querySelector('#title-screen h1');
        if (h1) h1.innerHTML = this.config.titulo;
        const sub = document.querySelector('#title-screen .subtitle');
        if (sub) sub.textContent = this.config.subtitulo;
        document.getElementById('start-btn').textContent = this.config.botonComenzar;
        document.getElementById('continue-btn').textContent = this.config.botonContinuar;
        document.getElementById('new-game-btn').textContent = this.config.botonNueva;
        document.getElementById('restart-btn').textContent = this.config.botonReiniciar;

        // TRUCO PARA EL AUTOPLAY: Desbloquear el audio con el primer clic
        const desbloquearAudio = () => {
            this.playSound('audio/inicio_aventura.mp3', true);
            document.removeEventListener('click', desbloquearAudio);
        };
        document.addEventListener('click', desbloquearAudio);

        this.loadGame();
        this.showScreen('title');
        this.playSound('audio/inicio_aventura.mp3', true); // El 'true' es para que se repita en bucle
    },

    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        if (screenName === 'title') this.elements.titleScreen.classList.add('active');
        if (screenName === 'game') this.elements.gameScreen.classList.add('active');
        if (screenName === 'end') this.elements.endScreen.classList.add('active');
    },

    startGame() {
        this.stopBackgroundMusic();
        this.playSound('audio/inicio_aventura.mp3', true);
        if (this.typeInterval) clearInterval(this.typeInterval);
        if (this.imageTimer) clearTimeout(this.imageTimer);

        this.state.currentNode = "n_97_inicio";
        const statsVis = Object.keys(this.config.statsVisible);
        const statsOcu = Object.keys(this.config.statsOcultas);
        this.state.variables = {};
        statsVis.forEach(k => this.state.variables[k] = 0);
        statsOcu.forEach(k => this.state.variables[k] = 0);
        this.state.history = [];
        this.showScreen('game');
        this.renderNode("n_97_inicio");
    },

    renderNode(nodeId) {
        this.stopBackgroundMusic();

        // UNIMOS LAS DOS HISTORIAS AQUÍ
        const ALL_STORY = Object.assign({}, STORY, STORY_ACTO2, STORY_ACTO3, STORY_ACTO4);

        if (nodeId === "FINAL_EVALUAR") {
            this.evaluateEndings();
            return;
        }

        const node = ALL_STORY[nodeId];
        if (!node) {
            this.evaluateEndings();
            return;
        }

        this.state.currentNode = nodeId;
        this.state.history.push(nodeId);

        if (node.unlock) this.unlockItem(node.unlock);

        if (node.effects) {
            for (const [key, value] of Object.entries(node.effects)) {
                if (this.state.variables[key] === undefined) this.state.variables[key] = 0;
                const max = this.config.statsVisible[key]?.max || this.config.statsOcultas[key]?.max || 10;
                this.state.variables[key] = Math.max(0, Math.min(max, this.state.variables[key] + value));
            }
        }

        this.pendingOptions = node.options || [];
        this.updateStats();

        if (node.sound) this.playSound(node.sound, true);
        this.showImagePhase(node);
        this.saveGame();
    },

    showImagePhase(node) {
        this.elements.imagePhase.classList.add('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.remove('active');
        if (!node.image) { this.showTextPhase(node); return; }

        const img = this.elements.sceneImage;
        img.classList.remove('loaded');
        img.src = node.image;
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => this.showTextPhase(node);

        clearTimeout(this.imageTimer);
        this.imageTimer = setTimeout(() => this.showTextPhase(node), 2500);

        const imagePhaseEl = this.elements.imagePhase;
        const skipHandler = () => {
            clearTimeout(this.imageTimer);
            imagePhaseEl.removeEventListener('click', skipHandler);
            this.showTextPhase(node);
        };
        imagePhaseEl.addEventListener('click', skipHandler);
    },

    showTextPhase(node) {
        clearTimeout(this.imageTimer);
        if (this.typeInterval) clearInterval(this.typeInterval);

        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.add('active');
        this.elements.optionsPhase.classList.remove('active');

        this.typeText(node.text);

        const continueBtn = document.getElementById('continue-reading-btn');
        const newBtn = continueBtn.cloneNode(true);
        continueBtn.parentNode.replaceChild(newBtn, continueBtn);

        newBtn.addEventListener('click', () => {
            this.playSound('audio/ding_archivo.mp3', false);
            this.showOptionsPhase();
        });
    },

    showOptionsPhase() {
        if (this.typeInterval) clearInterval(this.typeInterval);
        this.stopTypingSound();
        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.add('active');
        this.renderOptions(this.pendingOptions);
    },

    typeText(text) {
        const el = this.elements.sceneText;
        this.currentText = text;
        this.stopTypingSound();

        const audio = new Audio('audio/tecleo_maquina.mp3');
        audio.loop = true; audio.volume = 0.2;
        audio.play().catch(() => { });
        this.typingAudio = audio;

        if (this.typeInterval) clearInterval(this.typeInterval);
        el.textContent = '';
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = 'fadeIn 1.2s ease';

        let i = 0;
        this.typeInterval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                const container = document.getElementById('text-container');
                if (container) container.scrollTop = container.scrollHeight;
            } else {
                clearInterval(this.typeInterval);
                this.stopTypingSound();
                const ding = new Audio('audio/ding_archivo.mp3');
                ding.volume = 0.3;
                ding.play().catch(() => { });
            }
        }, 60);
    },

    renderOptions(options) {
        const container = this.elements.optionsContainer;
        container.innerHTML = '';
        if (!options || options.length === 0) return;

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.addEventListener('click', () => {
                this.playSound('audio/ding_archivo.mp3', false);
                if (option.effects) {
                    for (const [key, value] of Object.entries(option.effects)) {
                        if (this.state.variables[key] === undefined) this.state.variables[key] = 0;
                        const max = this.config.statsVisible[key]?.max || this.config.statsOcultas[key]?.max || 10;
                        this.state.variables[key] = Math.max(0, Math.min(max, this.state.variables[key] + value));
                    }
                }
                this.renderNode(option.next);
            });
            container.appendChild(btn);
        });
    },

    updateStats() {
        const cont = document.getElementById('stats-content');
        if (!cont) return;
        cont.innerHTML = '';
        for (const [key, data] of Object.entries(this.config.statsVisible)) {
            const val = this.state.variables[key] || 0;
            cont.innerHTML += `<div class="stat-row"><span class="stat-label">${data.etiqueta}</span><div class="stat-bar"><div class="stat-fill" style="width: ${(val / data.max) * 100}%"></div></div><span class="stat-value">${val}</span></div>`;
        }
    },

    toggleStats() { document.getElementById('stats-panel').classList.toggle('hidden'); },

    toggleHistory() {
        const panel = document.getElementById('history-panel');
        if (!panel) return;
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
            const content = document.getElementById('history-content');
            content.innerHTML = '';
            this.state.history.forEach((nodeId, index) => {
                const node = STORY[nodeId] || (window.STORY_ACTO2 && window.STORY_ACTO2[nodeId]);
                if (node && node.text) {
                    content.innerHTML += `<div class="history-item"><div class="history-number">#${index + 1}</div><div class="history-text">${node.text}</div></div>`;
                }
            });
        }
    },

    toggleArchive() {
        const panel = document.getElementById('archive-panel');
        if (!panel) return;
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden')) {
            const content = document.getElementById('archive-content');
            content.innerHTML = '';
            content.innerHTML += `<h3>Enciclopedia</h3>`;
            for (const [key, item] of Object.entries(this.config.enciclopedia)) {
                const isUnlocked = this.state.meta.enciclopedia.includes(key);
                content.innerHTML += `<div class="doc-block ${isUnlocked ? '' : 'locked'}"><h4>${isUnlocked ? item.titulo : '???'}</h4><p>${isUnlocked ? item.texto : 'Sigue investigando.'}</p></div>`;
            }
            content.innerHTML += `<h3>Recompensas</h3>`;
            for (const [key, item] of Object.entries(this.config.recompensas)) {
                const isUnlocked = this.state.meta.recompensas.includes(key);
                content.innerHTML += `<div class="doc-block ${isUnlocked ? '' : 'locked'}"><h4>${isUnlocked ? item.titulo : '???'}</h4><p>${isUnlocked ? item.texto : 'Sigue jugando.'}</p></div>`;
            }
        }
    },

    unlockItem(key) {
        if (this.config.enciclopedia[key] && !this.state.meta.enciclopedia.includes(key)) {
            this.state.meta.enciclopedia.push(key);
            this.saveGame();
        }
        if (this.config.recompensas[key] && !this.state.meta.recompensas.includes(key)) {
            this.state.meta.recompensas.push(key);
            this.saveGame();
        }
    },

    evaluateEndings() {

        if (this.state.currentNode === "n_acto4_publicar") {
            this.showEnding({
                id: "FINAL_ACTO4",
                endTitle: "FIN DEL ACTO IV — EL LEGADO",
                endText: "No hubo una cura. Pero hubo una voz. Y la voz de uno puede ser el mapa de otro."
            });
            return;
        }

        if (this.state.currentNode === "n_acto3_final") {
            this.showEnding({
                id: "FINAL_ACTO3",
                endTitle: "FIN DEL ACTO III — LA PAZ",
                endText: "No hubo una cura. Pero hubo una verdad. Y contarla es la única forma que tenemos de curar a los que vienen detrás."
            });
            return;
        }

        // ... el resto del evaluateEndings que ya tenías

        if (this.state.currentNode === "n_acto2_final_verdadero" || this.state.currentNode === "n_acto2_abandono") {
            this.showEnding({
                id: "FINAL_ACTO2",
                endTitle: "FIN DEL ACTO II — EL MAPA",
                endText: "No hubo una cura. Pero hubo un registro. Y un registro es el primer paso para que otro no tenga que esperar 30 años."
            });
            return;
        }

        const vars = this.state.variables;
        let finalNode = null;
        let unlockedRewards = [];

        for (const [id, data] of Object.entries(this.config.finales)) {
            if (data.cond(vars)) {
                finalNode = { id: id, endTitle: data.endTitle, endText: data.endText };
                if (data.desbloquea) unlockedRewards = data.desbloquea;
                break;
            }
        }

        if (finalNode) {
            unlockedRewards.forEach(k => this.unlockItem(k));
            this.showEnding(finalNode);
        }
    },

    showEnding(node) {
        this.stopBackgroundMusic();
        this.stopTypingSound();
        this.elements.imagePhase.classList.remove('active');
        this.elements.textPhase.classList.remove('active');
        this.elements.optionsPhase.classList.remove('active');

        if (!this.state.endingsSeen.includes(node.id)) this.state.endingsSeen.push(node.id);
        this.saveGame();

        document.getElementById('end-title').textContent = node.endTitle || node.id;
        let html = `<p class="end-frase">"${node.endText || ''}"</p>`;

        html += `<div class="end-stats"><div class="end-stats-title">Tu investigación</div><div class="end-stats-grid">`;
        for (const [k, v] of Object.entries(this.state.variables)) {
            if (v > 0) html += `<div><strong>${k}:</strong> ${v}/10</div>`;
        }
        html += `</div></div>`;
        html += this.config.mensajeFinActo;
        html += `<p class="nota-final">${this.config.notaFinal}</p>`;

        document.getElementById('end-text').innerHTML = html;
        this.showScreen('end');
    },

    playSound(src, loop) {
        if (loop) {
            this.elements.bgAudio.src = src;
            this.elements.bgAudio.loop = true;
            this.elements.bgAudio.volume = 0.25;
            this.elements.bgAudio.play().catch(() => { });
        } else {
            this.elements.sfxAudio.src = src;
            this.elements.sfxAudio.volume = 0.8;
            this.elements.sfxAudio.currentTime = 0;
            this.elements.sfxAudio.play().catch(() => { });
        }
    },

    stopBackgroundMusic() { const bg = this.elements.bgAudio; if (bg) { bg.pause(); bg.currentTime = 0; } },
    stopTypingSound() { if (this.typingAudio) { this.typingAudio.pause(); this.typingAudio = null; } },

    saveGame() {
        const saveData = { currentNode: this.state.currentNode, variables: this.state.variables, history: this.state.history, meta: this.state.meta };
        localStorage.setItem(this.config.saveKey, JSON.stringify(saveData));
        localStorage.setItem(this.config.metaKey, JSON.stringify(this.state.meta));
    },

    loadGame() {
        const saved = localStorage.getItem(this.config.saveKey);
        const metaSaved = localStorage.getItem(this.config.metaKey);
        if (metaSaved) this.state.meta = JSON.parse(metaSaved);
        if (saved) {
            const continueBtn = document.getElementById('continue-btn');
            if (continueBtn) continueBtn.classList.remove('hidden');
        }
    },

    continueGame() {
        const saved = localStorage.getItem(this.config.saveKey);
        if (saved) {
            const data = JSON.parse(saved);
            this.state.currentNode = data.currentNode;
            this.state.variables = data.variables;
            this.state.history = data.history;
            if (data.meta) this.state.meta = data.meta;
            this.showScreen('game');
            this.renderNode(data.currentNode);
        }
    },

    restart() { localStorage.removeItem(this.config.saveKey); this.startGame(); },
    newAdventure() { if (confirm(this.config.confirmNuevaPartida)) { localStorage.removeItem(this.config.saveKey); this.startGame(); } }
};