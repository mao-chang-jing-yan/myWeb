import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';
import { CourseCoursesComponent } from './courses/courses.component';

const COMPONENTS: Type<void>[] = [
  CourseCoursesComponent];

@NgModule({
  imports: [
    SharedModule,
    CourseRoutingModule
  ],
  declarations: COMPONENTS,
})
export class CourseModule { }
