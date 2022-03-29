import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';

@Component({
  selector: 'app-sys-users',
  templateUrl: './users.component.html',
})
export class SysUsersComponent implements OnInit {
  isVisible = false;

  url = `/api/v1/web/users`;
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
    {title: '编号', index: 'id'},
    // { title: '调用次数', type: 'number', index: 'callNo' },
    {title: '头像', type: 'img', width: '50px', index: 'ava_url'},
    {title: '时间', type: 'date', index: 'update_at'},
    {title: '名称', type: '', index: 'name'},
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        { text: '编辑', type: 'static',
          // component: FormEditComponent,
          click: 'reload' },
      ]
    }
  ];
  res: STRes = {
    reName: {
      total: "total",
      list: "data",
    }
  }




  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  open(): void {
    this.isVisible = true;
  }

}
