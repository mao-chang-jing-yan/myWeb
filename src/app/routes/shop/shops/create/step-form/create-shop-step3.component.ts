import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ShopCreateTransferService} from './shop-create-transfer.service';
import {environment} from "@env/environment";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {SFButton, SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-shops-create-step3',
  templateUrl: './create-shop-step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateShopStep3Component {
  get item(): ShopCreateTransferService {
    return this.srv;
  }

  constructor(private srv: ShopCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/shop/shops").then(r => {
    })
  }
}
