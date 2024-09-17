import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translateService: TranslateService) { }

  setDefaultLanguage() {
    const defaultLang = 'de';
    this.translateService.use(defaultLang);
    document.documentElement.lang = defaultLang; // Setzt das Sprachattribut des HTML-Dokuments
  }
  
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    document.documentElement.lang = lang; // Aktualisiert das Sprachattribut des HTML-Dokuments
  }
}
