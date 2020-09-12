import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'servicios',
    component: ServiceComponent,
  },
  {
    path: 'servicios/:id',
    component: ServiceDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
