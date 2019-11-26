let listadoUsuarios = [];
//nombre
document.addEventListener("DOMContenetLoaded",function(){
	let input = document.getElementById("nombre");
	input.addEventListener("keyup",validarNombre);

})

	function validarNombre() {
		let inputNombre = document.getElementById("nombre");
		let valor = inputNombre.value.trim();
		let esCorrecto = true;
		let listaErrores = document.getElementById("erroresNombre");
		listaErrores.innerHTML = " ";
		inputNombre.classList.remove("inputErroneo");
		inputNombre.classList.remove("inputCorecto");

		if (!/^[a-z/A-Z/ñÑ ]+$/.test(valor)) {
			esCorrecto = false;
			inputNombre.classList.add("inputErroneo");
			let divError = document.createElement("div");
			divError.innerHTML = "MMD DICE: DEBEN USARSE SOLO LETRAS Y ESPACIOS";
			listaErrores.appendChild(divError);
		}

		if (valor.length<3) {
        esCorrecto = false;
        inputNombre.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: DEBEN TENER COMO MINIMO 3 LETRAS";
        listaErrores.appendChild(divError);
    }


    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}
document.addEventListener("DOMContenetLoaded",function(){
	let input = document.getElementById("apellidos");
	input.addEventListener("keyup",validarApellidos);
})
	function validarApellidos(){
		let inputNombre = document.getElementById("nombre");
		let valorNombre = inputNombre.value.trim();
		let inputApellidos = document.getElementById("apellidos");
		let valor = inputApellidos.value.trim();
		let esCorrecto = true;
		let listaErrores = document.getElementById("erroresApellidos");
		listaErrores.innerHTML = "";
		inputApellidos.classList.remove("inputErroneo");
		inputApellidos.classList.remove("inputCorecto");
		
		if (!/^[a-z/A-Z/ñÑ/ ]+$/.test(valor)) {
        esCorrecto = false;
        inputApellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: DEBEN USARSE SOLO LETRAS Y ESPACIOS";
        listaErrores.appendChild(divError);
    }

    	if (valor === valorNombre) {
        esCorrecto = false;
        inputApellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: EL NOMBRE Y EL APELLIDO NO PUEDEN SER IGUALES";
        listaErrores.appendChild(divError);
    }

    if (valor.length<3) {
        esCorrecto = false;
        inputApellidos.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: DEBE USARSE COMO MINIMO 3 LETRAS";
        listaErrores.appendChild(divError);
    }


    if (esCorrecto) {
        inputApellidos.classList.add("inputCorrecto");
    }else{
        inputApellidos.classList.add("inputErroneo");
    }
    return esCorrecto;

	}

document.addEventListener("DOMContenetLoaded",function(){
	let input = document.getElementById("edad");
	input.addEventListener("keyup",validarEdad);
})

	function validarEdad(){
		let inputEdad = document.getElementById("edad");
		let valor = inputEdad.value.trim();
		let esCorrecto = true;
		let listaErrores = document.getElementById("erroresEdad");
		listaErrores.innerHTML = "";
		inputEdad.classList.remove("inputErroneo");
		inputEdad.classList.remove("inputCorecto");

		if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        inputEdad.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: SOLO DEBEN USARSE NÚMEROS";
        listaErrores.appendChild(divError);
    	}

    let valorN = parseInt(valor);
    	if (valorN<18) {
        esCorrecto = false;
        inputEdad.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE:DEBE TENER MAS DE 18 AÑOS";
        listaErrores.appendChild(divError);
    	}


    	if (esCorrecto) {
        inputEdad.classList.add("inputCorrecto");
    	}else{
        inputEdad.classList.add("inputErroneo");
    	}
    	return esCorrecto;
		}
//email
document.addEventListener("DOMContenetLoaded",function(){
    let input = document.getElementById("email");
    input.addEventListener("keyup",validarEmail);

})

    function validarEmail() {
        let expresion = /^([a-zA-z0-9._])+([@])+mmd\.+(com?)+([^.])+$/;
        let inputEmail = document.getElementById("email");
        let valor = inputEmail.value.trim();
        let esCorrecto = true;
        let listaErrores = document.getElementById("erroresEmail");
        listaErrores.innerHTML = " ";
        inputEmail.classList.remove("inputErroneo");
        inputEmail.classList.remove("inputCorecto");

        if (!expresion.test(valor)) {
            esCorrecto = false;
            inputEmail.classList.add("inputErroneo");
            let divError = document.createElement("div");
            divError.innerHTML = "MMD DICE:DEBE ACABAR EN MMD.COM";
            listaErrores.appendChild(divError);
        }
//no se como hacer par que no contenga maximo,madrona, duran de modo que e puesto que si se crean emails con estos nombre de error
        if (valor==="maximo@mmd.com"||valor==="madrona@mmd.com"||valor==="duran@mmd.com"
            ||valor==="maximomadronaduran@mmd.com") {
            esCorrecto = false;
            inputEmail.classList.add("inputErroneo");
            let divError = document.createElement("div");
            divError.innerHTML = "MMD DICE:NO PUEDE CONTENER LAS PALABRAS(MAXIMO,MADRONA,DURAN)";
            listaErrores.appendChild(divError);
        }


    if (esCorrecto) {
        inputEmail.classList.add("inputCorrecto");
    }else{
        inputEmail.classList.add("inputErroneo");
    }
    return esCorrecto;
}        


document.addEventListener("DOMContenetLoaded",function(){
	let input = document.getElementById("profesiones");
	input.addEventListener("change",validarProfesion);
})

function validarProfesion(){
		let inputProfesion = document.getElementById("profesiones");
		let valor = inputProfesion.value;
		let esCorrecto = true;
		let listaErrores = document.getElementById("erroresEdad");
		listaErrores.innerHTML = "";
		inputProfesion.classList.remove("inputErroneo");
		inputProfesion.classList.remove("inputCorecto");

		if (valor === "ninguna") {
        esCorrecto = false;
        inputProfesion.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: DEBES DE ELEGIR ALGUNA PROFESION";
        listaErrores.appendChild(divError);
    }



    	if (esCorrecto) {
        inputProfesion.classList.add("inputCorrecto");
    	}else{
        inputProfesion.classList.add("inputErroneo");
    	}
    	return esCorrecto;

		}

document.addEventListener("DOMContenetLoaded",function(){
	let input = document.getElementById("aceptar");
	input.addEventListener("click",validarAceptar);
})

function validarAceptar(){
		let inputAceptar = document.getElementById("aceptar"); 
		let valor = inputAceptar.checked;
		let esCorrecto = true;
		let listaErrores = document.getElementById("erroresAceptar");
		listaErrores.innerHTML = "";
		inputAceptar.classList.remove("inputErroneo");
		inputAceptar.classList.remove("inputCorecto");

		if (valor === false) {
        esCorrecto = false;
        inputAceptar.classList.add("inputErroneo");
        let divError = document.createElement("div");
        divError.innerHTML = "MMD DICE: DEBES ACEPTAR LAS COOKIES";
        listaErrores.appendChild(divError);
    	}

    	if (esCorrecto) {
        inputAceptar.classList.add("inputCorrecto");
    	}else{
        inputAceptar.classList.add("inputErroneo");
    	}
    	return esCorrecto;
	}
//Enviar
document.addEventListener("DOMContentLoaded", function(){
    let input = document.getElementById("Formulario");
    input.addEventListener("submit", añadirUsuario);
})

function añadirUsuario(event) {
    event.preventDefault();
    let validarFormulario = false;
    let valorNombre = validarNombre();
    let valorApellidos = validarApellidos();
    let valorEdad = validarEdad();
    let valorEmail = validarEmail();
    let valorProfesion = validarProfesion();
    let valorAceptar = validarAceptar();


    if ((valorNombre === true)&&(valorApellidos === true)&&(valorEdad === true)
        &&(valorEmail === true)&&(valorProfesion === true)&&(valorAceptar === true)) {
        validarFormulario = true;
        alert("Usuario creado correctamente");

    }else{
        alert("MMD DICE: No se ha podido crear el usuario correctamente");
    }
    if(validarFormulario === true){

        let usuarios = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value.trim();
        let email = document.getElementById("email").value;
        let profesion = document.getElementById("profesiones").value;
        usuarios.nombre = nombre;
        usuarios.apellidos = apellidos;
        usuarios.email = email;
        usuarios.profesion = profesion;
        usuarios.edad = edad;

        listadoUsuarios.push(usuarios);
        let divlistaUsuarios = document.getElementById("result");
        divlistaUsuarios.innerHTML = "";
        let ulUsuarios = document.createElement("ul");
        for (let usuarios of listadoUsuarios) {
            let liusuario = document.createElement("li");
            liusuario.innerHTML = "Nombre: "+usuarios.nombre+"; Apellidos: "
            +usuarios.apellidos+"; Email: "+usuarios.email+"; Edad: "+usuarios.edad+"; Profesion: "+usuarios.profesion;
            ulUsuarios.appendChild(liusuario);
        }
        let h2 = document.createElement("h2");
        h2.innerHTML = "Usuario";
        divlistaUsuarios.appendChild(h2);
        divlistaUsuarios.appendChild(ulUsuarios);
    }

}

