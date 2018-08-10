import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryModel} from '../components/categories/category.model';
import {PostsModel} from '../components/posts/posts.model';
import {PostModel} from '../components/post/post.model';
import {CommentModel} from '../components/post/comment.model';

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

  postComment(categoryId: number, postId: number, comment: CommentModel): void {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer NiOhBqz3IPEpY2hMpThigXc72txm0CjMxw2_cisZR_1lWNxW4uhgwUaWSGrym0XD0biqxxLlSAl3NPPYsEzXae5qN5fzA_HY0GecoN18Cm9TCX84CoIx4WGrSmj7k7DFUq0dWleCqCNFAOZLfFwcRsn0ZfPulA_4oG68LIr_A0OA2g7r2gMe5Z2vK5Hd1iQgEOuhO9X5BlX6Rtjikt36JR2d140OMm59dDhvuiqKE6Srv8kc8PCdkC6nmLUVjkHcaz4B-_h0U8UC_05fhce5WGThZWDI9kD4MPHZD_4HORc8bBhGrjrPi7pwtF8JDvqg',
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    this.http.post<string>(`/api/forum/${categoryId}/${postId}/comments`, comment, options)
      .subscribe();
  }
}
