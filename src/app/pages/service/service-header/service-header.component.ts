import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-header',
  templateUrl: './service-header.component.html',
  styleUrls: ['./service-header.component.scss'],
})
export class ServiceHeaderComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
