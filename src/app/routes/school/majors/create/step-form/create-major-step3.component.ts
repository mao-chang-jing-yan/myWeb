import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MajorCreateTransferService } from './major-create-transfer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-major-create-step3',
  templateUrl: './create-major-step3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMajorStep3Component {
  get item(): MajorCreateTransferService {
    return this.srv;
  }

  constructor(private srv: MajorCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/school/colleges").then(r => {
    })
  }
}
