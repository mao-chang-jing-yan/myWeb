import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SysLogComponent} from './log/log.component';
import {SysUsersComponent} from './users/users.component';

const routes: Routes = [
  {path: "", redirectTo: "users", pathMatch: "full"},
  {path: 'log', component: SysLogComponent},
  {path: 'users', component: SysUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule {
}
