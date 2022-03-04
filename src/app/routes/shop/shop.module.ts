import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ShopRoutingModule } from './shop-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: COMPONENTS,
})
export class ShopModule { }
