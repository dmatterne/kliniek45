import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./contact-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">›</span>
          <span>Contact</span>
        </nav>
        <h1 class="hero-title">Neem Contact Op</h1>
        <p class="hero-subtitle">
          Wij helpen u graag verder — of u nu een vraag heeft over een behandeling, een vrijblijvend
          consult wilt inplannen of meer informatie wenst. Elk contact is geheel vrijblijvend.
        </p>
      </div>
    </section>

    <section class="contact-main-section">
      <div class="container">
        <div class="contact-info-grid">
          <div class="info-card">
            <div class="info-item">
              <span class="info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
              <div>
                <strong>Adres</strong>
                <address>
                  Verdaelstraat 45<br />
                  3450 Grazen, België
                </address>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.33 2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.6a16 16 0 005.5 5.5l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
              <div>
                <strong>Telefoon</strong>
                <a href="tel:+32485593302">+32 485 593 302</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg></span>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:info@haarkliniek45.be">info&#64;haarkliniek45.be</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
              <div>
                <strong>Openingsuren</strong>
                <div class="hours">
                  <div class="hours-row">
                    <span>Op afspraak — neem contact op voor beschikbaarheid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="map-placeholder">
              <a
                href="https://www.google.com/maps/search/Verdaelstraat+45+3450+Grazen+Belgie"
                target="_blank"
                rel="noopener noreferrer"
                class="map-link"
                aria-label="Bekijk locatie op Google Maps"
              >
                <div class="map-visual">
                  <span class="map-pin"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
                  <span class="map-text">Bekijk op Google Maps</span>
                  <span class="map-address">Verdaelstraat 45, 3450 Grazen</span>
                </div>
              </a>
            </div>

            <div class="social-row">
              <span class="social-label">Volg ons:</span>
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61585961954316"
                  target="_blank"
                  rel="noopener"
                  class="social-icon"
                  aria-label="Facebook"
                  >f</a
                >
                <a
                  href="https://www.instagram.com/haarkliniek45/"
                  target="_blank"
                  rel="noopener"
                  class="social-icon"
                  aria-label="Instagram"
                  >in</a
                >
                <a
                  href="https://wa.me/32485593302"
                  target="_blank"
                  rel="noopener"
                  class="social-icon"
                  aria-label="WhatsApp"
                  >W</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="consult-cta-section">
      <div class="container">
        <div class="consult-cta-card">
          <div class="consult-cta-text">
            <h2>Plan nu uw gratis en vrijblijvende consultatie</h2>
            <p>
              Tijdens een persoonlijk consult bij HaarKliniek 45 in Grazen nemen we 30 tot 45
              minuten de tijd om uw situatie rustig te bespreken. We bekijken uw haarsituatie,
              lichten mogelijke lokale behandelingen toe en bespreken wanneer een partnertraject via
              Hair Clinic Wolf zinvol kan zijn. U ontvangt duidelijke vervolgstappen — geheel zonder
              verplichting.
            </p>
            <ul class="consult-bullets">
              <li>30–45 minuten persoonlijk gesprek</li>
              <li>Grondige analyse van uw haarsituatie</li>
              <li>Overzicht van mogelijke behandelingen</li>
              <li>Duidelijk advies over lokale opties en partnertrajecten</li>
              <li>Vervolgstappen zonder verplichting</li>
            </ul>
            <div class="consult-cta-actions">
              <a href="tel:+32485593302" class="btn btn-primary">Bel voor een afspraak</a>
              <a href="mailto:info@haarkliniek45.be" class="btn btn-outline">Stuur een e-mail</a>
            </div>
          </div>
          <div class="consult-cta-info">
            <div class="cta-info-badge">
              <span class="cta-badge-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7m0 0a3 3 0 100-6 3 3 0 000 6zm0 0a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
              <div>
                <strong>100% gratis</strong>
                <span>Geen kosten verbonden aan het consult</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></span>
              <div>
                <strong>Vrijblijvend</strong>
                <span>Geen verplichtingen na het consult</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
              <div>
                <strong>Haaradviescentrum</strong>
                <span>Verdaelstraat 45, 3450 Grazen</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
              <div>
                <strong>Snelle reactie</strong>
                <span>Binnen 1 werkdag antwoord</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reach-section">
      <div class="container">
        <h2 class="section-title">Hoe kunt u ons bereiken?</h2>
        <div class="reach-cards">
          <a href="tel:+32485593302" class="reach-card">
            <div class="reach-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.33 2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.6a16 16 0 005.5 5.5l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
            <h3>Bel ons</h3>
            <p>+32 485 593 302</p>
            <span class="reach-note">Ma–Vr: 9:00–18:00 / Za: 9:00–14:00</span>
          </a>
          <a href="mailto:info@haarkliniek45.be" class="reach-card">
            <div class="reach-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg></div>
            <h3>E-mail ons</h3>
            <p>info&#64;haarkliniek45.be</p>
            <span class="reach-note">Reactie binnen 1 werkdag</span>
          </a>
          <div class="reach-card reach-card-address">
            <div class="reach-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
            <h3>Bezoek ons</h3>
            <p>Verdaelstraat 45</p>
            <p>3450 Grazen, België</p>
            <span class="reach-note">Op afspraak</span>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Waarom starten bij HaarKliniek 45?</h2>
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
export class ContactPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgisch adviescentrum',
    'Partner Hair Clinic Wolf',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Duidelijke rolverdeling',
    'Persoonlijke begeleiding',
    'Lokale opvolging',
    'Discrete aanpak',
  ];
}
