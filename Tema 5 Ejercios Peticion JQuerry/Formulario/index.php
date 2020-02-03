<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Ejemplo Ajax</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" >
    
    <!-- Bootstrap css-->
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossorigin="anonymous">


    <!-- JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
        ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous">

    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
            crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/validacion.js" defer></script>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<div class="container">
    <div class="row">
        <form id="formulario" onsubmit ="validarFormulario()">
        <div id="spinner" class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
        </div>
            
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" onchange="validarNombre()">
                <div class="error bg-danger"></div>
              

                <label for="tipo">Tipo</label>
                <input type="text" class="form-control" id="tipo" onchange="validarTipo()">
                <div class="error bg-danger"></div>


                <label for="tamanio">Tamaño</label>
                <select id="tamanio" class="form-control" onchange="validarTamanio()">
                    <option value=""> </option>
                    <option value="grande">Grande</option>
                    <option value="medio">Medio</option>
                    <option value="pequenio">Pequeño</option>
                </select>
                <div class="error bg-danger"></div>
            

                <label for="descripcion">Descripcion</label>
                <select id="descripcion" class="form-control" onchange="validarDescripcion()">
                    <option value=""> </option>
                    <option value="bueno">Bueno</option>
                    <option value="malo">Malo</option>
                    <option value="excelente">Excelente</option>
                </select>
                <div class="error bg-danger"></div>
            

                <label class="form-check-label"> Terminos y condiciones </label>
                <input  type="checkbox" id="terminos" value="1"  onchange="validarTerminos()">
                <div class="error bg-danger"></div>

            <button type="submit" class="btn btn-primary">Enviar</button>

            <div id="resultado"></div>
        </form>
    </div>
</div>


<div class="modal fade" id="modal" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            
                            <h5 class="modal-title" id="exampleModalLabel">Creando</h5>
                        </div>

                        <div class="modal-body">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated w-100 bg-info" role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</body>
</html>