import { randomUUID } from "crypto";
import { comments } from "../database/comments";
import { products } from "../database/products";

export class Product {
  private _id: string;

  constructor(private name: string, private value: number) {
    this._id = randomUUID();
    products.push(this);
  }

  get id(): string {
    return this._id;
  }

  show(): void {
    console.log(`Produto: ${this.name}, Valor: ${this.value}`);
  }

  showWithComments(): void {
    this.show();
    const result = comments.filter((comment) => comment.productId === this._id);
    result.forEach((comment) => comment.show());
  }
}
