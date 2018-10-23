import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
