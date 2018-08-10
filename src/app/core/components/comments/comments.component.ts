import {Component, Input, OnInit} from '@angular/core';
import {CommentModel, CommentModelClass} from './comments.model';
import {ForumService} from '../../service/forum.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  comments: CommentModel[];

  constructor(private forumService: ForumService) {
  }

  ngOnInit() {
  }

  private addComment(): void {
    const comment = new CommentModelClass('test');
    this.forumService.postComment(20, 20, comment)
      .subscribe(model => this.comments.push(comment));
  }

  private editComment(comment: CommentModel): void {
    console.log(comment);
    // this.forumService.postComment(this.categoryId, this.postId, this.comment);
  }

  private deleteComment(comment: CommentModel): void {
    // this.forumService.postComment(this.categoryId, this.postId, this.comment);
  }

}
