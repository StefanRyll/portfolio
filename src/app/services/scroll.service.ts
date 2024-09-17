import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {

  constructor(private router: Router) {}
  
  /**
   * Smoothly scrolls the window to the top.
   * This function uses the `window.scrollTo` method with a smooth scrolling behavior
   * to scroll the window to the top (above the fold).
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  /**
 * Scrolls smoothly to the specified element within the page.
 *
 * @param {string} elementId - The ID of the HTML element to scroll to.
 */
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  moveToHomePage (link?: string) {
    let noHomePage: boolean = false;
    const currentUrl = this.router.url;

    if (currentUrl === '/imprint' || currentUrl === '/privatePolicy') {
      noHomePage = true;
    }

    if (noHomePage) {
      this.router.navigate(['/']);
      setTimeout(() => {
      if (link) {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }}}, 200);
    }
  }
}
