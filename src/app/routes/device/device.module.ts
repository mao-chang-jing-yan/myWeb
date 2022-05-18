import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { DeviceRoutingModule } from './device-routing.module';
import {DeviceDevicesComponent} from "./devices/device.component";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {DeviceLogComponent} from "./log/log.component";

const COMPONENTS: Type<void>[] = [
  DeviceDevicesComponent,
  DeviceLogComponent,
];

@NgModule({
  imports: [
    SharedModule,
    DeviceRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  declarations: COMPONENTS,
})
export class DeviceModule { }
