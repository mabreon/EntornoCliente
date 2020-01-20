<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$nombre = $_POST["nombre"];
$tipo = $_POST["tipo"];
$tamanio = $_POST["tamanio"];
$descripcion = $_POST["descripcion"];

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "todomuebles";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("INSERT INTO muebles (nombre, tipo, tamanio, descripcion) VALUES ('$nombre', '$tipo', '$tamanio', '$descripcion')");
$stmt->execute();

?>