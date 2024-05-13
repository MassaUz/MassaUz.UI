import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() title:string="Default"
  @Input() soni:number= 0
  @Input() catalog:string= "Default"
  @Input() company:string= "Default"
  @Input() price:number= 0
}
