import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../service/forum.service';
import {CategoryModel} from './category.model';
import {PostsModel} from './posts.model';

enum ForumComponentType {
  CATEGORY, POSTS
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  readonly forumComponentType = ForumComponentType;

  data: CategoryModel[] | PostsModel[];
  state: ForumComponentType = ForumComponentType.CATEGORY;

  constructor(private forumService: ForumService) {
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory(): void {
    this.forumService.getCategorys()
      .subscribe(data => {
        this.data = data;
        this.state = ForumComponentType.CATEGORY;
      });
  }

  loadPosts(categoryId: number): void {
    this.forumService.getPosts(categoryId)
      .subscribe(data => {
        this.data = data;
        this.state = ForumComponentType.POSTS;
      });
  }

}
