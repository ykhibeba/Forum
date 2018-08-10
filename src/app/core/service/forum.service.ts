import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryModel} from '../components/categories/category.model';
import {PostsModel} from '../components/posts/posts.model';
import {PostModel} from '../components/post/post.model';

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

  postComment(categoryId: number, postId: number, comment: string): void {
    const options = {
      headers: new HttpHeaders({
        // Add Header
      })
    };
    this.http.post<string>(`/api/forum/${categoryId}/${postId}/comments`, comment, options)
      .subscribe();
  }
}
