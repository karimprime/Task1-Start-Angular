import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScroll: boolean = false;
  isNavbarOpen: boolean = false;

  @HostListener('window:scroll', [])
  scrollUser() {
    this.isScroll = window.scrollY > 0;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('document:click', ['$event'])
  closeNavbar(event: Event) {
    const target = event.target as HTMLElement;
    const isInsideNavbar = target.closest('.navbar');
    if (!isInsideNavbar) {
      this.isNavbarOpen = false;
    }
  }

  closeOnSelection() {
    this.isNavbarOpen = false;
  }
}
