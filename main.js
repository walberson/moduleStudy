/* import sigiloCartao from "./functions.js";
console.log(sigiloCartao()); */
/* import * as user from "./functions.js"; */

/* let usuario = user.nome
usuario = 'ciclano'
console.log(usuario)
 */
/* const {usuario} = require('./functions.js')
console.log(usuario) */

const valores = [
  {
    nome: "ciclano",
    idade: 20,
  },
  {
    nome: "fulano",
    idade: 30,
  },
  {
    nome: "beltrano",
    idade: 40,
  },
];

const reduzido = valores.reduce((acumulador, current, index, array) => {
  return acumulador + current.idade;
}, 0);
console.log(reduzido);