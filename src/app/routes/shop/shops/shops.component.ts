import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {STChange, STColumn, STComponent, STData, STPage, STRes} from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {environment} from "@env/environment";
import {NzSafeAny} from "ng-zorro-antd/core/types";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-shops',
  templateUrl: './shops.component.html',
})
export class ShopShopsComponent implements OnInit {
  q: {
    create_by: string;
    name: string;
    detail: string;
    pi: number;
    ps: number;
    no: string;
    sorter: string;
    status: number | null;
    statusList: NzSafeAny[];
  } = {
    pi: 1,
    ps: 10,
    no: '',
    sorter: '',
    name: '',
    detail: '',
    create_by: '',
    status: null,
    statusList: []
  };
  data: any[] = [];
  total: number | undefined;
  loading = false;
  status = [
    {index: 0, text: '正常', value: false, type: 'success', checked: true},
    // {index: 0, text: '关闭', value: false, type: 'default', checked: false},
    // {
    //   index: 1,
    //   text: '运行中',
    //   value: false,
    //   type: 'processing',
    //   checked: false
    // },
    // {index: 2, text: '已上线', value: false, type: 'success', checked: false},
    // {index: 3, text: '异常', value: false, type: 'error', checked: false}
  ];
  @ViewChild('st', {static: true})
  st!: STComponent;
  columns: STColumn[] = [
    {title: '', index: 'key', type: 'checkbox'},
    {title: '编号', index: 'index'},
    // {title: '编号', index: 'id'},
    {title: '名称', index: 'name'},
    {title: '详情', index: 'detail'},
    {
      title: '状态',
      index: 'state',
      render: 'state',
      filter: {
        menus: this.status,
        fn: (filter, record) => record.state === filter['index']
      }
    },

    {title: '创建人', index: 'create_by_title'},
    {title: '创建时间', type: 'date', index: 'create_at'},
    {title: '更新时间', type: 'date', index: 'update_at'},
    // {title: '删除时间', type: 'date', index: 'delete_at'},
    // { title: '头像', type: 'img', width: '50px', index: 'detail' },
    // { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  selectedRows: STData[] = [];
  createParams = {
    name: "",
    detail: "",
  }
  totalCallNo = 0;
  expandForm = false;

  page: STPage = {
    show: true,
    front: false,
    total: true,
    showSize: true
  }

  constructor(private router: Router, private http: _HttpClient, public msg: NzMessageService, private modalSrv: NzModalService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    let url = environment["apis"]["webBase"] + environment["apis"]["QueryShop"];
    this.loading = true;
    this.q.statusList = this.status.filter(w => w.checked).map(item => item.index);
    if (this.q.status !== null && this.q.status > -1) {
      this.q.statusList.push(this.q.status);
    }
    this.http
      .get(url, this.q)
      .pipe(
        // map((list: Array<{ status: number; statusText: string; statusType: string }>) =>
        //   list.map(i => {
        //     const statusItem = this.status[i.status];
        //     i.statusText = statusItem.text;
        //     i.statusType = statusItem.type;
        //     return i;
        //   })
        // ),
        // tap(() => (this.loading = false)),
      )
      .subscribe(res => {
        console.log(res)
        // this.page.total = res.total;
        this.total = res.total;

        res.data.map((i: { state: number; stateText: string; stateType: string, index: number }, index: number) => {
          const statusItem = this.status[i.state];
          i.stateText = statusItem.text;
          i.stateType = statusItem.type;
          i.index = (this.q.pi - 1) * this.q.ps + index;
          return i;
        })
        this.data = res.data;
        this.loading = false;
        this.cdr.detectChanges();
      });
  }

  stChange(e: STChange): void {
    console.log(e)
    switch (e.type) {
      case "pi":
        this.q.pi = e.pi;
        this.getData();
        break;
      case "ps":
        this.q.ps = e.ps;
        this.getData();
        break;
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        // this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv['callNo'], 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove(): void {
    let url = environment["apis"]["webBase"] + environment["apis"]["DeleteShop"];
    this.http.delete(url, {ids: this.selectedRows.map(i => i['id']).join(',')}).subscribe(() => {
      this.getData();
      this.st.clearCheck();
    });
  }

  approval(): void {
    this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
  }

  add(tpl: TemplateRef<{}>): void {
    this.router.navigateByUrl("/shop/shops/create").then(r => {
    })
    // this.modalSrv.create({
    //   nzTitle: '新建学校',
    //   nzContent: tpl,
    //   nzOnOk: () => {
    //     this.loading = true;
    //     let url = environment["apis"]["webBase"] + environment["apis"]["CreateShop"];
    //     this.http.post(url, this.createParams).subscribe(() => this.getData());
    //   }
    // });
  }

  reset(): void {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }
}
