import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterceptorSkipHeader} from '../config/auth.interceptor';

import {IUserModel} from '../components/user/user.model';
import {IRegistrationModel} from '../components/user/registration/registartion.model';
import {ITokenModel} from '../components/user/login/token.model';
import {ITreeModel} from '../components/tree/tree.model';
import {ICategoryModel} from '../components/categories/category.model';
import {IPostsModel} from '../components/posts/posts.model';
import {IPostModel} from '../components/post/post.model';
import {ICommentModel} from '../components/comment/comment.model';

@Injectable({providedIn: 'root'})
export class ForumService {

  constructor(private http: HttpClient) {
  }

  postUser(user: IRegistrationModel): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('api/user/register', user, {headers});
  }

  postToken(user): Observable<ITokenModel> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '').append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ITokenModel>('token', user, {headers});
  }

  getUserInfo(): Observable<IUserModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<IUserModel>('/api/userinfo', {headers});
  }

  getTree(): Observable<ITreeModel[]> {
    return this.http.get<ITreeModel[]>('/api/forum/titles');
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

  postPost(categoryId: number, post: IPostModel): Observable<IPostModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<IPostModel>(`/api/forum/${categoryId}/post`, post, {headers});
  }

  deletePost(categoryId: number, postId: number): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`/api/forum/${categoryId}/${postId}/delete`, {headers});
  }

  postComment(categoryId: number, postId: number, comment: ICommentModel): Observable<ICommentModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ICommentModel>(`/api/forum/${categoryId}/${postId}/comments`, comment, {headers});
  }

  putComment(categoryId: number, postId: number, comment: ICommentModel): Observable<ICommentModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<ICommentModel>(`/api/forum/${categoryId}/${postId}/${comment.id}`, comment, {headers});
  }

  deleteComment(categoryId: number, postId: number, commentId: number): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`/api/forum/${categoryId}/${postId}/${commentId}/delete`, {headers});
  }
}
