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
checkWidth:any = window.innerWidth > 950; 
}
