/*  Variables  */
let lenguaje

//textos en español
const contactoEspanol = {
    headerPrincipal: "Deja tu comentario",
    headerSecundario: "¡Queremos Saber de vos!.",
    descripcionSecundaria: "Si queres ponerte en contacto o hacer cualquier sugerencia , completa el formulario y te responderemos lo antes posible.",
    form: {
        nombre: "Nombre",
        areaTexto: "Deje su comentario",
        boton: "ENVIAR",
    },
}

//Textos en ingles
const contactoIngles = {
    headerPrincipal: "Leave your comment",
    headerSecundario: "We want to know more about you!",
    descripcionSecundaria: "If you would like to get in touch with us or if you have any inquiries, please complete this form and we will get back to you as soon as possible.",
    form: {
        nombre: "Name",
        areaTexto: "Leave your message",
        boton: "SEND",
    },
}

/* Funciones */ 
const contactoLenguaje = ()=>{
    console.log(lenguaje)
    let text
    if(lenguaje === "eng"){
        text = contactoIngles
    } else if(lenguaje === "esp"){
        text = contactoEspanol
    }
    console.log(text)
    localStorage.setItem("lenguaje", "esp")
    document.getElementById("contactoHeaderPrincipal").innerText = text.headerPrincipal
    document.getElementById("contactoHeaderSecundario").innerText = text.headerSecundario
    document.getElementById("contactoDescripcionSecundaria").innerText = text.descripcionSecundaria
    document.getElementById("contactoFormularioNombre").placeholder = text.form.nombre
    document.getElementById("contactoFormularioTexto").placeholder = text.form.areaTexto
    document.getElementById("contactoFormularioBoton").value = text.form.boton
}
//Click a las Banderas
document.getElementById("flagUS").onclick = ()=>{
    lenguaje = "eng"
    localStorage.setItem("lenguaje", "eng")
    contactoLenguaje()
}
document.getElementById("flagES").onclick = ()=>{
    lenguaje = "esp"
    localStorage.setItem("lenguaje", "esp")
    contactoLenguaje()
}

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "esp")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}
contactoLenguaje()