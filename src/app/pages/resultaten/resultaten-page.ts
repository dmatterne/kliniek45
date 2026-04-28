import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-resultaten-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./resultaten-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Resultaten</p>
        <h1>Resultaten</h1>
        <p class="hero-subtitle">
          Eerlijke, onbewerkte voor-en-na-foto&rsquo;s van echte patiënten van HaarKliniek 45 in
          Grazen, België. Geen filters, geen Photoshop — enkel authentieke resultaten.
        </p>
      </div>
    </section>

    <!-- Coming soon notice -->
    <section class="content-section results-intro">
      <div class="container">
        <div class="intro-notice">
          <span class="notice-icon">📸</span>
          <p>
            Wij openen in 2026 en documenteren elk resultaat zorgvuldig. Binnenkort vindt u hier
            echte voor- en na-foto&rsquo;s van onze cliënten.
          </p>
        </div>
        <div class="coming-soon-block">
          <div class="coming-soon-icon">📸</div>
          <p class="coming-soon-text">Binnenkort beschikbaar</p>
          <p class="coming-soon-subtext">
            HaarKliniek 45 opent haar deuren in 2026. Zodra onze eerste behandelingen plaatsvinden,
            vindt u hier authentieke voor- en na-foto&rsquo;s van onze cliënten.
          </p>
        </div>
        <div class="partner-cta-box">
          <h3>Wilt u al resultaten bekijken?</h3>
          <p>
            Bekijk de bewezen resultaten van onze partner Hair Clinic Wolf op
            <a href="https://www.hairclinicwolf.be" target="_blank" rel="noopener"
              >hairclinicwolf.be</a
            >.
          </p>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="content-section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Wil je weten wat wij voor jou kunnen doen?</h2>
          <p>
            Tijdens een gratis en volledig vrijblijvend consult analyseren onze specialisten uw
            haaruitval, het donorgebied en uw verwachtingen. Zo ontvangt u een eerlijk en
            gepersonaliseerd advies — zonder verplichtingen.
          </p>
          <div class="cta-actions">
            <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
            <a routerLink="/behandelingen" class="btn btn-outline">Alle behandelingen</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Waarom een behandeling bij HaarKliniek 45?</h2>
      </div>
      <div class="badges-track-wrap" aria-hidden="true">
        <div class="badges-track">
          @for (b of trustBadges; track b) {
            <span class="badge-pill">{{ b }}</span>
          }
          @for (b of trustBadges; track b) {
            <span class="badge-pill">{{ b }}</span>
          }
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class ResultatenPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgische kliniek',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
