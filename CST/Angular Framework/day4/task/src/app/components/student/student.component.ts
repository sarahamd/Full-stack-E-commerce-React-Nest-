import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student.component.html',
  styles: ``
})
export class StudentComponent {
  user="Hello"
  myRegValid = new FormGroup({
    name:new FormControl("koko",[Validators.required,Validators.pattern(/^[a-zA-Z]{4,}$/)]),
    age:new FormControl(0,[Validators.min(20),Validators.max(40)]),
    email:new FormControl("ma45@gmail.com",[Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)])
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
  getData(){
    console.log(this.myRegValid.value);
    console.log("status: ",this.myRegValid.status);
    console.log("Name Valid: ",this.myRegValid.controls["name"].valid);
    console.log("Age Valid: ",this.myRegValid.controls["age"].valid);
    console.log("email Valid: ",this.myRegValid.controls["email"].valid);
    console.log("------------------------------")

  }
}
