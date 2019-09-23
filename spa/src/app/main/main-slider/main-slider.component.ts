import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    config =  {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 300,
        initialSlide: 1,
        slidesPerView: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 300,
        loop: true
    };

}
