import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';
import { LayoutRoutingModule } from './layout-routing.module ';



@NgModule({
  declarations: [
    HeaderComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
