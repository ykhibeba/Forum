import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../service/forum.service';
import {CategoryModel} from './category.model';
import {PostsModel} from './posts.model';
import {Route, RouterLink} from '@angular/router';

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

  load(categoryId: number): void {
    if (this.state = ForumComponentType.POSTS) {
      this.loadPosts(categoryId);
    } else {
      console.log('2');
      // RouterLink = ['/post', categoryId];
    }
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
