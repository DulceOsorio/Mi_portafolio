
//  DOC document object model ->va a ser un objeto en JS , por lo tanto va a tener propiedades y comportamientos asociados -->
// Es una forma mas sencilla de una variable en JS de traer una abstraccion de mi domento de html-->
// cajon se adecua al tipo de dato
const nombre= "Dulce";
let edad="24";
// tipo de cajon

const scobydoo= {
    raza:"Gran danes",
    noPatas:4,
    puedehablar:true,
    color:"cafe con manchas"


}
// scoobyDoo.color="cafe con manchas negras"

//alert('Hola mundo')
console.log("hola mundo", nombre)
// document.write("hola mundo")

//para hacer secuencia con letras
let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Hola soy Dulce Osorio')
    .pauseFor(100)
    .deleteAll()
    .typeString('Bienvenido a mi e-portfolio')
    .pauseFor(100)
    .deleteAll()
    .typeString('Te invito a conocer más de mí')
    .pauseFor(100)
    .deleteAll()
    .start();