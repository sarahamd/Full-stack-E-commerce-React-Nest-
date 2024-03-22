import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) {}

  private DB_URL = "https://jsonplaceholder.typicode.com/posts";

  GetAllPosts(){
    return this.http.get(this.DB_URL);
  }
  GetPostsByID(id:any){
    return this.http.get(this.DB_URL+"/"+id);
  }
}

