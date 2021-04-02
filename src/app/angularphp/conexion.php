<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","act03");
  return $con;
}
?>