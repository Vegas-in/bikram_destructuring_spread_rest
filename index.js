//RESUELVE LOS EJERCICIOS AQUÍ

//EJERCICIO 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [ ,ana, ] = empleados;

//EJERCICIO 2
const [{email}, , ] = empleados
const emailLuis = email


//EJERCICIO 3
const { a = 5, b = 3 } = { a: 3, b: 5 };


//EJERCICIO 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {g ,today, u} = HIGH_TEMPERATURES;
const maximaHoy = today;
const {h ,j ,tomorrow} = HIGH_TEMPERATURES;
const maximaManana = tomorrow;


//EJERCICIO 5
function sumEveryOther(...rest){
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
}


//EJERCICIO 6
function addOnlyNums(...rest){
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
      if(typeof rest[i] == "number"){
        total += rest[i];
      }
    }
    return total;
}


//EJERCICIO 7
function countTheArgs(...rest) {
    return rest.length
}


//EJERCICIO 8
function combineTwoArrays(array1,array2) {
    return [...array1,...array2]
}


//EJERCICIO 9
function onlyUniques(...rest) {
    let result = []
    for (let i = 0; i < rest.length; i++) {
        if (result.includes(rest[i]) == false) {
            result.push(rest[i])
        }
        
    }
    return result
}


//EJERCICIO 10
function combineAllArrays(x,y,...z) {
    let array3 = x.concat(y);
    return arrayFinal = array3.concat(...z)
}


//EJERCICIO 11

function sumAndSquare(...rest) {
    return rest.map(num => num**2)
               .reduce((accumulator, currentValue) => accumulator + currentValue)
}