/*  Variables  */
let lenguaje

/* Textos */
const clasesEsp = {
    titulo1: "¿Queres Formar parte de YOGUMBA?",
    titulo2: "Experiencia presencial",
    contenedorDesc: ["Horario: Lunes 6.45pm-8pm.", "Dirección: 1 Acacia Street, Industrial Area, Byron Bay 2481 NSW, Australia.", "Contamos con la colaboración de Rochi (Instructora de Zumba Registrada, Miembro ZIN)"],
    italics: "¿Que estas esperando para venir?",
    titulo3: "Experiencia Online",
    desc1: "Te invitamos a formar parte de nuestra comunidad online y disfrutar de las clases desde tu casa! Solamente necesitas un espacio para poder bailar y dejar que tu cuerpo se exprese!",
}
const clasesEng = {
    titulo1: "Want to become part of YOGUMBA?",
    titulo2: "On-location experience",
    contenedorDesc: ["Time: Monday 6.45pm-8pm.", "Location: 1 Acacia Street, Industrial Area, Byron Bay 2481 NSW, Australia.", "We count with the colaboration of Rochi (Zumba Registrada Instructor, Member ZIN)"],
    italics: "What are yo waiting for?",
    titulo3: "Online experience",
    desc1: "We welcome you to become part of our online community and enjoy clases from home! You only need space to dance and express yourself!",
}
/* Funciones */ 
const clasesLenguaje = ()=>{
    console.log(lenguaje)
    let text
    if(lenguaje === "eng"){
        text = clasesEng
    } else if(lenguaje === "esp"){
        text = clasesEsp
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