<?php
require_once "./validacion.php";

//Creamos los arrays de errores diferenciando cada uno por cada tipo de dato
$errores = array();
$errores["nombre"] = array();
$errores["tipo"] = array();
$errores["tamanio"] = array();
$errores["descripcion"] = array();
$errores["terminos"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["tipo"])){
    $errores["tipo"] = validarTipo(trim($_POST["tipo"]),trim($_POST["nombre"]));
    
}

if(isset($_POST["tamanio"])){
    $errores["tamanio"] = validarTamanio(trim($_POST["tamanio"]));
}

if(isset($_POST["descripcion"])){
    $errores["descripcion"] = validarDescripcion(trim($_POST["descripcion"]));
}

if(isset($_POST["terminos"])){
    $errores["terminos"] = validarTerminos(trim($_POST["terminos"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);