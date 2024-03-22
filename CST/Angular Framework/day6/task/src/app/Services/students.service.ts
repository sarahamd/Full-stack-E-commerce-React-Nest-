import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private DB_URL = "http://localhost:3000/students";//JSON File [Server] ==> [JsonServer]

  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(this.DB_URL);
  }
  getStudentByID(id:any){
    return this.http.get(`${this.DB_URL}/${id}`);
  }
  AddStudent(student:any){
    return this.http.post(this.DB_URL,student);
  }
  UpdateStudent(student:any,id:any){
    return this.http.put(`${this.DB_URL}/${id}`,student);
  }
  DeleteStudent(id:any){
    return this.http.delete(`${this.DB_URL}/${id}`);
  }
}
