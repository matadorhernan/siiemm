import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor() {}
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {}
}
