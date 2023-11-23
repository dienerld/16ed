import { randomUUID } from "crypto";
import { User } from "./User";
import { comments } from "../database/comments";

export class Comment {
  private _id: string;
  constructor(
    private content: string,
    private user: User,
    private _productId: string
  ) {
    this._id = randomUUID();
    comments.push(this);
  }

  get id(): string {
    return this._id;
  }

  get productId(): string {
    return this._productId;
  }

  show(): void {
    console.log(`Usuário: ${this.user.name} | Comentário: ${this.content}`);
  }
}
