/*const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

console.log(h1)
console.log(p)
console.log(parrafito)
console.log(pid)
console.log(input)

h1.innerHTML = 'mejorando los titulos'
//console.log(h1.getAttribute('class'));

h1.setAttribute('class','Esto esta muy bueno')
h1.classList.add
input.value = 'Mejor no diga nada'

const img = document.createElement('img');
img.setAttribute('src','/imagenSample.webp');
pid.append(img)
*/
/*const h1 = document.querySelector('h1');
const btnCalculo = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

btnCalculo.addEventListener('click',fnCalcular)
//btnCalcular.addEventListener('click', fnCalcular),

function fnCalcular(){
    console.log(inputUno.value);
    console.log(inputDos);
    const suma = parseInt(inputUno.value) + parseInt(inputDos.value);
    pResult.innerText = "Resultado : " + suma
    //console.log('Esta funcionando el boton');
}*/
const formulario = document.querySelector('#formUno');
const inputUno = document.querySelector('#calculoUno');
const inputDos = document.querySelector('#calculoDos');

formulario.addEventListener('submit',fnCalcular)
function fnCalcular(event){
    
    console.log({event})
    event.preventDefault()
    //console.log(inputUno.value);
    //console.log(inputDos);
    const suma = parseInt(inputUno.value) + parseInt(inputDos.value);
    pResult.innerText = "Resultado : " + suma
}