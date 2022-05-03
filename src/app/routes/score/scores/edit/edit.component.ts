import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import {environment} from "@env/environment";

@Component({
  selector: 'app-sys-users-edit',
  templateUrl: './edit.component.html',
})
export class SysUsersEditComponent implements OnInit {
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    private http: _HttpClient
  ) { }

  ngOnInit(): void {
    const url = environment["apis"]["webBase"] + environment["apis"]["Users"];
    // console.log(this.i)
    // this.http.get(url).subscribe(res => this.i = res);
  }

  close(): void {
    this.modal.destroy();
  }
}
