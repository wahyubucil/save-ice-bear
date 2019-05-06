import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectData } from "./project.data";
import { Project } from "src/app/models/project.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit, OnDestroy {
  private loaded: boolean = false;

  private slug: string;
  private sub: any;
  private project: Project;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => (this.loaded = true), 300);

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.slug = params["slug"];

      this.project = ProjectData.find(project => project.slug === this.slug);
      if (!this.project) {
        this.close();
      }
    });
  }

  close() {
    this.loaded = false;
    setTimeout(() => this.router.navigateByUrl("/"), 300);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
