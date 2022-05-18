import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {TransferService} from "./step-form/transfer.service";

@Component({
  selector: 'school-colleges-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SchoolCollegesCreateComponent  implements AfterViewInit {
  get item(): TransferService {
    return this.srv;
  }

  constructor(private srv: TransferService) {}

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }

}
