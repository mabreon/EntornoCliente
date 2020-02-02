<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 
 

$nombre=$_POST["nombre"];
$tipo=$_POST["tipo"];
$tamanio=$_POST["tamanio"];
$descripcion=$_POST["descripcion"];

// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.

$conn = mysqli_connect( 'localhost', 
                        'root', 
                        '', 
                        'todomuebles');

// INSETAMOS LOS DATOS QUE HEMOS AÑADIDO EN EL FORMULARIO. Recordar incluir siempre el id aunque este vacio ya que se auto incrementa pero tiene que estar para que el comando insert se realice

$sql =  "INSERT INTO `muebles`(`id`, `nombre`, `tipo`, `tamanio`,`descripcion`) VALUES ('', '$nombre', '$tipo', '$tamanio', '$descripcion')";
$result=mysqli_query($conn,$sql);
?>