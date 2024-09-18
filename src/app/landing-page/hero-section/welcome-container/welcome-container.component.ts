import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import 'aos/dist/aos.css';
import AOS from 'aos';

@Component({
  selector: 'app-welcome-container',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './welcome-container.component.html',
  styleUrl: './welcome-container.component.scss'
})
export class WelcomeContainerComponent implements OnInit {

  
  constructor(private scrollService: ScrollService, private languageService: LanguageService) {}

  navigateTo(elementId: string): void {
    this.scrollService.scrollTo(elementId);
  }

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }

  ngOnInit(): void {
    AOS.init();
  }
}

