import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KualaLumpurPage } from './kuala-lumpur.page';

const routes: Routes = [
  {
    path: '',
    component: KualaLumpurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KualaLumpurPageRoutingModule {}
