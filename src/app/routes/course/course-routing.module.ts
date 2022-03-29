import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCoursesComponent } from './courses/courses.component';

const routes: Routes = [

  { path: 'courses', component: CourseCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
