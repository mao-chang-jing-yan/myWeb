import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CollegeCreateTransferService } from './college-create-transfer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-college-create-step3',
  templateUrl: './create-college-step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCollegeStep3Component {
  get item(): CollegeCreateTransferService {
    return this.srv;
  }

  constructor(private srv: CollegeCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/school/colleges").then(r => {
    })
  }
}
