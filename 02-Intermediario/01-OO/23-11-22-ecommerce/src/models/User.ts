import { randomUUID } from "node:crypto";
import { Product } from "./Products";
import { Comment } from "./Comment";
import { users } from "../database/users";

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

  toJSON() {
    return {
      name: this.#name,
      username: this.#username,
      email: this.#email,
    };
  }
}
