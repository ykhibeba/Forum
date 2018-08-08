import {BasicModel} from '../../../shared/model/basic.model';

export interface PostsModel extends BasicModel {
  title: string;
  name: string;
  datetime: string;
}
