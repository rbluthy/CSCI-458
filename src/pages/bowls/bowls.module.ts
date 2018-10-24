import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BowlsPage } from './bowls';

@NgModule({
  declarations: [
    BowlsPage,
  ],
  imports: [
    IonicPageModule.forChild(BowlsPage),
  ],
})
export class BowlsPageModule {}
