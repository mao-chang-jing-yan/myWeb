import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopShopsComponent } from './shops/shops.component';
import { ShopProductsComponent } from './products/products.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {ShopOrdersComponent} from "./orders/orders.component";
import {ShopShopsCreateComponent} from "./shops/create/create.component";
import {CreateShopStep2Component} from "./shops/create/step-form/create-shop-step2.component";
import {CreateShopStep3Component} from "./shops/create/step-form/create-shop-step3.component";
import {CreateShopStep1Component} from "./shops/create/step-form/create-shop-step1.component";
import {ShopCreateTransferService} from "./shops/create/step-form/shop-create-transfer.service";

const COMPONENTS: Type<void>[] = [
  ShopShopsComponent,
  ShopProductsComponent,
  ShopOrdersComponent,

  ShopShopsCreateComponent,
  CreateShopStep1Component,
  CreateShopStep2Component,
  CreateShopStep3Component,
];

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  providers:[
    ShopCreateTransferService,
  ],
  declarations: COMPONENTS,
})
export class ShopModule { }
