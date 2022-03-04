import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { DeviceRoutingModule } from './device-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    DeviceRoutingModule
  ],
  declarations: COMPONENTS,
})
export class DeviceModule { }
