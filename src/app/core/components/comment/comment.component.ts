import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {CommentModel, CommentModelClass} from './comment.model';
import {ForumService} from '../../service/forum.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments: CommentModel[];
  @Output() edit = new EventEmitter();
  @Output() delete  = new EventEmitter();

  constructor(private forumService: ForumService) {
  }

  ngOnInit() {
  }

  private onEditComment(comment: CommentModel): void {
    this.edit.emit(comment);
  }

  private onDeleteComment(comment: CommentModel): void {
    this.delete.emit(comment);
  }

}
