import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimpleGuard} from '@delon/auth';
import {environment} from "@env/environment";
// layout
import {LayoutBasicComponent} from '../layout/basic/basic.component';
import {LayoutPassportComponent} from '../layout/passport/passport.component';
// dashboard pages
// single pages
import {CallbackComponent} from './passport/callback.component';
import {UserLockComponent} from './passport/lock/lock.component';
// passport pages
import {UserLoginComponent} from './passport/login/login.component';
import {UserRegisterResultComponent} from './passport/register-result/register-result.component';
import {UserRegisterComponent} from './passport/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [SimpleGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { preload: true }
      },
      {path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule)},
      // 业务子模块
      // { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
      {path: 'sys', data: {title: '系统管理'}, loadChildren: () => import('./sys/sys.module').then((m) => m.SysModule)},
      {path: 'shop', data: {title: '商店'}, loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule)},
      {
        path: 'school',
        data: {title: '学校管理'},
        loadChildren: () => import('./school/school.module').then((m) => m.SchoolModule)
      },
      {
        path: 'device',
        data: {title: '设备管理'},
        loadChildren: () => import('./device/device.module').then((m) => m.DeviceModule)
      },
      {
        path: 'course',
        data: {title: '课程管理'},
        loadChildren: () => import('./course/course.module').then((m) => m.CourseModule)
      },
      {
        path: 'score',
        data: {title: '成绩管理'},
        loadChildren: () => import('./score/score.module').then((m) => m.ScoreModule)
      },
      {
        path: 'account',
        data: {title: '个人中心'},
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule)
      },
    ]
  },
  // 空白布局
  // {
  //     path: 'blank',
  //     component: LayoutBlankComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {path: 'login', component: UserLoginComponent, data: {title: '登录'}},
      {path: 'register', component: UserRegisterComponent, data: {title: '注册'}},
      {path: 'register-result', component: UserRegisterResultComponent, data: {title: '注册结果'}},
      {path: 'lock', component: UserLockComponent, data: {title: '锁屏'}},
    ]
  },
  // 单页不包裹Layout
  {path: 'passport/callback/:type', component: CallbackComponent},
  {path: '**', redirectTo: 'exception/404'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: environment.useHash,
        // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
        // Pls refer to https://ng-alain.com/components/reuse-tab
        scrollPositionRestoration: 'top',
      }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}
