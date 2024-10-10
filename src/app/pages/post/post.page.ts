import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post/post.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { StatesService } from 'src/app/services/states/states.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  constructor(private postService: PostService, private router: Router, private statesService: StatesService) { }

  user: IUser = {
    email: '',
    nome: '',
    foto: ''
  };

  loadingPost: boolean = false;

  userSubscription: Subscription = new Subscription;
  loadingSubscription: Subscription = new Subscription;

  ngOnInit() {
    this.findPosts(0, 10);

    this.loadingSubscription = this.statesService.loadingPost$.subscribe((status) => {
      this.loadingPost = status;
    });

    this.userSubscription = this.statesService.currentUser$.subscribe((currentUser) => {
      this.user = currentUser ?? {
        email: '',
        nome: '',
        foto: ''
      };;
    });

  }

  onDestroy() {
    this.loadingSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  posts: IPost[] = [];


  findPosts(start: number, limit: number, event?: any,) {
    this.postService
      .findPosts(start, limit)
      .pipe(take(1))
      .subscribe({
        next: (posts) => {
          for (let index = 0; index < posts.length; index++) {
            this.posts.push(posts[index]);
          }

          if (event) {
            event.target.complete();
          }
        },
        error: (erro) => {
          console.log(erro);
          if (event) {
            event.target.complete();
          }
        },
      });
  }

  navigateToDetails(post: IPost) {
    this.router.navigate(['/post-detail'], { state: { post } });
  }

  navigateToProfile(user: IUser) {
    this.router.navigate(['/profile'], { state: { user } });
  }
}
