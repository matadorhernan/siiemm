import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss'],
})
export class AboutHeaderComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
