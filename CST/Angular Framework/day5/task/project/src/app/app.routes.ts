import { Routes } from '@angular/router';
import { PostsComponent } from './component/post/post.component';
import { ErrorComponent } from './component/error/error.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { CommentsComponent } from './component/comments/comments.component';


export const routes: Routes = [
    {path:"",component:PostsComponent},
    {path:"posts",component:PostsComponent},
    {path:"posts/:id",component:PostDetailsComponent},
    {path:"comments/:id",component:CommentsComponent},
    {path:"**",component:ErrorComponent}
  ];
