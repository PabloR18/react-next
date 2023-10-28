export default class Produto {
    #id
    #nome
    #preco

    // Construtor em JS.

    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    // Gets para acessar os atributos;

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get preco() {
        return this.#preco
    }
}