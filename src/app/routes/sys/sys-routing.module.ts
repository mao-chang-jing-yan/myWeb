import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SysLogComponent} from './log/log.component';
import {SysUsersComponent} from './users/users.component';
import {SysUsersCreateComponent} from "./users/create/create.component";
import {SysUsersEditComponent} from "./users/edit/edit.component";

const routes: Routes = [
  {path: "", redirectTo: "users", pathMatch: "full"},
  {path: 'log', component: SysLogComponent},
  {path: 'users', component: SysUsersComponent},
  {path: 'users/update', data: {title: "update"}, component: SysUsersEditComponent},
  {path: 'users/create', data: {title: "create"}, component: SysUsersCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule {
}
