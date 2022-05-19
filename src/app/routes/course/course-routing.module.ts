import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseCoursesComponent} from './courses/courses.component';
import {CourseCoursesCreateComponent} from "./courses/create/create.component";

const routes: Routes = [

  {
    path: 'courses',
    children: [
      {path: '', pathMatch: "full", component: CourseCoursesComponent},
      {path: 'create', component: CourseCoursesCreateComponent},
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {
}
