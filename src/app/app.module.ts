import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatCard} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.router';
import {CategoriesComponent} from './core/components/categories/categories.component';
import {PostComponent} from './core/components/post/post.component';
import {LoginComponent} from './core/components/login/login.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import { PostsComponent } from './core/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PostComponent,
    LoginComponent,
    PageNotFoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
