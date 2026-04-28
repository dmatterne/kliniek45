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

    <!-- Intro -->
    <section class="content-section results-intro">
      <div class="container">
        <div class="intro-notice">
          <span class="notice-icon">📸</span>
          <p>
            Alle getoonde resultaten zijn afkomstig van echte patiënten van HaarKliniek 45 die hun
            foto&rsquo;s ter beschikking hebben gesteld. De foto&rsquo;s zijn niet bewerkt of
            gefilterd. Individuele resultaten kunnen variëren afhankelijk van de mate van
            haaruitval, de gebruikte techniek en de nazorg.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter buttons (visueel, geen JS) -->
    <section class="content-section filter-section">
      <div class="container">
        <div class="filter-bar">
          <button class="filter-btn filter-btn--active" type="button">Alle resultaten</button>
          <button class="filter-btn" type="button">Mannen</button>
          <button class="filter-btn" type="button">Vrouwen</button>
          <button class="filter-btn" type="button">Inhammen</button>
          <button class="filter-btn" type="button">Kruin</button>
        </div>
      </div>
    </section>

    <!-- Galerie grid -->
    <section class="content-section gallery-section">
      <div class="container">
        <div class="gallery-grid">
          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/voor-na-mannen.png"
                alt="Voor en na haartransplantatie mannen — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Mannen</h3>
              <div class="gallery-meta">
                <span class="meta-tag">2800 grafts</span>
                <span class="meta-tag">FUE Saffier</span>
              </div>
              <p>
                Herstel van haarlijn en kruin. Volledige bedekking van het frontale gebied met een
                natuurlijk, leeftijdsadequaat resultaat.
              </p>
            </div>
          </div>

          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/mannen-voor-na-1.png"
                alt="Voor en na haartransplantatie mannen DHI — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Mannen</h3>
              <div class="gallery-meta">
                <span class="meta-tag">2400 grafts</span>
                <span class="meta-tag">DHI</span>
              </div>
              <p>
                DHI-techniek voor hoge haardichtheid en een volledige natuurlijke haarlijn. Minimaal
                donorgebied gebruikt.
              </p>
            </div>
          </div>

          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/mannen-voor-na-2.png"
                alt="Voor en na haartransplantatie mannen FUE — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Mannen</h3>
              <div class="gallery-meta">
                <span class="meta-tag">3200 grafts</span>
                <span class="meta-tag">FUE Saffier</span>
              </div>
              <p>
                Uitgebreid geval van mannelijke kaalheid, volledig behandeld via FUE Saffier in één
                sessie. Indrukwekkende transformatie.
              </p>
            </div>
          </div>

          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/mannen-voor-na-3.png"
                alt="Voor en na haartransplantatie kruin — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Kruin</h3>
              <div class="gallery-meta">
                <span class="meta-tag">2000 grafts</span>
                <span class="meta-tag">DHI</span>
              </div>
              <p>
                Gerichte behandeling van kaalheid op de kruin. DHI zorgt voor maximale dichtheid in
                de kruinzone met een wervelend, natuurlijk patroon.
              </p>
            </div>
          </div>

          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/voor-na-vrouwen.png"
                alt="Voor en na haartransplantatie vrouwen — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Vrouwen</h3>
              <div class="gallery-meta">
                <span class="meta-tag">1600 grafts</span>
                <span class="meta-tag">DHI</span>
              </div>
              <p>
                Vrouwelijke haartransplantatie voor diffuse verdunning. DHI-techniek voor subtiele
                volumeverhoging met behoud van de bestaande haarlijn.
              </p>
            </div>
          </div>

          <div class="gallery-card">
            <div class="gallery-img-wrap">
              <img
                src="assets/images/voor-na-inhammen.png"
                alt="Voor en na haartransplantatie inhammen — HaarKliniek 45"
                loading="lazy"
              />
            </div>
            <div class="gallery-info">
              <h3>Haartransplantatie Inhammen</h3>
              <div class="gallery-meta">
                <span class="meta-tag">1200 grafts</span>
                <span class="meta-tag">FUE Saffier</span>
              </div>
              <p>
                Herstel van de inhammen voor een symmetrische, jeugdige haarlijn. Nauwkeurig
                ontworpen op basis van de gezichtscontouren van de patiënt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Belangrijke mededeling -->
    <section class="content-section disclaimer-section">
      <div class="container">
        <div class="disclaimer-box">
          <h2>Wat u moet weten over resultaten</h2>
          <div class="disclaimer-grid">
            <div class="disclaimer-item">
              <span class="d-icon">⏳</span>
              <h3>Zichtbaar resultaat na 12–18 maanden</h3>
              <p>
                Een haartransplantatie vergt geduld. De getransplanteerde grafts groeien
                geleidelijk. Na 3–4 maanden ziet u de eerste groei; het definitieve, volledige
                resultaat is zichtbaar na 12 tot 18 maanden.
              </p>
            </div>
            <div class="disclaimer-item">
              <span class="d-icon">🔬</span>
              <h3>Individuele resultaten variëren</h3>
              <p>
                Het eindresultaat hangt af van factoren zoals de kwaliteit van uw donorgebied, uw
                haartype, de genetica, de nauwkeurigheid van de techniek en de kwaliteit van uw
                nazorg.
              </p>
            </div>
            <div class="disclaimer-item">
              <span class="d-icon">🌱</span>
              <h3>Wat bepaalt een goed resultaat?</h3>
              <p>
                Graftoverleving wordt bepaald door de extractiemethode, de opslagtijd en de
                implantatieprecisie. De nazorg thuis speelt een even grote rol. Onze specialisten
                bereiden u grondig voor.
              </p>
            </div>
            <div class="disclaimer-item">
              <span class="d-icon">💚</span>
              <h3>Eerlijkheid boven alles</h3>
              <p>
                Wij tonen u alleen echte resultaten. Geen gemanipuleerde foto&rsquo;s, geen
                misleidende belichting. Wat u hier ziet, is wat u bij HaarKliniek 45 in Grazen,
                België kunt verwachten.
              </p>
            </div>
          </div>
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
    '10+ jaar ervaring',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
