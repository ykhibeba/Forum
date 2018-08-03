import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryModel} from '../components/forum/category.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private forumUrl = 'http://192.168.88.27:3000/api/forumanon';

  constructor(private http: HttpClient) {
  }

  getCatalogs(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.forumUrl);
  }
}
