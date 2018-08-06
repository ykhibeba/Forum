import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params
      .subscribe((params: { id: string }) => this.id = parseInt(params.id, 10));
  }

  ngOnInit() {
  }

}
