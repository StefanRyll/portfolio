import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ TranslateModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

constructor(private scrollService: ScrollService, private languageService: LanguageService){}

isMenuActive = false;
isActive = false;

navigateTo(elementId: string): void {
  this.scrollService.scrollTo(elementId);
}

switchLanguage(lang: string) {
  this.languageService.changeLanguage(lang);
}

activeMenu() {
  this.isMenuActive = !this.isMenuActive;
  if (this.isMenuActive) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

toggleMenu(link?: string) {
  this.isActive = !this.isActive;
  setTimeout(() => {
    setTimeout(() => {
      this.scrollService.moveToHomePage(link);
    }, 200);
    if (link) {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}, 200);
}
}
