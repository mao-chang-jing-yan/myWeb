import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';

import { CourseCreateTransferService } from './course-create-transfer.service';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {_HttpClient, ModalHelper} from "@delon/theme";
import {environment} from "@env/environment";
import {SFButton, SFSchema} from "@delon/form";
import {STColumn, STComponent, STRes} from "@delon/abc/st";

@Component({
  selector: 'app-course-courses-create-step4',
  templateUrl: './create-course-step4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCourseStep4Component implements OnInit {
  isVisible = false;
  url = environment["apis"]["webBase"] + environment["apis"]["Users"];
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
              this.srv.teacher_id = item.id;
              this.srv.teacher_name = item.name;
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
  button: SFButton = {
    render : {

    }
  };



  get item(): CourseCreateTransferService {
    return this.srv;
  }

  constructor(
    private fb: FormBuilder,
    private srv: CourseCreateTransferService,
    private http: _HttpClient,
    private modal: ModalHelper,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.st.load(1)
    this.cdr.detectChanges()

  }


}

