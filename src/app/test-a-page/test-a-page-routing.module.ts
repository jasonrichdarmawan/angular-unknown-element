import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAPageComponent } from './test-a-page.component';

const routes: Routes = [
  {
    path: "",
    component: TestAPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAPageRoutingModule { }
