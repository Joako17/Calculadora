//Esto agrega a la pantalla el boton de la calculadora q toquemos

function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value
  }
  
  //Esta accion vacia la pantalla
function limpiarPantalla(){
  document.getElementById('pantalla').value = ''
}
  // Esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
  const valorPantalla = document.getElementById('pantalla').value
  const resultado = eval(valorPantalla)
  document.getElementById('pantalla').value = resultado
}