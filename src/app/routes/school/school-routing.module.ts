import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSchoolsComponent } from './schools/schools.component';
import { SchoolCollegesComponent } from './colleges/colleges.component';
import { SchoolMajorsComponent } from './majors/majors.component';

const routes: Routes = [

  { path: 'schools', component: SchoolSchoolsComponent },
  { path: 'colleges', component: SchoolCollegesComponent },
  { path: 'majors', component: SchoolMajorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
