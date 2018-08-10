import {CommentModel} from '../comments/comments.model';

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
  comments: CommentModel[];
}

