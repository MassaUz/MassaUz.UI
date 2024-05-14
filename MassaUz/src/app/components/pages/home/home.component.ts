import { Component } from '@angular/core';
import { HomeTopComponent } from './home-top/home-top.component';
import { CardComponent } from '../card/card.component';
import { VoprosiComponent } from '../voprosi/voprosi.component';
import { SubcribeComponent } from '../../subcribe/subcribe.component';
import { ConsultationComponent } from '../consultation/consultation.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SubcribeComponent, HomeTopComponent, CardComponent, VoprosiComponent, ConsultationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
