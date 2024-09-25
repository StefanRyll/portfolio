import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ TranslateModule, RouterLink ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scrollService: ScrollService) {}

    /**
   * Navigates to the other pages and scrolls to the top.
   */
    scrollToTop() {
      this.scrollService.scrollToTop();
    }
}
