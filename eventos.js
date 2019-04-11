// console.log('eventos.js');

// // seletores
// const tds = document.querySelectorAll('td');
// // pega todos os elementos td do documento HTML, se não colocarmos o
// // all ele pega só o primeiro
// console.log(tds);
// const seletor = 'table:nth-of-type(2) td';
// console.log(seletor);
// for (const td of tds) { // para cada td
//     td.addEventListener('click', destacar);
//     // quando houver um click invocará a função
//     // chamamos destacar como argumento em formato de variável, sem ()
// }

// function destacar() { // as funções são atreladas à um objeto
//     // this - contexto onde a função é invocada
//     console.log(this); // mostrando o this
//     // quando clica no elemento ele chama o evento e se torna o this
// }

const seletor = 'table:nth-of-type(2)';
const table = document.querySelector(seletor); // manda pegar tal item dentro do documento HTML
table.addEventListener('click', destacar);
function destacar(e) { // "e" de evento
    // console.log(this);
    // quem especificamente foi clicado target
    // console.log(e.target.tagName);
    if (e.target.tagName === 'TD') {
        e.target.classList.toggle('destaque');
        // toggle significa alternar a classe, se a classe destaque
        // está no elemneto que clicamos (retornado por e.target)
        // ele tira, se não está ele adiciona
    }
}

