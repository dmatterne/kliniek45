import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-inhammen-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./haartransplantatie-inhammen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie Inhammen</h1>
        <p class="hero-subtitle">
          Last van een teruglopende haargrens of inhammen? Bij HaarKliniek 45 in Grazen bieden we
          een permanente oplossing met bewezen technieken.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Inhammen terug laten groeien</h2>
            <p>
              Heb je als man of vrouw last van inhammen en wil je hier iets aan laten doen? Bij
              HaarKliniek 45 begrijpen we dat het ontwikkelen van inhammen het zelfvertrouwen kan
              beinvloeden. Het terugtrekken van de haargrens komt vaak voor na een bepaalde
              leeftijd. Daarom bieden wij gespecialiseerde haartransplantaties voor inhammen aan om
              dit probleem permanent aan te pakken.
            </p>
            <p>
              Inhammen komen veel voor bij zowel mannen als vrouwen die een teruglopende haargrens
              ontwikkelen. Dit natuurlijke fenomeen wordt veroorzaakt door overmatig haarverlies,
              waardoor kale plekken aan de zijkanten van het hoofd ontstaan. Veel mensen voelen zich
              onzeker door inhammen en proberen deze te verbergen, maar dit is geen
              langetermijnoplossing.
            </p>
            <p>
              Een haartransplantatie kan een permanente oplossing bieden. Bij deze behandeling
              worden haren van het achterhoofd naar de kalende plekken aan de voorkant
              getransplanteerd. Dit zorgt voor een natuurlijke en langdurige oplossing.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-inhammen.png"
              alt="Haartransplantatie inhammen voor en na - HaarKliniek 45"
            />
          </div>
        </div>
        <img src="assets/images/haartransplantatie-inhammen-behandeling.jpg" alt="Inhammen behandeling — Hair Clinic Wolf" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/haartransplantatie-inhammen-zijkant.jpg" alt="Inhammen resultaat zijkant" loading="lazy" class="content-img" width="800" height="533">
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Oorzaken van inhammen</h2>
        <p>
          Inhammen bij zowel mannen als vrouwen ontstaan meestal door genetische factoren. Bij
          mannen is het vaak gerelateerd aan mannelijke kaalheid (androgene alopecia), terwijl bij
          vrouwen hormonale veranderingen, genetica en veroudering een rol kunnen spelen bij het
          ontwikkelen van inhammen.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Androgene alopecia (mannelijke kaalheid):</strong> De meest voorkomende oorzaak
            bij mannen - genetisch bepaald haarverlies dat begint aan de slapen
          </li>
          <li>
            <strong>Hormonale veranderingen bij vrouwen:</strong> Schommelingen in hormoonspiegels
            kunnen de haargrens doen terugtrekken
          </li>
          <li>
            <strong>Veroudering:</strong> Met het ouder worden kan de haargrens van nature
            terugtrekken
          </li>
          <li>
            <strong>Erfelijkheid:</strong> Als familieleden inhammen hebben, is de kans groter dat u
            dit ook zult ontwikkelen
          </li>
          <li>
            <strong>Haarverzorging:</strong> Overmatige spanning op het haar (strakke kapsels,
            trekken) kan de haargrens beschadigen
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Inhammen opvullen met een haartransplantatie</h2>
        <p>
          Dankzij methoden zoals DHI (Direct Hair Implantation), is een haartransplantatie voor
          inhammen tegenwoordig een minder zware ingreep dan vroeger. Bij deze methode verzamelen we
          gezonde haarzakjes een voor een uit het achterhoofd en transplanteren we deze in de kale
          plekken. Dit herstelt de oorspronkelijke haarlijn en verbetert de gezichtsverhoudingen.
        </p>
        <p>
          De behandeling verloopt onder plaatselijke verdoving, zodat u doorgaans geen pijn ervaart tijdens de
          ingreep. Na de behandeling kunnen er tijdelijk korstjes en lichte roodheid optreden, maar
          dit verdwijnt binnen enkele weken. Het eindresultaat is permanent en zichtbaar na 12 tot
          14 maanden.
        </p>
        <div class="two-col" style="margin-top: 2rem;">
          <div class="info-box">
            <h3>Hoeveel grafts zijn nodig?</h3>
            <p>
              Het aantal grafts dat nodig is voor het opvullen van de inhammen is afhankelijk van uw
              persoonlijke situatie - de grootte van het behandelgebied en de gewenste dichtheid. Na
              het gratis consult met onze specialist in Grazen wordt dit duidelijk. Wij geven u
              altijd een eerlijk en persoonlijk advies.
            </p>
          </div>
          <div class="info-box">
            <h3>Ben ik geschikt?</h3>
            <p>
              Om erachter te komen of u geschikt bent voor een haartransplantatie voor inhammen gaan
              we graag met u in gesprek. Niet iedereen is geschikt. We behandelen geen personen met
              tijdelijk haarverlies. Ook is voldoende donormateriaal in het achterhoofd vereist.
              Heeft u hart- en vaatziekten, diabetes of hematologische aandoeningen? Dan beoordeelt
              onze arts uw geschiktheid.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Waarom de DHI-methode voor inhammen?</h2>
        <p>
          Bij HaarKliniek 45 bieden we de DHI-methode aan voor haartransplantaties van de inhammen.
          Deze geavanceerde techniek heeft diverse voordelen boven oudere methoden.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h3>Directe haarimplantatie</h3>
            <p>
              Met DHI worden haarzakjes rechtstreeks in het gewenste gebied geplaatst, zonder de
              noodzaak voor incisies. Dit zorgt voor nauwkeurige en zorgvuldige implantatie langs de
              haargrens.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><img src="assets/icons/process-icons-2025/minder-bloeding-en-schade.png" alt="" width="32" height="32" aria-hidden="true"></div>
            <h3>Minder bloeding en schade</h3>
            <p>
              Omdat er geen incisies zijn, is er bijna geen bloeding tijdens de procedure en wordt
              de huid minimaal beschadigd. Dit zorgt voor meer comfort en minder risico op
              complicaties.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <h3>Sneller herstel</h3>
            <p>
              Door minimale schade en minder risico op bloedingen is de hersteltijd na een
              DHI-transplantatie korter. U kunt sneller genieten van uw herstelde haarlijn.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l4 4 4-4V3M5 7H3m18 0h-2"/></svg></div>
            <h3>Precisie en veiligheid</h3>
            <p>
              De DHI-implanter biedt de chirurg volledige controle over de richting, hoek en diepte
              van de geimplanteerde haarzakjes. Dit is cruciaal voor een natuurlijk ogende
              haargrens.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 19.82L5.71 18M3.82 19.82L5.71 18M3.82 19.82c1.5-1 6-2.5 10-3M3.82 19.82l1.89-1.82"/></svg></div>
            <h3>Natuurlijke haargrens</h3>
            <p>
              Door de precieze plaatsingstechniek kunnen we een haargrens creeren die er volkomen
              natuurlijk uitziet en perfect aansluit bij uw gezichtsstructuur.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></div>
            <h3>Langdurig, natuurlijk resultaat</h3>
            <p>
              De getransplanteerde haarzakjes zijn afkomstig uit een gebied dat resistent is tegen
              haarverlies. Eenmaal getransplanteerd, blijven ze voor het leven haar produceren.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe verloopt het traject bij HaarKliniek 45?</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>De consultatie</h3>
            <p>
              Tijdens het gratis consultatiegesprek bespreken we al uw wensen en heeft u alle
              gelegenheid om vragen te stellen. De consultatie vindt plaats in onze kliniek in
              Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Start behandeling</h3>
            <p>
              U ontvangt van ons richtlijnen om de behandeling zo effectief mogelijk te laten
              verlopen. Als een transplantatie passend is, vindt de chirurgische behandeling plaats
              via Hair Clinic Wolf.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven u adviseren na de behandeling. U ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Uw tevredenheid staat centraal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Kosten haartransplantatie inhammen</h2>
        <p>
          Bij HaarKliniek 45 houden we van transparantie en duidelijkheid. Onze prijzen zijn op maat
          en er zijn geen financiele verrassingen achteraf. De kosten zijn afhankelijk van de omvang
          van het behandelgebied en uw persoonlijke situatie.
        </p>
        <p>
          Benieuwd wat een haartransplantatie voor inhammen bij u zou kosten? Vraag vandaag nog een
          gratis en vrijblijvend consult aan. We bespreken graag de mogelijkheden en geven u een
          persoonlijke prijsopgave zonder verplichtingen.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Geen vaste prijs per graft:</strong> Wij werken met totaalpakketten - geen
            verrassingen achteraf
          </li>
          <li>
            <strong>Gratis consultatie:</strong> Het eerste gesprek is altijd gratis en geheel
            vrijblijvend
          </li>
          <li><strong>Transparante aanpak:</strong> U weet altijd precies wat u kunt verwachten</li>
          <li>
            <strong>Geen vergoeding van verzekering:</strong> Haartransplantatie wordt beschouwd als
            cosmetische ingreep
          </li>
        </ul>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over haartransplantatie voor inhammen? Bekijk onze veelgestelde vragen
          voor antwoorden over geschiktheid, methodes, risicos en kosten.
        </p>
        <a [routerLink]="['/faq']">Bekijk alle veelgestelde vragen &rarr;</a>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-heading-center">Waarom starten bij HaarKliniek 45?</h2>
      </div>
      <div class="badges-track-wrap" aria-hidden="true">
        <div class="badges-track">
          <ng-container *ngFor="let _ of [1, 2]">
            <span class="badge-pill" *ngFor="let b of trustBadges">{{ b }}</span>
          </ng-container>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class HaartransplantatieInhammenPageComponent {
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
