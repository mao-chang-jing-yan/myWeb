import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CollegeCreateTransferService} from './college-create-transfer.service';
import {environment} from "@env/environment";
import {_HttpClient} from "@delon/theme";

@Component({
  selector: 'app-school-college-create-step2',
  templateUrl: './create-college-step2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCollegeStep2Component implements OnInit {
  form!: FormGroup;
  loading = false;

  get item(): CollegeCreateTransferService {
    return this.srv;
  }


  constructor(private http: _HttpClient, private fb: FormBuilder, private cdr: ChangeDetectorRef, private srv: CollegeCreateTransferService) {
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
    let url = environment["apis"]["webBase"] + environment["apis"]["CreateCollege"];
    this.http.post(url, {
      school_id: this.srv.school_id,
      name: this.srv.name,
      detail: this.srv.detail,
    }).pipe().subscribe((r) => {
      if (r) {
        this.loading = false;
        ++this.item.step;
        this.cdr.detectChanges();
        this.item.createPageCdr.detectChanges();
      } else {
        this.loading = false;
        ++this.item.step;
        console.log("创建失败")
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
