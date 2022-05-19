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
import {ShopProductsCreateComponent} from "./products/create/create.component";
import {CreateProductStep1Component} from "./products/create/step-form/create-product-step1.component";
import {CreateProductStep2Component} from "./products/create/step-form/create-product-step2.component";
import {CreateProductStep3Component} from "./products/create/step-form/create-product-step3.component";
import {ProductCreateTransferService} from "./products/create/step-form/product-create-transfer.service";

const COMPONENTS: Type<void>[] = [
  ShopShopsComponent,
  ShopProductsComponent,
  ShopOrdersComponent,

  ShopShopsCreateComponent,
  CreateShopStep1Component,
  CreateShopStep2Component,
  CreateShopStep3Component,

  ShopProductsCreateComponent,
  CreateProductStep1Component,
  CreateProductStep2Component,
  CreateProductStep3Component,
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
    ProductCreateTransferService,
  ],
  declarations: COMPONENTS,
})
export class ShopModule { }
