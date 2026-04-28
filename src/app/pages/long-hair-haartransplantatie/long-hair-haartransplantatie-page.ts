import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-long-hair-haartransplantatie-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./long-hair-haartransplantatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Long Hair Haartransplantatie</h1>
        <p class="hero-subtitle">
          Een haartransplantatie zonder te scheren. Behoud uw volledige haarlengte en herstel
          discreet uw haarlijn bij HaarKliniek 45 in Grazen.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Een ongeschoren techniek</h2>
            <p>
              Een van de nieuwste technieken op het gebied van haartransplantaties is de Long Hair
              haartransplantatiemethode. Bij HaarKliniek 45 in Grazen zijn we uniek in het aanbieden
              van deze behandeling. Met de Long Hair techniek hoeft u uw haar niet te scheren en
              behoudt u direct na de ingreep uw volledige haarlengte.
            </p>
            <p>
              Dit maakt het een ideale keuze voor mensen met lang haar die graag een volle haardos
              willen zonder door een periode met kort haar te gaan, of voor mensen die de
              haartransplantatie discreet en onopvallend willen laten verlopen.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-vrouwen.png"
              alt="Long hair haartransplantatie zonder scheren - HaarKliniek 45"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Wat is de Long Hair haartransplantatie?</h2>
        <p>
          De Long Hair haartransplantatie is een speciale techniek waarbij we gebruik maken van de
          FUE of DHI implantatiemethode, zonder dat er een deel van uw haar geschoren hoeft te
          worden. Dat betekent dat we haarfollikels uit het donorgebied halen zonder dat uw
          haarlengte wordt aangepast. Alleen de haarzakjes die worden getransplanteerd, worden kort
          gemaakt. Dit zorgt ervoor dat de ingreep discreet verloopt, terwijl uw natuurlijke
          haarlengte behouden blijft.
        </p>
        <p>
          Na de behandeling verloopt de haargroei zoals bij een reguliere haartransplantatie: na
          ongeveer drie maanden vallen de getransplanteerde haren tijdelijk uit. Daarna begint het
          haar geleidelijk terug te groeien, en na ongeveer een jaar is het volledige, blijvende
          resultaat zichtbaar.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Long Hair: echt zonder scheren</h2>
        <p>
          Bij veel aanbieders wordt gesproken over een "haartransplantatie zonder scheren", maar in
          werkelijkheid gaat het om een zogenaamde haarsparende transplantatie. Hierbij wordt altijd
          een deel, of het hele donorgebied, geschoren om grafts te kunnen oogsten. Deze methode is
          ook nog steeds bij ons mogelijk.
        </p>
        <p>
          Maar met de Long Hair techniek gaan we nog een stap verder: hierbij blijft uw bestaande
          haar echt ongeschoren. De haarzakjes die worden getransplanteerd, worden kort gemaakt
          voordat ze worden geplaatst. Dit betekent dat het getransplanteerde haar in eerste
          instantie kort is, maar uw bestaande haarlengte blijft volledig intact.
        </p>
        <p>
          In de eerste 10 dagen na de behandeling kunnen korstjes zichtbaar zijn, maar daarna is de
          ingreep vrijwel niet meer te zien. Zo kunt u discreet en onopvallend werken aan een
          vollere haardos, zonder dat iemand merkt dat u een haartransplantatie heeft ondergaan.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Voor wie is de Long Hair methode geschikt?</h2>
        <p>
          De Long Hair haartransplantatie is geschikt voor mensen die een haartransplantatie willen
          ondergaan zonder dat ze hun haar hoeven te scheren. Deze methode is ideaal voor wie
          discreet wil blijven en geen zichtbare veranderingen in het donorgebied wil, ook als het
          haar in dit gebied korter is, bijvoorbeeld 2 cm.
        </p>
        <p>
          Houd er rekening mee dat de Long Hair techniek alleen geschikt is voor het transplanteren
          van een beperkt aantal grafts. Voor grotere gebieden kan de behandeling over meerdere
          dagen worden verspreid, maar de techniek is minder geschikt voor heel grote gebieden. De
          Long Hair haartransplantatie is daarmee vooral een oplossing voor wie graag een subtiele
          verdichting wil zonder ingrijpende veranderingen.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Lang haar:</strong> Ideaal voor mensen die hun bestaande haarlengte volledig
            willen behouden
          </li>
          <li>
            <strong>Discrete behandeling:</strong> Geschikt voor wie de behandeling privé wil houden
            en direct na de ingreep in het openbaar wil verschijnen
          </li>
          <li>
            <strong>Subtiele verdichting:</strong> Perfect voor wie een beperkt aantal grafts wil
            transplanteren
          </li>
          <li>
            <strong>Snel herstel:</strong> Na 10 dagen zijn de korstjes weg en is vrijwel niets meer
            te zien
          </li>
        </ul>
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
              verlopen. De behandeling vindt plaats in onze kliniek in Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven u adviseren na de behandeling. U ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Persoonlijke begeleiding staat centraal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Voordelen van de Long Hair techniek</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">✂️</div>
            <h3>Geen scheren nodig</h3>
            <p>
              Bij deze techniek blijft al het haar op volledige lengte. Uw bestaande haarlengte
              wordt niet aangepast tijdens de behandeling.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">👁️</div>
            <h3>Onopvallend herstel</h3>
            <p>
              De eerste 10 dagen kunnen korstjes zichtbaar zijn, maar daarna is van de ingreep
              vrijwel niets meer te zien. Discreet en onopvallend.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💆</div>
            <h3>Behoud van haarlengte</h3>
            <p>
              U behoudt uw bestaande haarlengte, waardoor u onopvallend kunt werken aan een vollere
              haardos zonder overgangsperiode.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3>Discrete behandeling</h3>
            <p>
              Ideaal voor wie zijn haartransplantatie prive wil houden. Collega's, vrienden en
              familie hoeven het niet te merken.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat kost een Long Hair haartransplantatie?</h2>
        <p>
          De Long Hair haartransplantatie is een geavanceerde techniek die zorgvuldig en met
          precisie wordt uitgevoerd. Het verwijderen en implanteren van de gezonde haarwortels
          vereist een specialistische chirurgische aanpak om een natuurlijk en langdurig resultaat
          te garanderen.
        </p>
        <p>
          Omdat de behandeling maatwerk is en het aantal benodigde sessies per persoon kan
          verschillen, varieren ook de kosten. Sommige mensen kiezen bijvoorbeeld voor twee
          transplantatiedagen om een groter gebied te behandelen, wat de prijs beinvloedt.
        </p>
        <p>
          Benieuwd naar de mogelijkheden en kosten voor u? Neem gerust contact op met HaarKliniek 45
          in Grazen voor een gratis en vrijblijvend gesprek. Wij helpen u graag verder en geven u
          een persoonlijke prijsopgave.
        </p>
        <h3>Waarom HaarKliniek 45?</h3>
        <p>
          Bij HaarKliniek 45 staan kwaliteit en persoonlijke aandacht altijd voorop. We geloven in
          een duidelijke en transparante aanpak, zodat u precies weet wat u kunt verwachten. Met
          onze ervaring en focus op de nieuwste technieken lopen we voorop in ons vakgebied. Alles
          wat we doen, is gericht op het bereiken van het beste resultaat voor u. Of het nu gaat om
          zorgvuldige begeleiding of het gebruik van geavanceerde methoden - wij zorgen ervoor dat u
          tevreden bent met een natuurlijk en blijvend resultaat.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over de Long Hair haartransplantatie? Bekijk onze veelgestelde vragen
          voor antwoorden over het verschil met reguliere haartransplantatie, geschiktheid,
          resultaten en kosten.
        </p>
        <a [routerLink]="['/faq']">Bekijk alle veelgestelde vragen &rarr;</a>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-heading-center">Waarom een behandeling bij HaarKliniek 45?</h2>
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
export class LongHairHaartransplantatiePageComponent {
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
