/*  Variables  */
let lenguaje

//Texto en Español

const textoZumba = ["El movimiento te da vida, mueve la energía que se estanca y la pone en circulación.", "Bailar es moverse de manera divertida. Cuanto más te movés, más sentís. Se van despertando todos tus sentidos.Al bailar te conectas con el momento presente.", "Bailar es un medio para apagar la mente. Conectas con el cuerpo y su sensualidad. ", "Zumba activa tu ALEGRÍA y DIVERSIÓN, enciende tu LUZ INTERNA.", "Zumba es una herramienta que trae conciencia acerca   la experiencia física. Al bailar, le das a tu cuerpo un regalo y lo despertas. Cada clase ofrece un espacio de JUEGO. Se experimenta cómo, al conectar con el Cuerpo y con el momento presente, el espíritu encuentra ese medio propicio para FLUIR y expresarse.", "Zumba es un medio para liberar tu alma y expandir todo tu SER.", "EN RELACIÓN A LA CLASE:", "La clase de Zumba consiste en disfrutar los ritmos de 10-15 canciones diferentes, combinando en su mayoría música latina (Cumbia, Reggetón, ritmos brasileños, etcétera), también POP. Cada canción tiene su coreografía, pasos simples y fáciles de seguir y de aprender en el momento. La intención es que sea una clase dinámica y llena de energía; que puedas transpirar y sentir que tu cuerpo está haciendo ejercicio pero de una manera MUY divertida. Que puedas conectarte con esa atmósfera de Juego en donde no hay Bien ni Mal, solamen  te diversión y conexión con el momento presente. Nada más importa. Solamente tu energía creativa de ese momento", "Y qué pasa si no podés seguir los pasos? Te invito a que te rías y sigas moviéndote, a que sigas bailando. ¿Acaso LA VIDA  no se trata de eso?", "Al finalizar la clase, podrás experimentar cómo tu ritmo cardíaco se eleva y te empapas de sudor. Experimentas cómo se liberan tus hormonas conectadas con el placer, la felicidad y el bienestar, como la endorfina y la serotonina. Verás cómo, automáticamente, tu mente se apaga y ya los problemas parecen más pequeños; porque se siente esa vibración. Serás consciente de cómo el cuerpo y tu Ser completo, ya han cambiado su estado vibracional. ", "Zumba te conecta con tu más ALTA VIBRACIÓN."]

const textoYoga = ["Yoga es UNIÓN. Trae consciencia acerca de la conexión entre el cuerpo y la espiritualidad.", "Esta disciplina muestra cómo la espiritualidad nace en el cuerpo y se expresa desde allí, gracias a sus movimientos sincronizados con la respiración.", "El yoga muestra cómo, si bien muchas veces se vive el cuerpo y el espíritu como entidades separadas, en la realidad del Universo son UNA MISMA COSA. Somos UNO, con nosotros y con todo.También con el momento presente, que es lo único que existe.Yoga es un viaje de CONCIENCIA y CONEXIÓN.", "EN RELACIÓN A LA CLASE:", "A lo largo de la experiencia Yogumba, luego de sentir cómo tu cuerpo ha adquirido un nuevo estado vibracional gracias al movimiento que le acabas de regalar, se te invita a comenzar a conectar con tu propia experiencia espiritual.", "Solamente con el fin de traer consciencia al momento presente y absorber todos los beneficios que el ejercicio físico te ha dejado.", "Se introducen, entonces, simples movimientos de Yoga que, combinados con la respiración, te llevan a un estado de FLUIR; a conectarte con el ritmo sincronizado de tu cuerpo y tu espíritu. Sentirás cómo tus energías van integrándose, unificando todo tu sentir.", "En esta instancia, experimentas una UNIÓN profunda con todo tu ser, que a su vez te prepara para la experiencia final de Meditación y Agradecimiento."]

const textoMeditacion = ["La meditación consiste en conectar con el propio ritmo de respiración. Invita a la persona a ponerse en un lugar de observador de sí mismo: observar sus pensamientos, emociones y sensaciones, pero sin involucrarse. Adquirir el papel de espectador de sí mismo, como si estuviera viendo una película.", "La intención en la meditación, es poder mantener un estado de neutralidad con todo aquello que se va viendo de un@ mism@", "La meditación se ve beneficiada cuando se inicia con pequeños ejercicios de Pranayama (control de la energía vital, por medio de la respiración), que invitan al cerebro a la calma necesaria para adquirir ese rol de espectador. Puede también ir acompañada por simples ejercicios de Visualización.", "Pero sobre todo, el foco está puesto en que, al adquirir un rol de observador, cada persona pueda apropiarse de esa calma que ya vive dentro suyo.", "EN RELACIÓN A LA CLASE:", "Luego de vivenciar el Yoga como una preparación de todo tu SER para experimentar esa UNIÓN, ya estás list@ para el último nivel de conexión al cual accedes en esta mágica propuesta: la Meditación.", "Se te propone cerrar los ojos e integrar la experiencia YOGUMBA a tu ser y a toda tu vida", "Se te invita a conectar con la Quietud y el Silencio, utilizando la respiración como el ANCLA que te trae nuevamente a Eje y mantiene tu foco en el presente", "Vas sintiendo cómo esas aguas, que ya se han ido purificado con el baile y el yoga, ahora se van calmando y retornando a su fuente, conectándote con TU FUENTE. Y es desde este estado final de CONEXIÓN en el cual la GRATITUD sale a luz. Porque, una vez alcanzado este máximo estado de CONEXIÓN que regala la experiencia YOGUMBA, te das cuenta de que ya no necesitas nada del mundo externo. Al haber tomado consciencia de LA FUENTE que vive en vos, recordas QUIÉN SOS. Y es en este estado en el que un profundo “GRACIAS” se expande desde tu corazón", "Así queremos que finalices la experiencia YOGUMBA: en un estado de completa GRATITUD."]

//Alerts en español
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
    for(let i=0; i<textoZumba.length; i++){
        let p = document.createElement("p");
        p.innerText = textoZumba[i]
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
    for(let i=0; i<textoYoga.length; i++){
        let p = document.createElement("p");
        p.innerText = textoYoga[i]
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
    mainDiv.appendChild(h3)
    for(let i=0; i<textoMeditacion.length; i++){
        let p = document.createElement("p");
        p.innerText = textoMeditacion[i]
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
/*  Local Storage  */
if (localStorage.getItem("lenguaje") == null) {
    localStorage.setItem("lenguaje", "español")
} else {
    lenguaje = localStorage.getItem("lenguaje");
}

// Botones
if(lenguaje = "español"){
    document.getElementById("botonZumba").onclick = ()=>{zumba()}
    document.getElementById("botonYoga").onclick = ()=>{yoga()}
    document.getElementById("botonMeditacion").onclick = ()=>{meditacion()}
}else{
    alert("Error")
}

