import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { OneStudentComponent } from '../one-student/one-student.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule,OneStudentComponent],
  providers:[StudentsService],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent {
  constructor(private stdServ:StudentsService){}
  Students:any = [];
  ngOnInit(): void {
    this.stdServ.getAllStudents().subscribe({
      next:(data)=>{
        // console.log(data)
        this.Students = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
