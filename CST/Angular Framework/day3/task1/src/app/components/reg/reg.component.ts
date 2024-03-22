
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  name="";
  age="";
  @Output() myevent = new EventEmitter(); 

  AddStudent(){
    if(this.name.length>=3 && +this.age<30 && +this.age>20){
   let student={n:this.name,a:this.age};
  //  console.log(student) //{n: 'bjbcs', a: '25'}
    this.myevent.emit(student) ;
    }
  }
  
 
 
}
