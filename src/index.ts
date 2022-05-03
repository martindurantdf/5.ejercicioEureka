/*
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa
*/

const PALABRA_CLAVE: string = "eureka";
let contador: number = 1;

let palabraIngresada: string = "";
palabraIngresada = String(prompt("Ingrese la palabra clave: "));

while (palabraIngresada !== PALABRA_CLAVE && contador < 3) {
  palabraIngresada = String(prompt("Ingrese la palabra clave: "));
  contador++;
}
if (palabraIngresada === PALABRA_CLAVE) {
  console.log("La palabra clave es correcta");
} else if (contador === 3) {
  console.log("Ha excedido la cantidad máxima de intentos");
}
