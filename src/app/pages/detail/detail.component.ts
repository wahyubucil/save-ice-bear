import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  loaded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => (this.loaded = true), 300);
  }

  close(event) {
    this.loaded = false;
    setTimeout(() => this.router.navigateByUrl("/"), 300);
  }
}
