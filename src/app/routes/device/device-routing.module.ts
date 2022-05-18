import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeviceDevicesComponent} from "./devices/device.component";
import {DeviceLogComponent} from "./log/log.component";

const routes: Routes = [
  { path: 'devices', component: DeviceDevicesComponent },
  { path: 'logs', component: DeviceLogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
