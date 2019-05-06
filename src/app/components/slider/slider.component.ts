import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  // Use config from the Swiper docs
  config = {
    speed: 700,
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      clickable: true
    },
    keyboard: {
      enabled: true
    }
  };

  sliders = [
    {
      bgColor: "#42a5f5",
      slug: "help-ice-bear-to-fight",
      imagePath: "../../../assets/images/ice-bear.png",
      title: "Help Ice Bear To Fight!",
      desc:
        "Ice Bear not quiet! Ice Bear and We Bare Bears Team Ready To Fight!",
      animations: {
        image: "fadeInUp",
        title: "fadeInDown",
        desc: "fadeInLeft",
        projectInfo: "fadeInRight"
      }
    },
    {
      bgColor: "#e61e2b",
      slug: "coca-cola-is-here-to-help",
      imagePath: "../../../assets/images/coca-cola.png",
      title: "Coca Cola is here to help!",
      desc: "Together we can help protect their home",
      animations: {
        image: "fadeInLeft",
        title: "fadeInUp",
        desc: "fadeInRight",
        projectInfo: "fadeInDown"
      }
    },
    {
      bgColor: "#4cb5ab",
      slug: "wwf-always-the-first",
      imagePath: "../../../assets/images/wwf.png",
      title: "WWF Always the First!",
      desc: "Prevent Global Warming. To save their Home!",
      animations: {
        image: "fadeInDown",
        title: "fadeInRight",
        desc: "fadeInDown",
        projectInfo: "fadeInLeft"
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
