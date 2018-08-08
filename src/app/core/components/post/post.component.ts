import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../../service/forum.service';

import {BasicModel} from '../../../shared/model/basic.model';
import {PostModel} from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  categoryId: number;
  postId: number;
  post: PostModel;

  constructor(private forumService: ForumService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params
      .subscribe((params: { categoryId: string, postId: string }) => {
        this.categoryId = parseInt(params.categoryId, 10);
        this.postId = parseInt(params.postId, 10);
      });
  }

  ngOnInit() {
    this.loadPost(this.categoryId, this.postId);
  }

  private loadPost(categoryId: number, postId: number): void {
    this.forumService.getPost(categoryId, postId)
      .subscribe(data => this.post = data);
  }
}
