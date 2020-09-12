import { Component, OnInit } from '@angular/core';
import { about_es } from '../../data/about.data';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public locale = about_es;
  constructor() {}

  ngOnInit(): void {}
}
