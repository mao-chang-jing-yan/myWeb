import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';
import { CourseCoursesComponent } from './courses/courses.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";

const COMPONENTS: Type<void>[] = [
  CourseCoursesComponent];

@NgModule({
  imports: [
    SharedModule,
    CourseRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  declarations: COMPONENTS,
})
export class CourseModule { }
