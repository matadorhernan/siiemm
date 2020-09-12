import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons/icons.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {
  SwiperModule,
  SWIPER_CONFIG,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/home/landing/landing.component';
import { CuadrosoftComponent } from './components/cuadrosoft/cuadrosoft.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeCustomersComponent } from './pages/home/home-customers/home-customers.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutHeaderComponent } from './pages/about/about-header/about-header.component';
import { AboutMissionComponent } from './pages/about/about-mission/about-mission.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceHeaderComponent } from './pages/service/service-header/service-header.component';
import { ServiceCategoryComponent } from './pages/service/service-category/service-category.component';
import { AboutPolicyComponent } from './pages/about/about-policy/about-policy.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ServiceDetailsHeaderComponent } from './pages/service-details/service-details-header/service-details-header.component';
import { ServiceDetailsTableComponent } from './pages/service-details/service-details-table/service-details-table.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BrandComponent,
    HomeComponent,
    LandingComponent,
    CuadrosoftComponent,
    HomeServicesComponent,
    SeparatorComponent,
    ContactComponent,
    HomeCustomersComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutMissionComponent,
    ServiceComponent,
    ServiceHeaderComponent,
    ServiceCategoryComponent,
    AboutPolicyComponent,
    ServiceDetailsComponent,
    ServiceDetailsHeaderComponent,
    ServiceDetailsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    IconsModule,
    LazyLoadImageModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
