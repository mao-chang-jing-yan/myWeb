import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolSchoolsComponent } from './schools/schools.component';
import { SchoolCollegesComponent } from './colleges/colleges.component';
import { SchoolMajorsComponent } from './majors/majors.component';

const COMPONENTS: Type<void>[] = [
  SchoolSchoolsComponent,
  SchoolCollegesComponent,
  SchoolMajorsComponent];

@NgModule({
  imports: [
    SharedModule,
    SchoolRoutingModule
  ],
  declarations: COMPONENTS,
})
export class SchoolModule { }
