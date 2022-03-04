import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ScoreRoutingModule } from './score-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    ScoreRoutingModule
  ],
  declarations: COMPONENTS,
})
export class ScoreModule { }
