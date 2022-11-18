// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {    // 1 -numero de ejercicio
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {         // gato es el objeto
    nombre: nombre, //tambien puede quedar solo, ya que la **propiedad** y el nombre son iguales // nombre,
    edad: edad,      // edad,
    meow: function() {
      return 'Meow!';
    }
  };
  return gato;
}

function agregarPropiedad (objeto, property) {     // 2
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; // el uso de los bracquets es para asignar el valor null, ya que null significa 'no existe'
  return objeto;            // null: este tema viene en JSII flujos de control y operadores logicos
}

function invocarMetodo (objeto, metodo) {       // 3
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto // cadena usa los [] braquets
  // Invoca ese método // los parentesis () son para ejecutar el metodo
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();  
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {        // 4
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  // var objMisterioso = {
  //   numeroMisterioso: 4; // 5*4 = 20
  // }
  var producto = objetoMisterioso.numeroMisterioso * 5;   // necesita una variable para el resultado
          // por eso hay que declararla para poner la propiedad numeroMisterioso.
          // e igualar, a objetoMisterioso usando el punto seguido de este numeroMisterioso para que efectue el resultado
  return producto; // y retornarlo
}
// resuelto en una sola linea seria: return objetoMisterioso.numeroMisterioso * 5;
/*
objetoMisterioso {
  numeroMisterioso : x
}
*/

function eliminarPropiedad (objeto, unaPropiedad) {    // 5
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation // ojo: no usamos los : ya que en este caso es una funcion para hacer uso del metodo delete
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];

  return objeto;   // y mostrar entonces este objeto
}

function nuevoUsuario (nombre, email, password) {    // 6
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var nuevo = {
    nombre: nombre, // tambien se puede declarar solo usando: nombre, porque tienen el mismo -nombre-
    email: email,
    password: password
  };

  return nuevo;
}

function tieneEmail (usuario) {          // 7
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  //tambien se puede hacer:
  //if (usuario['email']) {
      //return true
  //}
  // return false;
  // Opcion extra: tambien puede declararse if (usuario.email) { return true;} return false;
  // Tu código:
  if(usuario['email']) {  
    return true;
  } else {
    return false;
  }
}

function tienePropiedad (objeto, propiedad) {     // 8
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string *** checa, y dado esto no necesita comillas ''
  // De lo contrario, devuelve "false" ***nota: recuerda tambien se puede dejar sin else {} solo llamando el return false;
  // Tu código:
  if(objeto[propiedad]) {
    return true;
  } else {
      return false;
}
// return objeto.hasOwnProperty(propiedad);
}

function verificarPassword (usuario, password) {    //9
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden  ***password ira entra comillas ya que esta entrando
  // De lo contrario, devuelve "false"
  // Tu código:
  //return usuario['password'] === password;
  // otra forma es if(usuario.password === password) { return true; } return false;
  if(usuario['password'] === password){
    return true;
    }
    return false;
}

function actualizarPassword (usuario, nuevaPassword) {   //10
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  console.log(usuario);
  usuario.password = nuevaPassword; // tengo una nueva pss para actualizar
  console.log(usuario);
  return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {    // 11
  // "usuario" tiene una propiedad llamada "amigos" que es un array *usuario.amigos
  // Agrega "nuevoAmigo" al final de ese array *usuario.push(nuevoAmigo);
  // Devuelve el objeto "usuario"
  // Tu código:
  // var user = {
  //   amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young', nuevoAmigo],
  // }
  usuario.amigos.push(nuevoAmigo);
  return usuario;
  console.log(usuario);
}

function pasarUsuarioAPremium (usuarios) {   // 12
  // "usuarios" es un array de objetos "usuario" *** varios con: diferentes, usuario
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  //   amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
  // posicion *  i= 0      2       3       4       5
  for(var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {    // 13
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada *** "likes" *** que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
    // var usuario = {
    //   posts: [{
    //     likes: 4
    //   }]
    // };
    // ejemplo de solucion 1:
  //var suma = 0;
  //for(var i = 0; i < usuario.posts.length; i++) {
    //suma = suma + usuario.posts[i].likes;
  //}
  //return suma;
  // Solucion 2:
  // post: [post1, post2, post3, .... postx]
// post: [post1.like = 2, post2.like = 1, post3.like = 5, .... postx]
var totalLike = 0  // 2 + 1 + 5 = 8
for (var i = 0; i< usuario.posts.length; i++){
totalLike += usuario.post[i].likes;
}
return totalLike;
}
// nota, += es abreviacion de totalLike = totalLike + usuario.post[i].likes;
//                         desde aqui: |      +=      |

function agregarMetodoCalculoDescuento (producto) {     // 14
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" 
  //("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
   // var product = {
  //   precio: 10,
  //   porcentajeDeDescuento: 5,
  //   calcularPrecioDescuento:
  // };
  // *** solucion 1:
  //producto.calcularPrecioDescuento = function() {
    //return this.precio - ( this.precio * this.porcentajeDeDescuento );
  //};
  //return producto;
// *** Solucion 2:
producto["calcularPrecioDescuento"] = function() {
  //return producto.precio - (producto.porcentajeDeDescuento * producto.precio);
  return producto.precio - producto.porcentajeDeDescuento * producto.precio;
};
return producto;
// Solucion 3:
//function calcularPrecioDescuento() {
//  return this.precio - this.porcentajeDeDescuento * this.precio;
//}
//this.calcularPrecioDescuento = calcularPrecioDescuento

}

// Y FIN :D npm test 05
//git add . para leer los cambios
//git commit -m 'clase js 4'

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
