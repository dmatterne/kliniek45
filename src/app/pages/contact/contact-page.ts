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
              <span class="info-icon">📍</span>
              <div>
                <strong>Adres</strong>
                <address>
                  Verdaelstraat 45<br />
                  3450 Grazen, België
                </address>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <strong>Telefoon</strong>
                <a href="tel:+32485593302">+32 485 593 302</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">✉️</span>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:info@haarkliniek45.be">info&#64;haarkliniek45.be</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">🕐</span>
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
                  <span class="map-pin">📍</span>
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
              minuten de tijd om uw situatie grondig te bespreken. Onze specialist bekijkt uw
              haarsituatie, bespreekt de mogelijke behandelingen en stelt een persoonlijk
              behandelplan op. U ontvangt een gedetailleerde offerte — geheel zonder verplichting.
            </p>
            <ul class="consult-bullets">
              <li>30–45 minuten persoonlijk gesprek</li>
              <li>Grondige analyse van uw haarsituatie</li>
              <li>Overzicht van mogelijke behandelingen</li>
              <li>Persoonlijk behandelplan op maat</li>
              <li>Gedetailleerde offerte zonder verplichting</li>
            </ul>
            <div class="consult-cta-actions">
              <a href="tel:+32485593302" class="btn btn-primary">Bel voor een afspraak</a>
              <a href="mailto:info@haarkliniek45.be" class="btn btn-outline">Stuur een e-mail</a>
            </div>
          </div>
          <div class="consult-cta-info">
            <div class="cta-info-badge">
              <span class="cta-badge-icon">🎁</span>
              <div>
                <strong>100% gratis</strong>
                <span>Geen kosten verbonden aan het consult</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon">🤝</span>
              <div>
                <strong>Vrijblijvend</strong>
                <span>Geen verplichtingen na het consult</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon">🏥</span>
              <div>
                <strong>Haaradviescentrum</strong>
                <span>Verdaelstraat 45, 3450 Grazen</span>
              </div>
            </div>
            <div class="cta-info-badge">
              <span class="cta-badge-icon">⏰</span>
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
            <div class="reach-icon">📞</div>
            <h3>Bel ons</h3>
            <p>+32 485 593 302</p>
            <span class="reach-note">Ma–Vr: 9:00–18:00 / Za: 9:00–14:00</span>
          </a>
          <a href="mailto:info@haarkliniek45.be" class="reach-card">
            <div class="reach-icon">✉️</div>
            <h3>E-mail ons</h3>
            <p>info&#64;haarkliniek45.be</p>
            <span class="reach-note">Reactie binnen 1 werkdag</span>
          </a>
          <div class="reach-card reach-card-address">
            <div class="reach-icon">📍</div>
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
