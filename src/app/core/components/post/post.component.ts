import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../../service/forum.service';

import {BasicModel} from '../../../shared/model/basic.model';
import {PostModel} from './post.model';
import {PostModelClass} from './post.model';
import {CommentModel} from './comment.model';
import {CommentModelClass} from './comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  categoryId: number;
  postId: number;
  comment: string;
  post = new PostModelClass();

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

  private addComment(): void {
    const comment = new CommentModelClass(this.comment);
    this.forumService.postComment(this.categoryId, this.postId, comment);
  }

  private editComment(comment: CommentModel): void {
    console.log(comment);
    // this.forumService.postComment(this.categoryId, this.postId, this.comment);
  }

  private deleteComment(comment: CommentModel): void {
    // this.forumService.postComment(this.categoryId, this.postId, this.comment);
  }
}
