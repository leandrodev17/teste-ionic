import { Component, OnInit,Input  } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent  implements OnInit {
  ngOnInit(): void {
  }

  @Input() post!: IPost;
  isOpen: boolean = false;

  openCard() {
    this.isOpen = !this.isOpen;
  }
}
