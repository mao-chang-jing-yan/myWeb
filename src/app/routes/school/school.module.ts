import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolSchoolsComponent } from './schools/schools.component';
import { SchoolCollegesComponent } from './colleges/colleges.component';
import { SchoolMajorsComponent } from './majors/majors.component';
import {SchoolSchoolsEditComponent} from "./schools/edit/edit.component";
import {SchoolSchoolsCreateComponent} from "./schools/create/create.component";
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {SchoolCollegesCreateComponent} from "./colleges/create/create.component";
import {SchoolCollegesEditComponent} from "./colleges/edit/edit.component";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {CreateCollegeStep1Component} from "./colleges/create/step-form/create-college-step1.component";
import {CreateCollegeStep2Component} from "./colleges/create/step-form/create-college-step2.component";
import {CreateCollegeStep3Component} from "./colleges/create/step-form/create-college-step3.component";
import {CollegeCreateTransferService} from "./colleges/create/step-form/college-create-transfer.service";
import {CreateMajorStep1Component} from "./majors/create/step-form/create-major-step1.component";
import {CreateMajorStep2Component} from "./majors/create/step-form/create-major-step2.component";
import {CreateMajorStep3Component} from "./majors/create/step-form/create-major-step3.component";
import {MajorCreateTransferService} from "./majors/create/step-form/major-create-transfer.service";
import {SchoolMajorCreateComponent} from "./majors/create/create.component";
import {CreateMajorStep4Component} from "./majors/create/step-form/create-major-step4.component";

const COMPONENTS: Type<void>[] = [
  SchoolSchoolsComponent,
  SchoolSchoolsEditComponent,
  SchoolSchoolsCreateComponent,
  SchoolCollegesComponent,
  SchoolCollegesCreateComponent,
  SchoolCollegesEditComponent,
  SchoolMajorsComponent,
  SchoolMajorCreateComponent,

  CreateCollegeStep1Component,
  CreateCollegeStep2Component,
  CreateCollegeStep3Component,

  CreateMajorStep1Component,
  CreateMajorStep2Component,
  CreateMajorStep3Component,
  CreateMajorStep4Component,
];

@NgModule({
  imports: [
    SharedModule,
    SchoolRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  providers: [
    CollegeCreateTransferService,
    MajorCreateTransferService,
  ],
  declarations: COMPONENTS,
})
export class SchoolModule { }
