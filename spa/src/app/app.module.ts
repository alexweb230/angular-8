import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SwiperModule} from "ngx-swiper-wrapper";




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule

    ],
    providers: [

    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
