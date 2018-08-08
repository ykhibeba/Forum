import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../../service/forum.service';

import {BasicModel} from '../../../shared/model/basic.model';
import {CategoryModel} from './category.model';

@Component({
  selector: 'app-forum',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: CategoryModel[];

  constructor(private forumService: ForumService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.forumService.getCategories()
      .subscribe(data => this.categories = data);
  }

  private loadPosts(item: BasicModel): void {
    this.router.navigate(['api/forum', item.id]);
  }
}
