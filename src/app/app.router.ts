import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './core/components/login/login.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {ForumComponent} from './core/components/forum/forum.component';
import {PostComponent} from './core/components/post/post.component';

const routes: Routes = [
  {path: '', redirectTo: 'forum', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
