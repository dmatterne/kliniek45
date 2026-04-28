import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-regenera-activa-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./regenera-activa-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Regenera Activa</h1>
        <p class="hero-subtitle">
          Innovatieve haaruitvalbehandeling op basis van stamceltechnologie. Regenera Activa maakt
          je haar sterker en gezonder bij HaarKliniek 45 in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is Regenera Activa?</h2>
            <p>
              Hebben verschillende haarverliesbehandelingen niet het gewenste effect gehad? Wij
              hebben de oplossing – een Regenera Activa-behandeling. Regenera Activa is de
              behandeling die je haar sterker en gezonder maakt.
            </p>
            <p>
              Regenera Activa is een innovatieve behandeling, ontwikkeld om haaruitval bij mannen en
              vrouwen tegen te gaan. Het maakt gebruik van geavanceerde capillaire regeneratieve
              technologie gericht op androgenetische alopecia.
            </p>
            <p>
              De Regenera Activa-behandeling maakt gebruik van het eigen haar dat cellen bevat die
              helpen bij het activeren van de follikels rond het gebied van haaruitval. Met andere
              woorden, het gebruikt het vermogen van jouw eigen lichaam om nieuw haar te produceren
              door een haarregeneratieproces te stimuleren.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="Regenera Activa behandeling resultaat"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Gratis consult met onze specialist</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#127908;</div>
            <h3>Gratis consult</h3>
            <p>
              Het eerste consult is gratis en geheel vrijblijvend. Ontdek of Regenera Activa de
              juiste keuze is voor jou.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128300;</div>
            <h3>100% Expertise</h3>
            <p>
              Je kunt direct vragen stellen aan onze specialist in Grazen. Wij beantwoorden al je
              vragen over de behandeling.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128274;</div>
            <h3>Betrouwbaar</h3>
            <p>
              Wij gaan discreet om met je gegevens. Jouw privacy staat bij HaarKliniek 45 altijd
              voorop.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128269;</div>
            <h3>Hoofd- en haaranalyse</h3>
            <p>
              We voeren een gratis hoofd- en haaranalyse uit om de beste behandeloptie voor jou te
              bepalen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe werkt een Regenera Activa-behandeling?</h2>
        <p>
          Regenera Activa is een innovatieve behandeling waarbij de hoofdhuid wordt geinjjecteerd
          met een speciale suspensie die stamcellen, groeifactoren en voorlopercellen bevat met
          extreem krachtige eigenschappen. De behandeling stimuleert de haargroei, haarverdikking en
          remming van haaruitval.
        </p>
        <p>
          In tegenstelling tot veel andere haarverliesbehandelingen is Regenera Activa goedgekeurd
          door de Food and Drugs Administration (FDA). De FDA richt strenge controles uit op het
          gebied van gezondheidszorg. Dit betekent dat de stamcelmethode uitvoerig is getest op
          werking en veiligheid.
        </p>
        <p>
          De behandeling duurt elk ongeveer 20-25 minuten. De resultaten kunnen meer dan 3 jaar
          aanhouden, waardoor het een duurzame oplossing is voor haaruitval.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Plan een consult bij HaarKliniek 45 in Grazen</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>De consultatie</h3>
            <p>
              Tijdens het consultatiegesprek bespreken we al je wensen en heb je alle gelegenheid om
              vragen te stellen. Dit kan telefonisch of persoonlijk in onze kliniek in Grazen,
              Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Start behandeling</h3>
            <p>
              Je ontvangt van ons richtlijnen om de behandeling zo effectief mogelijk te laten
              verlopen. De behandeling vindt plaats in onze kliniek in Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven je adviseren na de behandeling. Je ontvangt advies over producten en
              eventuele vervolgbehandelingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>De voordelen van Regenera Activa</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Stimuleren van de groei van nieuw haar</h3>
            <p>
              De behandeling is ontworpen om de groei van nieuw haar te stimuleren, waardoor een
              vollere en dikkere haardos ontstaat.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128170;</div>
            <h3>Haarverdikking</h3>
            <p>
              Regenera Activa heeft als doel de haarstructuur te verbeteren, wat resulteert in
              merkbare verdikking van het haar.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128737;</div>
            <h3>Preventie haaruitval</h3>
            <p>
              Het behandelingsproces is gericht op het verminderen van haaruitval, waardoor het haar
              langer behouden blijft.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128260;</div>
            <h3>Stimuleren regeneratieproces</h3>
            <p>
              Regenera Activa stimuleert het regeneratieproces, wat gunstig is voor het herstel van
              beschadigde haarzakjes.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9989;</div>
            <h3>FDA-goedgekeurd</h3>
            <p>
              De behandeling is goedgekeurd door de FDA en uitvoerig getest op werking en veiligheid
              voor jouw gemoedsrust.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9200;</div>
            <h3>Snelle behandeling</h3>
            <p>
              Elke sessie duurt slechts 20-25 minuten en de resultaten kunnen meer dan 3 jaar
              aanhouden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>De effecten van een Regenera Activa-behandeling</h2>
        <p>Een Regenera Activa-behandeling heeft verschillende positieve effecten op het haar:</p>
        <ul class="styled-list">
          <li>
            <strong>Stimulering van de groei van nieuw haar:</strong> De behandeling is ontworpen om
            de groei van nieuw haar te stimuleren, waardoor een vollere en dikkere haardos ontstaat.
          </li>
          <li>
            <strong>Haarverdikking:</strong> Regenera Activa heeft als doel de haarstructuur te
            verbeteren, wat kan resulteren in merkbare verdikking van het haar.
          </li>
          <li>
            <strong>Remming van haaruitval:</strong> Het behandelingsproces is gericht op het
            verminderen van haaruitval, waardoor het haar langer behouden blijft.
          </li>
          <li>
            <strong>Stimulatie van regeneratieprocessen:</strong> Regenera Activa stimuleert het
            regeneratieproces, wat gunstig is voor het herstel van beschadigde haarzakjes.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wanneer is een Regenera Activa-behandeling geschikt?</h2>
        <p>Een Regenera Activa-behandeling is een geschikte behandeling in de volgende gevallen:</p>
        <ul class="styled-list">
          <li>
            <strong>Alopecia Androgenetica bij mannen:</strong> Voor mannen die last hebben van
            erfelijke haaruitval kan een Regenera Activa-behandeling een effectieve oplossing zijn
            om de haargroei te bevorderen en haarverlies tegen te gaan.
          </li>
          <li>
            <strong>Alopecia Androgenetica bij vrouwen:</strong> Vrouwen die kampen met erfelijke
            haaruitval, specifiek Alopecia Androgenetica, kunnen baat hebben bij een Regenera
            Activa-behandeling. Deze behandeling richt zich op het stimuleren van de haargroei en
            het verminderen van haarverdunning.
          </li>
          <li>
            <strong>Algemene haaruitval:</strong> Personen die te maken hebben met algemene
            haaruitval, ongeacht de oorzaak, kunnen overwegen om een Regenera Activa-behandeling te
            ondergaan. Het doel is het stimuleren van regeneratieprocessen en het verbeteren van de
            algehele conditie van het haar.
          </li>
        </ul>
        <p>
          De behandeling is geschikt voor zowel mannen als vrouwen. De vorm van haaruitval moet mild
          zijn. Is de mate van haaruitval heftig? Dan kunnen we andere behandelingen aanbevelen
          tijdens het gratis consult.
        </p>
        <div class="two-col" style="margin-top: 2rem;">
          <div class="image-block">
            <img src="assets/images/voor-na-mannen.png" alt="Regenera Activa voor en na mannen" />
          </div>
          <div class="image-block">
            <img src="assets/images/voor-na-vrouwen.png" alt="Regenera Activa voor en na vrouwen" />
          </div>
        </div>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over de Regenera Activa-behandeling, de werking, veiligheid of wanneer de
          behandeling geschikt is? Bekijk onze veelgestelde vragen voor uitgebreide antwoorden.
        </p>
        <a routerLink="/faq">Bekijk alle veelgestelde vragen &#8594;</a>
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
export class RegeneraActivaPageComponent {
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
