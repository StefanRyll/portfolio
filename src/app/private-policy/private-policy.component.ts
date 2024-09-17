import { Component } from '@angular/core';
import { HeaderComponent } from '../landing-page/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-private-policy',
  standalone: true,
  imports: [ RouterModule, HeaderComponent, FooterComponent, TranslateModule ],
  templateUrl: './private-policy.component.html',
  styleUrl: './private-policy.component.scss'
})
export class PrivatePolicyComponent {

}
