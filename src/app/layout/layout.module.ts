import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CommanModule } from '../comman/comman.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CommanModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
