import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ScoreRoutingModule } from './score-routing.module';
import { ScoreScoresComponent } from './scores/scores.component';

const COMPONENTS: Type<void>[] = [
  ScoreScoresComponent];

@NgModule({
  imports: [
    SharedModule,
    ScoreRoutingModule
  ],
  declarations: COMPONENTS,
})
export class ScoreModule { }
