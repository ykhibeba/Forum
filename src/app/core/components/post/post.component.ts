import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumService} from '../../service/forum.service';
import {PostModel} from './post.model';
import {CommentModel, ICommentModel} from '../comment/comment.model';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  categoryId: number;
  postId: number;
  comment: string;
  post = new PostModel();
  user = new UserModel();

  constructor(private forumService: ForumService,
              private route: ActivatedRoute) {
    this.route.params
      .subscribe((params: { categoryId: string, postId: string }) => {
        this.categoryId = parseInt(params.categoryId, 10);
        this.postId = parseInt(params.postId, 10);
      });
  }

  ngOnInit() {
    this.loadUserInfo();
    this.loadPost();
  }

  private loadUserInfo() {
    this.forumService.getUserInfo()
      .subscribe(data => this.user = data);
  }

  private loadPost(categoryId: number = this.categoryId, postId: number = this.postId): void {
    this.forumService.getPost(categoryId, postId).subscribe(data => this.post = data);
  }

  addComment(): void {
    const comment = new CommentModel(null, this.comment);
    this.forumService.postComment(this.categoryId, this.postId, comment).subscribe(() => this.loadPost());
  }

  saveComment(comment: ICommentModel): void {
    this.forumService.putComment(this.categoryId, this.postId, comment).subscribe(() => this.loadPost());
  }

  deleteComment(commentId: number): void {
    this.forumService.deleteComment(this.categoryId, this.postId, commentId).subscribe(() => this.loadPost());
  }

}
