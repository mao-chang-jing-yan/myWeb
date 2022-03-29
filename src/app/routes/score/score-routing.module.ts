import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreScoresComponent } from './scores/scores.component';

const routes: Routes = [

  { path: 'scores', component: ScoreScoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
