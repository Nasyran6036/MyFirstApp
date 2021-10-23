import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KualaLumpurPageRoutingModule } from './kuala-lumpur-routing.module';

import { KualaLumpurPage } from './kuala-lumpur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KualaLumpurPageRoutingModule
  ],
  declarations: [KualaLumpurPage]
})
export class KualaLumpurPageModule {}
