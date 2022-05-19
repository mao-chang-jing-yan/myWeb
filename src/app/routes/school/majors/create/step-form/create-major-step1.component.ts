import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MajorCreateTransferService } from './major-create-transfer.service';
import {environment} from "@env/environment";
import {SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-major-create-step1',
  templateUrl: './create-major-step1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMajorStep1Component implements OnInit {
  isVisible = false;
  url = environment["apis"]["webBase"] + environment["apis"]["QuerySchool"];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '名称'
      },
      nick_name: {
        type: 'string',
        title: '昵称'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    // {title: '编号', index: 'id', width: "10px"},
    // { title: '调用次数', type: 'number', index: 'callNo' },
    {title: '头像', type: 'img', width: '10px', index: 'ava_url'},
    {title: '名称', index: 'name'},
    // {title: '小程序开放id',  index: 'open_id'},
    {title: '昵称', index: 'nick_name'},
    {title: '电话', index: 'phone'},

    {title: '状态', index: 'state'},
    {title: '类型', index: 'type'},

    {title: '学校', index: 'name'},

    // {title: '创建人', index: 'create_by'},
    {title: '创建时间', type: 'date', index: 'create_at'},
    // {title: '更新时间', type: 'date', index: 'update_at'},
    // {title: '删除时间', type: 'date', index: 'delete_at'},
    {
      title: '',
      buttons: [
        {
          text: '选择',
          click: (item: any) => {
            if (item.id){
              this.srv.school_id = item.id;
              this.srv.school_name = item.name;
              ++this.item.step;
            }
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



  get item(): MajorCreateTransferService {
    return this.srv;
  }

  constructor(
    private fb: FormBuilder,
    private srv: MajorCreateTransferService,
    private http: _HttpClient,
    private modal: ModalHelper,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }


}
