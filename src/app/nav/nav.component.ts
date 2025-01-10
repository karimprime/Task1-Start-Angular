import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isScroll : boolean = false;

  @HostListener('window:scroll', [])
  scrollUser(){
    if(scrollY>0){
      this.isScroll = true;
    }else{
      this.isScroll = false;

    }
  }
}
