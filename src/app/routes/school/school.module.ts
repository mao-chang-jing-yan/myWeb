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
import {Step1Component} from "./colleges/create/step-form/step1.component";
import {Step2Component} from "./colleges/create/step-form/step2.component";
import {Step3Component} from "./colleges/create/step-form/step3.component";
import {TransferService} from "./colleges/create/step-form/transfer.service";

const COMPONENTS: Type<void>[] = [
  SchoolSchoolsComponent,
  SchoolSchoolsEditComponent,
  SchoolSchoolsCreateComponent,
  SchoolCollegesComponent,
  SchoolCollegesCreateComponent,
  SchoolCollegesEditComponent,
  SchoolMajorsComponent,
  Step1Component,
  Step2Component,
  Step3Component,

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
    TransferService
  ],
  declarations: COMPONENTS,
})
export class SchoolModule { }
