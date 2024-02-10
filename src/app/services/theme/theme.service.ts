import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export enum ThemeType {
  Light = 'light-theme',
  Dark = 'dark-theme',
  Black = 'black-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeType : ThemeType;
  LOCAL_STORAGE_KEY = 'sentinel-theme'

  prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(public meta: Meta) { 
    this.themeType = ThemeType.Dark;
  }

  set(theme: ThemeType) {
    if (theme == ThemeType.Light) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#f5f5f5"});
    } else if (theme == ThemeType.Dark) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#262626"});
    } else if (theme == ThemeType.Black) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#000000"});
    }
    localStorage.setItem(this.LOCAL_STORAGE_KEY, theme);
  }

  getSaved(): ThemeType {
    let theme = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (theme == ThemeType.Light ||
        theme == ThemeType.Dark ||
        theme == ThemeType.Black)
      return theme;
    else localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    return (this.prefersDarkTheme) ? ThemeType.Dark : ThemeType.Light;
  }

  isLight(): boolean {
    return this.themeType == ThemeType.Light;
  }

  isDark(): boolean {
    return this.themeType == ThemeType.Dark;
  }

  isBlack(): boolean {
    return this.themeType == ThemeType.Black;
  }

  getTheme(): ThemeType {
    return this.themeType;
  }
}
