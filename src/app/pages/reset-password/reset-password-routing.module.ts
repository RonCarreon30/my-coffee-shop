import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordPage } from './reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordPage
  },  {
    path: 'code-resetpass',
    loadChildren: () => import('./code-resetpass/code-resetpass.module').then( m => m.CodeResetpassPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordPageRoutingModule {}
