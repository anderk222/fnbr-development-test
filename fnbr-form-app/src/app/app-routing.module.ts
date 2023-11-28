import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path : '',
    redirectTo : 'form',
    pathMatch : 'full'
  },
  {
    path: '',
    loadChildren: () => import('@app/layout/layout.module')
      .then(f => f.LayoutModule),

  },
  {
    path : '**',
    redirectTo : 'form',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
