/* Variables */
let lenguaje

const galeriaEsp = {
    tit1: "Bienvenid@ a este viaje de DIVERSIÓN!",
    desc1: "Encontrarás acá material acerca de nuestras clases y verás cómo nuestra comunidad vive esta increíble experiencia.",
    tit2: "Nuestra comunidad",
    desc2: "Lo que nos importa es crear una comunidad de personas que viven y sienten la música, el baile y la espiritualidad, como parte de sus vidas. Nos interesa ayudarte a que vos los incluyas en la tuya y te dejes empapar por este baño de ALEGRÍA Y PAZ para tu alma.",
}
const galeriaEng = {
    tit1: "Welcome to this voyage of Fun!",
    desc1: "You will find our class material and find how our comunity lives this incredible experience.",
    tit2: "Our community",
    desc2: "What matters to us is to create a community of people that live and feel music, the dance and spirituality, as part of their lives. We are intrested in helping you to include us in your community and let yourself bathe in PEACE & HAPPINES for your soul.",
}

/* Funciones */ 
const clasesLenguaje = ()=>{
    headFoot()
    let text
    if(lenguaje === "eng"){
        text = galeriaEng
    } else if(lenguaje === "esp"){
        text = galeriaEsp
    }
    document.getElementById("galTit1").innerText = text.tit1
    document.getElementById("galDesc1").innerText = text.desc1
    document.getElementById("galTit2").innerText = text.tit2
    document.getElementById("galDesc2").innerText = text.desc2

}
/* Header y Footer */
const esp ={
    quienes: "QUIENES SOMOS",
    galeria: "GALERIA",
    clases: "CLASES",
    contacto: "CONTACTO",
    gracias: "Gracias por recorrer mi pagina",
    terminos: "Terminos y condiciones",
}
const eng ={
    quienes: "ABOUT US",
    galeria: "GALLERY",
    clases: "CLASSES",
    contacto: "CONTACT",
    gracias: "Thanks for visiting my page",
    terminos: "Terms and conditions",
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
    clasesLenguaje()
}
document.getElementById("flagES").onclick = ()=>{
    lenguaje = "esp"
    localStorage.setItem("lenguaje", "esp")
    clasesLenguaje()
}

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "esp")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}
clasesLenguaje()