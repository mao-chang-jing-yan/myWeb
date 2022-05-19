import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { CourseCreateTransferService } from './course-create-transfer.service';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {_HttpClient} from "@delon/theme";
import {environment} from "@env/environment";

@Component({
  selector: 'app-course-courses-create-step5',
  templateUrl: './create-course-step5.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCourseStep5Component implements OnInit {
  form!: FormGroup;
  loading = false;

  get item(): CourseCreateTransferService {
    return this.srv;
  }




  constructor(private http: _HttpClient, private fb: FormBuilder, private cdr: ChangeDetectorRef, private srv: CourseCreateTransferService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      detail: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      credit: [null, Validators.compose([Validators.required, Validators.min(0.1), Validators.max(10)])],
      grade_point: [null, Validators.compose([Validators.required, Validators.min(0.1), Validators.max(10)])],
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
    this.srv.credit = this.form.get("credit")?.value;
    this.srv.grade_point = this.form.get("grade_point")?.value;
    // console.log(this.name, this.detail)
    let url = environment["apis"]["webBase"] + environment["apis"]["CreateCourse"];
    this.http.post(url, {
      school_id: this.srv.school_id,
      college_id: this.srv.college_id,
      major_id: this.srv.major_id,
      teacher_id: this.srv.teacher_id,
      name: this.srv.name,
      detail: this.srv.detail,
      credit: this.srv.credit,
      grade_point: this.srv.grade_point,
    }).pipe().subscribe((r) => {
      console.log("create course", r)
      if (!r.status) {
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
