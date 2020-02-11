
// console

/**
 * Comentario en bloque
 */
console.log("Hola Mundo")
console.info("Info")
console.error("Error")
console.warn("Alerta")

let nombre = "santiago"
let apellido = "urrego"
const edad = 50
var color = "blanco"
let altura 
let esta_vivo = true

let nombre_completo1='Nombre: "asd"' + nombre +' ' + apellido
let nombre_completo2=`Nombre: 'asd' ${nombre}  ${apellido}`
let nombre_completo3='Nombre: '
nombre_completo3+= " asd '' "
nombre_completo3+= `${nombre}  ${apellido}`

console.log('nombre_completo1', nombre_completo1);
console.log('nombre_completo', nombre_completo2);

if (edad > 49) {
    let nombre = "Otro nombre"
    var color = "otro color"
    console.log("Dentro de if", nombre, color);  
}

console.log(nombre, color);

if (altura==undefined) {
    console.log('Primera validación');

}
altura=1.0
// altura=null
// altura=null
if (altura===1.0) {
    console.log('ENTRO: Segunda validación');
}else{
    console.log('NO ENTRO: Segunda validación', altura);
}

let num1=parseInt( '1')
let num2=parseInt(true)
console.log(num1+num2);
