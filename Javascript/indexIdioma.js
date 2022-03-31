// Variable
let lenguaje

const indexEng = {
    tit1: "DANCING YOUR WAY TO SAVASANA",
    desc1: "Yogumba is a space of FUN and CONNECTION.",
    desc2: "It is a space where you can identify with your JOY; with your SELF-LOVE,",
    desc3: "you own LIGHT and EXPANSION.",
    desc4: "Are you ready for the adventure?",
    btn1: "EXPLORE",
    tit2: "Yogumba is a holistic experience",
    desc5: "We combine different disciplines that complement each other",
    desc6: "movement begets life, it moves stalled energy and puts it in circulation.",
    desc7: "Bailar es moverse de manera divertida. Cuanto más te movés, más sentís.",
    verMas: "Ver mas",
    desc8: "Yoga es UNIÓN. Esta disciplina muestra cómo la espiritualidad nace en el cuerpo ",
    desc9: "y se expresa desde allí, gracias a sus movimientos sincronizados con la respiración.",
    desc10: "La meditación consiste en conectar con el propio ritmo de respiración. ",
    desc11: "Invita a la persona a ponerse en un lugar de observador de sí mismo, pero sin involucrarse.",
    weirdTitle: "<strong>¿Que es</strong> YOGUMBA?</h2>",
    weirdTile2: "Yogumba es una experiencia de <strong>conexión y diversión.</strong></p>",
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
    desc22: "“Zumba es sinónimo de ALEGRÍA y DIVERSIÓN”",
    desc23: "Clases",
    tit9: "¿Queres formar parte de YOGUMBA?",
    desc24: "Podes formar parte de manera presencial y online",
    desc25: "Galeria",
    tit10: "“Queres vernos en acción?” ",
    desc26: "Encontrarás acá material acerca de nuestras clases y verás como nuestra comunidad vive esta increíble experiencia",
    desc27: "Contacto",
    tit11: "Dejame tu comentario",
    desc28: "Si queres ponerte en contacto o hacer cualquier sugerencia , completa el formulario y te responderemos lo antes posible.",
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
    weirdTile2: "Yogumba es una experiencia de <strong>conexión y diversión.</strong></p>",
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
    desc22: "“Zumba es sinónimo de ALEGRÍA y DIVERSIÓN”",
    desc23: "Clases",
    tit9: "¿Queres formar parte de YOGUMBA?!",
    desc24: "Podes formar parte de manera presencial y online",
    desc25: "Galeria",
    tit10: "Nuestra comunidad",
    desc26: "Encontrarás acá material acerca de nuestras clases y verás cómo nuestra comunidad vive esta increíble experiencia.",
    desc27: "Contacto",
    tit11: "Dejame tu comentario",
    desc28: "Si queres ponerte en contacto o hacer cualquier sugerencia , completa el formulario y te responderemos lo antes posible.",
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
    document.getElementById("clasesTitulo1").innerText = text.titulo1
    document.getElementById("clasesTitulo2").innerText = text.titulo2
    document.getElementById("clasesContenedorDesc").innerHTML = ""
    for(let i = 0; i<text.contenedorDesc.length; i++){
        let p = document.createElement("p")
        p.innerText = text.contenedorDesc[i]
        document.getElementById("clasesContenedorDesc").appendChild(p)
    }
    document.getElementById("clasesItalicoVerde").innerText = text.italics
    document.getElementById("clasesTitulo3").innerText = text.titulo3
    document.getElementById("clasesDesc1").innerText = text.desc1

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