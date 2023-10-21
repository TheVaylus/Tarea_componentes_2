import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() image: string = "link not found"
  @Input() title: string = "Error loading";
  @Input() description: string = "Error loading";
  @Input() showDescription: boolean = false;
}