import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeResetpassPage } from './code-resetpass.page';

const routes: Routes = [
  {
    path: '',
    component: CodeResetpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeResetpassPageRoutingModule {}
