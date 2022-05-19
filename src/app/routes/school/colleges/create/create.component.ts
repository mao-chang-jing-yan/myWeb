import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {CollegeCreateTransferService} from "./step-form/college-create-transfer.service";

@Component({
  selector: 'school-colleges-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SchoolCollegesCreateComponent  implements AfterViewInit {
  get item(): CollegeCreateTransferService {
    return this.srv;
  }

  constructor(private srv: CollegeCreateTransferService, private cdr: ChangeDetectorRef) {
    this.item.again();
    this.srv.createPageCdr = this.cdr;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }

}
