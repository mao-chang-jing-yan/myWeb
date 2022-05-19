import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";

import {Router} from "@angular/router";
import {ProductCreateTransferService} from "./step-form/product-create-transfer.service";

@Component({
  selector: 'app-shop-products-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ShopProductsCreateComponent implements AfterViewInit {
  get item(): ProductCreateTransferService {
    return this.srv;
  }

  constructor(private srv: ProductCreateTransferService, private cdr: ChangeDetectorRef,private router: Router,) {
    this.item.again();
    this.srv.createPageCdr = this.cdr;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }

  pre(){
    this.srv.pre();
  }

  cancel(){
    this.router.navigateByUrl("/shop/products").then(r => {
    })
  }

}
