 class heroi{
    constructor(nome,idade,classe){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar(){
        if(this.classe === "guerreiro"){
            this.ataque = "Espada"
            let ataque = this.ataque;
            return `O(a) ${this.classe} ${this.nome} atacou usando ${ataque}`
            } else if(this.classe === "arqueiro"){
                this.ataque = "Arco e flecha"
                let ataque = this.ataque;
                return `O(a) ${this.classe} ${this.nome} atacou usando ${ataque}`
                } else if(this.classe === "mago"){
                    this.ataque = "Magia"
                    let ataque = this.ataque;
                    return `O(a) ${this.classe} ${this.nome} atacou usando ${ataque}`
                        } else if(this.classe === "assassino"){
                            this.ataque = "Adagas";
                            let ataque = this.ataque;
                            return `O(a) ${this.classe} ${this.nome} atacou usando ${ataque}`    
                            } else if(this.classe == "" || this.classe == null){
                                return `classe de herói não definida!`
                    }
    }
 }


let heroi1 = new heroi("Dario",25,"guerreiro");
let heroi2 = new heroi("Ana",22,"mago");
let heroi3 = new heroi("Carlos",30,"assassino");
let heroi4 = new heroi("Beatriz",28,"arqueiro");
let heroi5 = new heroi("Pedro",35);

console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());
console.log(heroi5.atacar());
