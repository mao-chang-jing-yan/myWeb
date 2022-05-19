import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopShopsComponent} from './shops/shops.component';
import {ShopProductsComponent} from './products/products.component';
import {ShopOrdersComponent} from "./orders/orders.component";
import {ShopShopsCreateComponent} from "./shops/create/create.component";
import {ShopProductsCreateComponent} from "./products/create/create.component";

const routes: Routes = [

  {
    path: 'shops',
    children: [
      {path: "", pathMatch: "full", component: ShopShopsComponent},
      {path: "create", component: ShopShopsCreateComponent},
    ]

  },
  {
    path: 'products',
    children: [
      {path: "", pathMatch: "full", component: ShopProductsComponent},
      {path: "create", component: ShopProductsCreateComponent},
    ]
  },
  {path: 'orders', component: ShopOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
