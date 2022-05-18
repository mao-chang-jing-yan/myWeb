import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopShopsComponent } from './shops/shops.component';
import { ShopProductsComponent } from './products/products.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {ShopOrdersComponent} from "./orders/orders.component";

const COMPONENTS: Type<void>[] = [
  ShopShopsComponent,
  ShopProductsComponent,
  ShopOrdersComponent,
];

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  declarations: COMPONENTS,
})
export class ShopModule { }
