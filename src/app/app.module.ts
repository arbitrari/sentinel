import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LogoComponent } from './elements/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { SettingsComponent } from './elements/settings/settings.component';
import { ScrubberComponent } from './elements/scrubber/scrubber.component';
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent, 
    LogoComponent, SidebarComponent, SettingsComponent, ScrubberComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatLuxonDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
