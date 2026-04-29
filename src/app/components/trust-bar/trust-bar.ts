import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [],
  templateUrl: './trust-bar.html',
  styleUrl: './trust-bar.scss',
})
export class TrustBarComponent {
  pills = [
    'Partner van Hair Clinic Wolf',
    'Gratis consult',
    'Gecertificeerde chirurgen',
    'Belgisch adviescentrum',
    'Non-chirurgische behandelingen',
    'Persoonlijke nazorg',
  ];
}
