//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){
	let resultado = " ";
	let frasesplit = frase.split(" ");
	for (let i = frasesplit.length - 1; i >= 0; i--) {
		let letra = frasesplit[i];
		letra = letra.toLowerCase();
		trozoPalabra = trozoPalabra.toLowerCase();
		frasesplit[i] = frasesplit[i].toLowerCase();
		if (frasesplit[i].includes(trozoPalabra) && letra[0] !== trozoPalabra && letra[letra.length-1] !== trozoPalabra) {

        resultado += frasesplit[i] + " ";
		} 
			
	}
	
return resultado;
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
	let resultado = 0;
	frase = frase.toLowerCase();
	trozoPalabra = trozoPalabra.toLowerCase();
	let a = 0;
	let b = 0;

	while(a<frase.length && b <= 1){

		if (a === 0) {
			b++;
		}

		resultado<frase.indexOf(trozoPalabra, a)?resultado += frase.indexOf(trozoPalabra, a):a=frase.length;
		a = frase.indexOf(trozoPalabra, a)+1;
	} 

return resultado;
}
 
//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
	var resultado = true;
	var letras = "GHIJKLMNÑOPQRSTUVWXYZghijklmnñopqrstuvwxyz%&=?¿!¡(@-_´+ª"

	for (var i = 0; i < letras.length; i++) {

	 	if (color[0] !== "#" || color.includes(letras[i]) || color.length === 1) {

	 		resultado = false;
	 	}
}
return resultado;
	
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(color){
 let resultado 
 color = color.split("?",color.length);
 color = color.toLowerCase();
 let numerosLetras = "qwertyuiopasdfghjklñzxcvbnm[#,.:;|/]%&)=?¿!¡(@-_´{+*";

 if ((color[0].startsWith("https://www.") || (color[0].startsWith("http://www.") && (color[0].endsWith(".com") || (color[0].endsWith(".es") && color.length ===2 && color[1].split("&",color[1].length).length >=2) {

 	if (color.includes("&&")) {

 		resultado = false;

 	}else {

 		resultado = true;
 		color[1] = color[1].split("&",color[1].length);

 		for (let i = 0; i < color[1].length; i++) {
 			
 			color[1][i] = color[1][i].split(" ",color[1][i].length);

 			for (let f = 0; f < numerosLetras.length; f++) {
 				
 				if (color[1][i][1].includes(numerosLetras[f])) {

 					resultado = false;
 				}
 			}
 		}
return resultado;
 	} 
 }












}