function tratarResultadoXML(textoXMLRespuesta) {
    let datos = textoXMLRespuesta;

    let mueble = datos.documentElement.getElementsByTagName("mueble");

    //La variable salida es para imprimir la tabla.
    let salida = "<table border='1'><tr><th>ID</th><th>NOMBRE</th><th>TIPO</th><th>TAMAÑO</th></tr>";

    // Hacemos un bucle para que recorra todos los muebles.
    for (let i = 0; i < mueble.length; i++) {
        salida += "<tr>";

        let id = mueble[i].getElementsByTagName("id");
        salida += "<td>" + id[0].firstChild.nodeValue + "</td>";

        let nombre = mueble[i].getElementsByTagName("nombre");
        salida += "<td>" + nombre[0].firstChild.nodeValue + "</td>";

        let tipo = mueble[i].getElementsByTagName("tipo");
        salida += "<td>" + tipo[0].firstChild.nodeValue + "</td>";


        let tamanio = mueble[i].getElementsByTagName("tamanio");
        salida += "<td>" + tamanio[0].firstChild.nodeValue + "</td>";

        salida += "</tr>";
    }

    salida += "</table>";

    
    document.getElementById("resultadoAsincronoXML").innerHTML = salida;
}

function funcionAjaxSincronaXML() {
    llamadaAsincrona2("datos.php", "GET", null, "XML", tratarResultadoXML);
}

function objetoXHR() {
    if (window.XMLHttpRequest) { // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // El navegador no implementa la interfaz XHR de forma nativa
        // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {} //Capturamos el error,
        }
    }

    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function llamadaSincrona(elementoDOM, url) {
    if (miXHR) {

        //Si existe el objeto miXHR
        miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);

        //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV

        elementoDOM.appendChild(document.createTextNode(tratarResultadoXML(miXHR.responseText)));

    }
}

function funcionAjaxSincrona() {

    miXHR = new objetoXHR();

 
    llamadaSincrona(document.getElementById("resultadoSincronoXML"), "datos.php");
}

function llamadaAsincrona(url) {
    if (miXHR) {
        alert("Comenzamos la peticion AJAX");
        document.getElementById('estado').innerHTML = "";
        document.getElementById('resultadoAsincrono').innerHTML = "";

        //Si existe el objeto miXHR
        miXHR.open('GET', url, true); //Abrimos la url, false=ASINCRONA

        miXHR.onreadystatechange = comprobarEstadoPeticion;

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);
    }
}








function ejecutarFuncionAjax(tipoRespuesta, funcion) {
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch (tipoRespuesta) {
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default:
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);


            document.getElementById("spinner").style = "display:none";
        }
    }
}


function llamadaAsincrona2(url, tipo, datos, tipoRespuesta, funcionCallback) {
    miXHR = new objetoXHR();
    if (miXHR) {
        document.getElementById("spinner").style = "display:block";

        miXHR.open(tipo, url, false);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta, funcionCallback);


        miXHR.send(datos);
    }
}