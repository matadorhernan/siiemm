import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
})
export class HomeServicesComponent implements OnInit {
  @Input('locale') locale: any;
  public config: SwiperConfigInterface = {
    effect: 'slide',
    direction: 'horizontal',
    centerInsufficientSlides: true,
    spaceBetween: 20,
    autoplay: true,
    slidesOffsetAfter: 120,
    pagination: {
      el: 'swiper-pagination-service',
      dynamicBullets: true,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
