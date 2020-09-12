import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-details-table',
  templateUrl: './service-details-table.component.html',
  styleUrls: ['./service-details-table.component.scss'],
})
export class ServiceDetailsTableComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
