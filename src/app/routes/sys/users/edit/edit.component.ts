import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';

import {environment} from "@env/environment";
import {STColumn} from "@delon/abc/st";
import type {NzSafeAny} from "ng-zorro-antd/core/types";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzTabChangeEvent} from "ng-zorro-antd/tabs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sys-users-edit',
  templateUrl: './edit.component.html',
})
export class SysUsersEditComponent implements OnInit {
  user_id: string = "";
  type = "edit";// edit show
  user_info: any = {};
  list: Array<{ [key: string]: NzSafeAny }> = [];
  data = {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: []
  };
  opColumns: STColumn[] = [
    {title: '操作类型', index: 'type'},
    {title: '操作人', index: 'name'},
    {title: '执行结果', index: 'status', render: 'status'},
    {title: '操作时间', index: 'updatedAt', type: 'date'},
    {title: '备注', index: 'memo', default: '-'}
  ];

  constructor(
    public msg: NzMessageService,
    public route: ActivatedRoute,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.user_id = data['id'];
      this.type = data['type'];
      this.getUserInfo();
    })

    // this.http.get('/profile/advanced').subscribe(res => {
    //   this.data = res;
    //   this.change({ index: 0, tab: null });
    //   this.cdr.detectChanges();
    // });
  }

  getUserInfo() {
    let url = environment["apis"]["webBase"] + environment["apis"]["Users"];
    this.http.get(url, {pi: 1, ps: 10, id: this.user_id}).subscribe(res => {
      if (res?.data.length > 0){
        this.user_info = res.data[0];
      }
    })
  }

  change(args: NzTabChangeEvent): void {
    this.list = (this.data as NzSafeAny)[`advancedOperation${args.index! + 1}`];
  }
}
