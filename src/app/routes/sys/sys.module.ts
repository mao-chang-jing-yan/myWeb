import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysLogComponent } from './log/log.component';
import { SysUsersComponent } from './users/users.component';

const COMPONENTS: Type<void>[] = [
  SysLogComponent,
  SysUsersComponent];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule
  ],
  declarations: COMPONENTS,
})
export class SysModule { }
