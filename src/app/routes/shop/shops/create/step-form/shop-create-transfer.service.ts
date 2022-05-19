import {Injectable} from '@angular/core';

@Injectable()
export class ShopCreateTransferService {
  step = 1;

  types = [
    {name: "不存在", value: -1, disable: true},
    {name: "普通用户", value: 0},
    {name: "超级管理员", value: 1},
    {name: "后台操作员", value: 2},
    {name: "学生", value: 3},
    {name: "老师", value: 4},
    {name: "主任", value: 5},
    {name: "校长", value: 6},
  ]

  admin_id = '';
  admin_name = '';

  name = '';

  type = 0;

  detail = '';
  createPageCdr: any = null;

  again(): void {
    this.step = 0;
    this.admin_id = '';
    this.admin_name = '';
    this.name = '';
    this.detail = '';
  }

  constructor() {
    this.again();
  }

  pre() {
    if (this.step > 0) {
      this.step--;
    }
  }


}
