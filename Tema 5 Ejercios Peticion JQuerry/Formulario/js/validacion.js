function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) { }
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}
//Creamos un funcion para validar cada parte del formulario y que se muestre si acorrue algun error 

function validarNombre() {
    let nombreInput = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarTipo() {
    let inputtipo = $("#tipo").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#tipo");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { tipo: inputtipo, nombre: inputnombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.tipo);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarTamanio() {
    let inputtamanio = $("#tamanio").val();
    let Input = $("#tamanio");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { tamanio: inputtamanio },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.tamanio);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarDescripcion() {

    let inputdescripcion = $("#descripcion").val();
    let Input = $("#descripcion");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { descripcion: inputdescripcion },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.descripcion);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function validarTerminos() {
    let inputterminos = $("#terminos:checked").val();
    let Input = $("#terminos")
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { terminos: inputterminos },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.terminos);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



//En esta funcion validaremos el formulario por completo

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputnombre = $("#nombre");
    let inputtipo = $("#tipo");
    let inputtamanio = $("#tamanio");
    let inputdescripcion = $("#descripcion");
    let inputterminos = $("#terminos:checked");
    $.ajax({
        url: "./servidor/validadorAjax.php",
        data: { nombre: inputnombre.val(), tipo: inputtipo.val(), tamanio: inputtamanio.val(), descripcion: inputdescripcion.val(), terminos: inputterminos.val() },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputnombre, text.nombre);
            gestionarErrores(inputtipo, text.tipo);

            gestionarErrores(inputtamanio, text.tamanio);
            gestionarErrores(inputdescripcion, text.descripcion);

            gestionarErrores(inputterminos, text.terminos);

            if (gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputtipo, text.tipo) === false &&
                gestionarErrores(inputtamanio, text.tamanio) === false && gestionarErrores(inputdescripcion, text.descripcion) === false &&
                gestionarErrores(inputterminos, text.terminos) === false) {
                $.ajax({
                    url: "./servidor/insertarDatos.php",
                    data: { nombre: inputnombre.val(), tipo: inputtipo.val(), tamanio: inputtamanio.val(), descripcion: inputdescripcion.val(), terminos: inputterminos.val() },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha creado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}