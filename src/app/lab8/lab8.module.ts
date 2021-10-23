import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab8PageRoutingModule } from './lab8-routing.module';

import { Lab8Page } from './lab8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab8PageRoutingModule
  ],
  declarations: [Lab8Page]
})
export class Lab8PageModule {}
