import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UtilsModule { }
