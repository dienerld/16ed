import { randomUUID } from "node:crypto";
import { Product } from "./Products";
import { Comment } from "./Comment";
import { users } from "../database/users";

/*
  Em TypeScript, tanto private quanto # são usados para declarar campos privados em uma classe. No entanto, eles têm diferenças significativas:

  private: É uma palavra-chave TypeScript que torna um membro inacessível de fora da classe. No entanto, TypeScript é um superconjunto de JavaScript, e JavaScript não tem o conceito de campos privados. Portanto, quando o código TypeScript é transpilado para JavaScript, os campos privados se tornam campos públicos normais. Isso significa que, embora o TypeScript impeça o acesso a campos privados durante a fase de compilação, esses campos ainda são acessíveis em tempo de execução quando o código é executado como JavaScript.

  #: É uma sintaxe JavaScript para campos privados. Campos privados declarados com # são verdadeiramente privados e não podem ser acessados ou alterados de fora da classe, nem mesmo em tempo de execução. Isso fornece um nível mais forte de encapsulamento.

  Em resumo, se você precisa de um campo privado que seja verdadeiramente privado em tempo de execução, você deve usar #. Se você só precisa de verificação de privacidade em tempo de compilação e está bem com o campo sendo acessível em tempo de execução, você pode usar private.
*/

export class User {
  #id: string;
  #name: string;
  #username: string;
  #email: string;
  #cart: Product[];

  constructor(name: string, username: string, email: string) {
    this.#id = randomUUID();
    this.#cart = [];
    this.#name = name;
    this.#username = username;
    this.#email = email;
    users.push(this);
  }

  get name(): string {
    return this.#name;
  }

  set name(name: string) {
    this.#name = name;
  }

  addToCart(product: Product): void {
    this.#cart.push(product);
    console.log(this.#cart);
  }

  removeFromCart(product: Product): void {
    const index = this.#cart.indexOf(product);
    if (index != -1) {
      this.#cart.splice(index, 1);
    }
  }

  showProducts(): void {
    this.#cart.forEach((product) => {
      product.show();
    });
  }

  addComment(content: string, product: Product): void {
    new Comment(content, this, product.id);
    console.log("Comentário adicionado!");
  }

  /*
    O método toJSON é um método especial que é automaticamente chamado quando você tenta converter um objeto em uma string JSON usando JSON.stringify.

    No código que você forneceu, o método toJSON está sendo usado para controlar como os objetos da classe User são serializados para JSON. Ele retorna um objeto que contém apenas os campos #name, #username e #email do usuário. Isso significa que quando você chama JSON.stringify em um objeto User, apenas esses campos serão incluídos na string JSON resultante.

    Isso pode ser útil por várias razões. Por exemplo, você pode querer ocultar certos detalhes sensíveis ou irrelevantes quando serializa um objeto para JSON. Ou você pode querer transformar os dados de alguma maneira antes de serializá-los.
*/

  toJSON() {
    return {
      name: this.#name,
      username: this.#username,
      email: this.#email,
    };
  }
}
