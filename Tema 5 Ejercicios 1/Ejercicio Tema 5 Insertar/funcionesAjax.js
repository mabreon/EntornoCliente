document.addEventListener("DOMContentLoaded", function(){
    let formularioCrearDatos = document.getElementById("formularioCrearDatos");
    formularioCrearDatos.addEventListener("submit", function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})

function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function comprobarEstadoPeticion() {
    switch (this.readyState) {
        case 4:
            if (this.status == 200) {
                let divRespuesta = document.getElementById("resultado");
                divRespuesta.innerHTML = this.responseText;
                document.getElementById("resultado").innerHTML = "<p>Se ha creado correctamente</p>";
            } else {}
            break;
    }
}

function realizarPeticionAsincrona() {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let tamanio = document.getElementById("tamanio").value;
    let descripcion = document.getElementById("descripcion").value;

    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("POST", "insertarDatos.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;

    let datos = "nombre="+nombre+"&tipo="+tipo+"&tamanio="+tamanio+"&descripcion="+descripcion;
    miXHR.send(datos);
    document.getElementById("spinner").style = "display:none";

}