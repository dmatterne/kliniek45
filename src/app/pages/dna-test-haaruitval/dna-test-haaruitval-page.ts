import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-dna-test-haaruitval-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./dna-test-haaruitval-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>DNA Test Haaruitval – TrichoTest&#8482;</h1>
        <p class="hero-subtitle">
          De TrichoTest&#8482; is speciaal ontwikkeld om de meest effectieve behandeling voor
          haaruitval te bepalen op basis van jouw genetische samenstelling. Zo vermijd je onnodige
          producten bij HaarKliniek 45 in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is de TrichoTest&#8482;?</h2>
            <p>
              Heb je last van haarverlies en wil je de oorzaak achterhalen om de beste
              behandelopties te vinden? Dan kan een DNA-test uitkomst bieden. De TrichoTest&#8482;
              is speciaal ontwikkeld om de meest effectieve behandeling voor haaruitval te bepalen
              op basis van jouw genetische samenstelling.
            </p>
            <p>
              Zo voorkom je dat je onnodige producten uitprobeert of medicatie gebruikt die
              uiteindelijk niet blijkt te helpen. Bij HaarKliniek 45 helpen we je graag met het
              afnemen van de test en het uitleggen van de resultaten.
            </p>
            <p>
              De testresultaten zijn levenslang bruikbaar, omdat genen niet veranderen. Je kunt jouw
              uitslag dus altijd blijven gebruiken om je haarverzorgingsbehandeling te
              optimaliseren.
            </p>
          </div>
          <div class="image-block">
            <img src="assets/images/voor-na-mannen.png" alt="DNA test haaruitval TrichoTest" />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Wat onderzoekt de TrichoTest&#8482;?</h2>
        <p>
          De TrichoTest&#8482; is een genetische test die helpt bij het bepalen van de beste
          behandeling voor haaruitval. Deze test kijkt naar jouw genetische samenstelling om een op
          maat gemaakt behandelplan te maken. Het analyseert zowel genetische als leefstijlfactoren
          om aanbevelingen te doen voor aandoeningen zoals:
        </p>
        <ul class="styled-list">
          <li>Haarverdunning</li>
          <li>Mannelijke- en vrouwelijke erfelijke kaalheid (alopecia androgenetica)</li>
          <li>Alopecia areata</li>
          <li>Andere vormen van alopecia</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe verloopt het TrichoTest&#8482; proces?</h2>
        <div class="steps-grid steps-4">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>DNA-monster</h3>
            <p>
              Het afnemen van een eenvoudige mondswab. Dit kan bij ons in de kliniek in Grazen of
              bij je thuis.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Analyseren resultaten</h3>
            <p>
              Analyseren van DNA op 48 genetische variaties over 13 genen die gerelateerd zijn aan
              haaruitval in een gespecialiseerd laboratorium.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>De resultaten</h3>
            <p>
              Ontvang de resultaten van de DNA-test binnen 4 tot 5 weken na afname van het
              DNA-monster.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">04</div>
            <h3>Behandelplan op maat</h3>
            <p>
              Het opstellen van een behandelplan volledig op maat gebaseerd op jouw genetisch
              profiel en leefstijl.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Wat zijn de resultaten?</h2>
        <p>
          De resultaten van de TrichoTest&#8482; geven een uitgebreid rapport. Dit rapport helpt bij
          het kiezen van de meest geschikte behandelingen, waardoor het trial-and-error-proces dat
          vaak gepaard gaat met haaruitvalbehandelingen wordt verminderd. Deze gepersonaliseerde
          aanpak verhoogt de kans op succesvolle behandelingen en kan bestaan uit:
        </p>
        <ul class="styled-list">
          <li>Topische oplossingen die afgestemd zijn op jouw genetisch profiel</li>
          <li>Orale supplementen die specifiek werken voor jouw situatie</li>
        </ul>
        <p>
          Met deze test kunnen we bepalen of het gebruik van Minoxidil of Finasteride voor jou
          effectief zal zijn. Daarnaast kunnen we inschatten of behandelingen zoals PRP of
          mesotherapie geschikt zijn voor jouw situatie. Je krijgt ook inzicht in de mogelijke
          voordelen van supplementen zoals Biotine, Arginine, Zaagpalmolie of specifieke vitamines
          en mineralen.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Behandelplan op maat</h2>
        <p>
          Op basis van de testresultaten kunnen we bepalen welke behandeling het beste werkt voor
          jouw haarverlies. Met de juiste adviezen kunnen we het haarverlies afremmen of mogelijk
          zelfs stoppen.
        </p>
        <p>
          Het juiste behandelplan zorgt voor gezondere haren die beter bestand zijn tegen hormonaal
          haarverlies. Haren die in een slaapfase zaten, kunnen weer terugkomen en zichtbaar worden.
          Door te zorgen voor de juiste voedingsstoffen waaruit de haren zijn opgebouwd, maak je
          haarwortels sterker en geschikt voor een eventuele haartransplantatie.
        </p>
        <p>
          Bovendien kun je haren krijgen met een grotere diameter – dikkere, sterkere haren die
          beter bestand zijn tegen verdere uitval.
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
              vragen te stellen. Dit kan telefonisch of bij ons in Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Afname TrichoTest&#8482;</h3>
            <p>
              We nemen de DNA-test af via een eenvoudige mondswab. Dit kan bij ons in de kliniek of
              bij jou thuis.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Resultaten en advies</h3>
            <p>
              Binnen 4 tot 5 weken ontvang je de resultaten inclusief persoonlijk behandeladvies op
              maat van onze specialist.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>De voordelen van de TrichoTest&#8482;</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#127979;</div>
            <h3>Personalisatie</h3>
            <p>
              Behandeling specifiek afgestemd op jouw genetisch profiel voor maximale effectiviteit.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128200;</div>
            <h3>Effectiviteit</h3>
            <p>
              Snellere en effectievere resultaten dankzij een behandeling volledig op maat van jouw
              genetische samenstelling.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128176;</div>
            <h3>Kostenbesparing</h3>
            <p>
              Bespaar geld door dure, niet-werkende producten en medicijnen te vermijden die niet
              passen bij jouw profiel.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128270;</div>
            <h3>Vroegtijdige detectie</h3>
            <p>
              Ontdek haarproblemen vroegtijdig en begin direct met de juiste behandeling voor de
              beste resultaten.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9854;</div>
            <h3>Levenslang bruikbaar</h3>
            <p>
              Omdat genen niet veranderen, zijn de testresultaten levenslang bruikbaar voor je
              haarverzorgingsbehandeling.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127968;</div>
            <h3>Thuis afneembaar</h3>
            <p>
              De TrichoTest&#8482; kan eenvoudig thuis worden afgenomen via een mondswab of bij ons
              in de kliniek in Grazen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Tips voor de test</h2>
        <p>Om de test goed te laten verlopen geven we je graag de volgende tips mee:</p>
        <ul class="styled-list">
          <li>Eet of drink 1 uur voor de test niet</li>
          <li>Rook 1 uur voor de test niet</li>
          <li>Neem je legitimatie mee indien je de test bij ons op locatie afneemt</li>
        </ul>
        <h2>Wat zijn de kosten?</h2>
        <p>
          De TrichoTest&#8482; bestaat uit een uitgebreid intakegesprek, afname van de test en de
          uitslag inclusief uitgebreid persoonlijk advies. In het advies adviseren we je over welke
          middelen specifiek geschikt zijn voor jou.
        </p>
        <p>
          De totaalkosten voor de TrichoTest&#8482; bedragen &euro;490,-. Neem contact op met
          HaarKliniek 45 in Grazen voor meer informatie over de test en onze tarieven.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over de TrichoTest&#8482;, alopecia, de testprocedure of het behandelplan?
          Bekijk onze veelgestelde vragen voor uitgebreide antwoorden over DNA-testen voor
          haaruitval.
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
export class DnaTestHaaruitvalPageComponent {
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
