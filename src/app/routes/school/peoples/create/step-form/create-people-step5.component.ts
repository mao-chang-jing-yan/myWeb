import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PeopleCreateTransferService } from './people-create-transfer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-peoples-create-step5',
  templateUrl: './create-people-step5.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePeopleStep5Component {
  get item(): PeopleCreateTransferService {
    return this.srv;
  }

  constructor(private srv: PeopleCreateTransferService,
              private router: Router,
  ) {}

  cancel() {
    this.router.navigateByUrl("/school/peoples").then(r => {
    })
  }
}
