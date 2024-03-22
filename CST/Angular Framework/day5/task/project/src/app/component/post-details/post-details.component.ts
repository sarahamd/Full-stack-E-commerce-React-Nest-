import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostServiceService } from '../../service/post.service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [HttpClientModule ,CommonModule,RouterModule],
  providers:[PostServiceService,CommentService],
  templateUrl: './post-details.component.html',
  styles: ``
})
export class PostDetailsComponent implements OnInit {
  ID = 0;
    Posts:any;//undefined ==> falsey
    constructor(myActivated:ActivatedRoute, private PostService:PostServiceService){
      this.ID = myActivated.snapshot.params["id"];
    }
    ngOnInit(): void {
        this.PostService.GetPostsByID(this.ID).subscribe({
          next:(data)=>{
            // console.log(data)
            this.Posts = data;
          },
          error:(err)=>{console.log(err)}
        })
  
      // this.commentservice.GetcommentsByID(this.ID).subscribe({
      //   next:(data)=>{
      //     // console.log(data)
      //     this.Posts = data;
      //   },
      //   error:(err)=>{console.log(err)}
      // })}
      }
        }
  
