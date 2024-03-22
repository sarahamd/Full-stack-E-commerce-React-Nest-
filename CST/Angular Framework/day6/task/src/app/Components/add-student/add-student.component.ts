import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  providers:[StudentsService],
  templateUrl: './add-student.component.html',
  styleUrl:`./add-student.component.css`
})
export class AddStudentComponent {
  constructor(private stdServ:StudentsService, private router:Router){  
  }

  AddStd(name:any, age:any, email:any, phone:any){
    let newStudent = {name, age, email, phone};
    this.stdServ.AddStudent(newStudent).subscribe(
      {complete:()=> {
      this.router.navigateByUrl('');},
    }
    );

  }

  user="Hello"
  myRegValid = new FormGroup({
    name:new FormControl("koko",[Validators.required,Validators.pattern(/^[a-zA-Z]{4,}$/)]),
    age:new FormControl(0,[Validators.min(20),Validators.max(40)]),
    email:new FormControl("ma45@gmail.com",[Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    phone:new FormControl("01112797471",[Validators.pattern(/^(011-012-010)|[0-9]{9}$/)])
  })
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
