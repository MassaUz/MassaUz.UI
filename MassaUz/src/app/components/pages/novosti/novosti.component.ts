import { Component } from '@angular/core';
import { News } from '../../../interfaces/news';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novosti',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './novosti.component.html',
  styleUrl: './novosti.component.scss'
})
export class NovostiComponent {
novosti!:News[]
  pageIndex:number=1
  size:number=10
  


}
