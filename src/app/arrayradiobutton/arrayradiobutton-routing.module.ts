import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayradiobuttonPage } from './arrayradiobutton.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayradiobuttonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayradiobuttonPageRoutingModule {}
