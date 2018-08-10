import {BasicModel} from '../../../shared/model/basic.model';

export interface ICommentModel extends BasicModel {
  datetime: string;
  name: string;
  body: string;
}

export class CommentModel implements ICommentModel {
  id: number;
  datetime: string;
  name: string;
  body: string;

  constructor(id: number, body: string) {
    this.id = id;
    this.body = body;
  }
}
