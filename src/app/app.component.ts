import { Component, HostBinding, OnInit } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";
import { ThemeService, ThemeType } from "./services/theme/theme.service";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass = ThemeType.Dark;
  ThemeType = ThemeType;

  constructor(public overlayContainer : OverlayContainer,
              public theme: ThemeService) {}

  ngOnInit() {
    this.setTheme(this.theme.getSaved());
  }

  setTheme(theme: ThemeType) {
    this.overlayContainer.getContainerElement().classList.forEach((v,k,p)=> {
      if (v.endsWith('theme')) {
        p.replace(v,theme);
        return;
      }
    })
    document.documentElement.classList.remove(this.theme.getTheme())
    document.documentElement.classList.add(theme);
    this.componentCssClass = theme;
    this.theme.set(theme);
  }

}
