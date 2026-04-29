import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./nazorg-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">›</span>
          <span>Nazorg</span>
        </nav>
        <h1 class="hero-title">Nazorg na Haartransplantatie</h1>
        <p class="hero-subtitle">
          Een succesvolle haartransplantatie stopt niet bij de ingreep — onze begeleiding loopt door
          tot twaalf maanden na uw behandeling. Bij HaarKliniek 45 in Grazen bent u nooit alleen in
          dit traject.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <h2 class="section-title">Nazorg: de sleutel tot een optimaal resultaat</h2>
            <p>
              De eerste dagen en weken na een haartransplantatie zijn beslissend voor het
              uiteindelijke resultaat. De getransplanteerde grafts zijn kwetsbaar en moeten de kans
              krijgen om goed in te groeien. Goede nazorg beschermt de grafts, voorkomt infecties en
              maximaliseert de uiteindelijke haardichtheid.
            </p>
            <p>
              Bij HaarKliniek 45 begeleiden we elke patiënt van vóór de ingreep tot aan het
              eindresultaat na twaalf maanden. Van de eerste wasbeurt tot de definitieve evaluatie —
              wij staan voor u klaar, persoonlijk en bereikbaar.
            </p>
          </div>
          <div class="intro-stats">
            <div class="stat-card">
              <span class="stat-number">10</span>
              <span class="stat-label">Kritieke eerste dagen</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">12</span>
              <span class="stat-label">Maanden volledige begeleiding</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">4</span>
              <span class="stat-label">Nazorgfases</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-section">
      <div class="container">
        <h2 class="section-title">Waarom is nazorg zo belangrijk?</h2>
        <p class="section-subtitle">
          De periode na de ingreep bepaalt voor een groot deel het definitieve resultaat
        </p>
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22V12M12 12C12 7 7 4 2 5c0 5 3 9 10 7M12 12c0-5 5-8 10-7 0 5-3 9-10 7"/></svg></div>
            <h3>Grafts moeten ingroeien</h3>
            <p>
              De eerste tien dagen na de transplantatie zijn kritiek. De grafts moeten zich
              vasthechten in de huid. Elke beschadiging in deze periode kan leiden tot graft-verlies
              en een minder goed eindresultaat.
            </p>
          </div>
          <div class="reason-card">
            <div class="reason-icon">🧼</div>
            <h3>Infecties voorkomen</h3>
            <p>
              Correct wassen is essentieel. Een verkeerde techniek kan bacteriën introduceren of de
              korstjes beschadigen die de grafts beschermen. Onze instructies zijn duidelijk en stap
              voor stap.
            </p>
          </div>
          <div class="reason-card">
            <div class="reason-icon">🛡️</div>
            <h3>Grafts beschermen</h3>
            <p>
              Druk, wrijving, zonlicht en trauma zijn de grootste vijanden van herstellende grafts.
              Weten wat u moet vermijden is net zo belangrijk als weten wat u moet doen.
            </p>
          </div>
          <div class="reason-card">
            <div class="reason-icon">📈</div>
            <h3>Maximaal resultaat</h3>
            <p>
              Patiënten die onze nazorginstructies nauwkeurig opvolgen, bereiken consistent betere
              resultaten qua haardichtheid en een natuurlijk, duurzaam uiterlijk.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="program-section">
      <div class="container">
        <h2 class="section-title">Ons Nazorgprogramma</h2>
        <p class="section-subtitle">Vier fasen van continue persoonlijke begeleiding</p>
        <div class="phases">
          <div class="phase-card">
            <div class="phase-header">
              <span class="phase-badge">Fase 1</span>
              <h3>Dag 1–2 — Eerste wasbeurt</h3>
            </div>
            <p>
              De eerste wasbeurt is een cruciaal moment. U kunt kiezen voor een begeleide wasbeurt
              in onze kliniek te Grazen, of gedetailleerde stap-voor-stap instructies voor thuis
              ontvangen. We leggen de techniek nauwkeurig uit: welke shampoo, welke watertemperatuur
              en hoe zacht te deppen.
            </p>
            <ul class="phase-list">
              <li>Gebruik uitsluitend de meegeleverde speciale shampoo</li>
              <li>Lauwwarm water — nooit te heet</li>
              <li>Zacht deppen, nooit wrijven</li>
              <li>Douchestraal niet direct op het getransplanteerde gebied</li>
            </ul>
          </div>
          <div class="phase-card">
            <div class="phase-header">
              <span class="phase-badge">Fase 2</span>
              <h3>Dag 10 — Eerste controleafspraak</h3>
            </div>
            <p>
              Op dag tien vindt onze eerste formele controle plaats. We beoordelen de genezing,
              geven aanvullende instructies op basis van uw persoonlijk herstelverloop en evalueren
              indien nodig de medicatie.
            </p>
            <ul class="phase-list">
              <li>Beoordeling van genezing en korstjes</li>
              <li>Aanpassen van instructies indien nodig</li>
              <li>Medicatie-evaluatie door onze specialist</li>
              <li>Beantwoorden van al uw vragen</li>
            </ul>
          </div>
          <div class="phase-card">
            <div class="phase-header">
              <span class="phase-badge">Fase 3</span>
              <h3>Maandelijks — Fotocontrole op afstand</h3>
            </div>
            <p>
              Maandelijks stuurt u ons foto's van uw hoofdhuid. Onze specialisten volgen uw
              haargroei op afstand, beantwoorden vragen en kunnen tijdig ingrijpen als er iets
              bijzonders is. Zo heeft u gedurende het hele herstelproces gemoedsrust.
            </p>
            <ul class="phase-list">
              <li>Stuur maandelijkse voortgangsfoto's via WhatsApp of e-mail</li>
              <li>Persoonlijke feedback van onze specialisten</li>
              <li>Vragen stellen wanneer het u uitkomt</li>
              <li>Proactieve signalering bij afwijkingen</li>
            </ul>
          </div>
          <div class="phase-card">
            <div class="phase-header">
              <span class="phase-badge">Fase 4</span>
              <h3>12 Maanden — Eindresultaatevaluatie</h3>
            </div>
            <p>
              Na twaalf maanden is het haar volledig uitgegroeid. We beoordelen samen het
              definitieve resultaat, vergelijken de voor- en nafoto's en bespreken of aanvullende
              behandelingen wenselijk zijn.
            </p>
            <ul class="phase-list">
              <li>Volledige evaluatie van het eindresultaat</li>
              <li>Gedetailleerde vergelijking voor/na documentatie</li>
              <li>Bespreking eventuele vervolgbehandeling</li>
              <li>Definitieve afsluiting van het nazorgdossier</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="reachable-section">
      <div class="container">
        <h2 class="section-title">Altijd bereikbaar voor uw vragen</h2>
        <p class="section-subtitle">
          Heeft u een vraag, zit u ergens mee of wilt u gewoon geruststelling? Wij zijn er voor u —
          ook buiten de afspraken om.
        </p>
        <div class="contact-methods">
          <a href="tel:+32485593302" class="contact-card">
            <span class="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.62 3.33 2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.6a16 16 0 005.5 5.5l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
            <div>
              <strong>Bel ons</strong>
              <span>+32 485 593 302</span>
            </div>
          </a>
          <a
            href="https://wa.me/32485593302"
            class="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
            <div>
              <strong>WhatsApp</strong>
              <span>Stuur een bericht</span>
            </div>
          </a>
          <a href="mailto:info@haarkliniek45.be" class="contact-card">
            <span class="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg></span>
            <div>
              <strong>E-mail</strong>
              <span>info&#64;haarkliniek45.be</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="subpages-section">
      <div class="container">
        <h2 class="section-title">Verdiepende Nazorginformatie</h2>
        <p class="section-subtitle">Alles over de specifieke aspecten van uw herstel</p>
        <div class="subpage-cards">
          <a routerLink="/nazorg/korstjes-na-haartransplantatie" class="subpage-card">
            <span class="subpage-icon">🩹</span>
            <h3>Korstjes na Haartransplantatie</h3>
            <p>
              Korstjes zijn normaal en noodzakelijk. Ontdek wat u wel en niet mag doen, hoe lang ze
              aanhouden en hoe u ze veilig kunt verweken.
            </p>
            <span class="read-more">Lees meer →</span>
          </a>
          <a routerLink="/nazorg/herstel-na-haartransplantatie" class="subpage-card">
            <span class="subpage-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
            <h3>Herstel na Haartransplantatie</h3>
            <p>
              Een complete tijdlijn van dag één tot maand twaalf. Weet precies wat u kunt verwachten
              in elke fase, inclusief informatie over de shockloss.
            </p>
            <span class="read-more">Lees meer →</span>
          </a>
          <a routerLink="/nazorg/slapen-na-haartransplantatie" class="subpage-card">
            <span class="subpage-icon">😴</span>
            <h3>Slapen na Haartransplantatie</h3>
            <p>
              Slaaphouding heeft grote invloed op uw herstel. Ontdek de juiste positie, hoe lang u
              dit moet volhouden en praktische slaaptips.
            </p>
            <span class="read-more">Lees meer →</span>
          </a>
        </div>
      </div>
    </section>

    <section class="dos-donts-section">
      <div class="container">
        <h2 class="section-title">Do's &amp; Don'ts — Snel Overzicht</h2>
        <div class="dos-donts-grid">
          <div class="dos-card">
            <h3 class="dos-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Wel doen</h3>
            <ul>
              <li>Was voorzichtig met de meegeleverde speciale shampoo</li>
              <li>Slaap de eerste nachten op de rug met een nekkussen</li>
              <li>Stuur maandelijks voortgangsfoto's naar ons</li>
              <li>Neem uw medicatie zoals voorgeschreven</li>
              <li>Drink voldoende water en eet gezond</li>
              <li>Neem contact op bij de minste twijfel</li>
              <li>Bescherm uw hoofd tegen direct zonlicht</li>
              <li>Houd uw slaapomgeving koel en schoon</li>
            </ul>
          </div>
          <div class="donts-card">
            <h3 class="donts-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Niet doen</h3>
            <ul>
              <li>Krab nooit aan de korstjes — risico op graft-verlies</li>
              <li>Raak het getransplanteerde gebied niet aan met vuile handen</li>
              <li>Geen intensieve lichaamsbeweging in de eerste week</li>
              <li>Geen direct zonlicht in de eerste week</li>
              <li>Niet roken — vermindert zuurstoftoevoer naar de grafts</li>
              <li>Geen alcohol in de eerste week</li>
              <li>Geen pet of muts in de eerste twee weken</li>
              <li>Geen haargel of haarspray in de eerste twee weken</li>
            </ul>
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
export class NazorgPageComponent {
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
