import {IBasicModel} from '../../../shared/model/basic.model';

export interface ITreeBasicModel extends IBasicModel {
  title: string;
}

export interface ITreeModel extends ITreeBasicModel {
  posts: ITreeBasicModel[];
}
