import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ProductCreateTransferService} from './product-create-transfer.service';
import {environment} from "@env/environment";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {SFButton, SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-products-create-step3',
  templateUrl: './create-product-step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductStep3Component {
  get item(): ProductCreateTransferService {
    return this.srv;
  }

  constructor(private srv: ProductCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/shop/products").then(r => {
    })
  }
}
