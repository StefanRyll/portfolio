import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import 'aos/dist/aos.css';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

ngOnInit(): void {
  AOS.init();
}

/**
 * Checks if the window's width is greater than 950 pixels.
 * Sets the variable `checkWidth` to `true` if the window width exceeds 950 pixels,
 * otherwise sets it to `false`.
 * 
 * @type {boolean} checkWidth - Indicates whether the window width is greater than 950 pixels.
 */
checkWidth:any = window.innerWidth > 950; 
}
