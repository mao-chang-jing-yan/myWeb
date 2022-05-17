import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchoolSchoolsComponent} from './schools/schools.component';
import {SchoolCollegesComponent} from './colleges/colleges.component';
import {SchoolMajorsComponent} from './majors/majors.component';
import {SchoolSchoolsEditComponent} from "./schools/edit/edit.component";
import {SchoolSchoolsCreateComponent} from "./schools/create/create.component";

const routes: Routes = [

  {
    path: 'schools',
    children: [
      {path: '', data: {title: "list"}, component: SchoolSchoolsComponent},
      {path: 'update', data: {title: "update"}, component: SchoolSchoolsEditComponent},
      {path: 'create', data: {title: "create"}, component: SchoolSchoolsCreateComponent},
    ]
  },
  {path: 'colleges', component: SchoolCollegesComponent},
  {path: 'majors', component: SchoolMajorsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {
}
