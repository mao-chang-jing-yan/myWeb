import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {environment} from "@env/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sys-users',
  templateUrl: './users.component.html',
})
export class SysUsersComponent implements OnInit {
  isVisible = false;
  url = environment["apis"]["webBase"] + environment["apis"]["Users"];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称'
      }
    }
  };
  //ava_url: ""
  // college_id: "000000000000000000000000"
  // create_at: "2022-03-05T16:27:07.528Z"
  // delete_at: "0001-01-01T00:00:00Z"
  // id: "62238f5b285b45222699a30b"
  // major_id: "000000000000000000000000"
  // name: "mao"
  // nick_name: "mao"
  // open_id: "786767867"
  // password: "e10adc3949ba59abbe56e057f20f883e"
  // phone: "12454745375"
  // school_id: "000000000000000000000000"
  // state: 0
  // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiIiwiUGhvbmUiOiIxMjQ1NDc0NTM3NSIsIk5pY2tOYW1lIjoiNzg2NzY3ODY3IiwiQXV0aG9yaXR5SWQiOiIxIiwiVXNlcklkIjoiT2JqZWN0SUQoXCI2MjIzOGY1YjI4NWI0NTIyMjY5OWEzMGJcIikiLCJleHAiOjE2NDY1ODQwMjcsImlzcyI6Im1hb19jaGFuZyIsIm5iZiI6MTY0NjQ4NzYyN30.WAwxOpRgZJuV0EkVcImHxiMwKA-PTVXS1IB2fVJEqTU"
  // type: 1
  // update_at: "2022
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: '编号', index: 'id', width: "10px"},
    // { title: '调用次数', type: 'number', index: 'callNo' },
    {title: '头像', type: 'img', width: '10px', index: 'ava_url'},
    {title: '名称', index: 'name'},
    // {title: '小程序开放id',  index: 'open_id'},
    {title: '昵称', index: 'nick_name'},
    {title: '电话', index: 'phone'},

    {title: '创建人', index: 'create_by'},
    {title: '创建时间', type: 'date', index: 'create_at'},
    // {title: '更新时间', type: 'date', index: 'update_at'},
    // {title: '删除时间', type: 'date', index: 'delete_at'},
    {
      title: '',
      buttons: [
        {
          text: '查看',
          click: (item: any) => {
            this.router.navigateByUrl(`/sys/users/update?id=${item.id}&type=show`).then(r => {
            })
          }
        },
        {
          text: '编辑', type: 'static',
          // component: FormEditComponent,
          // click: 'reload'
          click: (item: any) => {
            this.router.navigateByUrl(`/sys/users/update?id=${item.id}&type=edit`).then(r => {
            })
          }
        },
      ]
    }
  ];
  res: STRes = {
    reName: {
      total: "total",
      list: "data",
    }
  }


  constructor(private http: _HttpClient,
              private modal: ModalHelper,
              private router: Router,
  ) {
    console.log(environment)
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(SysUsersEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
    console.log(this.router.url);
    this.router.navigateByUrl("/sys/users/create").then(r => {
    })
  }

  open(): void {
    // this.isVisible = true;
  }

}
