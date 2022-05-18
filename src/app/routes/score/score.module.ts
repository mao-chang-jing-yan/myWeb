import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ScoreRoutingModule } from './score-routing.module';
import { ScoreScoresComponent } from './scores/scores.component';
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzStepsModule} from "ng-zorro-antd/steps";

const COMPONENTS: Type<void>[] = [
  ScoreScoresComponent];

@NgModule({
  imports: [
    SharedModule,
    ScoreRoutingModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzStepsModule,
  ],
  declarations: COMPONENTS,
})
export class ScoreModule { }
