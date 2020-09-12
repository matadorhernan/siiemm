import { Component, OnInit } from '@angular/core';
import { services_es } from '../../data/service.data';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public locale = services_es;
  constructor() {}

  ngOnInit(): void {}
}
