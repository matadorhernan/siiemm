import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { allServices_es } from 'src/app/data/services/services.data';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  public locale;
  constructor(private readonly activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.locale = _.find(allServices_es, { id: params.id });
    });
  }

  ngOnInit(): void {}
}
