import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FeedComponent} from './feed.component';
import {FeedGuardService} from '../../services/guards/feed-guard.service';


const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    canActivate: [FeedGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {
}
