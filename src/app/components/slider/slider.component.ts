import { Component, OnInit, Input } from '@angular/core';
declare var $:any; // Importar jQuery

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() width:number;
  @Input() sliderCaptions: boolean;

  constructor() { }

  ngOnInit() {
    $('.gallery').bxSlider({
      mode: 'fade',
      captions: this.sliderCaptions,
      slideWidth: this.width
    });
  }

}
