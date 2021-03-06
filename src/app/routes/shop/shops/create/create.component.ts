import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";

import {Router} from "@angular/router";
import {ShopCreateTransferService} from "./step-form/shop-create-transfer.service";

@Component({
  selector: 'app-shop-shops-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ShopShopsCreateComponent implements AfterViewInit {
  get item(): ShopCreateTransferService {
    return this.srv;
  }

  constructor(private srv: ShopCreateTransferService, private cdr: ChangeDetectorRef,private router: Router,) {
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
    this.router.navigateByUrl("/shop/shops").then(r => {
    })
  }

}
