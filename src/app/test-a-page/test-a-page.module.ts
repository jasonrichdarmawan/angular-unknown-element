import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAPageRoutingModule } from './test-a-page-routing.module';
import { TestAPageComponent } from './test-a-page.component';


@NgModule({
  declarations: [
    TestAPageComponent
  ],
  imports: [
    CommonModule,
    TestAPageRoutingModule
  ]
})
export class TestAPageModule { }
