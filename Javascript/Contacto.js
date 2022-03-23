/*  Variables  */
let lenguaje

//textos en español
const contactoEspanol = {
    headerPrincipal: "Deja tu comentario",
    headerSecundario: "Si queres ponerte en contacto o hacer cualquier sugerencia , completa el formulario y te responderemos lo antes posible.",
    descripcionSecundaria: "Si queres ponerte en contacto o hacer cualquier sugerencia , completa el formulario y te responderemos lo antes posible.",
    ubicacion: "Byron Bay, NSW 2481, Australia",
    telefono: "+61 476059685",
    mail: "martinalibardi@hotmail.com",
    form: {
        email: "Email",
        nombre: "Nombre",
        texto: "Write something...",
        boton: "ENVIAR",
    },
}

//Textos en ingles
const contactoIngles = {
    headerPrincipal: "",
    headerSecundario: "",
    descripcionSecundaria: "",
    ubicacion: "Byron Bay, NSW 2481, Australia",
    telefono: "+61 476059685",
    mail: "martinalibardi@hotmail.com",
    form: {
        email: "",
        nombre: "",
        areaTexto: "",
        boton: "",
    },
}

/* Funciones */ 

/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "español")
} else {
    lenguaje = JSON.parse(localStorage.getItem("lenguaje"));
}

