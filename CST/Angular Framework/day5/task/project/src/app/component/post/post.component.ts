import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostServiceService } from '../../service/post.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule,RouterModule,CommonModule],
  providers:[PostServiceService],
  templateUrl: './post.component.html',
  styleUrl: "./post.component.css"
  
 
})
export class PostsComponent implements OnInit {
  // gallery:string[] =["https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar4.png",
  //                     "https://bootdey.com/img/Content/avatar/avatar3.png"];
  // imgsrc = "https://bootdey.com/img/Content/avatar/avatar3.png";



  constructor(private PostService:PostServiceService){}
  Posts:any;
  ngOnInit(): void {
    this.PostService.GetAllPosts().subscribe({
      next:(data)=>{
        // console.log(data)
        this.Posts = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
