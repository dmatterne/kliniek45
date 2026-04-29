import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-hairegen-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./hairegen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Hairegen – Haargroei Stimuleren</h1>
        <p class="hero-subtitle">
          Hairegen is een innovatief apparaat dat haargroei stimuleert via vier geavanceerde
          mechanismen. De effectieve thuisoplossing voor voller en gezonder haar bij HaarKliniek 45
          in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is Hairegen?</h2>
            <p>
              Hairegen is een geavanceerd apparaat dat ontworpen is om haargroei te stimuleren. Dit
              apparaat werkt door haarfollikels te activeren en de natuurlijke haargroeicyclus te
              ondersteunen. Het is gebruiksvriendelijk en specifiek bedoeld voor thuisgebruik.
            </p>
            <p>
              Met een handmatige bediening rol je het apparaat over het te behandelen gebied,
              waarbij het meerdere stimulaties van hoge kwaliteit toepast. Bovendien biedt het
              apparaat drie verschillende behandelopties, die variëren in duur: 3, 5 en 8 minuten.
            </p>
            <p>
              Met onze specialist bij HaarKliniek 45 kiezen we de behandeling die het best bij jouw
              wensen en situatie past.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="Hairegen haargroei stimuleren voor en na"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe werkt Hairegen?</h2>
        <p>
          Hairegen combineert vier krachtige mechanismen om haargroei te stimuleren en haarverlies
          te bestrijden.
        </p>
        <div class="steps-grid steps-4">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>Biochemische werking</h3>
            <p>
              Hairegen pakt het DHT-hormoon aan, dat schadelijk is voor je haarzakjes. Het
              introduceert zink en koper op je hoofdhuid om DHT-productie te verminderen.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Elektrische actie</h3>
            <p>
              Hairegen gebruikt microstromen om je hoofdhuid en haarfollikels te stimuleren, wat
              helpt bij huidverjonging en haargroei.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Mechanische actie</h3>
            <p>
              Wanneer de schijven van Hairegen over je hoofdhuid rollen, creeren ze drukpunten die
              de doorbloeding verbeteren en helpen bij het voeden van je haarzakjes.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">04</div>
            <h3>Optische werking</h3>
            <p>
              LLLT (Low Level Laser Therapy) wordt gebruikt als effectieve methode om haargroei te
              regenereren en te versnellen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Alternatief voor de Dermaroller</h2>
        <p>
          Hairegen is veel meer dan een Dermaroller. Het combineert meerdere mechanismen om je
          haargroei te boosten. Met Hairegen verhoog je de bloedtoevoer naar je haarzakjes en
          stimuleer je je lichaam om je hoofdhuid en bloedvaten te regenereren. Dit verbetert de
          leefomgeving van je haar.
        </p>
        <p>
          Bovendien stimuleert Hairegen je haarzakjes om dikker haar te produceren en slapende
          haarzakjes te activeren voor een normale haargroeicyclus. Het resultaat is zichtbaar
          voller en gezonder haar na consequent gebruik.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe veilig is het gebruik van Hairegen?</h2>
        <p>
          Het apparaat is eenvoudig, praktisch en volkomen veilig om thuis te gebruiken. Het is de
          enige haarregeneratieoplossing met bewezen positieve resultaten en een uitstekend
          veiligheidsprofiel. Het is ontworpen met gebruiksvriendelijkheid als prioriteit, zodat
          iedereen het gemakkelijk in zijn dagelijks routine kan integreren.
        </p>
        <p>
          Bovendien is de wetenschappelijke benadering achter het apparaat zorgvuldig ontwikkeld om
          effectieve resultaten te waarborgen, zonder enige schadelijke effecten op de gezondheid.
          Met dit innovatieve systeem bieden we een betrouwbare oplossing voor haarregeneratie,
          waardoor je met vertrouwen kunt streven naar gezonder en voller haar.
        </p>
      </div>
    </section>

    <section class="content-section">
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
              Je ontvangt van ons richtlijnen voor het gebruik van Hairegen om de behandeling zo
              effectief mogelijk te laten verlopen.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven je adviseren tijdens het gebruik. Je ontvangt advies over producten,
              gebruik en eventuele vervolgbehandelingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>De voordelen van haargroei stimuleren met Hairegen</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#9989;</div>
            <h3>Geen bijwerkingen</h3>
            <p>
              De behandeling is plaatselijk en uitwendig, dus volledig veilig in gebruik thuis
              zonder risico op bijwerkingen.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128176;</div>
            <h3>Lage jaarlijkse kosten</h3>
            <p>
              Het enige dat je moet vervangen is de cartridge. Investeer eenmalig en profiteer
              langdurig van de voordelen.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9201;</div>
            <h3>Korte behandeltijd</h3>
            <p>
              Slechts 5 tot 8 minuten per dag nodig. Eenvoudig te integreren in je dagelijkse
              ochtend- of avondroutine.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127775;</div>
            <h3>Snel resultaat</h3>
            <p>
              Je ziet verbetering in je haar na een paar maanden consequent gebruik van het Hairegen
              apparaat.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127968;</div>
            <h3>Thuisgebruik</h3>
            <p>
              Gebruik het apparaat gemakkelijk vanuit het comfort van je eigen thuis, zonder
              kliniekbezoek voor elke sessie.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128200;</div>
            <h3>Wetenschappelijk onderbouwd</h3>
            <p>
              Vier bewezen mechanismen werken samen voor optimale haargroei: biochemisch,
              elektrisch, mechanisch en optisch.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Hairegen voor en na</h2>
            <p>
              Benieuwd naar de resultaten met Hairegen? Regelmatig gebruik van het Hairegen apparaat
              leidt tot zichtbaar voller en gezonder haar. Neem contact op voor meer informatie over
              de mogelijke resultaten met Hairegen.
            </p>
            <div class="image-block">
              <img src="assets/images/voor-na-mannen.png" alt="Hairegen voor en na mannen" />
            </div>
          </div>
          <div>
            <h2>Hairegen kopen of uitproberen</h2>
            <p>
              Voor het aanschaffen van Hairegen willen we je graag persoonlijk adviseren bij
              HaarKliniek 45 in Grazen, Belgie. Als Hairegen niet werkt voor jou, krijg je een groot
              deel van de aanschafprijs terug. Je kunt het eerst uitproberen.
            </p>
            <p>
              Twijfel je nog over het gebruik van Hairegen of heb je vragen? Maak dan gratis en
              vrijblijvend een afspraak met onze specialist. Wij leggen je graag alles uit over het
              apparaat en hoe het het best ingezet kan worden voor jouw situatie.
            </p>
            <div class="image-block">
              <img src="assets/images/voor-na-vrouwen.png" alt="Hairegen voor en na vrouwen" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over Hairegen, het gebruik, de veiligheid of wanneer je het niet kunt
          gebruiken? Bekijk onze veelgestelde vragen voor uitgebreide antwoorden over Hairegen bij
          HaarKliniek 45.
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
export class HairegenPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgisch adviescentrum',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
