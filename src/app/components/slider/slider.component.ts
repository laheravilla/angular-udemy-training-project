import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any; // Importar jQuery

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width:number; // From parent to child
  @Input() sliderCaptions: boolean;
  @Output() getEventAuthor = new EventEmitter(); // From child to parent

  public author: any;

  constructor()
  {
    this.author = {
      name: "Yurniel Lahera Villa",
      email: "yurniel@mail.com",
      age: 38
    };
  }

  ngOnInit()
  {
    $('.gallery').bxSlider({
      mode: 'fade',
      captions: this.sliderCaptions,
      slideWidth: this.width
    });

    this.getEventAuthor.emit(this.author); // Esto es lo que recibira el otro conmponente
  }

  triggerEventAuthor(event)
  {
    console.log(event);
    this.getEventAuthor.emit(this.author); // Esto es lo que recibira el otro conmponente
  }
}
