import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => (this.loaded = true), 300);
  }
}
