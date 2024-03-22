import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styleUrl:`./student-details.component.css`
})
export class StudentDetailsComponent {
  ID:any;
  Student:any;
  constructor(myActivated:ActivatedRoute, private StdServ:StudentsService){
    this.ID = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.StdServ.getStudentByID(this.ID).subscribe({
      next:(data)=>{
        // console.log(data)
        this.Student = data;
      },
      error:(err)=>{console.log(err)}
    });
  }
}
