import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import {AvatarListModule} from "@delon/abc/avatar-list";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {CurrencyPipeModule} from "@delon/util";
import {FooterToolbarModule} from "@delon/abc/footer-toolbar";
import {TagSelectModule} from "@delon/abc/tag-select";
import {EllipsisModule} from "@delon/abc/ellipsis";
import {ProAccountSettingsComponent} from "./settings/settings.component";
import {ProAccountSettingsBaseComponent} from "./settings/base/base.component";
import {ProAccountSettingsBindingComponent} from "./settings/binding/binding.component";
import {ProAccountSettingsNotificationComponent} from "./settings/notification/notification.component";
import {ProAccountSettingsSecurityComponent} from "./settings/security/security.component";
import {ProAccountCenterComponent} from "./center/center.component";
import {ProAccountCenterProjectsComponent} from "./center/projects/projects.component";
import {ProAccountCenterArticlesComponent} from "./center/articles/articles.component";
import {ProAccountCenterApplicationsComponent} from "./center/applications/applications.component";
import {NzListModule} from "ng-zorro-antd/list";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {AccountRoutingModule} from "./account-routing.module";

const COMPONENTS: Type<void>[] = [
  ProAccountSettingsComponent,
  ProAccountSettingsBaseComponent,
  ProAccountSettingsBindingComponent,
  ProAccountSettingsNotificationComponent,
  ProAccountSettingsSecurityComponent,
  ProAccountCenterComponent,
  ProAccountCenterProjectsComponent,
  ProAccountCenterArticlesComponent,
  ProAccountCenterApplicationsComponent,
];

@NgModule({
  imports: [
    SharedModule,
    EllipsisModule,
    TagSelectModule,
    AvatarListModule,
    FooterToolbarModule,
    NzPaginationModule,
    NzStepsModule,
    CurrencyPipeModule,
    NzListModule,
    NzTagModule,
    NzDividerModule,
    NzUploadModule,
    AccountRoutingModule,
  ],
  declarations: COMPONENTS,
})
export class AccountModule { }
