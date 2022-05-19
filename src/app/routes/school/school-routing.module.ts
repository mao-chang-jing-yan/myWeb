import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchoolSchoolsComponent} from './schools/schools.component';
import {SchoolCollegesComponent} from './colleges/colleges.component';
import {SchoolMajorsComponent} from './majors/majors.component';
import {SchoolSchoolsEditComponent} from "./schools/edit/edit.component";
import {SchoolSchoolsCreateComponent} from "./schools/create/create.component";
import {SchoolCollegesCreateComponent} from "./colleges/create/create.component";
import {SchoolCollegesEditComponent} from "./colleges/edit/edit.component";
import {SchoolMajorCreateComponent} from "./majors/create/create.component";
import {SchoolPeoplesComponent} from "./peoples/peoples.component";
import {SchoolPeoplesCreateComponent} from "./peoples/create/create.component";

const routes: Routes = [

  {
    path: 'schools',
    children: [
      {path: '', data: {title: "list"}, component: SchoolSchoolsComponent},
      {path: 'update', data: {title: "update"}, component: SchoolSchoolsEditComponent},
      {path: 'create', data: {title: "create"}, component: SchoolSchoolsCreateComponent},
    ]
  },
  {path: 'colleges',
    children: [
      {path: '', data: {title: "list"}, pathMatch: "full", component: SchoolCollegesComponent},
      {path: 'update', data: {title: "update"}, component: SchoolCollegesEditComponent},
      {path: 'create', data: {title: "create"}, component: SchoolCollegesCreateComponent},
    ]
  },
  {path: 'majors',
    children: [
      {path: '', data: {title: "list"}, pathMatch: "full", component: SchoolMajorsComponent},
      // {path: 'update', data: {title: "update"}, component: SchoolCollegesEditComponent},
      {path: 'create', data: {title: "create"}, component: SchoolMajorCreateComponent},
    ]
  },
  {
    path: "peoples",
    children: [
      {path: '', data: {title: "list"}, pathMatch: "full", component: SchoolPeoplesComponent},
      // {path: 'update', data: {title: "update"}, component: SchoolCollegesEditComponent},
      {path: 'create', data: {title: "create"}, component: SchoolPeoplesCreateComponent},
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {
}
