import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: true,
})
export class HeroComponent {
  scrollToConsultation(): void {
    const consultationElement = document.querySelector('.consultation');
    consultationElement?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTreatments(): void {
    const treatmentsElement = document.querySelector('.treatments');
    treatmentsElement?.scrollIntoView({ behavior: 'smooth' });
  }
}
