import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ProductCreateTransferService} from './product-create-transfer.service';
import {environment} from "@env/environment";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {SFButton, SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-products-create-step2',
  templateUrl: './create-product-step2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductStep2Component implements OnInit {
  form!: FormGroup;
  loading = false;

  get item(): ProductCreateTransferService {
    return this.srv;
  }


  constructor(private http: _HttpClient, private fb: FormBuilder, private cdr: ChangeDetectorRef, private srv: ProductCreateTransferService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      detail: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
    });
    this.form.patchValue(this.item);
  }

  //#region get form fields
  get password(): AbstractControl {
    return this.form.get('password')!;
  }

  //#endregion


  _submitForm(): void {
    this.loading = true;
    this.srv.name = this.form.get("name")?.value;
    this.srv.detail = this.form.get("detail")?.value;
    // console.log(this.name, this.detail)
    let url = environment["apis"]["webBase"] + environment["apis"]["CreateProduct"];
    this.http.post(url, {
      shop_id: this.srv.shop_id,
      name: this.srv.name,
      detail: this.srv.detail,
    }).pipe().subscribe((r) => {
      if (!r.res) {
        this.loading = false;
        ++this.item.step;
        this.cdr.detectChanges();
        this.item.createPageCdr.detectChanges();
        console.log("创建成功", r)
      } else {
        this.loading = false;
        this.cdr.detectChanges();
        this.item.createPageCdr.detectChanges();
        console.log("创建失败", r)
      }
    });

    // setTimeout(() => {
    //   this.loading = false;
    //   ++this.item.step;
    // }, 5);
  }

  prev(): void {
    --this.item.step;
  }
}
