class heroClass {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let attackType;
        switch(this.tipo) {
            case "mago":
                attackType = "magia";
                break;
            case "ninja":
                attackType = "shuriken";
                break;
            case "monge":
                attackType = "artes marciais";
                break;
            case "guerreiro":
                attackType = "espada";
                break;
        }
        if (this.tipo != "mago" && this.tipo != "guerreiro" && this.tipo != "ninja" && this.tipo != "monge") {
            console.log("Classe não identificada. Por favor selecionar mago, ninja, monge ou guerreiro");
        } else {
            console.log("\nO Herói " + this.nome + " de " + this.idade + " anos realizou uma ação!");
            console.log("O seu " + this.tipo + " atacou usando " + attackType + "\n");
        }
    }
}

const hero = new heroClass("Joseph", 20, "monge");
hero.atacar();