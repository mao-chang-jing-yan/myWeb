import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysLogComponent } from './log/log.component';
import { SysUsersComponent } from './users/users.component';
import { SysUsersEditComponent } from './users/edit/edit.component';
import {SysUsersCreateComponent} from "./users/create/create.component";

const COMPONENTS: Type<void>[] = [
  SysLogComponent,
  SysUsersComponent,
  SysUsersCreateComponent,
  SysUsersEditComponent];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule
  ],
  declarations: COMPONENTS,
})
export class SysModule { }
