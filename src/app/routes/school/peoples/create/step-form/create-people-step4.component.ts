import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { PeopleCreateTransferService } from './people-create-transfer.service';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {_HttpClient} from "@delon/theme";
import {environment} from "@env/environment";

@Component({
  selector: 'app-school-peoples-create-step4',
  templateUrl: './create-people-step4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePeopleStep4Component implements OnInit {
  form!: FormGroup;
  loading = false;

  get item(): PeopleCreateTransferService {
    return this.srv;
  }


  constructor(private http: _HttpClient, private fb: FormBuilder, private cdr: ChangeDetectorRef, private srv: PeopleCreateTransferService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      nick_name: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      type: [null, Validators.compose([Validators.required])],
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
    this.srv.nick_name = this.form.get("nick_name")?.value;
    this.srv.detail = this.form.get("detail")?.value;
    this.srv.type = this.form.get("type")?.value;
    this.srv.phone = this.form.get("phone")?.value;
    // console.log(this.name, this.detail)
    let url = environment["apis"]["webBase"] + environment["apis"]["CreateUser"];
    this.http.post(url, {
      school_id: this.srv.school_id,
      college_id: this.srv.college_id,
      major_id: this.srv.major_id,
      name: this.srv.name,
      detail: this.srv.detail,
      type: this.srv.type,
      nick_name: this.srv.nick_name,
      phone: this.srv.phone,
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
