import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";

import {MajorCreateTransferService} from "./step-form/major-create-transfer.service";

@Component({
  selector: 'app-school-majors-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SchoolMajorCreateComponent implements AfterViewInit {
  get item(): MajorCreateTransferService {
    return this.srv;
  }

  constructor(private srv: MajorCreateTransferService, private cdr: ChangeDetectorRef) {
    this.item.again();
    this.srv.createPageCdr = this.cdr;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }

}
