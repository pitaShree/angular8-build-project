import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FooterComponent } from '../comman/footer/footer.component';
// import { HeaderComponent } from '../comman/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: '**', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  // {path: 'Header', component: HeaderComponent},
  // {path: 'Footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
