import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppGuard } from './guards/app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./pages/post/post.module').then((m) => m.PostPageModule),
    canActivate: [AppGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AppGuard],
  },

  {
    path: 'post-detail',
    loadChildren: () => import('./pages/post/post-detail/post-detail.module').then( m => m.PostDetailPageModule),
    canActivate: [AppGuard],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
