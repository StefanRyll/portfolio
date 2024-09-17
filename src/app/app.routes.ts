import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'landingPage', component: LandingPageComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'privatePolicy', component: PrivatePolicyComponent},
];
