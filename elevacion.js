//ejercicio 1

var hello = 'world';
console.log(hello);

//el console.log imprimira world

//ejercicio 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//el console.log imprimira magnet

//ejercicio 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// el console log dentro de la funcion no se imprimira porque no se esta ejecutado la funcion
//el segundo console log imprimira 'super cool'

//ejercicio 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// todo funcionara correctamente y no hay problema con que se llame antes a la funcion.


// ejercicio 5


// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


// mean() deberia llamarse despues de declarar la funcion y no antes

console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
mean();

// ejercicio 6

console.log(genre); 
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// el console log de la linea 78 saldra undefined porque esta antes de que se declare la variable 
// la funcion rewind se ejecutara sin ningun problema


// ejercicio 7 

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// todo esta ordenado el console.log fuera de la funcion dara de resultado 'san jose'
// y el console log dentro de la funcion dara "seattle" y el segundo "burbank" por la reescritura de la variable dojo(al declarase por primera no hace falta poner var en la linea 86)
//el console log fuera de la funcion vuelve a ser "san jose"


//ejercicio 8 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.status = "closed for now";
    }
    return dojo;
}


//primero falla el segundo console log porque se esta queriendo sobreescribir el dato constante "dojo"
//se soluciona en la linea 119, primero agregando el dato "status" al objeto "dojo" y automaticamente se soluciona imprimiendo "{ name: 'Berkeley', students: 0, status: 'closed for now' }"
