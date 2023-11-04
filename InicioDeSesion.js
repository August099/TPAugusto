
const nombreDeUsuario = document.getElementById("validationDefault01");
const email = document.getElementById("validationDefaultUsername");
const contraseña = document.getElementById("validationDefault03");
const terminos = document.getElementById("invalidCheck2");

const btnEnviar = document.getElementById("Enviar");

console.log(terminos)

function validacion(){
    
    if (nombreDeUsuario.value == "" || nombreDeUsuario.value.charAt(0) == " "){

        alert("El nombre de usuario no puede ser/comenzar con un espacio.");
        
    }else if (email.value == "" || email.value.charAt(0) == " " || contiene_arroba(email.value)){

        alert("El email no puede ser/comenzar con un espacio y debe tener un @.");

    }else if (contraseña.value.length < 4){

        alert("La contraseña debe tener por lo menos 4 caracteres.");


    }else if (!terminos.checked){
        alert("Debe aceptar los terminos y condiciones.");
    }else{
        alert(`Hola ${nombreDeUsuario.value}, ya estas registrado`)
    }
    
    



}
function contiene_arroba(Email){

    let arroba = true;
    for (let i = 0; i < Email.length; i++){

        if (Email.charAt(i) == "@"){

            arroba = false;
        }
    }
    return arroba;
}

btnEnviar.addEventListener('click',(e)=>{
    e.preventDefault()
    validacion()

})