/*  Variables  */
let lenguaje

/* Textos */
const blogEsp = {
    section1: {
        primerHeader: "Compartamos nuestra sabiduria",
        primerDesc: "Queremos contarte un poco más acerca de lo que significa cada uno de los pilares que conforman la experiencia YOGUMBA.",
    },
    section2: {
        segundoHeader: "¿Sobre que deseas informarte hoy?",
        cartas: {
            zumba: {
                titulo: "Zumba",
                desc: ["Zumba es una herramienta que trae conciencia acerca de la experiencia física. Al bailar, le das a tu cuerpo un regalo y lo despertas."],
                boton: "Ver más",
            },
            yoga: {
                titulo: "Yoga",
                desc: ["Yoga es UNIÓN. Trae consciencia acerca de la conexión entre el cuerpo y la espiritualidad.", "Es un viaje de CONCIENCIA y CONEXIÓN."],
                boton: "Ver más",
            },
            meditacion: {
                titulo: "Meditación",
                desc: ["La meditación consiste en conectar con el propio ritmo de respiración.", "La intención, es poder mantener un estado de neutralidad con todo aquello que se va viendo de un@ mism@."],
                boton: "Ver más",
            },
        },
    },
}
const blogEng = {
    section1: {
        primerHeader: "Sharing our wisdom",
        primerDesc: "We would like to tell you more about each one of the pillars that make up the YOGUMBA experience.",
    },
    section2: {
        segundoHeader: "What would you like to know today?",
        cartas: {
            zumba: {
                titulo: "ZUMBA",
                desc: ["Yoga is UNION. It brings us awareness of the connection between our body and spirituality. It is a trip towards CONSCIOUSNESS and CONNECTION."],
                boton: "View more", /* No nos lo paso lo tuve que poner yo */
            },
            yoga: {
                titulo: "YOGA",
                desc: ["Yoga is UNION. It brings us awareness of the connection between our body and spirituality. It is a trip towards CONSCIOUSNESS and CONNECTION."],
                boton: "View more", /* No nos lo paso lo tuve que poner yo */
            },
            meditacion: {
                titulo: "Meditation",
                desc: ["Meditation consists of connecting with your own breathing rythm. We put our intention in being able to maintain a neutral state with everything that we observe about ourselves."],
                boton: "View more", /* No nos lo paso lo tuve que poner yo */
            },
        },
    },
}
//Texto en Español de la alerta

const textoZumba = ["El movimiento te da vida, mueve la energía que se estanca y la pone en circulación.", "Bailar es moverse de manera divertida. Cuanto más te movés, más sentís. Se van despertando todos tus sentidos.Al bailar te conectas con el momento presente.", "Bailar es un medio para apagar la mente. Conectas con el cuerpo y su sensualidad. ", "Zumba activa tu ALEGRÍA y DIVERSIÓN, enciende tu LUZ INTERNA.", "Zumba es una herramienta que trae conciencia acerca   la experiencia física. Al bailar, le das a tu cuerpo un regalo y lo despertas. Cada clase ofrece un espacio de JUEGO. Se experimenta cómo, al conectar con el Cuerpo y con el momento presente, el espíritu encuentra ese medio propicio para FLUIR y expresarse.", "Zumba es un medio para liberar tu alma y expandir todo tu SER.", "EN RELACIÓN A LA CLASE:", "La clase de Zumba consiste en disfrutar los ritmos de 10-15 canciones diferentes, combinando en su mayoría música latina (Cumbia, Reggetón, ritmos brasileños, etcétera), también POP. Cada canción tiene su coreografía, pasos simples y fáciles de seguir y de aprender en el momento. La intención es que sea una clase dinámica y llena de energía; que puedas transpirar y sentir que tu cuerpo está haciendo ejercicio pero de una manera MUY divertida. Que puedas conectarte con esa atmósfera de Juego en donde no hay Bien ni Mal, solamen  te diversión y conexión con el momento presente. Nada más importa. Solamente tu energía creativa de ese momento", "Y qué pasa si no podés seguir los pasos? Te invito a que te rías y sigas moviéndote, a que sigas bailando. ¿Acaso LA VIDA  no se trata de eso?", "Al finalizar la clase, podrás experimentar cómo tu ritmo cardíaco se eleva y te empapas de sudor. Experimentas cómo se liberan tus hormonas conectadas con el placer, la felicidad y el bienestar, como la endorfina y la serotonina. Verás cómo, automáticamente, tu mente se apaga y ya los problemas parecen más pequeños; porque se siente esa vibración. Serás consciente de cómo el cuerpo y tu Ser completo, ya han cambiado su estado vibracional. ", "Zumba te conecta con tu más ALTA VIBRACIÓN."]

const textoYoga = ["Yoga es UNIÓN. Trae consciencia acerca de la conexión entre el cuerpo y la espiritualidad.", "Esta disciplina muestra cómo la espiritualidad nace en el cuerpo y se expresa desde allí, gracias a sus movimientos sincronizados con la respiración.", "El yoga muestra cómo, si bien muchas veces se vive el cuerpo y el espíritu como entidades separadas, en la realidad del Universo son UNA MISMA COSA. Somos UNO, con nosotros y con todo.También con el momento presente, que es lo único que existe.Yoga es un viaje de CONCIENCIA y CONEXIÓN.", "EN RELACIÓN A LA CLASE:", "A lo largo de la experiencia Yogumba, luego de sentir cómo tu cuerpo ha adquirido un nuevo estado vibracional gracias al movimiento que le acabas de regalar, se te invita a comenzar a conectar con tu propia experiencia espiritual.", "Solamente con el fin de traer consciencia al momento presente y absorber todos los beneficios que el ejercicio físico te ha dejado.", "Se introducen, entonces, simples movimientos de Yoga que, combinados con la respiración, te llevan a un estado de FLUIR; a conectarte con el ritmo sincronizado de tu cuerpo y tu espíritu. Sentirás cómo tus energías van integrándose, unificando todo tu sentir.", "En esta instancia, experimentas una UNIÓN profunda con todo tu ser, que a su vez te prepara para la experiencia final de Meditación y Agradecimiento."]

const textoMeditacion = ["La meditación consiste en conectar con el propio ritmo de respiración. Invita a la persona a ponerse en un lugar de observador de sí mismo: observar sus pensamientos, emociones y sensaciones, pero sin involucrarse. Adquirir el papel de espectador de sí mismo, como si estuviera viendo una película.", "La intención en la meditación, es poder mantener un estado de neutralidad con todo aquello que se va viendo de un@ mism@", "La meditación se ve beneficiada cuando se inicia con pequeños ejercicios de Pranayama (control de la energía vital, por medio de la respiración), que invitan al cerebro a la calma necesaria para adquirir ese rol de espectador. Puede también ir acompañada por simples ejercicios de Visualización.", "Pero sobre todo, el foco está puesto en que, al adquirir un rol de observador, cada persona pueda apropiarse de esa calma que ya vive dentro suyo.", "EN RELACIÓN A LA CLASE:", "Luego de vivenciar el Yoga como una preparación de todo tu SER para experimentar esa UNIÓN, ya estás list@ para el último nivel de conexión al cual accedes en esta mágica propuesta: la Meditación.", "Se te propone cerrar los ojos e integrar la experiencia YOGUMBA a tu ser y a toda tu vida", "Se te invita a conectar con la Quietud y el Silencio, utilizando la respiración como el ANCLA que te trae nuevamente a Eje y mantiene tu foco en el presente", "Vas sintiendo cómo esas aguas, que ya se han ido purificado con el baile y el yoga, ahora se van calmando y retornando a su fuente, conectándote con TU FUENTE. Y es desde este estado final de CONEXIÓN en el cual la GRATITUD sale a luz. Porque, una vez alcanzado este máximo estado de CONEXIÓN que regala la experiencia YOGUMBA, te das cuenta de que ya no necesitas nada del mundo externo. Al haber tomado consciencia de LA FUENTE que vive en vos, recordas QUIÉN SOS. Y es en este estado en el que un profundo “GRACIAS” se expande desde tu corazón", "Así queremos que finalices la experiencia YOGUMBA: en un estado de completa GRATITUD."]

//Texto en ingles de la alerta NUNCA FUERON RECIBIDOS

const engZumba = ["Movement gives you life (put this phrase in bold), moves stagnant energy and puts it into circulation.", "Dancing is moving in a fun way. The more you move, the more you feel. All your senses are awakened.", "When dancing you connect with the present moment.", "Dancing is a means to turn off the mind. You connect with the body and its sensuality. Zumba activates your JOY and FUN, turns on your INTERNAL LIGHT. ", "Zumba is a tool that brings awareness to the physical experience. By dancing, you give your body a gift and wake it up.", "Each class offers a GAME space. It is experienced how, by connecting with the Body and with the present moment, the spirit finds that favorable medium to FLOW and express itself.", "Zumba is a means to free your soul and expand your entire BEING.", "IN RELATION TO THE CLASS:", " The Zumba class consists of enjoying the rhythms of 10-15 different songs, combining mostly Latin music (Cumbia, Reggeton, Brazilian rhythms, etc.), also POP. Each song has its own choreography, simple and easy steps to follow and learn on the spot. The intention is for it to be a dynamic and energetic class; that you can perspire and feel that your body is exercising but in a VERY fun way. That you can connect with that Game atmosphere where there is no Good or Bad, only fun and connection with the present moment. Nothing else matters. Only your creative energy of that moment.", "And what if you can't follow the steps? I invite you to laugh and keep moving, keep dancing. Isn't LIFE about that?", "At the end of the class, you will be able to experience how your heart rate rises and you are drenched in sweat. You experience how your hormones connected with pleasure, happiness and well-being, such as endorphins and serotonin, are released. You will see how, automatically, your mind turns off and the problems seem smaller; because you feel that vibration. You will be aware of how the body and your entire Being have already changed their vibrational state. ", "Zumba connects you with your HIGHEST VIBRATION."]

const engYoga = ["Yoga is UNION. Brings awareness about the connection between the body and spirituality.", "This discipline shows how spirituality is born in the body and expresses itself from there, thanks to its movements synchronized with breathing.","Yoga shows how, although the body and spirit are often experienced as separate entities, in the reality of the Universe they are ONE SAME THING. We are ONE, with ourselves and with everything. Also with the present moment, which is the only thing that exists.", "Yoga is a journey of CONSCIOUSNESS and CONNECTION.", "IN RELATION TO THE CLASS:", "Throughout the Yogumba experience, after feeling how your body has acquired a new vibrational state thanks to the movement that you have just given it, you are invited to begin to connect with your own spiritual experience.", "Only in order to bring awareness to the present moment and absorb all the benefits that physical exercise has left you.", "Then, simple Yoga movements are introduced that, combined with breathing, take you to a state of FLOW; to connect with the synchronized rhythm of your body and your spirit. You will feel how your energies are integrating, unifying all your feelings.", "In this instance, you experience a deep UNION with your whole being, which in turn prepares you for the final experience of Meditation and Gratitude.",]

const engMeditacion = ["Meditation consists of connecting with one's own breathing rhythm. It invites the person to put himself in a place of observer of himself: observe his thoughts, emotions and sensations, but without getting involved. Acquire the role of spectator of yourself, as if you were watching a movie. ", "The intention in meditation is to be able to maintain a state of neutrality with everything that is seen of oneself.", "Meditation benefits when it begins with small Pranayama exercises (control of vital energy, through breathing), which invite the brain to the necessary calm to acquire that role of spectator. It can also be accompanied by simple Visualization exercises. ", "But above all, the focus is that, by acquiring an observer role, each person can appropriate that calm that already lives within them. ", "After experiencing Yoga as a preparation of your entire BEING to experience that UNION, you are ready for the last level of connection that you access in this magical proposal: Meditation.", "It is suggested that you close your eyes and integrate the YOGUMBA experience into your being and into your whole life. ", "You are invited to connect with Stillness and Silence, using the breath as the ANCHOR that brings you back to Axis and maintains your focus in the present.", "You feel how those waters, which have already been purified with dance and yoga, now calm down and return to their source, connecting you with YOUR SOURCE. And it is from this final state of CONNECTION that GRATITUDE comes to light. ", "Because, once you have reached this maximum state of CONNECTION that the YOGUMBA experience gives you, you realize that you no longer need anything from the external world. Having become aware of THE SOURCE that lives in you, you remember WHO YOU ARE. And it is in this state that a deep 'THANK YOU' expands from your heart.", "This is how we want you to end the YOGUMBA experience: in a state of complete GRATITUDE. "]

//Alertas
const zumba = () =>{
    // Genera el html
    const div = document.createElement("div");
    div.classList.add("sweetBlog")
    const img = document.createElement("img")
    img.src="https://drive.google.com/uc?export=view&id=1UdaMGYAHorajQzRF0QTm_sO2GHsxdlJd"
    img.alt="Zumba"
    img.classList.add("imgZumba")
    div.appendChild(img)
    mainDiv = document.createElement("div");
    let h3 = document.createElement("h3")
    h3.innerText = 'Zumba!'
    mainDiv.appendChild(h3)
    let texto
    if(lenguaje === "esp"){
        texto = textoZumba
    } else if (lenguaje === "eng"){
        texto = engZumba
    }
    for(let i=0; i<texto.length; i++){
        let p = document.createElement("p");
        p.innerText = texto[i]
        p.classList.add("swalText")
        mainDiv.appendChild(p)
    }
    div.appendChild(mainDiv)
    // Sweet Alert
    Swal.fire({
        html: div,
        width: "80%", 
        background: "linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%)",
        showConfirmButton: false,    
    })
}
const yoga = ()=>{
    // Genera el html
    const div = document.createElement("div");
    div.classList.add("sweetBlog")
    const img = document.createElement("img")
    img.src="https://drive.google.com/uc?export=view&id=1fClaqm1QtArbhLr-CLx2JVIvaWFzst7N"
    img.alt="Yoga"
    img.classList.add("imgYoga")
    div.appendChild(img)
    mainDiv = document.createElement("div");
    let h3 = document.createElement("h3")
    h3.innerText = 'Yoga!'
    mainDiv.appendChild(h3)
    let texto
    if(lenguaje === "esp"){
        texto = textoYoga
    } else if (lenguaje === "eng"){
        texto = engYoga
    }
    for(let i=0; i<texto.length; i++){
        let p = document.createElement("p");
        p.innerText = texto[i]
        p.classList.add("swalText")
        mainDiv.appendChild(p)
    }
    div.appendChild(mainDiv)
    // Sweet Alert
    Swal.fire({
        html: div,
        width: "80%", 
        background: "linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%)",
        showConfirmButton: false,    
    })
}
const meditacion = ()=>{
    // Genera el html
    const div = document.createElement("div");
    div.classList.add("sweetBlog")
    const img1 = document.createElement("img")
    img1.src="https://drive.google.com/uc?export=view&id=1hD6aBDlk7yX8mDXToQt-9q7bR9oHHYgl"
    img1.alt="Meditacion"
    img1.classList.add("imgMeditacion1")
    div.appendChild(img1)
    mainDiv = document.createElement("div");
    let h3 = document.createElement("h3")
    h3.innerText = 'Meditacion!'
    if(lenguaje === "esp"){
        h3.innerText= `Meditation!`
    }
    mainDiv.appendChild(h3)
    let texto
    if(lenguaje === "esp"){
        texto = textoMeditacion
    } else if (lenguaje === "eng"){
        texto = engMeditacion
    }
    for(let i=0; i<texto.length; i++){
        let p = document.createElement("p");
        p.innerText = texto[i]
        p.classList.add("swalText")
        mainDiv.appendChild(p)
    }
    div.appendChild(mainDiv)
    // Sweet Alert
    Swal.fire({
        html: div,
        width: "80%", 
        background: "linear-gradient(180deg, #7FCFA7 0%, #5C9578 100%)",
        showConfirmButton: false,  
    })
}

const blogLenguaje = ()=>{
    console.log(lenguaje)
    let text
    if(lenguaje === "eng"){
        text = blogEng
    } else if(lenguaje === "esp"){
        text = blogEsp
    }
    localStorage.setItem("lenguaje", "esp")
    document.getElementById("bogPrimerHeader").innerText = text.section1.primerHeader
    document.getElementById("blogPrimerDesc").innerText = text.section1.primerDesc
    document.getElementById("blogSegundoHeader").innerText = text.section2.segundoHeader
    document.getElementById("zumbaDesc").innerHTML = ""
    for(let i = 0; i<text.section2.cartas.zumba.desc.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section2.cartas.zumba.desc[i]
        document.getElementById("zumbaDesc").appendChild(p)
    }
    document.getElementById("yogaDesc").innerHTML = ""
    for(let i = 0; i<text.section2.cartas.yoga.desc.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section2.cartas.yoga.desc[i]
        document.getElementById("yogaDesc").appendChild(p)
    }
    document.getElementById("meditacionDesc").innerHTML = ""
    for(let i = 0; i<text.section2.cartas.meditacion.desc.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section2.cartas.meditacion.desc[i]
        document.getElementById("meditacionDesc").appendChild(p)
    }
    document.getElementById("zumbaTitulo").innerText = text.section2.cartas.zumba.titulo
    document.getElementById("yogaTitulo").innerText = text.section2.cartas.yoga.titulo
    document.getElementById("meditacionTitulo").innerText = text.section2.cartas.meditacion.titulo

}
//Click a las Banderas
document.getElementById("flagUS").onclick = ()=>{
    lenguaje = "eng"
    localStorage.setItem("lenguaje", "eng")
    blogLenguaje()
}
document.getElementById("flagES").onclick = ()=>{
    lenguaje = "esp"
    localStorage.setItem("lenguaje", "esp")
    blogLenguaje()
}

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "esp")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}
blogLenguaje()

// Botones
if(lenguaje = "esp"){
    document.getElementById("botonZumba").onclick = ()=>{zumba()}
    document.getElementById("botonYoga").onclick = ()=>{yoga()}
    document.getElementById("botonMeditacion").onclick = ()=>{meditacion()}
}else{
    alert("Error")
}

