import {BasicModel} from '../../../shared/model/basic.model';
import {CommentModel} from './comment.model';

export interface PostModel extends CommentModel {
  title: string;
  comments: CommentModel[];
}

export class PostModelClass implements PostModel {
  id: number;
  title: string;
  datetime: string;
  name: string;
  body: string;
  comments: {
    id: number;
    datetime: string;
    name: string;
    body: string;
  }[];
}

