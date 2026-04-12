import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-resultaten-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./resultaten-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Echte resultaten</p>
        <h1>Ervaringen &amp; resultaten van onze klanten</h1>
        <p class="hero-subtitle">Alle resultaten zijn authentiek — echte patiënten, onbewerkte foto's, eerlijke verhalen.</p>
        <div class="hero-rating">
          <span class="rating-stars">★★★★★</span>
          <span><strong>4,9 / 5,0</strong> — gebaseerd op 150+ Google Reviews</span>
        </div>
      </div>
    </section>

    <section class="voor-na-section">
      <div class="container">
        <h2 class="section-title">Voor &amp; Na</h2>
        <p class="section-subtitle">Een selectie van onze behandelresultaten — een jaar na de ingreep</p>
        <div class="cards-grid">
          @for (card of cards; track card.label) {
            <div class="ba-card">
              <div class="ba-images">
                <div class="ba-block ba-voor">
                  <span class="ba-label">Voor</span>
                  <div class="ba-placeholder before-img">
                    <span class="ba-icon">📷</span>
                  </div>
                </div>
                <div class="ba-divider">→</div>
                <div class="ba-block ba-na">
                  <span class="ba-label after">Na</span>
                  <div class="ba-placeholder after-img">
                    <span class="ba-icon">✨</span>
                  </div>
                </div>
              </div>
              <div class="ba-meta">
                <strong>{{ card.label }}</strong>
                <span>{{ card.detail }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title" style="color:white">Wat klanten vinden?</h2>
        <p class="section-subtitle" style="color:rgba(255,255,255,0.75)">Lees de ervaringen van onze patiënten</p>
        <div class="testimonials-grid">
          @for (t of testimonials; track t.name) {
            <div class="testimonial-card">
              <div class="t-header">
                <div class="t-avatar">{{ t.initial }}</div>
                <div class="t-meta">
                  <strong>{{ t.name }}</strong>
                  <span>{{ t.date }}</span>
                </div>
                <div class="t-stars">★★★★★</div>
              </div>
              <p class="t-quote">"{{ t.quote }}"</p>
              <div class="t-treatment">{{ t.treatment }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat">
            <strong>500+</strong>
            <span>Tevreden patiënten</span>
          </div>
          <div class="stat">
            <strong>4,9/5</strong>
            <span>Gemiddelde Google beoordeling</span>
          </div>
          <div class="stat">
            <strong>98%</strong>
            <span>Slaagpercentage behandelingen</span>
          </div>
          <div class="stat">
            <strong>10+</strong>
            <span>Jaar ervaring in haartransplantatie</span>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class ResultatenPageComponent {
  cards = [
    { label: 'Haartransplantatie mannen', detail: 'FUE Saffier · 3.200 grafts · 16 maanden' },
    { label: 'Haartransplantatie inhammen', detail: 'DHI · 2.100 grafts · 12 maanden' },
    { label: 'Haartransplantatie vrouwen', detail: 'FUE · 1.800 grafts · 18 maanden' },
    { label: 'Haartransplantatie kruin', detail: 'FUE Saffier · 2.800 grafts · 14 maanden' },
    { label: 'Baardtransplantatie', detail: 'DHI · 1.200 grafts · 10 maanden' },
    { label: 'Long Hair transplantatie', detail: 'FUE · 2.600 grafts · 15 maanden' },
  ];

  testimonials = [
    {
      initial: 'T',
      name: 'Thomas V.',
      date: '6 maanden geleden',
      quote: 'Al jaren leed ik onder haaruitval, wat mijn zelfvertrouwen enorm aantastte. Bij HaarKliniek 45 voelde ik me meteen begrepen. De begeleiding was uitstekend en het resultaat na 12 maanden is indrukwekkend.',
      treatment: 'FUE Saffier · 3.200 grafts',
    },
    {
      initial: 'R',
      name: 'Rik M.',
      date: '4 maanden geleden',
      quote: 'Een perfecte organisatie! Professioneel team, duidelijke communicatie en een geweldig eindresultaat. Van het eerste consult tot de nazorg — alles verliep vlekkeloos.',
      treatment: 'DHI · 2.100 grafts',
    },
    {
      initial: 'S',
      name: 'Sander K.',
      date: '3 maanden geleden',
      quote: 'Van A tot Z perfect begeleid. Elk stadium van het proces werd uitgelegd. Ik ben enorm tevreden met zowel de aanpak als het eindresultaat.',
      treatment: 'FUE · 1.800 grafts',
    },
    {
      initial: 'A',
      name: 'An L.',
      date: '8 maanden geleden',
      quote: 'Als vrouw met diffuse haaruitval was ik aanvankelijk sceptisch. HaarKliniek 45 heeft mijn verwachtingen overtroffen. Mijn haar is duidelijk dikker geworden en ik voel me eindelijk weer mezelf.',
      treatment: 'FUE · 1.600 grafts',
    },
    {
      initial: 'M',
      name: 'Mathias D.',
      date: '1 jaar geleden',
      quote: 'Ik had al 15 jaar last van kaalheid aan de kruin. Na de ingreep bij HaarKliniek 45 heb ik eindelijk de haarlijn van mijn twintigste terug. Absoluut de beste investering in mijn leven.',
      treatment: 'FUE Saffier · 2.800 grafts',
    },
    {
      initial: 'J',
      name: 'Jonas P.',
      date: '5 maanden geleden',
      quote: 'De baardtransplantatie heeft mijn uitstraling volledig getransformeerd. Het team is vakkundig en vriendelijk. Ik zou het aan iedereen aanbevelen die dit overweegt.',
      treatment: 'Baardtransplantatie · DHI',
    },
  ];
}

