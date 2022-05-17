import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {ProAccountCenterComponent} from "./center/center.component";
import {ProAccountSettingsComponent} from "./settings/settings.component";
import {ProAccountSettingsNotificationComponent} from "./settings/notification/notification.component";
import {ProAccountSettingsBindingComponent} from "./settings/binding/binding.component";
import {ProAccountSettingsSecurityComponent} from "./settings/security/security.component";
import {ProAccountSettingsBaseComponent} from "./settings/base/base.component";
import {ProAccountCenterArticlesComponent} from "./center/articles/articles.component";
import {ProAccountCenterProjectsComponent} from "./center/projects/projects.component";
import {ProAccountCenterApplicationsComponent} from "./center/applications/applications.component";

const routes: Routes = [
  {path: "", redirectTo: "center", pathMatch: "full"},
  {path: 'center', component: ProAccountCenterComponent,
    children: [
      { path: '', redirectTo: 'articles', pathMatch: 'full' },
      {
        path: 'articles',
        component: ProAccountCenterArticlesComponent,
        data: { titleI18n: 'pro-account-center' }
      },
      {
        path: 'projects',
        component: ProAccountCenterProjectsComponent,
        data: { titleI18n: 'pro-account-center' }
      },
      {
        path: 'applications',
        component: ProAccountCenterApplicationsComponent,
        data: { titleI18n: 'pro-account-center' }
      }
    ]

  },
  {
    path: 'settings', component: ProAccountSettingsComponent,
    children: [
      {path: '', redirectTo: 'base', pathMatch: 'full'},
      {
        path: 'base',
        component: ProAccountSettingsBaseComponent,
        data: {titleI18n: 'pro-account-settings'}
      },
      {
        path: 'security',
        component: ProAccountSettingsSecurityComponent,
        data: {titleI18n: 'pro-account-settings'}
      },
      {
        path: 'binding',
        component: ProAccountSettingsBindingComponent,
        data: {titleI18n: 'pro-account-settings'}
      },
      {
        path: 'notification',
        component: ProAccountSettingsNotificationComponent,
        data: {titleI18n: 'pro-account-settings'}
      }
    ]
  },
  // {path: 'users/update', data: {title: "update"}, component: SysUsersEditComponent},
  // {path: 'users/create', data: {title: "create"}, component: SysUsersCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
