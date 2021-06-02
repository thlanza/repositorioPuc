let usuario = {
    nome: 'Thiago',
    idade: 38,
    filhos: [
        { nome: 'Clara', idade: 1}
    ],
    casado: true
}
localStorage.setItem("usuario", JSON.stringify(usuario));

let strUsuario = localStorage.getItem('usuario');
console.log(strUsuario);