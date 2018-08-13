import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ICategoryModel} from '../components/categories/category.model';
import {IPostsModel} from '../components/posts/posts.model';
import {IPostModel} from '../components/post/post.model';
import {ICommentModel} from '../components/comment/comment.model';

@Injectable({providedIn: 'root'})
export class ForumService {

  token = 'Bearer R4bOCrptKfvRACofRB-1p1wG7CW15wS-voP5DYGZVS-lvfFMxOxJAWB03p2yAWNjJvi8cA0dyPE5VeGn2eNYRV-J2JH2eb_YBQSzzUJZkb4MbJJgUwwweEioV3HmVTR7LSfOYxLzD43M8b6wUgQjZSKkE2urJAhf2sPaaGoW0B1CYTw-7JSpIb-0OEmr1L3-REqu-1G0mJWDtk9HEeblISfQJ4LmWD-xh0R1Pq4RWS7MbAqGGAdooiClhRWriBHoaP8xhVA1UuErfibnO2YlzkLMt03Pd_ltU8wrJ7qbzbKwMmN2CWbOn5ODM9KwFdzN';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<ICategoryModel[]> {
    return this.http.get<ICategoryModel[]>('/api/forum');
  }

  getPosts(categoryId: number): Observable<IPostsModel[]> {
    return this.http.get<IPostsModel[]>(`/api/forum/${categoryId}`);
  }

  getPost(categoryId: number, postId: number): Observable<IPostModel> {
    return this.http.get<IPostModel>(`/api/forum/${categoryId}/${postId}`);
  }

  postComment(categoryId: number, postId: number, comment: ICommentModel): Observable<ICommentModel> {
    const headers = new HttpHeaders().append('Authorization', this.token)
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ICommentModel>(`/api/forum/${categoryId}/${postId}/comments`, comment, {headers});
  }

  putComment(categoryId: number, postId: number, comment: ICommentModel): Observable<ICommentModel> {
    const headers = new HttpHeaders().append('Authorization', this.token)
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<ICommentModel>(`/api/forum/${categoryId}/${postId}/${comment.id}`, comment, {headers});
  }

  deleteComment(categoryId: number, postId: number, commentId: number): Observable<any> {
    const headers = new HttpHeaders().append('Authorization', this.token)
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`/api/forum/${categoryId}/${postId}/${commentId}/delete`, {headers});
  }
}
