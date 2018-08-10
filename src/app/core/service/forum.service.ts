import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryModel} from '../components/categories/category.model';
import {PostsModel} from '../components/posts/posts.model';
import {PostModel} from '../components/post/post.model';
import {ICommentModel} from '../components/comment/comment.model';

@Injectable({providedIn: 'root'})
export class ForumService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('/api/forum');
  }

  getPosts(categoryId: number): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`/api/forum/${categoryId}`);
  }

  getPost(categoryId: number, postId: number): Observable<PostModel> {
    return this.http.get<PostModel>(`/api/forum/${categoryId}/${postId}`);
  }

  postComment(categoryId: number, postId: number, comment: ICommentModel): Observable<ICommentModel> {
    const headers = new HttpHeaders().append('Authorization', 'Bearer symbol')
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ICommentModel>(`/api/forum/${categoryId}/${postId}/comments`, comment, {headers});
  }
}
