import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.html',
  styleUrls: ['./why-choose.scss'],
  standalone: true,
  imports: [],
})
export class WhyChooseComponent {
  benefits = [
    { icon: 'gratis-consult', label: 'Gratis consult' },
    { icon: 'expertise', label: 'Partnertraject' },
    { icon: 'betrouwbaar', label: 'Betrouwbaar' },
    { icon: 'snel-resultaat', label: 'Lokale opvolging' },
    { icon: 'geen-bijwerkingen', label: 'Heldere uitleg' },
    { icon: 'geen-herstelperiode', label: 'Nazorg in Grazen' },
    { icon: 'kortere-behandeltijd', label: 'Discrete begeleiding' },
  ];
}
