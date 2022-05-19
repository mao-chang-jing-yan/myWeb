import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {PeopleCreateTransferService} from "./step-form/people-create-transfer.service";

@Component({
  selector: 'app-school-peoples-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SchoolPeoplesCreateComponent implements AfterViewInit {
  get item(): PeopleCreateTransferService {
    return this.srv;
  }

  constructor(private srv: PeopleCreateTransferService, private cdr: ChangeDetectorRef,private router: Router,) {
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
    this.router.navigateByUrl("/school/peoples").then(r => {
    })
  }

}
