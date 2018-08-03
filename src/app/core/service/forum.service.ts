import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryModel} from '../components/forum/category.model';

@Injectable({providedIn: 'root'})
export class ForumService {

  constructor(private http: HttpClient) {
  }

  getCatalogs(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('forumanon');
  }

}
