import { Component } from '@angular/core';

type snd = string | null | undefined;
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgSrc: snd = "";
  getImgSrc(eventInfo: MouseEvent) {
    let el = eventInfo.currentTarget as HTMLElement;
    this.imgSrc = el.firstElementChild?.getAttribute("src");
  }
  removeImgSrc() {
    this.imgSrc = "";
  }

}
