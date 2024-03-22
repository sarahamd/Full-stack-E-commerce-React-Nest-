import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateComponent } from './Components/update/update.component';

export const routes: Routes = [
    {path:"",redirectTo:'students',pathMatch:"full"},
    {path:"students",component:StudentsComponent},
    {path:"students/:id",component:StudentDetailsComponent},
    {path:"add",component:AddStudentComponent},
    {path:"update/:id",component:UpdateComponent},
    {path:"**",component:ErrorComponent}
  
];
