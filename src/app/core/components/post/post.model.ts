import {ICommentModel} from '../comment/comment.model';

export interface PostModel extends ICommentModel {
  title: string;
  comments: ICommentModel[];
}

export class PostModelClass implements PostModel {
  id: number;
  title: string;
  datetime: string;
  name: string;
  body: string;
  comments: ICommentModel[];
}

