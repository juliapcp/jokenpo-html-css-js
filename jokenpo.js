const jokenpo = {
    maoJogadorUm: null,
    maoJogadorDois: null,
    maos: {
        pedra: {
            vence: {
                tesoura: 'quebra',
                lagarto: 'esmaga'
            }
        },
        papel: {
            vence: {
                pedra: 'embrulha',
                spock: 'refuta'
            }
        },
        tesoura: {
            vence: {
                papel: 'corta',
                lagarto: 'decapita'
            }
        },
        lagarto: {
            vence: {
                papel: 'come',
                spock: 'envenena'
            }
        },
        spock: {
            vence: {
                tesoura: 'quebra',
                pedra: 'vaporiza'
            }
        }
    },
    jogar: function() {
        if (this.maoJogadorUm === null) {
            // lançar excessao no console
            throw new Error('Jogador um não escolheu um mão');
        }
        if (this.maoJogadorDois === null) {
            throw new Error('Jogador dois não escolheu um mão');
        }
        if (this.maoJogadorUm === this.maoJogadorDois) {
            return {
                vencedor: 0,
                texto: 'Empatou'
            };
        }
        const mao1 = this.maoJogadorUm;
        const mao2 = this.maoJogadorDois;
        if (jokenpo['maos'][mao1]['vence'][mao2]) { // se for preenchido entra
            return {
                vencedor: 1,
                texto: `${mao1} ${jokenpo['maos'][mao1]['vence'][mao2]}
                ${mao2}`
            };
        } else { // se nao for o primeiro é o segundo
            return {
                vencedor: 1,
                texto: `${mao2} ${jokenpo[
                    'maos'][mao2]['vence'][mao1]}${mao1}`
            };
        }
    }
};

const maos = {
    pedra: 'pedra',
    papel: 'papel',
    tesoura: 'tesoura',
    lagarto: 'lagarto',
    spock: 'spock'
};

console.log(jokenpo);
console.log(maos);
console.log(jokenpo.maos.lagarto.vence.papel); // come


const mao1 = 'spock';
const mao2 = 'papel';

console.log(jokenpo['maos'][mao1]['vence'][mao2]);
// se retornar diferente de undefined a mao 1 vence da mao 2
console.log(jokenpo['maos'][mao2]['vence'][mao1]);
// se retornar diferente de undefined a mao 2 vence da mao 1

for (const m of Object.keys(jokenpo.maos)) {
    // Object.keys cria um vetor com as chaves de determinado obj
    // console.log(m);
    for (const v of Object.keys(jokenpo.maos[m].vence)) {
        console.log(m, jokenpo.maos[m].vence[v], v);
    }
}
