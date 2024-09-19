import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    checked: new FormControl(false, [Validators.requiredTrue]),
  });

  success: boolean = false;
  sending: boolean = false;
  private https: HttpClient;

  constructor(http: HttpClient, private scrollService: ScrollService) {
    this.https = http;
  }

  submitted() {
    this.sending = true;
    let postVars = {
      email: this.contactForm.controls.email.value,
      name: this.contactForm.controls.name.value,
      message: this.contactForm.controls.message.value,
    };
    let endpoint = 'https://stefan-ryll.com/sendMail.php';

    this.https.post(endpoint, postVars).subscribe(
      (res) => {
        this.handleSuccess();
      },
      (err) => {
        setTimeout(() => {
          if (err.statusText == 'OK') {
            this.sending = false;
            this.success = true;
            this.contactForm.reset();
            setTimeout(() => {
              this.success = false;
            }, 3000);
          }
        }, 1000);
      }
    );
  }

  handleSuccess() {
    this.successOverlay();
    this.success = true;
    this.sending = false;
    this.contactForm.reset();
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

  successOverlay() {
    const successMessage = document.getElementById('successMessage');
    const contactMessageBtn = document.getElementById('contactMessageBtn');
    if (successMessage && contactMessageBtn) {
      successMessage.classList.remove('btn-grey');
      successMessage.classList.add('onclic');
      contactMessageBtn.classList.add('d-none');
      setTimeout(() => this.validate(successMessage, contactMessageBtn), 2250);
    }
  }

  validate(successMessage: HTMLElement, contactMessageBtn: HTMLElement) {
    successMessage.classList.add('validate');
    successMessage.classList.remove('onclic');
    setTimeout(() => this.callback(successMessage, contactMessageBtn), 1250);
  }

  callback(successMessage: HTMLElement, contactMessageBtn: HTMLElement) {
    successMessage.classList.remove('validate');
    contactMessageBtn.classList.remove('d-none');
    successMessage.classList.add('btn-grey');
  }

  /**
  * Navigates to the privacy policy page and scrolls to the top.
  */
  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  ngOnInit(): void {
    AOS.init();
  }

  checkWidth:any = window.innerWidth > 950; 
}
