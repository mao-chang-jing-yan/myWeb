import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopShopsComponent } from './shops/shops.component';
import { ShopProductsComponent } from './products/products.component';
import {ShopOrdersComponent} from "./orders/orders.component";

const routes: Routes = [

  { path: 'shops', component: ShopShopsComponent },
  { path: 'products', component: ShopProductsComponent },
  { path: 'orders', component: ShopOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
