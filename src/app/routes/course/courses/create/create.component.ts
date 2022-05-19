import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";


import {Router} from "@angular/router";
import {CourseCreateTransferService} from "./step-form/course-create-transfer.service";

@Component({
  selector: 'app-sys-users-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseCoursesCreateComponent  implements AfterViewInit {
  get item(): CourseCreateTransferService {
    return this.srv;
  }

  constructor(private srv: CourseCreateTransferService, private cdr: ChangeDetectorRef, private router: Router,) {
    this.item.again();
    this.srv.createPageCdr = this.cdr;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }
  pre(){
    if (this.item.step > 0){
      --this.item.step;
    }
  }
  cancel(){
    this.router.navigateByUrl("/course/courses").then(r => {
    })
  }

}
