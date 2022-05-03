import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysLogComponent } from './log/log.component';
import { SysUsersComponent } from './users/users.component';
import { SysUsersEditComponent } from './users/edit/edit.component';
import {SysUsersCreateComponent} from "./users/create/create.component";
import {AvatarListModule} from "@delon/abc/avatar-list";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {CurrencyPipeModule} from "@delon/util";
import {FooterToolbarModule} from "@delon/abc/footer-toolbar";
import {TagSelectModule} from "@delon/abc/tag-select";
import {EllipsisModule} from "@delon/abc/ellipsis";

const COMPONENTS: Type<void>[] = [
  SysLogComponent,
  SysUsersComponent,
  SysUsersCreateComponent,
  SysUsersEditComponent];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule,
    EllipsisModule,
    TagSelectModule,
    AvatarListModule,
    FooterToolbarModule,
    NzPaginationModule,
    NzStepsModule,
    CurrencyPipeModule
  ],
  declarations: COMPONENTS,
})
export class SysModule { }
