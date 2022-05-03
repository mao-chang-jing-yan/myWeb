import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {environment} from "@env/environment";
import {SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {SysUsersEditComponent} from "../edit/edit.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sys-users-create',
  templateUrl: './create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SysUsersCreateComponent implements OnInit {
  form!: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private http: _HttpClient,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      nick_name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, []],
      // invites: [null, []],
      // weight: [null, []],
      // public: [1, [Validators.min(1), Validators.max(3)]],
      // publicUsers: [null, []]
    });
  }

  submit(): void {
    this.submitting = true;
    setTimeout(() => {
      const url = environment["apis"]["webBase"] + environment["apis"]["CreateUser"];
      console.log(url, this.form)
      this.http.post(url, this.form.value, {})
        .subscribe(
          res => {
            this.submitting = false;
            this.msg.success(`提交成功`);
            this.cdr.detectChanges();
            this.router.navigateByUrl(`/sys/users`).then(r => {
            })
          },
          err => {
            this.submitting = false;
            // this.msg.error(`提交失败`);
            // this.cdr.detectChanges();
          });
    }, 1000);
  }

  reset(){
    this.form.reset()
  }

}

