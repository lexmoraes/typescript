class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade =;
  }

  saudar() {
    return 'Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.'
  }
}

const pessoa = new Pessoa('João', 25);
console.log(pessoa.saudar());
