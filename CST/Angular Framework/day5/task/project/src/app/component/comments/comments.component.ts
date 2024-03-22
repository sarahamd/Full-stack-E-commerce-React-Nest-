import { Component } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute ,RouterModule} from '@angular/router';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers:[CommentService],
  templateUrl: './comments.component.html',
  styles: ``
})
export class CommentsComponent {
  comments:any;
  ID = 0;
  constructor( private commentservice:CommentService,ActivatedRoute:ActivatedRoute){
    this.ID=ActivatedRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.commentservice.GetcommentsByPostID(this.ID).subscribe({
      next:(data)=>{
        // console.log(data)
        this.comments = data;
      },
      error:(err)=>{console.log(err)}
    })}
  
}
