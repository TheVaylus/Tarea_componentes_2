import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  cardData = [
    { 
      title: 'Glyph Interface',
      description: 'Unique light patterns indicate who’s calling. Signals app notifications, charging status and more.',
      image: '../../assets/images/phone_lights.webp',
      showDescription: false
    },
    { 
      title: 'Display',
      description: '6.55” AMOLED display. HDR10+. Richer colour and deeper contrasts, tuned to each scene.',
      image: '../../assets/images/display.jpeg',
      showDescription: false
    },
    { 
      title: 'Sustainability',
      description: 'Made with 100% recycled aluminium.',
      image: '../../assets/images/green.jpg',
      showDescription: false
    }
  ];

}
