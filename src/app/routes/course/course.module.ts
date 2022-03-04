import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    CourseRoutingModule
  ],
  declarations: COMPONENTS,
})
export class CourseModule { }
