import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  providers:[StudentsService],
  templateUrl: './update.component.html',
  styleUrl:`./update.component.css`
})
export class UpdateComponent {
  constructor(private stdServ:StudentsService, private router:Router ,myActivated:ActivatedRoute){
    this.ID = myActivated.snapshot.params["id"];
  }
  ID:any;
  Student:any;
  myRegValid:any;
  ngOnInit(): void {
    this.stdServ.getStudentByID(this.ID).subscribe({
      next:(data)=>{
        // console.log(data)
        this.Student = data;
        this.myRegValid = new FormGroup({
          name:new FormControl(this.Student.name,[Validators.required,Validators.pattern(/^[a-zA-Z]{4,}$/)]),
          age:new FormControl(this.Student.age,[Validators.min(20),Validators.max(40)]),
          email:new FormControl(this.Student.email,[Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
          phone:new FormControl(this.Student.phone,[Validators.pattern(/^(011-012-010)|[0-9]{9}$/)])
        })
      },
      error:(err)=>{console.log(err)}
    });
  }
 
  UpdateStd(name:any, age:any, email:any, phone:any){
    let newStudent = {name, age, email, phone};
    this.stdServ.UpdateStudent(newStudent,this.ID).subscribe(
      {complete:()=> {
        this.router.navigateByUrl('');},
      }
      );}

  DeleteStd(){
   let confirmMessage:any ;
   confirmMessage=confirm("are you sure to delete this user data ?");
    if (confirmMessage){
      this.stdServ.DeleteStudent(this.ID).subscribe(
        {complete:()=> {
          this.router.navigateByUrl('');},
        });}
    else{
      this.router.navigateByUrl('');
    }
}
// user="Hello"

get AgeValid(){
  return this.myRegValid.controls["age"].valid;
}
get NameValid(){
  return this.myRegValid.controls["name"].valid;
}
get emailValid(){
  return this.myRegValid.controls["email"].valid;
}
get phoneValid(){
  return this.myRegValid.controls["phone"].valid;
}
}


