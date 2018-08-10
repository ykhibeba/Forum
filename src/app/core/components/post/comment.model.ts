import {BasicModel} from '../../../shared/model/basic.model';

export interface CommentModel extends BasicModel {
  datetime: string;
  name: string;
  body: string;
}
