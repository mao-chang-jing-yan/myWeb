import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopShopsComponent } from './shops/shops.component';
import { ShopProductsComponent } from './products/products.component';

const COMPONENTS: Type<void>[] = [
  ShopShopsComponent,
  ShopProductsComponent];

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: COMPONENTS,
})
export class ShopModule { }
