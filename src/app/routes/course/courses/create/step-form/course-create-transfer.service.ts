import {Injectable} from '@angular/core';

@Injectable()
export class CourseCreateTransferService {
  step = 1;

  school_id = '';
  school_name = '';
  college_id = '';
  college_name = '';
  major_id = '';
  major_name = '';

  name = '';
  detail = '';
  createPageCdr: any = null;

  again(): void {
    this.step = 0;
    this.school_id = '';
    this.school_name = '';
    this.college_id = '';
    this.college_name = '';
    this.major_id = '';
    this.major_name = '';
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
