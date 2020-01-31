<?php

header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');


$conn = mysqli_connect( 'localhost', 'root', '', 'todomuebles');
$sql = "SELECT id,nombre,tipo,tamanio FROM muebles";
$result = mysqli_query($conn, $sql);

echo '<?xml version="1.0" encoding="utf-8"?>
<lista>';
while($resultado = mysqli_fetch_array($result))
 {
    echo "<mueble>";
    echo "<id>" . $resultado['id'] . "</id>";
    echo "<nombre>" . $resultado['nombre'] . "</nombre>";
    echo "<tipo>" . $resultado['tipo'] . "</tipo>";
    echo "<tamanio>" . $resultado['tamanio'] . "</tamanio>";
    echo "</mueble>";
 }
echo "</lista>";