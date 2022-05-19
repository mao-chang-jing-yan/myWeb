import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";

import {MajorCreateTransferService} from "./step-form/major-create-transfer.service";
import {Router} from "@angular/router";

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

  constructor(private srv: MajorCreateTransferService, private cdr: ChangeDetectorRef,private router: Router,) {
    this.item.again();
    this.srv.createPageCdr = this.cdr;
  }

  ngAfterViewInit(): void {
    console.log('item', this.item);
  }

  pre(){
    this.srv.pre();
  }

  cancel(){
    this.router.navigateByUrl("/school/majors").then(r => {
    })
  }

}
