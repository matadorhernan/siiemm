import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import * as _ from 'lodash';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss'],
})
export class ServiceCategoryComponent implements OnInit {
  @Input('locale') locale: any;
  public services: any;
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 20,
    centerInsufficientSlides: true,
  };

  constructor() {}

  ngOnInit(): void {
    this.services = _.groupBy(this.locale.services, 'category');
  }
}
