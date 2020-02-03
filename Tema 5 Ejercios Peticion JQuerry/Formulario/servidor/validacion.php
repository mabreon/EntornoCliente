<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$nombre)) {
            $errores[] = "El nombre debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarTipo($tipo,$nombre){
    $errores = array();
    if($tipo === "") {
    $errores[] = "El tipo esta vacio";
    }else{
        if ($tipo === $nombre) {
            $errores[] = "El tipo es igual que el nombre";
        }
    }
    return $errores;
}

function validarTamanio($tamanio){
    $errores = array();
    if($tamanio === "") {
    $errores[] = "El tamaño esta vacio";
    }
    return $errores;
}

function validarDescripcion($descripcion){
    $errores = array();
    if($descripcion === "") {
    $errores[] = "La descripcion esta vacia";
    }
    return $errores;
}
//Problema con la validacion de terminos se activa cuando esta activado en lugar de vacio probado con off, on , value 1 y 0.
function validarTerminos($terminos){
    $errores = array();
    if($terminos !== "1") {
        $errores[] = "Acepte los terminos y condiciones";
    }
    return $errores;
}