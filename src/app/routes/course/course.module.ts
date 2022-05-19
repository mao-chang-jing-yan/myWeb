import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';
import { CourseCoursesComponent } from './courses/courses.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {CreateCourseStep3Component} from "./courses/create/step-form/create-course-step3.component";
import {CreateCourseStep1Component} from "./courses/create/step-form/create-course-step1.component";
import {CreateCourseStep2Component} from "./courses/create/step-form/create-course-step2.component";
import {CreateCourseStep4Component} from "./courses/create/step-form/create-course-step4.component";
import {CreateCourseStep5Component} from "./courses/create/step-form/create-course-step5.component";
import {CourseCreateTransferService} from "./courses/create/step-form/course-create-transfer.service";
import {CourseCoursesCreateComponent} from "./courses/create/create.component";
import {CreateCourseStep6Component} from "./courses/create/step-form/create-course-step6.component";

const COMPONENTS: Type<void>[] = [
  CourseCoursesComponent,
  CreateCourseStep1Component,
  CreateCourseStep2Component,
  CreateCourseStep3Component,
  CreateCourseStep4Component,
  CreateCourseStep5Component,
  CreateCourseStep6Component,
  CourseCoursesCreateComponent,
];

@NgModule({
  imports: [
    SharedModule,
    CourseRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  providers: [
    CourseCreateTransferService,
  ],
  declarations: COMPONENTS,
})
export class CourseModule { }
