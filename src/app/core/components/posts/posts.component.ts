import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ForumService} from '../../service/forum.service';

import {BasicModel} from '../../../shared/model/basic.model';
import {PostsModel} from './posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostsModel[];
  categoryId: number;

  constructor(private forumService: ForumService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params
      .subscribe((params: { categoryId: string }) => this.categoryId = parseInt(params.categoryId, 10));
  }

  ngOnInit(): void {
    this.loadPosts(this.categoryId);
  }

  private loadPosts(categoryId: number): void {
    this.forumService.getPosts(categoryId)
      .subscribe(data => this.posts = data);
  }

  private loadPost(post: BasicModel): void {
    this.router.navigate(['forum', this.categoryId, post.id]);
  }

}
