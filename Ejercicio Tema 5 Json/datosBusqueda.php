<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "todomuebles";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT id, nombre, tipo, tamanio, descripcion FROM muebles WHERE nombre LIKE '%".$_POST['nombre']."%' AND tipo LIKE '%".$_POST['tipo']."%'");
$stmt->execute();
$muebles = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($muebles);
?>