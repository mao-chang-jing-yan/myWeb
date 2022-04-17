import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STRes} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {environment} from "@env/environment";

@Component({
  selector: 'app-course-courses',
  templateUrl: './courses.component.html',
})
export class CourseCoursesComponent implements OnInit {
  url = environment["apis"]["webBase"] + environment["apis"]["QueryCourse"];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '课程名称'
      },
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: '编号', index: 'id'},
    {title: '名称', index: 'name'},
    {title: '详情', index: 'detail'},

    {title: '学校id', index: 'school_id'},
    {title: '学院id', index: 'college_id'},
    {title: '专业id', index: 'major_id'},


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

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
