import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-policy',
  templateUrl: './about-policy.component.html',
  styleUrls: ['./about-policy.component.scss'],
})
export class AboutPolicyComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
