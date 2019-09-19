import { Component, OnInit } from '@angular/core';
declare var $:any; // Importar jQuery

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public widthToSlider: number | boolean;
  public captions: boolean;

  constructor()
  {
    this.captions = false;
  }

  ngOnInit() {}

  loadSlider()
  {
    this.widthToSlider = null;
    this.widthToSlider = this.widthSlider;
  }

  resetSlider()
  {
    this.widthToSlider = false;
  }
}
