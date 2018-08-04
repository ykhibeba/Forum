import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../service/forum.service';
import {CategoryModel} from './category.model';

type ForumComponentType = 'category' | 'posts';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  data: any;
  state: ForumComponentType = 'category';

  constructor(private forumService: ForumService) {
  }

  ngOnInit() {
    this.forumService.getCategorys()
      .subscribe(data => this.data = data);
  }

  loadPosts(categoryId: number): void {
    this.state = 'posts';
    this.forumService.getPosts(categoryId)
      .subscribe(data => this.data = data);
  }
}
