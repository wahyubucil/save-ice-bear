import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { SwiperModule } from "angular2-useful-swiper";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { SliderComponent } from "./components/slider/slider.component";
import { HeaderComponent } from "./partials/header/header.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, SliderComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
