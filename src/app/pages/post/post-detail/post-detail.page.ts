import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  post: IPost = {
    titulo: '',
    corpo: '',
    autor: ''
  }

  ngOnInit() {
    this.post = history.state.post;
  }

}
