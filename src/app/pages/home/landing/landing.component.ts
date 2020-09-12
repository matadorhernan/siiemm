import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @Input('locale') locale: any;
  public config: SwiperConfigInterface = {
    effect: 'slide',
    direction: 'horizontal',
    centerInsufficientSlides: true,
    autoplay: true,
    pagination: true,
    loop: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
