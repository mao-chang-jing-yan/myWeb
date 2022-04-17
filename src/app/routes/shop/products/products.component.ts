import { Component, OnInit, ViewChild } from '@angular/core';
import {STColumn, STComponent, STRes} from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-shop-products',
  templateUrl: './products.component.html',
})
export class ShopProductsComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '用户id', index: 'user_id' },
    { title: '商店id', index: 'shop_id' },
    { title: '名称', index: 'name' },
    { title: '详情', index: 'detail' },
    { title: '图片地址', index: 'img_url' },
    { title: '价格', index: 'price' },
    { title: '原价', index: 'old_price' },

    { title: '状态', index: 'state' },
    { title: '类型', index: 'type' },



    {title: '创建人', index: 'create_by'},
    {title: '创建时间', type: 'date', index: 'create_at'},
    {title: '更新时间', type: 'date', index: 'update_at'},
    {title: '删除时间', type: 'date', index: 'delete_at'},
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  res: STRes = {
    reName: {
      total: "total",
      list: "data",
    }
  }
  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit(): void { }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
