import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { PageComponent } from './page/page.component';
import {SwiperModule} from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [MainSliderComponent, PageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
      SwiperModule
  ],

})
export class MainModule { }
