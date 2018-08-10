import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './core/components/login/login.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {CategoriesComponent} from './core/components/categories/categories.component';
import {PostsComponent} from './core/components/posts/posts.component';
import {PostComponent} from './core/components/post/post.component';

const routes: Routes = [
  {path: '', redirectTo: 'forum', pathMatch: 'full'},
  {path: 'forum', component: CategoriesComponent},
  {path: 'forum/:categoryId', component: PostsComponent},
  {path: 'forum/:categoryId/:postId', component: PostComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
