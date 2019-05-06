import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider-item",
  templateUrl: "./slider-item.component.html",
  styleUrls: ["./slider-item.component.scss"]
})
export class SliderItemComponent implements OnInit {
  @Input() slug: string;
  @Input() imagePath: string;
  @Input() title: string;
  @Input() desc: string;
  @Input() animations: object;

  constructor() {}

  ngOnInit() {}
}
