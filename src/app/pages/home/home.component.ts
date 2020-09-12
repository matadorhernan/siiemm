import { Component, OnInit } from '@angular/core';
import { home_es } from '../../data/home.data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public locale = home_es;

  constructor() {}

  ngOnInit(): void {}
}
