import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-fue-saffier-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./fue-saffier-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>FUE Saffier Haartransplantatie</h1>
        <p class="hero-subtitle">
          Follicular Unit Extraction met saffieren instrumenten – precisie haartransplantatie voor
          natuurlijke resultaten en minimaal herstel bij HaarKliniek 45 in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is een FUE Saffier haartransplantatie?</h2>
            <p>
              Een volle haardos is voor veel mensen een bron van zelfvertrouwen. Als je te maken
              hebt met haarverlies, kan een FUE Saffier haartransplantatie een goede oplossing zijn
              om je zelfvertrouwen te herwinnen.
            </p>
            <p>
              FUE, oftewel Follicular Unit Extraction, is een populaire haartransplantatie methode
              waarbij haarzakjes met een klein boortje uit het donorgebied worden gehaald. Daarna
              maken we kleine kanaaltjes in het ontvangstgebied, waar we de haartjes zorgvuldig
              plaatsen.
            </p>
            <p>
              Bij HaarKliniek 45 houden we rekening met jouw wensen, toekomstige haargroei,
              nationaliteit en etniciteit voor een volledig op maat gemaakt resultaat.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="FUE Saffier haartransplantatie voor en na"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe gaat de FUE Saffier behandeling in zijn werk?</h2>
        <p>
          De FUE Saffier procedure verloopt in vier nauwkeurige stappen voor een optimaal resultaat.
        </p>
        <div class="steps-grid steps-4">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>Incisies grafts</h3>
            <p>
              Eerst maken we kleine incisies rondom de haarzakjes om ze voor te bereiden op de
              extractie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Extractie grafts</h3>
            <p>
              Haarzakjes worden zorgvuldig verzameld uit het donorgebied met een speciaal saffieren
              boortje.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Kanalen maken</h3>
            <p>
              Met saffieren instrumenten worden nauwkeurige kanaaltjes gemaakt in het
              ontvangstgebied.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">04</div>
            <h3>Implanteren grafts</h3>
            <p>
              De grafts worden met een speciaal pincet zorgvuldig in de gemaakte kanaaltjes
              geplaatst.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Onze werkwijze</h2>
        <p>
          De FUE Saffier methode is een moderne benadering van haartransplantatie die bekend staat
          om zijn precisie en natuurlijke resultaten. Bij FUE worden haarzakjes met een klein
          boortje uit het donorgebied gehaald. Daarna maken we kleine kanaaltjes in de kale of
          dunner wordende gebieden op de hoofdhuid, waar we de haarzakjes zorgvuldig plaatsen.
        </p>
        <p>
          Het unieke kenmerk van FUE is dat er geen lineaire incisies nodig zijn, wat resulteert in
          minder zichtbare littekens en een sneller herstel in vergelijking met traditionele
          methoden. Door de precisie van de techniek en de natuurlijke groei van de
          getransplanteerde haarzakjes, biedt FUE Saffier een effectieve oplossing voor haarherstel
          met minimale invasie en maximale esthetische resultaten.
        </p>
        <p>
          Bij HaarKliniek 45 nemen we je volledig mee in het proces van de FUE Saffier
          behandelmethode. Voor meer informatie over hoe wij te werk gaan kun je contact opnemen of
          een gratis consult inplannen in onze kliniek in Grazen, Belgie.
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
              Wij blijven je adviseren na de behandeling. Je ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>De voordelen van de FUE Saffier behandelmethode</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#128200;</div>
            <h3>Meer grafts per sessie</h3>
            <p>
              Met FUE Saffier kunnen we meer grafts in dezelfde tijdsduur implanteren dan met DHI,
              ideaal bij grotere behandelgebieden.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9201;</div>
            <h3>Kortere behandeltijd</h3>
            <p>
              De behandeling gaat sneller dan DHI dankzij de efficiente werkmethode met saffieren
              instrumenten.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128176;</div>
            <h3>Zeer voordelig tarief</h3>
            <p>
              De FUE Saffier behandeling is doorgaans goedkoper dan de DHI-behandeling, zonder in te
              boeten op kwaliteit.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#10004;</div>
            <h3>Geen hechtingen</h3>
            <p>
              Nauwelijks littekenvorming op het achterhoofd, in tegenstelling tot de verouderde
              FUT-methode.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Natuurlijke resultaten</h3>
            <p>
              De saffieren instrumenten creeren nauwkeurigere kanaaltjes voor een meer natuurlijk
              groeipatroon van het haar.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9889;</div>
            <h3>Snel herstel</h3>
            <p>
              Geen lineaire littekens en minimale weefselschade betekent een vlotte herstelperiode
              na de ingreep.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>FUE Saffier voor en na resultaten</h2>
        <p>
          Benieuwd naar de resultaten van een haartransplantatie met de FUE Saffier methode bij
          HaarKliniek 45? Bekijk hieronder een aantal resultaten van onze behandelingen.
        </p>
        <div class="three-col-images">
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-1.png"
              alt="FUE Saffier haartransplantatie voor en na 1"
            />
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-2.png"
              alt="FUE Saffier haartransplantatie voor en na 2"
            />
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-3.png"
              alt="FUE Saffier haartransplantatie voor en na 3"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Voor de behandeling</h2>
            <p>
              Bij HaarKliniek 45 gaan we graag persoonlijk met je in gesprek. We geven je advies
              over wat de beste keuze is voor jouw haartransplantatie. Als FUE Saffier de beste
              keuze voor jou blijkt te zijn, plannen we dit in met onze medisch specialisten in onze
              kliniek in Grazen, Belgie.
            </p>
            <p>
              Overweeg je een haartransplantatie met de FUE Saffier behandelmethode? Twijfel je nog
              of heb je vragen? Maak dan gratis en vrijblijvend een afspraak met onze consulent.
            </p>
          </div>
          <div>
            <h2>Nazorg na de behandeling</h2>
            <p>
              Na de haartransplantatie ontvang je van ons gedetailleerde instructies over hoe je je
              hoofdhuid moet verzorgen. Zo krijg je van ons een shampoo, speciaal ontworpen voor de
              verzorging van het getransplanteerde haar.
            </p>
            <p>
              Na de behandeling blijven we je adviseren. We zien je graag na een tijdje terug om te
              zien hoe goed de getransplanteerde haren groeien. Al binnen enkele maanden beginnen de
              nieuwe haren te groeien, en na ongeveer een jaar tot 14 maanden is het definitieve
              resultaat zichtbaar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over de FUE Saffier behandeling, het verschil met DHI, de herstelperiode of
          de kosten? Bekijk onze veelgestelde vragen voor uitgebreide antwoorden.
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
export class FueSaffierPageComponent {
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
