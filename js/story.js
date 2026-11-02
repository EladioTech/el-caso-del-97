const STORY = {
  "n_97_inicio": {
    id: "n_97_inicio",
    image: "img/nodo0.jpg",
    text: `Mayo de 1997. Viernes por la noche.

Tienes 18 años. Estás en el sofá de casa, con la tele encendida y el volumen bajo. Fuera hace un frío raro para la época. Dentro, el calor de la manta y el sueño que llega sin avisar.

Te duermes.

No recuerdas la hora exacta. Solo recuerdas que, en algún momento de la noche, algo te despierta.

Un pinchazo. Fuerte. En la espalda.

Y luego otro.`,
    effects: { misterio: 1 },
    options: [
      { text: "Intentar moverte", next: "n_97_mover", effects: { deseo: 1, misterio: 1 } },
      { text: "Quedarte quieto y esperar", next: "n_97_quieto", effects: { confianza: 1, culpa: 1 } },
      { text: "Gritar", next: "n_97_gritar", effects: { rabia: 1, deseo: 1 } }
    ]
  },
  "n_97_mover": {
    id: "n_97_mover",
    text: `Intentas incorporarte. Los brazos responden. Las piernas, no.

No es que no quieran. Es que no están. Como si debajo de la cintura hubiera un interruptor que alguien ha apagado.

Te miras las piernas. Están ahí. Las ves. Pero no las sientes.

Y entonces entiendes, con una claridad que no tiene nada que ver con la calma, que algo muy grave acaba de pasar.`,
    effects: { deseo: 2, rabia: 1, verdad: 1 },
    options: [
      { text: "Llamar a alguien", next: "n_97_llamada", effects: { confianza: 1, comunidad: 1 } },
      { text: "Intentar levantarte igualmente", next: "n_97_insistir", effects: { rabia: 2, culpa: 1 } }
    ]
  },
  "n_97_quieto": {
    id: "n_97_quieto",
    text: `Te quedas quieto. Muy quieto. Como si el cuerpo fuera un animal al que no hay que asustar.

Pasa un minuto. Pasan cinco. No sabes cuántos.

El pinchazo vuelve. Esta vez más abajo. Y con él, una sensación que no tiene nombre: como si la espalda se estuviera cerrando.

Piensas: *esto es un sueño*. Piensas: *esto se va a pasar*. Piensas, sin querer pensarlo: *esto no se va a pasar*.`,
    effects: { misterio: 2, culpa: 1, esperanza: 1 },
    options: [
      { text: "Encender la luz", next: "n_97_llamada", effects: { deseo: 1 } },
      { text: "Quedarte a oscuras, esperando", next: "n_97_insistir", effects: { misterio: 1, culpa: 1 } }
    ]
  },
  "n_97_gritar": {
    id: "n_97_gritar",
    text: `Gritas.

El grito sale entero, sin vergüenza, sin cálculo. Es el grito de un cuerpo que sabe que algo va mal y no encuentra otra manera de decirlo.

En la casa se encienden luces. Alguien corre. Alguien pregunta qué pasa. Y tú, con la voz temblando, dices lo único que puedes decir:

—No puedo mover las piernas.`,
    effects: { rabia: 2, comunidad: 1, deseo: 1 },
    options: [
      { text: "Dejar que te ayuden", next: "n_97_llamada", effects: { confianza: 2 } },
      { text: "Intentar levantarte tú solo", next: "n_97_insistir", effects: { rabia: 1, culpa: 1 } }
    ]
  },
  "n_97_insistir": {
    id: "n_97_insistir",
    text: `Lo intentas. Claro que lo intentas.

Te agarras al sofá. Te impulsas con los brazos. Las piernas no responden, pero tú sigues. Y durante un segundo —un segundo entero— crees que lo has conseguido.

Luego caes.

El golpe contra el suelo no duele. Eso es lo peor. No duele.

Y entonces llega la ambulancia.`,
    effects: { rabia: 2, culpa: 2, verdad: 1 },
    options: [
      { text: "Ir al hospital", next: "n_97_urgencias" }
    ]
  },
  "n_97_llamada": {
    id: "n_97_llamada",
    text: `Alguien llama al 061. Das el nombre del pueblo, la dirección, la edad. La voz al otro lado es tranquila y hace preguntas muy concretas.

—¿Puede mover las piernas? —No.
—¿Siente los pies? —No.
—¿Ha perdido el conocimiento? —No.
—¿Tiene dolor? —Sí. En la espalda.

La ambulancia tarda. No sabes cuánto. La noche se estira.`,
    effects: { confianza: 1, misterio: 1 },
    options: [
      { text: "Esperar en silencio", next: "n_97_urgencias", effects: { misterio: 1 } },
      { text: "Preguntar qué puede ser", next: "n_97_urgencias", effects: { deseo: 2, verdad: 1 } }
    ]
  },
  "n_97_urgencias": {
    id: "n_97_urgencias",
    sound: "audio/ambiente_hospital.mp3", // <--- AÑADE ESTO
    text: `Urgencias. 10 de mayo de 1997. Madrugada.

Luces blancas. Camillas. Un olor a alcohol y a café recalentado. Te tumban. Te exploran. Te pinchan. Te preguntan, una y otra vez, lo mismo:

—¿Siente esto? —No.
—¿Y esto? —No.
—¿Y aquí? —Un poco.

Un médico joven te mira a los ojos y dice:

—Vamos a ingresarte. Hay que hacer pruebas.

No dice "no sabemos qué es". Pero lo dice la cara.`,
    effects: { verdad: 1, confianza: 1, misterio: 1 },
    options: [
      { text: "Preguntar: \"¿Qué me pasa?\"", next: "n_97_pregunta_medico", effects: { deseo: 2, verdad: 1 } },
      { text: "Callar y dejar que hagan su trabajo", next: "n_97_ingreso", effects: { confianza: 2, culpa: 1 } },
      { text: "Preguntar: \"¿Se me va a pasar?\"", next: "n_97_pregunta_medico", effects: { esperanza: 2, deseo: 1 } }
    ]
  },
  "n_97_pregunta_medico": {
    id: "n_97_pregunta_medico",
    text: `El médico se detiene. Te mira. Y por un momento deja de ser un médico y es solo una persona joven a la que le acaban de hacer la pregunta que no sabe contestar.

—Todavía no lo sabemos —dice, con cuidado—. Hay que esperar a los resultados. Pero vamos a hacer todo lo que esté en nuestra mano.

Es una buena respuesta. Es honesta. Y es, también, la primera vez que oyes la palabra "esperar" aplicada a tu cuerpo.`,
    effects: { verdad: 2, confianza: 1, esperanza: 1 },
    unlock: "incertidumbre",
    options: [
      { text: "Aceptar la respuesta", next: "n_97_ingreso", effects: { confianza: 2 } },
      { text: "Preguntar qué pruebas van a hacer", next: "n_97_ingreso", effects: { deseo: 2, verdad: 1, archivo: 1 } }
    ]
  },

  "n_97_ingreso": {
    id: "n_97_ingreso",
    
    text: `Te ingresan.

Habitación compartida. Cama junto a la ventana. Un gotero. Una bolsa de orina. Un timbre que no usas porque no sabes si tienes derecho a usarlo.

Los primeros días son una sucesión de pruebas: análisis, resonancias, punciones. Te pinchan la espalda. Te piden que empujes con los pies, que aprietes las manos, que mires a un lado y a otro.

Y en medio de todo eso, una pregunta que no te atreves a hacer en voz alta:

*¿Esto es para siempre?*`,
    effects: { confianza: 1, misterio: 1 },
    options: [
      { text: "Preguntarla en voz alta", next: "n_97_pregunta_pronostico", effects: { deseo: 2, verdad: 1 } },
      { text: "Guardártela", next: "n_97_dias_hospital", effects: { culpa: 2, misterio: 1 } },
      { text: "Escribirla en un cuaderno", next: "n_97_diario", effects: { archivo: 2, duelo: 1 } }
    ]
  },
  "n_97_pregunta_pronostico": {
    id: "n_97_pregunta_pronostico",
    text: `Se lo preguntas al médico que pasa visita. Un hombre mayor, con bata y gafas, que habla despacio.

—Es pronto para saberlo —dice—. La médula es muy delicada. Hay que esperar a ver cómo evoluciona.

—Pero... ¿puede que vuelva a andar?

Se quita las gafas. Las limpia con un pañuelo. Se las vuelve a poner.

—Puede. No te lo voy a negar. Puede. Pero también puede que no. Y no quiero mentirte.

Es la primera vez que alguien te habla como a un adulto. Y aunque la respuesta no es la que querías, algo en ti lo agradece.`,
    effects: { verdad: 3, confianza: 1, esperanza: 1 },
    unlock: "mielitis",
    options: [
      { text: "Darle las gracias", next: "n_97_dias_hospital", effects: { confianza: 1 } },
      { text: "Preguntar por qué", next: "n_97_dias_hospital", effects: { deseo: 2, verdad: 1 } }
    ]
  },
  "n_97_diario": {
    id: "n_97_diario",
    text: `Pides un cuaderno. Alguien de tu familia te trae uno. Tapa azul. Folios rayados.

Escribes la fecha. Escribes "día 1". Y luego te quedas mirando la página en blanco, sin saber qué poner.

Al final escribes una sola frase:

*"No sé qué me está pasando."*

Y esa frase, tan simple, es lo más honesto que has escrito nunca.`,
    effects: { archivo: 2, duelo: 2, verdad: 1 },
    unlock: "diario_97",
    options: [
      { text: "Seguir escribiendo", next: "n_97_dias_hospital", effects: { archivo: 1, duelo: 1 } },
      { text: "Cerrar el cuaderno", next: "n_97_dias_hospital", effects: { misterio: 1 } }
    ]
  },
  "n_97_dias_hospital": {
    id: "n_97_dias_hospital",
    text: `Los días pasan. No sabes muy bien cuántos. El hospital tiene su propio tiempo: las comidas, las visitas, las rondas de médicos, las noches en que no puedes dormir porque el cuerpo no encuentra postura.

Un día, por fin, llega el diagnóstico.

Te sientan. Te lo dicen. Y la palabra se queda flotando en el aire, larga y extraña:

**Mielitis transversa aguda.**

Y detrás, como si fuera un apellido:

**Parainfecciosa.**`,
    effects: { misterio: 2, verdad: 1 },
    options: [
      { text: "Repetir la palabra en voz alta", next: "n_mielitis_que_es", effects: { deseo: 2, archivo: 1 } },
      { text: "Preguntar qué significa", next: "n_mielitis_que_es", effects: { deseo: 1, verdad: 1 } },
      { text: "Callar y asentir", next: "n_silencio_diagnostico", effects: { culpa: 2, duelo: 1 } }
    ]
  },
  "n_silencio_diagnostico": {
    id: "n_silencio_diagnostico",
    text: `Asientes. Como si hubieras entendido. Como si esa palabra fuera algo que ya sabías.

No la entiendes. Pero en ese momento no puedes preguntar. No puedes.

Sales de la consulta con la palabra en la cabeza, dándole vueltas, como una piedra en el zapato.

*Mielitis transversa aguda parainfecciosa.*

Tardarás años en saber lo que significa. Y aún más en saber lo que no significa.`,
    effects: { culpa: 2, misterio: 2, duelo: 1 },
    options: [
      { text: "Buscar la palabra en un diccionario", next: "n_mielitis_que_es", effects: { archivo: 2, deseo: 2 } },
      { text: "Preguntárselo a la enfermera", next: "n_mielitis_que_es", effects: { comunidad: 1, deseo: 1 } }
    ]
  },
  "n_mielitis_que_es": {
    id: "n_mielitis_que_es",
    text: `Mielitis: inflamación de la médula espinal.
Transversa: porque afecta a todo el ancho de la médula en un segmento.
Aguda: porque ocurre de golpe, no poco a poco.

Y **parainfecciosa**: la parte que nadie te explica bien.

—Significa —dice el médico— que ocurre junto a una infección. Que el sistema inmune, al defenderse de algo, se ha confundido y ha atacado también la médula.

—¿Qué infección? —preguntas.

—Eso no lo sabemos. A veces no se encuentra.`,
    effects: { verdad: 3, archivo: 1, misterio: 1 },
    unlock: "mielitis",
    options: [
      { text: "Preguntar: \"¿Y no se puede averiguar?\"", next: "n_no_se_sabe", effects: { deseo: 2, verdad: 1 } },
      { text: "Preguntar: \"¿Y qué hago ahora?\"", next: "n_alta", effects: { confianza: 1, esperanza: 1 } },
      { text: "Añadir la palabra al cuaderno", next: "n_diario_palabra", effects: { archivo: 2, duelo: 1 } }
    ]
  },

  "n_no_se_sabe": {
    id: "n_no_se_sabe",
    text: `—Se intenta —dice el médico—. Se buscan virus, bacterias, causas autoinmunes. Pero no siempre se encuentra.

—¿Y si no se encuentra?

—Entonces se queda en "parainfecciosa". Que es una forma de decir "fue por algo infeccioso, aunque no sepamos exactamente qué".

Lo dice sin dramatismo. Como si fuera algo normal. Y tú te das cuenta, por primera vez, de que la medicina no siempre tiene una respuesta.

A veces solo tiene una palabra.`,
    effects: { verdad: 3, misterio: 2 },
    unlock: "incertidumbre",
    options: [
      { text: "Aceptarlo por ahora", next: "n_alta", effects: { confianza: 1, duelo: 1 } },
      { text: "Anotar la palabra 'parainfecciosa'", next: "n_diario_palabra", effects: { archivo: 2 } }
    ]
  },
  "n_diario_palabra": {
    id: "n_diario_palabra",
    text: `Abres el cuaderno. Buscas una página nueva. Y escribes, con letra muy clara, como si fuera una tarea:

**Mielitis transversa aguda parainfecciosa.**

Luego, debajo:

*"¿Qué significa parainfecciosa?"*

*"¿Qué infección fue?"*

*"¿Por qué yo?"*

Dejas la página abierta. Y te das cuenta de que acabas de empezar, sin saberlo, lo que va a ser el resto de tu vida: una investigación.`,
    effects: { archivo: 2, duelo: 1, deseo: 2, culpa: 1 },
    unlock: "diario_97",
    options: [
      { text: "Seguir con la rehabilitación", next: "n_alta", effects: { confianza: 1 } }
    ]
  },
  "n_alta": {
    id: "n_alta",
    text: `18 de junio de 1997.

Alta hospitalaria.

Han pasado 39 días. Sales del hospital en una silla de ruedas que no es tuya. Es de una mujer que ingresó meses antes, en la misma planta, con algo parecido. Ahora ya no la necesita.

Te la prestan.

Tú tampoco sabes si la vas a necesitar mucho tiempo. Nadie te lo dice. Te dan el alta, un informe con dos palabras que no acabas de entender del todo, y una cita para rehabilitación.

Y sales, por la puerta principal, a un sol de junio que no se parece en nada al frío de mayo.`,
    effects: { duelo: 2, misterio: 1, comunidad: 1 },
    unlock: "informe_alta",
    options: [
      { text: "Mirar el informe con calma", next: "n_informe", effects: { archivo: 2, verdad: 1 } },
      { text: "Guardarlo y seguir adelante", next: "n_acto1b_inicio", effects: { misterio: 1, esperanza: 1 } },
      { text: "Pensar en la mujer de la silla", next: "n_mujer_silla", effects: { comunidad: 2, duelo: 1 } }
    ]
  },
  "n_informe": {
    id: "n_informe",
    text: `Lo lees en un banco, sentado, con el sol en la nuca.

"Diagnóstico principal: paraplejía aguda. Mielitis transversa aguda."
"Evolución: parcial."
"Plan: rehabilitación."

Y al final, escrito a mano, con letra apretada de médico:

**"Causa no filiada."**

Cuatro palabras. Y detrás de ellas, todo lo que nadie te ha podido decir.`,
    effects: { verdad: 3, duelo: 1, archivo: 2 },
    unlock: "informe_alta",
    options: [
      { text: "Guardar el informe", next: "n_acto1b_inicio", effects: { archivo: 1 } },
      { text: "Pensar en la mujer de la silla", next: "n_mujer_silla", effects: { comunidad: 2 } }
    ]
  },
  "n_mujer_silla": {
    id: "n_mujer_silla",
    text: `Piensas en ella.

Una mujer de unos sesenta años. Ingresó meses antes. Le pasó lo mismo. Mismo diagnóstico. Misma planta.

Y ahora tú estás usando su silla.

Es un pensamiento extraño. Casi incómodo. Pero también, de alguna manera, un alivio: no eres el único. Alguien, antes que tú, pasó por esto. Alguien, antes que tú, salió del hospital con una silla que no era suya.

Y eso no te consuela. Pero te sostiene.`,
    effects: { comunidad: 3, duelo: 1, esperanza: 1 },
    options: [
      { text: "Guardar ese pensamiento", next: "n_acto1b_inicio", effects: { misterio: 1 } },
      { text: "Añadirlo al cuaderno", next: "n_acto1b_inicio", effects: { archivo: 2, duelo: 1 } }
    ]
  },
  "n_acto1b_inicio": {
    id: "n_acto1b_inicio",
    text: `Verano de 1997.

No vuelves al hospital hasta septiembre, para la rehabilitación. Entre medias hay un verano entero, largo y extraño, en el que el cuerpo no termina de encontrar su sitio.

Y hay una cosa que no te suelta: la palabra.

**Parainfecciosa.**

La has buscado en el diccionario de casa. No viene. La has preguntado a un primo que estudia medicina. Te ha dicho algo de virus y de sistema inmune, pero no te ha quedado claro.

Así que decides entenderlo. Por las buenas o por las malas.`,
    effects: { deseo: 2, archivo: 1 },
    options: [
      { text: "Empezar por lo básico: ¿qué es un virus?", next: "n_virus_intro", effects: { deseo: 1, verdad: 1 } },
      { text: "Ir directo a la palabra: ¿qué es 'parainfecciosa'?", next: "n_parainfecciosa_profundo", effects: { deseo: 2, verdad: 1 } },
      { text: "Buscar casos parecidos al tuyo", next: "n_buscar_casos", effects: { comunidad: 2, misterio: 1 } }
    ]
  },

  "n_virus_intro": {
    id: "n_virus_intro",
    text: `Un virus no es una célula.

Es más pequeño. Mucho más. Tan pequeño que no se ve con un microscopio normal. Y no se puede reproducir por sí solo: necesita entrar en una célula y usar su maquinaria para copiarse.

Cuando un virus entra en el cuerpo, el sistema inmune lo detecta y responde. A veces la respuesta es proporcionada. A veces no.

Y a veces, en ese proceso, se equivoca.`,
    effects: { verdad: 2, archivo: 1 },
    unlock: "virus",
    options: [
      { text: "Preguntar: ¿cómo se equivoca?", next: "n_mimetismo", effects: { deseo: 2, verdad: 1 } },
      { text: "Preguntar: ¿qué virus son los sospechosos?", next: "n_virus_sospechosos", effects: { archivo: 1, deseo: 1 } }
    ]
  },
  "n_virus_sospechosos": {
    id: "n_virus_sospechosos",
    text: `No hay un solo virus. Hay familias.

Los **enterovirus** son los sospechosos habituales en las mielitis parainfecciosas. El de la polio es el más famoso, pero hay otros: Coxsackie, Echovirus, Enterovirus 71.

También se han descrito casos asociados a herpes, a varicela-zóster, a algunos flavivirus.

—¿Y cómo se sabe cuál fue? —preguntas.

—Muchas veces no se sabe —te responden—. Para cuando aparecen los síntomas, el virus ya puede haber desaparecido. O puede que nunca se detectara.`,
    effects: { verdad: 3, archivo: 1, misterio: 1 },
    unlock: "virus",
    options: [
      { text: "Preguntar: ¿y entonces cómo se llama 'parainfecciosa'?", next: "n_parainfecciosa_profundo", effects: { deseo: 1, verdad: 1 } },
      { text: "Preguntar: ¿y el sistema inmune por qué ataca la médula?", next: "n_mimetismo", effects: { deseo: 1, verdad: 1 } }
    ]
  },
  "n_parainfecciosa_profundo": {
    id: "n_parainfecciosa_profundo",
    text: `"Parainfecciosa" no es un diagnóstico exacto. Es una **categoría**.

Significa: "esto ocurrió junto a una infección". No dice qué infección. No dice cuándo exactamente. No dice si fue el virus directamente o el sistema inmune.

Es, en cierto modo, la palabra que la medicina usa cuando tiene una hipótesis razonable pero no una certeza.

Y eso, cuando tienes 18 años y quieres una respuesta, es a la vez un alivio y una frustración.

Alivio: no fue tu culpa.
Frustración: no hay un culpable concreto al que señalar.`,
    effects: { verdad: 3, misterio: 2, culpa: -1 },
    unlock: "parainfecciosa",
    options: [
      { text: "Preguntar: ¿cómo actúa el sistema inmune?", next: "n_mimetismo", effects: { deseo: 1, verdad: 1 } },
      { text: "Pensar: 'entonces nunca lo sabré'", next: "n_nunca_lo_sabre", effects: { culpa: 2, misterio: 2 } }
    ]
  },
  "n_nunca_lo_sabre": {
    id: "n_nunca_lo_sabre",
    text: `"Entonces nunca lo sabré."

Es un pensamiento que no se va. Un pensamiento que, con los años, se hará más y más grande. Pero también, con los años, aprenderás a vivir con él.

Porque la verdad es que hay preguntas que no tienen respuesta. Y hay que aprender a convivir con eso.

No es rendirse. Es saber distinguir entre lo que se puede saber y lo que no.`,
    effects: { duelo: 2, misterio: 2, verdad: 1, esperanza: -1 },
    unlock: "incertidumbre",
    options: [
      { text: "Seguir buscando igualmente", next: "n_mimetismo", effects: { deseo: 2, esperanza: 1 } },
      { text: "Dejar de buscar por hoy", next: "n_buscar_casos", effects: { duelo: 1 } }
    ]
  },
  "n_mimetismo": {
    id: "n_mimetismo",
    text: `Algunas proteínas de los virus se parecen mucho a proteínas humanas.

Es lo que se llama **mimetismo molecular**.

El sistema inmune, entrenado para atacar al invasor, produce anticuerpos. Esos anticuerpos se pegan a las proteínas del virus. Pero a veces, por esa semejanza, también se pegan a proteínas del propio cuerpo.

Y atacan.

En el caso de una mielitis transversa, el objetivo equivocado puede ser la mielina —la capa que protege las neuronas de la médula— o las propias neuronas.

No es una certeza. Es una de las hipótesis. Pero es la que mejor encaja con lo que se sabe.`,
    effects: { verdad: 3, archivo: 1, deseo: 1 },
    unlock: "mimetismo",
    options: [
      { text: "Preguntar: ¿y se puede evitar?", next: "n_se_puede_evitar", effects: { deseo: 1, verdad: 1 } },
      { text: "Preguntar: ¿y cómo se trata?", next: "n_se_puede_evitar", effects: { confianza: 1, deseo: 1 } }
    ]
  },
  "n_se_puede_evitar": {
    id: "n_se_puede_evitar",
    text: `—No —te dicen—. No se puede evitar.

Cuando una infección banal desencadena una respuesta inmune desproporcionada, no hay manera de saberlo por adelantado. No hay una vacuna contra "que tu sistema inmune se equivoque".

Lo que sí se puede hacer es tratar la inflamación cuando ya ha ocurrido. Corticoides, plasmaféresis, inmunoglobulinas. Y después, rehabilitación. Mucha rehabilitación.

—¿Y eso funciona?

—A veces. Depende de muchos factores. De la rapidez, de la gravedad, de la suerte.`,
    effects: { verdad: 3, esperanza: 1, culpa: 1 },
    options: [
      { text: "Preguntar por la suerte", next: "n_sobre_la_suerte", effects: { deseo: 1, misterio: 1 } },
      { text: "Aceptar la respuesta", next: "n_buscar_casos", effects: { duelo: 1 } }
    ]
  },
  "n_sobre_la_suerte": {
    id: "n_sobre_la_suerte",
    text: `—¿La suerte?

—Sí. La suerte. La rapidez con la que te tratan, la gravedad de la inflamación, la zona de la médula afectada... Hay muchas cosas que no controlamos.

Es una respuesta incómoda. La medicina, a veces, es incómoda. No porque no sepa, sino porque no puede controlar todo.

Y tú, que llevas meses buscando un culpable, entiendes de repente que no hay uno. Hay una serie de factores. Y ninguno de ellos es "tú".`,
    effects: { culpa: -2, verdad: 2, duelo: 1 },
    options: [
      { text: "Aceptarlo", next: "n_buscar_casos", effects: { duelo: 1, confianza: 1 } },
      { text: "Pensar en la mujer de la silla", next: "n_buscar_casos", effects: { comunidad: 2 } }
    ]
  },

  "n_buscar_casos": {
    id: "n_buscar_casos",
    text: `Pasas los meses siguientes con las antenas puestas.

Cada vez que alguien menciona a alguien que "de repente no podía andar", te giras. Cada vez que oyes la palabra "mielitis", te quedas helado. Cada vez que vas a rehabilitación, miras a los demás pacientes con otra cosa en los ojos.

No es morbo. Es búsqueda.

Y un día, por fin, encuentras algo.`,
    effects: { comunidad: 2, deseo: 1, misterio: 1 },
    options: [
      { text: "Preguntar a la fisioterapeuta", next: "n_fisio", effects: { comunidad: 1, confianza: 1 } },
      { text: "Preguntar a tu familia", next: "n_familia_casos", effects: { comunidad: 1, duelo: 1 } }
    ]
  },
  "n_familia_casos": {
    id: "n_familia_casos",
    text: `Se lo preguntas a tu madre. A tu padre. A tus hermanos.

Y sale, poco a poco, lo que no sabías: que sí, que hay gente. Que en el pueblo de al lado hubo un chico, hace unos años. Que una mujer mayor, en otro pueblo, también. Que hay gente que "anda mal de las piernas" y nadie ha preguntado por qué.

No es una investigación. Es memoria colectiva. Pero es el primer paso.

Y es suficiente para seguir.`,
    effects: { comunidad: 3, duelo: 1, esperanza: 1 },
    options: [
      { text: "Preguntar a la fisioterapeuta", next: "n_fisio", effects: { comunidad: 2 } }
    ]
  },
  "n_fisio": {
    id: "n_fisio",
    text: `La fisioterapeuta lleva años en la comarca. Conoce a todo el mundo. Y cuando le preguntas, se queda callada un momento. Luego dice:

—Sí. Hay más casos. No muchos. Pero hay más.

Te cuenta lo que sabe. Sin nombres. Sin apellidos. Solo los hechos.

—Una mujer, mayor, unos meses antes que tú. Un chico, de un pueblo de al lado, dos años después. Y alguno más, más tarde. Todos con lo mismo. O parecido.

—¿Y nadie ha investigado?

—Nadie ha preguntado, que yo sepa.`,
    effects: { comunidad: 3, verdad: 1, misterio: 1 },
    unlock: "linea_tiempo",
    options: [
      { text: "Preguntar: ¿por qué nadie ha preguntado?", next: "n_por_que_nadie", effects: { rabia: 2, verdad: 1 } },
      { text: "Pedirle que te cuente más", next: "n_mapa", effects: { comunidad: 2, archivo: 1 } }
    ]
  },

  "n_por_que_nadie": {
    id: "n_por_que_nadie",
    text: `—Porque son casos aislados —dice ella—. Porque cada uno va por su lado. Porque en los pueblos no se habla de estas cosas. Porque los médicos ven un caso, no ven un patrón.

—Pero es un patrón.

—Sí. Pero para verlo hay que mirar desde arriba. Y desde arriba no mira nadie.

Lo dice sin amargura. Como quien describe el tiempo que hace.

Y tú te das cuenta, por primera vez, de que hay patrones que existen solo si alguien los mira.`,
    effects: { rabia: 2, verdad: 2, comunidad: 1 },
    options: [
      { text: "Decidir mirar tú", next: "n_mapa", effects: { deseo: 2, esperanza: 1 } },
      { text: "Preguntar si ella ha mirado", next: "n_mapa", effects: { comunidad: 1, confianza: 1 } }
    ]
  },
  "n_mapa": {
    id: "n_mapa",
    text: `Sacas un mapa de la comarca. Lo pones sobre la mesa.

Marcas tu pueblo. Marcas el pueblo del chico. Marcas el de la mujer. Marcas donde vive la gente que has ido encontrando.

Y miras.

Cuatro puntos. Una comarca. Una ventana temporal. Eso, en epidemiología, se llama agrupación espacio-temporal.

Y tú lo estás viendo con tus propios ojos.

Puede ser casualidad. Puede que no. Pero ya no se puede desver.`,
    effects: { comunidad: 2, verdad: 2, archivo: 1 },
    unlock: "linea_tiempo",
    options: [
      { text: "Quedarte mirando el mapa", next: "n_sospecha", effects: { misterio: 2, comunidad: 1 } }
    ]
  },
  "n_sospecha": {
    id: "n_sospecha",
    text: `Aquí empieza la parte difícil.

Porque ver el patrón no es lo mismo que saber qué lo causó. Y ahí, en ese hueco, entran las hipótesis.

Las tuyas. Las de tu familia. Las de la fisioterapeuta. Las de internet, cuando llegue internet.

Algunas son plausibles. Otras no. Algunas te obsesionan. Otras las descartas.

Y en medio de todo eso, una pregunta que no te suelta: *¿y si mi hipótesis fuera la buena?*`,
    effects: { sospecha: 2, deseo: 1, rabia: 1 },
    options: [
      { text: "Aferrarte a tu hipótesis", next: "n_aferrarse", effects: { sospecha: 3, verdad: -1 } },
      { text: "Buscar lo que la ciencia puede sostener", next: "n_ciencia", effects: { verdad: 3, confianza: 1 } },
      { text: "Hablar con el chico del pueblo de al lado", next: "n_contacto_chico", effects: { comunidad: 3, duelo: 1 } }
    ]
  },
  "n_aferrarse": {
    id: "n_aferrarse",
    text: `Te aferras.

Buscas en libros, en revistas, en foros de internet. Encuentras correlaciones por todas partes. Y cada cosa que encuentras, por pequeña que sea, te confirma tu hipótesis.

Es un mecanismo conocido: el **sesgo de confirmación**. Buscas lo que confirma, ignoras lo que no. Y cuanto más buscas, más crees.

Pero hay una diferencia entre creer y saber. Y tú, en el fondo, lo sabes.`,
    effects: { sospecha: 3, rabia: 2, verdad: -1, culpa: 1 },
    options: [
      { text: "Reconocer el sesgo", next: "n_ciencia", effects: { verdad: 2, duelo: 1 } },
      { text: "Seguir buscando igual", next: "n_ciencia", effects: { sospecha: 2 } }
    ]
  },
  "n_ciencia": {
    id: "n_ciencia",
    text: `La ciencia no funciona por convicción. Funciona por **falsación**.

No se trata de "tengo una hipótesis y busco pruebas de que es cierta". Se trata de "tengo una hipótesis y busco pruebas de que es falsa". Si no las encuentro, la hipótesis se sostiene provisionalmente. Si las encuentro, la hipótesis se cae.

Y ahí está la diferencia entre creer y saber.

Tu hipótesis personal puede ser cierta. Pero para saberlo, hay que intentar tumbarla. Y eso, cuando la hipótesis es tuya, duele.`,
    effects: { verdad: 3, misterio: 1, duelo: 1 },
    options: [
      { text: "Intentar tumbar tu hipótesis", next: "n_tumbar_hipotesis", effects: { verdad: 2, sospecha: -1 } },
      { text: "Reconocer que es difícil", next: "n_tumbar_hipotesis", effects: { duelo: 2, verdad: 1 } }
    ]
  },
  "n_tumbar_hipotesis": {
    id: "n_tumbar_hipotesis",
    text: `Lo intentas.

Buscas casos que no encajan. Buscas explicaciones alternativas. Buscas errores en tu propio razonamiento.

Y encuentras algo importante: **el chico del pueblo de al lado no encaja con tu hipótesis**. Él vivía en otro sitio. Bebía otra agua. Comía otras cosas. Y sin embargo, le pasó lo mismo.

Eso no invalida tu hipótesis. Pero la debilita. Y te obliga a buscar explicaciones más amplias.

Explicaciones que no dependan de una sola cosa. Explicaciones que tengan en cuenta que, a veces, la naturaleza no sigue un patrón que tú puedas entender.`,
    effects: { verdad: 3, comunidad: 1, duelo: 1, sospecha: -1 },
    options: [
      { text: "Aceptar que hay cosas que no encajan", next: "n_contacto_chico", effects: { verdad: 1, duelo: 1 } },
      { text: "Pensar en que quizás no hay una causa única", next: "n_contacto_chico", effects: { misterio: 2, verdad: 1 } }
    ]
  },
  "n_contacto_chico": {
    id: "n_contacto_chico",
    text: `Un día, por fin, contactas con él.

Tiene 16 años. Bueno, tenía 16 cuando le pasó. Ahora tiene algunos más. Está en silla de ruedas. No puede andar.

Habláis. Al principio con cuidado. Luego con más confianza.

Le cuentas lo tuyo. Te cuenta lo suyo. Y en algún momento de la conversación, os dais cuenta de que estáis contando la misma historia con palabras distintas.

Misma comarca. Misma época. Mismo diagnóstico. Distinto desenlace.

Y en ese momento, algo se mueve en ti. Algo que no es rabia ni es tristeza. Es otra cosa. Es la sensación de no estar solo.`,
    effects: { comunidad: 4, duelo: 2, esperanza: 2 },
    unlock: "linea_tiempo",
    options: [
      { text: "Preguntarle qué piensa él", next: "n_que_piensa_el", effects: { comunidad: 2, verdad: 1 } },
      { text: "Guardar el contacto", next: "n_cierre_acto1", effects: { comunidad: 1, duelo: 1 } }
    ]
  },
  "n_que_piensa_el": {
    id: "n_que_piensa_el",
    text: `Le preguntas qué piensa él.

—Yo no sé —dice—. Unos días pienso que fue el agua. Otros, que fue algo que comimos. Otros, que fue la mala suerte.

—¿Y no te gustaría saberlo?

—Claro que sí. Pero también he aprendido a vivir sin saberlo. Porque si espero a saberlo para vivir, me quedo esperando.

Lo dice sin dramatismo. Como quien ha hecho las paces con algo que no entiende del todo.

Y tú te das cuenta de que hay muchas formas de convivir con una pregunta. La suya no es la tuya. Pero es igual de válida.`,
    effects: { comunidad: 2, duelo: 2, esperanza: 1, verdad: 1 },
    options: [
      { text: "Agradecerle que te lo cuente", next: "n_cierre_acto1", effects: { comunidad: 1, duelo: 1 } }
    ]
  },
  "n_cierre_acto1": {
    id: "n_cierre_acto1",
    text: `Vuelves a casa.

Es de noche. Hay un mapa sobre la mesa, un cuaderno lleno de notas, y una lista de nombres que no son nombres, sino casos.

Cuatro puntos. Una comarca. Una ventana temporal.

Puede que no sea nada. Puede que sea todo. Pero ya no se puede desver.

Y mañana, cuando te despiertes, seguirás teniendo la misma pregunta. La misma de siempre. La que te acompaña desde mayo del 97.

*¿Por qué yo?*

Pero ahora, por primera vez, la pregunta tiene otra forma. Ya no es solo "¿por qué yo?". Es también: *"¿por qué nosotros?"*.

Y eso, aunque no sea una respuesta, es un paso.`,
    effects: { duelo: 2, comunidad: 1, esperanza: 2, misterio: 1 },
    options: [
      { text: "Pasar la página. Seguir investigando.", next: "n_acto2_inicio" },
      { text: "Cerrar el cuaderno y dejarlo estar.", next: "FINAL_EVALUAR" }
    ]
  }
};