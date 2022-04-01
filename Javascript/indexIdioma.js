// Variable
let lenguaje
//  La mayoria de esto lo traduje yo =/
const indexEng = {
    tit1: "DANCING YOUR WAY TO SAVASANA",
    desc1: "Yogumba is a space of FUN and CONNECTION.",
    desc2: "It is a space where you can identify with your JOY; with your SELF-LOVE,",
    desc3: "you own LIGHT and EXPANSION.",
    desc4: "Are you ready for the adventure?",
    btn1: "EXPLORE",
    tit2: "Yogumba is a holistic experience",
    desc5: "We combine different disciplines that complement each other",
    desc6: "Movement gives you life (put this phrase in bold), moves stagnant energy and puts it into circulation.",
    desc7: "Dancing is moving in a fun way. The more you move, the more you feel. All your senses are awakened.",
    verMas: "See more",
    desc8: "Yoga is UNION. Brings awareness about the connection between the body and spirituality.",
    desc9: "This discipline shows how spirituality is born in the body and expresses itself from there, thanks to its movements synchronized with breathing",
    desc10: "Meditation consists of connecting with one's own breathing rhythm. ",
    desc11: "It invites the person to put himself in a place of observer of himself: observe his thoughts, emotions and sensations, but without getting involved. Acquire the role of spectator of yourself, as if you were watching a movie.",
    weirdTitle: "<strong>What is</strong> YOGUMBA?</h2>",
    weirdTile2: "Yogumba is an experience of <strong>fun and connection,</strong>where 3 disciplines are combined - Zumba, Yoga and Meditation - all in the same class. You can join online and face-to-face.</p>",
    desc13: "You can form part of this experience presential or online.",
    tit3: "Immerse yourself in the experience",
    desc14: "Want to know more? Let yourself bathe in HAPPINESS and PEACE for your soul",
    btn2: "VIDEOS",
    btn3: "INFORMATION",
    desc15: "What our community says",
    desc16: "Each person that comes to our classes is unique yand lives their own particular experience.",
    desc17: "Being an INTEGRAL proposition, each one takes what they need the most and it echoes in their soul the moment they find it.",
    desc18: "“I was invited to a Zumba class and it ended up being much more than that. I experience it as an intense process; first going outwards and then inwards. After doing a lot of exercise while listening to very fun songs, dancing and laughing together with the tribe, Martina takes us to a space of relaxation and introspection through a meditative and conscious practice, which allows me to relax, be present and absorb all the benefits of exercise.”",
    desc19: "“It is a perfect combination for the body, soul and spirit to start with Zumba and end with a guided relaxation to raise awareness of the exercise we have just performed. It is a moment of connection with myself which I enjoy a lot! The energy and all the love that the teachers put into it leaves us renewed.”",
    desc20: "“The classes are great” I´ve always wanted to do some kind of dance and Zumba is ideal because it is easier to learn, plus it is a fun way to exercise. I love the mini Yoga and breathing exercises at the end of the class; I end up feeling relaxed.”",
    tit7: "Best of Yogumba",
    desc22: "Zumba is a synonym of JOY and FUN",
    desc23: "Classes",
    tit9: "Do you want to be part of YOGUMBA?",
    desc24: "You can take part online and face-to-face.",
    desc25: "Gallery",
    tit10: "Would you like to see us in action?",
    desc26: "Here you will find material about our classes and you will see how our community lives this amazing experience",
    desc27: "Contact",
    tit11: "Leave your comment",
    desc28: "If you want to get in touch or make a suggestion, please complete the form and we will respond as soon as possible.",
}

const indexEsp = {
    tit1: "Bailando hacia Savasana",
    desc1: "YOGUMBA es una experiencia de DIVERSION y CONEXION.",
    desc2: "Es un espacio en el cual podes vincularte con tu ALEGRÍA y DISFRUTE; con tu ",
    desc3: "AMOR PROPIO, tu LUZ y tu EXPANSIÓN.",
    desc4: "List@ para el viaje?",
    btn1: "EXPLORA",
    tit2: "YOGUMBA es una experiencia integral",
    desc5: "Combinamos diferentes disciplinas que se complementan entre si",
    desc6: "El movimiento te da vida, mueve la energía que se estanca y la pone en circulación.",
    desc7: "Bailar es moverse de manera divertida. Cuanto más te movés, más sentís.",
    verMas: "Ver mas",
    desc8: "Yoga es UNIÓN. Esta disciplina muestra cómo la espiritualidad nace en el cuerpo ",
    desc9: "y se expresa desde allí, gracias a sus movimientos sincronizados con la respiración.",
    desc10: "La meditación consiste en conectar con el propio ritmo de respiración. ",
    desc11: "Invita a la persona a ponerse en un lugar de observador de sí mismo, pero sin involucrarse.",
    weirdTitle: "<strong>¿Que es</strong> YOGUMBA?</h2>",
    weirdTile2: "Yogumba es una experiencia de <strong>diversión y conexión.</strong>, en donde se combinan 3 disciplinas- Zumba, Yoga y Meditación- , todas en una misma clase. Podes formar parte de manera online y presencial.",
    desc13: "Podes formar parte de la experiencia de manera online y presencial.",
    tit3: "Sumergite en la experiencia",
    desc14: "¿Querés saber más? Déjate empapar por este baño de ALEGRÍA y PAZ para tu alma",
    btn2: "VIDEOS",
    btn3: "INFORMACION",
    desc15: "Lo que dice nuestra comunidad",
    desc16: "Cada persona que viene a nuestras clases es única y vive la experiencia de forma particular.",
    desc17: "Al ser una propuesta INTEGRAL, cada un@ va tomando lo que más necesita y resuena con su alma en el momento en que se encuentra.",
    desc18: "“Me invitaron a una clase de zumba y terminó siendo mucho más que eso. Después de hacer mucho ejercicio escuchando canciones muy divertidas, bailando y riendo en grupo, Martina nos lleva a un espacio de relajación e introspección a través de una práctica meditativa y consciente, que me permite relajarme, estar presente y absorber todos los beneficios del ejercicio.”",
    desc19: "“Es una combinación perfecta para el cuerpo alma y espíritu empezar con zumba y terminar con una relajación guiada para hacer conciencia del ejercicio realizado.  Es un momento para uno que disfruto mucho! La energía y el amor que le ponen las profes nos deja renovadas”",
    desc20: "“Las clases están buenísimas! Siempre quise hacer algún tipo de baile y la zumba es ideal porque es más fácil de aprender, además es una forma de hacer ejercicio de forma divertida. La mini yoga y ejercicios de respiración después de la clase me encantan, me voy muy relajada”",
    tit7: "Lo mejor de Yogumba",
    desc22: "Zumba es sinónimo de ALEGRÍA y DIVERSIÓN",
    desc23: "Clases",
    tit9: "¿Queres formar parte de YOGUMBA?!",
    desc24: "Podes formar parte de manera presencial y online",
    desc25: "Galeria",
    tit10: "Queres vernos en acción?",
    desc26: "Encontrarás acá material acerca de nuestras clases y verás como nuestra comunidad vive esta increíble experiencia",
    desc27: "Contacto",
    tit11: "Deja tu comentario",
    desc28: "Si queres ponerte en contacto o hacer una sugerencia, completa el formulario y te responderemos lo antes posible.",
}




/* Funciones */ 
const indexLenguaje = ()=>{
    headFoot()
    let text
    if(lenguaje === "eng"){
        text = indexEng
    } else if(lenguaje === "esp"){
        text = indexEsp
    }
    document.getElementById("tit1").innerText = text.tit1
    document.getElementById("desc1").innerText = text.desc1
    document.getElementById("desc2").innerText = text.desc2
    document.getElementById("desc3").innerText = text.desc3
    document.getElementById("desc4").innerText = text.desc4
    document.getElementById("btn1").innerText = text.btn1
    document.getElementById("tit2").innerText = text.tit2
    document.getElementById("desc5").innerText = text.desc5
    document.getElementById("desc6").innerText = text.desc6
    document.getElementById("desc7").innerText = text.desc7
    document.getElementById("mas1").innerText = text.verMas
    document.getElementById("desc8").innerText = text.desc8
    document.getElementById("desc9").innerText = text.desc9
    document.getElementById("mas2").innerText = text.verMas
    document.getElementById("desc10").innerText = text.desc10
    document.getElementById("desc11").innerText = text.desc11
    document.getElementById("mas3").innerText = text.verMas
    document.getElementById("weirdTitle").innerHTML = text.weirdTitle
    document.getElementById("weirdTile2").innerHTML = text.weirdTile2
    document.getElementById("desc13").innerText = text.desc13
    document.getElementById("tit3").innerText = text.tit3
    document.getElementById("desc14").innerText = text.desc14
    document.getElementById("btn2").innerText = text.btn2
    document.getElementById("btn3").innerText = text.btn3
    document.getElementById("desc15").innerText = text.desc15
    document.getElementById("desc16").innerText = text.desc16
    document.getElementById("desc17").innerText = text.desc17
    document.getElementById("desc18").innerText = text.desc18
    document.getElementById("desc19").innerText = text.desc19
    document.getElementById("desc20").innerText = text.desc20
    document.getElementById("tit7").innerText = text.tit7
    document.getElementById("desc22").innerText = text.desc22
    document.getElementById("tit9").innerText = text.tit9
    document.getElementById("desc24").innerText = text.desc24
    document.getElementById("desc25").innerText = text.desc25
    document.getElementById("tit10").innerText = text.tit10
    document.getElementById("desc26").innerText = text.desc26
    document.getElementById("desc27").innerText = text.desc27
    document.getElementById("desc27").innerText = text.desc27
    document.getElementById("tit11").innerText = text.tit11
    document.getElementById("desc28").innerText = text.desc28


}
/* Header y Footer */
const esp ={
    quienes: "QUIENES SOMOS",
    galeria: "GALERIA",
    clases: "CLASES",
    contacto: "CONTACTO",
}
const eng ={
    quienes: "ABOUT US",
    galeria: "GALLERY",
    clases: "CLASSES",
    contacto: "CONTACT",
}
const headFoot = ()=>{
    let texto
    if(lenguaje === "esp"){
        texto = esp
    } else if(lenguaje === "eng"){
        texto = eng
    }
    document.getElementById("headerQuienes").innerText=texto.quienes
    document.getElementById("footerQuienes").innerText=texto.quienes
    document.getElementById("headerGaleria").innerText=texto.galeria
    document.getElementById("footerGaleria").innerText=texto.galeria
    document.getElementById("headerClases").innerText=texto.clases
    document.getElementById("footerClases").innerText=texto.clases
    document.getElementById("headerContacto").innerText=texto.contacto
    document.getElementById("footerContacto").innerText=texto.contacto
}
/* Header y Footer END*/
//Click a las Banderas
document.getElementById("flagUS").onclick = ()=>{
    lenguaje = "eng"
    localStorage.setItem("lenguaje", "eng")
    indexLenguaje()
}
document.getElementById("flagES").onclick = ()=>{
    lenguaje = "esp"
    localStorage.setItem("lenguaje", "esp")
    indexLenguaje()
}

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "esp")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}
indexLenguaje()