import {BasicModel} from '../../../shared/model/basic.model';

export interface CommentModel extends BasicModel {
  datetime: string;
  name: string;
  body: string;
}

export class CommentModelClass implements CommentModel {
  id: number;
  datetime: string;
  name: string;

  constructor(public body: string) {
  }
}
