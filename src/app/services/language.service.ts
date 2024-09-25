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
    document.documentElement.lang = defaultLang; // Set the language attribute of the HTML document
  }
  
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    document.documentElement.lang = lang; // Update the language attribute of the HTML document
  }
}
