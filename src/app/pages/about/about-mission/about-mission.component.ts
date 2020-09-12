import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-mission',
  templateUrl: './about-mission.component.html',
  styleUrls: ['./about-mission.component.scss'],
})
export class AboutMissionComponent implements OnInit {
  @Input('locale') locale: any;
  constructor() {}

  ngOnInit(): void {}
}
