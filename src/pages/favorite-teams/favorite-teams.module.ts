import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteTeamsPage } from './favorite-teams';

@NgModule({
  declarations: [
    FavoriteTeamsPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteTeamsPage),
  ],
})
export class FavoriteTeamsPageModule {}
