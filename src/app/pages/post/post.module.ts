import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageRoutingModule } from './post-routing.module';

import { PostService } from 'src/app/services/post/post.service';
import { PostPage } from './post.page';
import { CardPostComponent } from 'src/app/components/card-post/card-post.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PostPageRoutingModule],
  declarations: [PostPage, CardPostComponent],
  providers: [PostService],
})
export class PostPageModule {}
