import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-haartransplantatie-mannen-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./haartransplantatie-mannen-page.scss'],
  template: `
    <!-- HERO -->
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie mannen</h1>
        <p class="hero-subtitle">
          Heb je last van haarverlies en ben je op zoek naar een oplossing? Bij HaarKliniek 45
          begrijpen we dat haaruitval bij mannen een grote impact kan hebben. Genetische oorzaken,
          stress, trauma of een vorm van alopecia kunnen haarverlies veroorzaken.
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Maak een afspraak</a>
          <a href="#hoe-werkt" class="btn btn-outline-white">Lees verder</a>
        </div>
      </div>
    </section>

    <!-- PARTNER CALLOUT -->
    <section class="partner-callout-section">
      <div class="container">
        <div class="partner-callout">
          <strong>ℹ️ Hoe werkt onze samenwerking?</strong>
          HaarKliniek 45 verzorgt uw intake en begeleiding. De haartransplantatie zelf wordt
          uitgevoerd door het gecertificeerde team van onze partner Hair Clinic Wolf.
        </div>
      </div>
    </section>

    <!-- HAARVERLIESPROCES -->
    <section class="content-section" id="hoe-werkt">
      <div class="container">
        <div class="two-col">
          <div class="two-col-text">
            <h2>Hoe verloopt het haarverliesproces bij mannen?</h2>
            <p>
              Het haarverlies bij mannen volgt specifieke patronen. Sommige mannen ervaren eerst
              haarverlies op hun kruin (vertex), terwijl anderen de haren aan hun slapen als eerst
              verliezen, wat resulteert in inhammen.
            </p>
            <p>
              De haargroei op het achterhoofd en aan de zijkanten blijft in de meeste gevallen
              bewaard. Dit is de haarkrans — deze maakt deel uit van de permanente lichaamsbeharing.
              De haarzakjes in deze haarkrans zijn immuun tegen haaruitval, waardoor dit specifieke
              gebied wordt gekozen als donorgebied voor haartransplantaties.
            </p>
          </div>
          <div class="two-col-aside norwood-visual">
            <div class="norwood-grid">
              @for (n of norwoodScale; track n.label) {
                <div class="norwood-item">
                  <div class="norwood-circle">{{ n.label }}</div>
                  <span>{{ n.desc }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMAGES BEHANDELING -->
    <section class="content-section">
      <div class="container">
        <img src="assets/images/haartransplantatie-mannen-behandeling.jpg" alt="Haartransplantatie mannen behandeling — Hair Clinic Wolf" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/haartransplantatie-mannen-voorkant.jpg" alt="Haartransplantatie mannen resultaat voorkant" loading="lazy" class="content-img" width="800" height="533">
      </div>
    </section>

    <!-- VOOR EN NA -->
    <section class="content-section alt-bg">
      <div class="container">
        <h2 class="section-heading-center">Haartransplantatie mannen voor en na</h2>
        <p class="section-sub-center">
          Benieuwd naar de resultaten? Bekijk hieronder enkele voor en na foto's van onze partner
          Hair Clinic Wolf.
        </p>
        <p class="section-attribution">
          <em>Resultaten behaald door onze partner Hair Clinic Wolf</em>
        </p>
        <div class="results-grid">
          @for (img of voorNaImages; track img.src) {
            <div class="result-card">
              <img [src]="img.src" [alt]="img.alt" loading="lazy" class="result-img" />
            </div>
          }
        </div>
      </div>
    </section>

    <!-- HOE WERKT EEN HAARTRANSPLANTATIE -->
    <section class="content-section">
      <div class="container">
        <div class="two-col reverse">
          <div class="two-col-text">
            <h2>Hoe werkt een haartransplantatie bij mannen?</h2>
            <p>
              Via onze partner Hair Clinic Wolf kunt u een haartransplantatie ondergaan waarbij een
              permanente oplossing voor haarverlies wordt gerealiseerd. Via geavanceerde technieken
              verplaatsen ze haarzakjes — ook wel grafts genoemd — van een gezond donorgebied naar
              de zones waar u haarverlies heeft. Dit resulteert in een natuurlijke en blijvende
              haargroei.
            </p>
            <p>
              Naast een haartransplantatie kunnen we je bij HaarKliniek 45 ook helpen met haargroei
              stimulerende behandelingen zoals PRP, Hairegen en Regenera Activa.
            </p>
            <a routerLink="/contact" class="btn btn-primary">Persoonlijke prijsopgave</a>
          </div>
          <div class="two-col-aside feature-aside">
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <div>
                <strong>Permanente resultaten</strong>
                <p>Getransplanteerde haren groeien levenslang mee.</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <div>
                <strong>Minimaal invasief</strong>
                <p>Geen zichtbare littekens in het donorgebied.</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <div>
                <strong>Snel herstel</strong>
                <p>Doorgaans volledig herstel voor dagelijkse activiteiten binnen enkele dagen.</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✓</div>
              <div>
                <strong>Natuurlijk resultaat</strong>
                <p>Elke graft wordt geplaatst op de juiste hoek en richting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- METHODEN -->
    <section class="content-section alt-bg" id="methoden">
      <div class="container">
        <h2>Welke haartransplantatie methoden zijn er?</h2>
        <p>
          Er zijn verschillende technieken om haarzakjes vanuit de haarkrans te verplaatsen. De
          nieuwste en meest populaire behandelmethode is DHI. Bij deze methode worden de haarzakjes
          direct geïmplanteerd met een speciale DHI-pen. Er zijn geen incisies nodig waardoor er
          minder bloedingen en schade ontstaan en het behandelde gebied sneller geneest.
        </p>
        <p>
          Een haartransplantatie via de DHI-methode zorgt voor mooie en natuurlijke resultaten
          waarbij geen littekens ontstaan.
        </p>
        <div class="methoden-grid">
          @for (m of methoden; track m.title) {
            <div class="methode-card">
              <div class="methode-header">
                <span class="methode-tag">{{ m.tag }}</span>
                <h3>{{ m.title }}</h3>
              </div>
              <p>{{ m.desc }}</p>
              <a [routerLink]="m.link" class="link-arrow">Meer info →</a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CONSULT CTA -->
    <app-consultation />

    <!-- WAAROM DHI -->
    <section class="content-section" id="dhi">
      <div class="container">
        <h2>Waarom een haartransplantatie via de DHI-methode?</h2>
        <p>
          Via onze partner Hair Clinic Wolf is de DHI-methode beschikbaar voor haartransplantaties
          bij mannen om diverse goede redenen:
        </p>
        <div class="voordelen-grid">
          @for (v of dhiVoordelen; track v.title) {
            <div class="voordeel">
              <div class="voordeel-icon">✓</div>
              <div>
                <strong>{{ v.title }}</strong>
                <p>{{ v.desc }}</p>
              </div>
            </div>
          }
        </div>
        <div class="cta-center">
          <a routerLink="/contact" class="btn btn-primary">Maak een afspraak</a>
        </div>
      </div>
    </section>

    <!-- KOSTEN -->
    <section class="content-section alt-bg">
      <div class="container">
        <h2>Haartransplantatie mannen kosten</h2>
        <p>
          Een veelgestelde vraag is: "Wat zijn de kosten voor een haartransplantatie voor mannen?"
          Bij HaarKliniek 45 streven we ernaar om onze begeleiding betaalbaar en transparant te
          houden. U ontvangt altijd een eerlijke, op maat gemaakte prijsopgave vóór u beslist.
        </p>
        <p>
          Om erachter te komen of u geschikt bent voor een haartransplantatie gaan we graag met u in
          gesprek. Bij HaarKliniek 45 geven we hier altijd een eerlijk advies over. Niet iedere man
          is namelijk geschikt voor een haartransplantatie — een gratis consult geeft u
          duidelijkheid zonder enige verplichting.
        </p>
        <div class="kosten-cta-row">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/behandelingen/haartransplantatie-kosten" class="btn btn-outline-green">
            Kosten bekijken
          </a>
        </div>
      </div>
    </section>

    <!-- TRUST BADGES -->
    <section class="trust-section">
      <div class="container">
        <h2 class="section-heading-center">Waarom starten bij HaarKliniek 45?</h2>
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
  `,
})
export class HaartransplantatieMannenPageComponent {
  voorNaImages = [
    { src: 'assets/images/mannen-voor-na-1.png', alt: 'Haartransplantatie man voor en na 1' },
    { src: 'assets/images/mannen-voor-na-2.png', alt: 'Haartransplantatie man voor en na 2' },
    { src: 'assets/images/mannen-voor-na-3.png', alt: 'Haartransplantatie man voor en na 3' },
  ];

  norwoodScale = [
    { label: 'I', desc: 'Geen haaruitval' },
    { label: 'II', desc: 'Lichte inhammen' },
    { label: 'III', desc: 'Duidelijke inhammen' },
    { label: 'IV', desc: 'Kruin dun' },
    { label: 'V', desc: 'Uitgebreide kaalheid' },
    { label: 'VI', desc: 'Verbinding kruin' },
    { label: 'VII', desc: 'Ernstige kaalheid' },
  ];

  methoden = [
    {
      tag: 'Meest populair',
      title: 'DHI Haartransplantatie',
      desc: 'De meest geavanceerde methode waarbij haarzakjes direct worden geïmplanteerd met een speciale DHI-pen — geen incisies, minimale schade, snel herstel.',
      link: '/behandelingen/dhi',
    },
    {
      tag: 'Bewezen techniek',
      title: 'FUE Saffier',
      desc: 'Bij FUE Saffier worden fijne saffieren mesjes gebruikt voor de incisies, wat zorgt voor een minimaal trauma aan de huid en een snellere genezing.',
      link: '/behandelingen/fue-saffier',
    },
  ];

  dhiVoordelen = [
    {
      title: 'Directe haarimplantatie',
      desc: 'Met DHI worden haarzakjes rechtstreeks in het gewenste gebied geplaatst, zonder de noodzaak voor incisies. Dit betekent nauwkeurige en zorgvuldige implantatie.',
    },
    {
      title: 'Minder bloeding en schade',
      desc: 'Omdat er geen incisies zijn, is er bijna geen bloeding tijdens de procedure en wordt de huid minimaal beschadigd. Dit zorgt voor meer comfort en minder risico op complicaties.',
    },
    {
      title: 'Sneller herstel',
      desc: 'Door minimale schade en minder risico op bloedingen is de hersteltijd na een DHI-transplantatie korter. Je kunt sneller genieten van je nieuwe haardos.',
    },
    {
      title: 'Precisie en veiligheid',
      desc: 'De DHI-implanter biedt de chirurg volledige controle over de richting, hoek en diepte van de geïmplanteerde haarzakjes, wat zorgt voor een nauwkeurige en veilige procedure.',
    },
  ];

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
