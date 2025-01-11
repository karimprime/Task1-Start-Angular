import { Component } from '@angular/core';
import { galleryOptions } from '../models/gallery.interface.';
import { RouterLink } from '@angular/router';

type snd = string | null | undefined;
@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
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

  gallery: galleryOptions[] = [
    {
      gNameImg: "port1",
      gImage: "/Images/port1.png"
    },
    {
      gNameImg: "port1",
      gImage: "/Images/port2.png"
    },
    {
      gNameImg: "port1",
      gImage: "/Images/port3.png"
    },
    {
      gNameImg: "port1",
      gImage: "/Images/port1.png"
    },
    {
      gNameImg: "port2",
      gImage: "/Images/port2.png"
    },
    {
      gNameImg: "port3",
      gImage: "/Images/port3.png"
    },
  ]


}
