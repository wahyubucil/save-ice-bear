import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  // Use config from the Swiper docs
  config = {
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true
    }
  };

  sliders = [
    {
      bgColor: "#42a5f5",
      imagePath: "../../../assets/images/ice-bear.png",
      title: "Help Ice Bear To Fight!",
      desc:
        "Ice Bear not quiet! Ice Bear and We Bare Bears Team Ready To Fight!"
    },
    {
      bgColor: "#e61e2b",
      imagePath: "../../../assets/images/coca-cola.png",
      title: "Coca Cola is here to help!",
      desc: "Together we can help protect their home"
    },
    {
      bgColor: "#4cb5ab",
      imagePath: "../../../assets/images/wwf.png",
      title: "WWF Always the First!",
      desc: "Prevent Global Warming. To save their Home!"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
