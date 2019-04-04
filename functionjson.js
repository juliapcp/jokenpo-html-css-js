const a = {
    nome: 'Marina',
    idade: 16,
    fala: function() {
        return `${'Ola meu nome é '}${this.nome}${' e tenho '}${this.idade}${' anos.'}`;
    }
}

console.log(a.fala()); // Olá meu nome é Marina e tenho 16 anos

const b = {
    nome: 'Silvio',
    idade: 16,
    fala: function () {
        return `${'Ola meu nome é '}${this.nome}${' e tenho '}${this.idade}${' anos.'}`;
    }
}
console.log(c.fala()); // Olá meu nome é Silvio e tenho 16 anos

// podemos, então criar uma função que faça isso com todos os alunos, dentro de um objeto

const alunos = {

}