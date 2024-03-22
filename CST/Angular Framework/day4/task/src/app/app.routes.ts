import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentComponent } from './components/student/student.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:"",component:StudentComponent},
    {path:"student",component:StudentComponent},
    {path:"student/:id",component:StudentDetailsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"**",component:ErrorComponent}
  
];
