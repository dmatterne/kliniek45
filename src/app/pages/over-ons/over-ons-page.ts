import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-over-ons-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./over-ons-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Over ons</p>
        <h1>Over HaarKliniek 45</h1>
        <p class="hero-subtitle">
          Uw vertrouwde haarspecialist in België — partner van Hair Clinic Wolf
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a
            href="https://www.hairclinicwolf.be"
            target="_blank"
            rel="noopener"
            class="btn btn-outline btn-light"
            >Bekijk Hair Clinic Wolf</a
          >
        </div>
      </div>
    </section>

    <!-- Missie -->
    <section class="content-section mission-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Onze missie</h2>
            <p>
              HaarKliniek 45 is een nieuwe haarkliniek gevestigd in Grazen (Geetbets), België. Wij
              zijn partner van Hair Clinic Wolf — een toonaangevende haartransplantatiepraktijk in
              Nederland. Samen bieden wij een volledig traject aan: van het eerste gratis consult en
              non-chirurgische behandelingen bij ons in België, tot een eventuele haartransplantatie
              uitgevoerd door het ervaren team van Hair Clinic Wolf.
            </p>
            <p>
              Onze aanpak is altijd individueel. Geen standaardpakketten, geen onrealistische
              beloften — alleen een eerlijk advies op basis van uw unieke situatie.
            </p>
          </div>
          <div class="col">
            <div class="mission-image-block">
              <img
                src="assets/images/logoTransp.png"
                alt="HaarKliniek 45 — Haarspecialist in Grazen, België"
                class="mission-logo"
              />
              <div class="mission-quote">
                <p>
                  &ldquo;Wij geloven dat elk individu recht heeft op een eerlijke, deskundige
                  behandeling — dicht bij huis, met volledige transparantie over kosten,
                  risico&rsquo;s en resultaten.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Aanpak / wat wij doen -->
    <section class="content-section pillars-section">
      <div class="container">
        <h2 class="section-title">Wat wij voor u doen</h2>
        <p class="section-subtitle">
          Van het eerste consult tot de nazorg na uw behandeling — wij begeleiden u op elke stap.
        </p>
        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-icon">💬</div>
            <h3>Intake &amp; Consult</h3>
            <p>
              Gratis kennismakingsgesprek bij ons in Grazen. Jens Vandenreijt analyseert uw
              haaruitval en stelt een persoonlijk behandelplan op.
            </p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon">💚</div>
            <h3>Non-chirurgische behandelingen</h3>
            <p>
              PRP, Hairegen, Micro Haarpigmentatie, Regenera Activa, TrichoTest en meer — allemaal
              uitgevoerd bij HaarKliniek 45 in België.
            </p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon">🤝</div>
            <h3>Haartransplantatie via Hair Clinic Wolf</h3>
            <p>
              Indien een transplantatie de beste optie is, verwijzen wij u door naar onze partner
              Hair Clinic Wolf. U behoudt uw Belgische aanspreekpunt voor de voor- en nazorg.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="content-section team-section">
      <div class="container">
        <h2 class="section-title">Ons team</h2>
        <p class="section-subtitle">Uw vaste aanspreekpunt van begin tot einde.</p>
        <div class="team-grid team-grid--single">
          <div class="team-card">
            <div class="team-photo-wrap">
              <img
                src="assets/images/team/jens-vandenreijt.jpg"
                alt="Jens Vandenreijt — Oprichter &amp; Haarspecialist"
                class="team-photo"
                loading="lazy"
              />
            </div>
            <h3>Jens Vandenreijt</h3>
            <p class="team-role">Oprichter &amp; Haarspecialist</p>
            <p>
              Jens is de oprichter van HaarKliniek 45 en uw eerste aanspreekpunt voor alles wat met
              haaruitval te maken heeft. Met een passie voor haarrestauratie en een sterke
              samenwerking met Hair Clinic Wolf begeleidt hij u van het eerste consult tot het
              eindresultaat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Onze waarden -->
    <section class="content-section pillars-section">
      <div class="container">
        <h2 class="section-title">Onze waarden</h2>
        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-icon">🤝</div>
            <h3>Persoonlijk contact</h3>
            <p>
              U werkt altijd met Jens — geen wisselende gezichten, maar een vast aanspreekpunt
              gedurende uw hele traject.
            </p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon">🎯</div>
            <h3>Transparantie</h3>
            <p>
              Eerlijk advies, geen overbodige behandelingen. U weet op voorhand precies wat u kunt
              verwachten.
            </p>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon">💚</div>
            <h3>Partnerschap</h3>
            <p>
              Toegang tot het netwerk en de expertise van Hair Clinic Wolf — de beste van twee
              werelden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Locatie -->
    <section class="content-section location-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Onze locatie</h2>
            <div class="location-details">
              <div class="location-item">
                <span class="location-icon">📍</span>
                <div>
                  <strong>Adres</strong>
                  <p>Verdaelstraat 45<br />3450 Grazen (Geetbets), België</p>
                </div>
              </div>
              <div class="location-item">
                <span class="location-icon">📞</span>
                <div>
                  <strong>Telefoon</strong>
                  <p><a href="tel:+32485593302">+32 485 593 302</a></p>
                </div>
              </div>
              <div class="location-item">
                <span class="location-icon">✉️</span>
                <div>
                  <strong>E-mail</strong>
                  <p><a href="mailto:info@haarkliniek45.be">info&#64;haarkliniek45.be</a></p>
                </div>
              </div>
              <div class="location-item">
                <span class="location-icon">🕐</span>
                <div>
                  <strong>Openingsuren</strong>
                  <p>Consultaties op afspraak</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="location-highlights">
              <h3>Een rustige omgeving in het Hageland</h3>
              <p>
                HaarKliniek 45 opent haar deuren in 2026 in Grazen (Geetbets), in een rustige en
                groene omgeving in het Belgische Hageland. Wij zorgen voor een serene sfeer die
                bijdraagt aan een ontspannen behandelervaring.
              </p>
              <a routerLink="/contact" class="btn btn-primary">Maak een afspraak</a>
            </div>
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

    <!-- Nav links -->
    <section class="content-section nav-links-section">
      <div class="container">
        <div class="nav-links-grid">
          <a routerLink="/werkwijze" class="nav-link-card">
            <span class="nav-link-icon">📋</span>
            <h3>Onze werkwijze</h3>
            <p>Hoe verloopt een behandeling bij HaarKliniek 45 stap voor stap?</p>
            <span class="nav-link-arrow">→</span>
          </a>
          <a routerLink="/resultaten" class="nav-link-card">
            <span class="nav-link-icon">📸</span>
            <h3>Resultaten</h3>
            <p>Binnenkort: echte voor-en-na-foto&rsquo;s van onze cliënten.</p>
            <span class="nav-link-arrow">→</span>
          </a>
          <a routerLink="/contact" class="nav-link-card">
            <span class="nav-link-icon">✉️</span>
            <h3>Contact &amp; afspraak</h3>
            <p>Plan vandaag nog uw gratis en vrijblijvend consult.</p>
            <span class="nav-link-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class OverOnsPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgische kliniek',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Haarspecialist',
    'Partner van Hair Clinic Wolf',
    'Eerlijk advies',
    'Transparant',
  ];
}
