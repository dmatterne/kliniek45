import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-resultaten-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./resultaten-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <h1>Onze Resultaten Spreken voor Zich</h1>
        <p class="subtitle">Echte patiënten, echte transformaties</p>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <p class="intro-text">
          Wij geloven in volledige transparantie: alle foto's zijn authentiek en onbewerkt, gemaakt door onze eigen kliniek.
          Elk resultaat weerspiegelt de toewijding van ons team en het vertrouwen van onze patiënten.
        </p>
      </div>
    </section>

    <section class="voor-na">
      <div class="container">
        <h2>Voor &amp; Na</h2>
        <div class="cards-grid">
          @for (card of cards; track card.label) {
            <div class="ba-card">
              <div class="ba-images">
                <div class="ba-block ba-voor">
                  <span class="ba-label">Voor</span>
                </div>
                <div class="ba-block ba-na">
                  <span class="ba-label">Na</span>
                </div>
              </div>
              <p class="ba-meta">{{ card.label }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class ResultatenPageComponent {
  cards = [
    { label: 'Haartransplantatie man · 2400 grafts · 14 maanden' },
    { label: 'FUE Saffier · 3200 grafts · 16 maanden' },
    { label: 'DHI techniek · 1800 grafts · 12 maanden' },
    { label: 'Haartransplantatie vrouw · 1600 grafts · 18 maanden' },
    { label: 'Baardtransplantatie · 1200 grafts · 10 maanden' },
    { label: 'FUE Saffier · 2600 grafts · 15 maanden' },
  ];
}
