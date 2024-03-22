import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) {}

  private DB_URL = "https://jsonplaceholder.typicode.com/comments";

  // GetAllcomments(){
  //   return this.http.get(this.DB_URL);
  // }
  GetcommentsByPostID(id:any){
    return this.http.get(this.DB_URL+"?postId"+"="+id);
  }
}
