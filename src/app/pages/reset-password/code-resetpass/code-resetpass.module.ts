import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeResetpassPageRoutingModule } from './code-resetpass-routing.module';

import { CodeResetpassPage } from './code-resetpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeResetpassPageRoutingModule
  ],
  declarations: [CodeResetpassPage]
})
export class CodeResetpassPageModule {}
