import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../service/forum.service';
import {CategoryModel} from './category.model';
import {PostsModel} from './posts.model';
import {Router} from '@angular/router';
import {BasicModel} from "../../../shared/model/basic.model";

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

  constructor(private forumService: ForumService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  onItem(item: BasicModel): void {
    switch (this.state) {
      case ForumComponentType.CATEGORY:
        this.loadPosts(item.id);
        break;
      case ForumComponentType.POSTS:
        this.router.navigate(['post', item.id]);
        break;
    }
  }

  private loadCategory(): void {
    this.forumService.getCategorys()
      .subscribe(data => {
        this.data = data;
        this.state = ForumComponentType.CATEGORY;
      });
  }

  private loadPosts(categoryId: number): void {
    this.forumService.getPosts(categoryId)
      .subscribe(data => {
        this.data = data;
        this.state = ForumComponentType.POSTS;
      });
  }

}
