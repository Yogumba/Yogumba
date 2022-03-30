// Variables
let lang

/* Textos */
const quienesEsp = {
    section1:{
        primerHeader: "Del Meneo a un OM",
        contenedorDesc1: ["YOGUMBA te regala UNIÓN: dentro tuyo, para que puedas integrar tus experiencias mente-cuerpo-alma, junto con tus luces y tus sombras. Esta Unión te devuelve a tu eje  y eleva tu vibración. Es cuando logras conectarte vos mism@, que podes experimentar una Unión más amplia, con todos los seres y, en definitiva, con el Universo entero.", "Te conectas con el amor universal, que nace y vive dentro tuyo. Y todo comienza conectándote con tu cuerpo y su movimiento, poniendo play a esa música que hace vibrar tu alma, y termina con un momento único de relajación e integración"],
        boton1: "Te invito a conocerme",
    },
    section2: {
        segundoHeader: "Soy Martu",
        segundaDesc: "Siempre tuve el profundo deseo de hacer mi pequeño aporte y ayudar a las personas a conectarse consigo mismas, desde un lugar de alegría y disfrute.",
        headerOlvidado: "Mi vida en Argentina",
        contenedorDesc3: ["Nací en Tandil, una ciudad de la Provincia de Buenos Aires. Cuando terminé la secundaria, me mudé a la Capital para estudiar Psicopedagogía.", "Unos años después, me encontraba cursando un Doctorado y dando clases en la Universidad, cuando tuve una experiencia que cambió mi vida por completo. Fue entonces cuando decidí salir de mi zona de comfort y dar un salto: me mudé a Australia y comencé a viajar.", "Ya desde antes de aquél viaje, había comenzado a conectar con mis talentos y pasiones, pero siempre bajo la forma de hobbie. A lo largo de toda mi vida, siempre disfruté mucho bailar y tomé varias clases probando distintos ritmos. Siempre fue algo que me divirtió mucho hacer.", "Fue en el año 2016 que, junto a mi mejor amiga, decidí convertirme en Instructora de Zumba para poder ocupar otro rol enseñando este baile tan simple y divertido, en el cual podía combinar distintos estilos, todo en una misma clase."],
        contenedorDesc4: ["Empecé a dar clases como Instructora, y encontré aquí un espacio en el cual podía ser yo misma y liberar todos mis prejuicios en relación a mi persona. Fui dándome cuenta de cómo esta experiencia me conectaba cada vez más con mi esencia; y con mis ganas de enseñar y compartir algo que era medio de conexión, disfrute y goce para otras personas.", "Convertirme en Instructora de Zumba, encendió una llama en mí: la llama de mi fuego interno, de mi más profunda pasión. Activó también mi deseo de expandir esta llama a otras personas."],
    },
    section3:{
        tituloAustralia: "Australia",
        contenedorDescAustralia: ["Una vez que me mudé a Australia, fue la excusa perfecta para resetearme y volver a crear una vida que estuviera más en sintonía con mi escencia, con lo que yo venía a ofrecer a este mundo. Desde entonces, cada decisión que fui tomando fue dirigida a desarrollar mis pasiones y poder compartirlas.", "Fue aquí que decidí estudiar Biodescodificación, con la intención de ampliar mi comprensión acerca de la mente, el cuerpo y el alma. Esta disciplina también cambió mi vida y sigue cambiándola diariamente, ya que me ha regalado un nivel de introspección y conciencia enormes. También es una herramienta que disfruto compartir con otras personas.", "Creo que somos seres multi-talentosos y nuestra misión es ser Alfareros de nuestra propia persona: estamos constantemente moldeando nuestro recipiente para encontrar la mejor manera de mostrar nuestra esencia."],
    },
    section4:{
        tituloIndia: "India",
        contenedorDescIndia: ["En uno de mis viajes, tuve la oportunidad de hacer el Instructorado de Yoga en la India (Rishikesh). Esta fue una de las mejores experiencias de mi vida y significó un salto muy grande en mi espiritualidad. A lo largo de toda mi formación, el aprendizaje como Instructora de Yoga en la India, el aprendizaje central fue siempre el mismo, que Yoga es UNIÓN.", "Siempre me consideré una persona muy espiritual. Pero antes de descubrir el Yoga, pensaba que la espiritualidad era algo separado del cuerpo. Fue gracias a esta disciplina que comprendí que la espiritualidad nace en nuestro cuerpo y se expresa desde allí.", "Hasta ahora, Yoga ha sido un viaje hacia mi Consciencia, y por ello estoy eternamente agradecida. Yoga cambió mi vida. Y quiero que también cambie la tuya."],
    },
    section5:{
        tituloPresente: "Mi presente",
        contenedorDescPresente: ["El camino hacia mi Expansión sigue ocurriendo, y seguirá por el resto de mi vida. Pero me alegra el alma, en este momento, sentir que cada paso que doy me conecta con seguir explotando todos mis talentos y pasiones, manteniendo mi fuego interno encendido, y buscando cada vez nuevas maneras de poder expresarme.", "Mi intención es compartir con vos algunas de las herramientas que más han generado impacto en mi vida, y que a su vez son mis tres grandes pasiones: Zumba, Yoga y Meditación. Son, para mí, herramientas súper poderosas para conectarnos con la Vida, con la Paz y con el Disfrute.", "Espero que puedas aprovecharlas tanto como yo lo hice."],
    },
    gracias: "Thanks",
}
const quienesEng = {
    section1:{
        primerHeader: "START WITH A WIGGLE, END WITH AN OM",
        contenedorDesc1: ["Yogumba offers you union: within you, so that you can integrate your mind-body-soul experiences, along with your lights and shadows. This union brings you back to your own axis and raises your vibration.", "It is when you manage to connect with yourself that you can experience a broader union, with all beings and in ultimately with the entire universe.", "You connect with the universal love that is born and lives within you. And it all begins by connecting with your body and its movement, by putting play to that music that makes your soul vibrate, and ends with a unique moment of relaxation and integration."],
        boton1: "Come meet me", /* No nos lo paso lo tuve que poner yo */
    },
    section2: {
        segundoHeader: "WHO I AM",
        segundaDesc: "My name is Martina. I always had a deep desire to make my contribution and help people connect with themselves, from a place of joy and enjoyment.",
        headerOlvidado: "MY LIFE IN ARGENTINA",
        contenedorDesc3: ["I was born in Tandil, a city in the Province of Buenos Aires. When I finished high school, I moved to the Capital to study Educational psychology.", "A few years later, I was doing a Ph.D. and teaching at the University, when I had an experience that  changed my life completely .That was when I decided to get out of my comfort zone and make a twist in my life: I moved to Australia and I started traveling."],
        contenedorDesc4: ["However, before that trip I had already begun to connect with my talents and passions, but always in the form of a hobby. Throughout my life, I always enjoyed dancing very much and took several classes trying different rhythms. It was always something I found very fun doing it.", "It was in 2016 that, together with my best friend, I decided to become a Zumba Instructor, so I was able to take on another role by teaching this simple and fun dance, in which I could combine different styles, all in the same class. ", "I started teaching as an Instructor, and I found here a space in which I could be myself and release all my prejudices in relation to myself. I was realizing how this experience connected me more and more with my essence; and with my desire to teach and share something that was a means of connection, enjoyment and pleasure for other people. ", "Becoming a Zumba Instructor lit a flame in me: the flame of my inner fire, of my deepest passion. It also activated my desire to spread this flame to other people."],
    },
    section3:{
        tituloAustralia: "AUSTRALIA",
        contenedorDescAustralia: ["Once I moved to Australia, it was the perfect excuse to reset myself and recreate a life that was more in tune with my essence, with what I came to offer to this world. Since then, every decision I made was aimed at developing my passions and being able to share them.", "It was here that I decided to study Biodecoding, with the intention of broadening my understanding of the mind, body and soul. This discipline also changed my life and continues to change it daily, as it has given me a tremendous level of insight and awareness. It is also a tool that I enjoy sharing with other people.", "I believe that we are multi-talented beings and our mission is to be Potters of our own person: we are constantly shaping our vessel to find the best way to show our essence."],
    },
    section4:{
        tituloIndia: "INDIA",
        contenedorDescIndia: ["In one of my trips, I had the opportunity to do the Yoga Instructorship in India (Rishikesh). This was one of the best experiences of my life and meant a huge leap in my spirituality. Throughout all my training as a Yoga Instructor in India, the central learning was always the same, that Yoga is UNION.", "I always considered myself a very spiritual person. But before discovering Yoga, I thought that spirituality was something separate from the body. It was thanks to this discipline that I understood that spirituality is born in our body and expresses itself from there.", "Until now, Yoga has been a journey towards my Consciousness, and for that I am eternally grateful. Yoga changed my life. And I want yours to change too."],
    },
    section5:{
        tituloPresente: "MY PRESENT",
        contenedorDescPresente: ["The path to my Expansion continues today, and it will continue for the rest of my life. Right now, it makes my soul happy to feel that every step I take connects me with continuing to exploit all my talents and passions, keeping my inner fire lit, and always looking for new ways to express myself.", "My intention is to share with you some of the tools that have generated the most impact in my life, and which are also  my three grander passions: Zumba, Yoga and Meditation. They are, for me, super powerful tools to connect with Life, with Peace and with Enjoyment. I hope you can take advantage of them as much as I did."],
    },
    gracias: "Thanks",
}
/* Funciones */ 
const quienesLenguaje = ()=>{
    console.log(lenguaje)
    let text
    if(lenguaje === "eng"){
        text = quienesEng
    } else if(lenguaje === "esp"){
        text = quienesEsp
    }
    localStorage.setItem("lenguaje", "esp")
    document.getElementById("quienesPrimerHeader").innerText = text.section1.primerHeader
    document.getElementById("quienesContenedorDesc1").innerHTML = ""
    for(let i = 0; i<text.section1.contenedorDesc1.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section1.contenedorDesc1[i]
        document.getElementById("quienesContenedorDesc1").appendChild(p)
    }
    document.getElementById("quienesBoton1").innerHtml = text.section1.boton1
    document.getElementById("quienesHeader2").innerText = text.section2.segundoHeader
    document.getElementById("quienesDesc2").innerText = text.section2.segundaDesc
    document.getElementById("headerOlvidado").innerText = text.section2.headerOlvidado
    document.getElementById("quienesContenedorDesc3").innerHTML = ""
    for(let i = 0; i<text.section2.contenedorDesc3.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section2.contenedorDesc3[i]
        document.getElementById("quienesContenedorDesc3").appendChild(p)
    }
    document.getElementById("quienesContenedorDesc4").innerHTML = ""
    for(let i = 0; i<text.section2.contenedorDesc4.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section2.contenedorDesc4[i]
        document.getElementById("quienesContenedorDesc4").appendChild(p)
    }
    document.getElementById("tituloAustralia").innerText = text.section3.tituloAustralia
    document.getElementById("descAustralia").innerHTML = ""
    for(let i = 0; i<text.section3.contenedorDescAustralia.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section3.contenedorDescAustralia[i]
        document.getElementById("descAustralia").appendChild(p)
    }
    document.getElementById("tituloIndia").innerText = text.section4.tituloIndia
    document.getElementById("descIndia").innerHTML = ""
    for(let i = 0; i<text.section4.contenedorDescIndia.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section4.contenedorDescIndia[i]
        document.getElementById("descIndia").appendChild(p)
    }
    document.getElementById("tituloPresente").innerText = text.section5.tituloPresente
    document.getElementById("descPresente").innerHTML = ""
    for(let i = 0; i<text.section5.contenedorDescPresente.length; i++){
        let p = document.createElement("p")
        p.innerText = text.section5.contenedorDescPresente[i]
        document.getElementById("descPresente").appendChild(p)
    }
    document.getElementById("Gracias").innerText = text.gracias


}
//Click a las Banderas
document.getElementById("flagUS").onclick = ()=>{
    lenguaje = "eng"
    localStorage.setItem("lenguaje", "eng")
    quienesLenguaje()
}
document.getElementById("flagES").onclick = ()=>{
    lenguaje = "esp"
    localStorage.setItem("lenguaje", "esp")
    quienesLenguaje()
}

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "esp")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}
quienesLenguaje()
