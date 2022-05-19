import { Injectable } from '@angular/core';

@Injectable()
export class CollegeCreateTransferService {
  step = 1;

  school_id = '';
  school_name = '';
  name = '';
  detail = '';
  createPageCdr: any = null;

  again(): void {
    this.step = 0;
    this.school_id = '';
    this.school_name = '';
  }

  constructor() {
    this.again();
  }
}
