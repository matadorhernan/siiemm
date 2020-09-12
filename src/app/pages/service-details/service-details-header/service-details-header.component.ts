import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-details-header',
  templateUrl: './service-details-header.component.html',
  styleUrls: ['./service-details-header.component.scss'],
})
export class ServiceDetailsHeaderComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
