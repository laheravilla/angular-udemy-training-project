import { Component, OnInit } from '@angular/core';
declare var $:any; // Importar jQuery

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.gallery').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 800
    });
  }

}
