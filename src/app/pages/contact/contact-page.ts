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
        <div class="contact-layout">
          <!-- Left: contact info -->
          <div class="contact-info-col">
            <div class="info-card">
              <h2>Contactgegevens</h2>

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
                      <span>Maandag – Vrijdag</span>
                      <span>9:00 – 18:00</span>
                    </div>
                    <div class="hours-row">
                      <span>Zaterdag</span>
                      <span>9:00 – 14:00</span>
                    </div>
                    <div class="hours-note">Op afspraak</div>
                  </div>
                </div>
              </div>

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
                  <span class="social-icon" aria-label="Facebook">f</span>
                  <span class="social-icon" aria-label="Instagram">📷</span>
                  <span class="social-icon" aria-label="WhatsApp">💬</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: contact form -->
          <div class="form-col">
            <div class="form-card">
              <h2>Stuur ons een bericht</h2>
              <p class="form-intro">U ontvangt binnen 1 werkdag een reactie.</p>

              <form class="contact-form" (submit)="onFormSubmit($event)">
                <div class="form-row">
                  <div class="form-group">
                    <label for="naam">Naam <span class="required">*</span></label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      placeholder="Uw volledige naam"
                      required
                    />
                  </div>
                </div>

                <div class="form-row form-row-two">
                  <div class="form-group">
                    <label for="email">E-mailadres <span class="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="uw@email.be"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="telefoon">Telefoonnummer</label>
                    <input type="tel" id="telefoon" name="telefoon" placeholder="+32 ..." />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="onderwerp">Onderwerp</label>
                    <select id="onderwerp" name="onderwerp">
                      <option value="">Kies een onderwerp...</option>
                      <option value="consult">Gratis consult aanvragen</option>
                      <option value="info">Informatie over behandelingen</option>
                      <option value="nazorg">Nazorg vragen</option>
                      <option value="samenwerking">Samenwerking</option>
                      <option value="overige">Overige</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="bericht">Bericht <span class="required">*</span></label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows="6"
                      placeholder="Schrijf hier uw bericht of vraag..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group form-group-check">
                    <label class="checkbox-label">
                      <input type="checkbox" name="privacy" required />
                      <span>
                        Ik ga akkoord met het
                        <a routerLink="/privacybeleid">privacybeleid</a>
                      </span>
                    </label>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-submit">Verzend bericht</button>
                <p class="form-note">
                  <span>🔒</span>
                  Uw gegevens worden vertrouwelijk behandeld. U ontvangt binnen 1 werkdag een
                  reactie van ons team.
                </p>
              </form>
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
                <strong>Belgische kliniek</strong>
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
export class ContactPageComponent {
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

  onFormSubmit(e: Event): void {
    e.preventDefault();
  }
}
