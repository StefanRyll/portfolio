import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';
import { BGICONS } from '../../json.data/icons.data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, WelcomeContainerComponent, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  constructor(public translateService: TranslateService, private languageService: LanguageService){}

  bgIcons = BGICONS;

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }

}