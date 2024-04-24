<?php
// Se utiliza para llamar al archivo que contine la conexion a la base de datos
require 'conexion.php';

// Validamos que el formulario y que el boton registro haya sido presionado
if(isset($_POST['registro'])) {

// Obtener los valores enviados por el formulario
$usuario = $_POST['nombre_user'];
$contrasena = $_POST['contrasena_user'];

// Insertamos los datos en la base de datos
$sql = "INSERT INTO usuarios (Usuario, Clave) VALUES ('$usuario', '$contrasena')";
$resultado = mysqli_query($conexion,$sql);
/*
	if($resultado) {
		// correcta
		echo "¡Se insertaron los datos correctamente!";
	} else {
		//  fallida
		echo "¡No se puede insertar la informacion!"."<br>";
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}
    */
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/publicaciones/publicaciones.css">
    <title>Registro</title>
</head>
<body>
    <center>    
        <h1>SE PUBLICO CORRECTAMENTE</h1>
        
        <ul class="menu">
            <li><a href="/index/index.html">IR MENU INICIAL</a></li>
        </ul>
    </center>
</body>
</html>
