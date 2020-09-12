import { Component, OnInit } from '@angular/core';
import { contact_es } from '../../data/contact.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public locale = contact_es;

  constructor() {}

  ngOnInit(): void {}
}
