/* class Veiculo {
  constructor(cor, marca, ano, modelo) {
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;
  }
  buzinar() {
    return `Estou buzinando um carro ${this.cor}`
  }
}

const veiculoPronto = new Veiculo('preto', 'Volkswagen', 2019, 'Gol');
const veiculoDaPaty = new Veiculo('rosa', 'Fiat', 2019, 'Uno')
console.log(veiculoDaPaty.buzinar()); */

/* class Poligono {
    constructor(altura,largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    somarMedidas(){
        return this.altura + this.largura;
    }
}

const retangulo = new Poligono(10,20);
console.log(retangulo.somarMedidas()); */

class Atleta {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
  mudaPeso(peso) {
    return this.peso = peso;
  }
  definirCategoria() {
    if (this.idade >= 18) {
      return "Adulto";
    } else if (this.idade >= 14) {
      return "Juvenil";
    } else if (this.idade >= 9) {
      return "Infantil";
    } else {
      return "Não pode competir";
    }
  }
  faixa(numero) {
    console.log(this.mudaPeso(numero));
  }
}

let atleta1 = new Atleta("Paty", 22, 1.78, 55);
console.log(atleta1.faixa(80));
