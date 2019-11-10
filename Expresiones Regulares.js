//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){

	url = url.trim();
	let resultado = false;
	url = url.split("?", url.length);
	if ((url[0].startsWith("http://www.") || url[0].startsWith("https://www.")) && (url[0].endsWith(".com") ||
	 url[0].endsWith(".es")) && url[1].split("&", url[1].length).length >=2){
		resultado = true;
	}
		return = resultado;
 }

//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password
function esValidaPassword(password){

	password = password.trim();
	let resultado = false;
	let letras = 0;
	let num = 0;
	let caracter = 0;
	let mayus = 0;

	for (let i = 0; i<password.length; i <= 0; i++) {

		if(password[i].match(/[A-Z/a-z/ñÑ]+/)){
			letras++;
		}
		if(password[i].match(/[0-9]+/)){
			num++;
		}
		if(password[i].match(/[!/?/-/$/_/]+/)){
			caracter++;
		}
		if(password[i].match(/[A-Z/Ñ]+/)){
			mayus++;
		}
		
	}
	if(letras >= 4 && num >= 4 && caracter >= 1 && mayus >= 1){
		resultado = true;
	
	}

	return resultado;
}

//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto){

	texto = texto.trim();
	resultado = " ";

	for (var i = 0; i < texto.length; i++) {

		if(texto[i].match(/[A-Z/a-z/0-9/ñÑ]+/)){
			resultado += texto[i];
		}

	}
	return resultado;
}
