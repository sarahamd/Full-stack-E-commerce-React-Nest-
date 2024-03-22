import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { RegComponent } from './components/reg/reg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet ,
            StudentsComponent,
            RegComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name="";
  // age="";
  // DataFromReg="";
  ArrayDataFromReg: {n:string, a:string}[] = [];
  // DataFromReg={name:this.name,age:this.age};
  RegData(data:any){
    this.ArrayDataFromReg.push(data);
    // DataFromReg=data;
    // console.log(data);
    console.log(this.ArrayDataFromReg); //{n: 'mariam', a: '25'} // print to check it has been sent to parent comp

/**************************************************** */
     // DataFromReg={name:this.name,age:this.age};
    // this.DataFromReg.name=data.n; //{name: 'mariam'}
    // this.DataFromReg.age=data.a; //{age: 25}
    // console.log(data);//{n: 'mariam', a: '25'}
    // this.DataFromReg=data;//{n: 'mariam', a: '25'}
    //  console.log(this.DataFromReg) //{name: 'mariam', age: '25'}
    // console.log(this.DataFromReg.name)//{name: 'mariam'}

    
  }
}
