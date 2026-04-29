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
    { icon: 'expertise', label: 'Expertise' },
    { icon: 'betrouwbaar', label: 'Betrouwbaar' },
    { icon: 'snel-resultaat', label: 'Snel resultaat' },
    { icon: 'geen-bijwerkingen', label: 'Geen bijwerkingen' },
    { icon: 'geen-herstelperiode', label: 'Geen herstelperiode' },
    { icon: 'kortere-behandeltijd', label: 'Korte behandeltijd' },
  ];
}
