import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { Route, RouterModule, RouterOutlet } from '@angular/router';

const routes: Route[] = [

  {
    path: '',
    component: RootComponent,
    children: [

      {
        path: 'form',
        loadChildren: () => import('@app/module/form/form.module')
          .then(f => f.FormModule)
      }

    ]
  }

]

@NgModule({


  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterOutlet
  ]
})
export class LayoutRoutingModule { }
