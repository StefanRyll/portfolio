import { AfterViewInit, Component } from '@angular/core';
import { PROJECTS } from '../../json.data/projects.data';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import 'aos/dist/aos.css';
import AOS from 'aos';


interface Project {
  name: string;
  language: string;
  description: string;
  image: string;
  git: string;
  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  ngAfterViewInit(): void  {
    AOS.init();
  }

  projects: Project[] = PROJECTS;

}
