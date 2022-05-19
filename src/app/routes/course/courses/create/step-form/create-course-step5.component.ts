import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CourseCreateTransferService } from './course-create-transfer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-courses-create-step5',
  templateUrl: './create-course-step5.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCourseStep5Component {
  get item(): CourseCreateTransferService {
    return this.srv;
  }

  constructor(private srv: CourseCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/school/majors").then(r => {
    })
  }
}
