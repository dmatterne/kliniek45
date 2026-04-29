import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-baardtransplantatie-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./baardtransplantatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Baardtransplantatie</h1>
        <p class="hero-subtitle">
          Heeft u last van een dunne of ontbrekende baard? Via onze partner Hair Clinic Wolf is een
          volledige baardtransplantatie mogelijk. HaarKliniek 45 verzorgt uw intake en begeleiding
          vanuit Grazen.
        </p>
      </div>
    </section>

    <!-- PARTNER CALLOUT -->
    <section class="partner-callout-section">
      <div class="container">
        <div class="partner-callout">
          <strong>ℹ️ Hoe werkt onze samenwerking?</strong>
          HaarKliniek 45 verzorgt uw intake en begeleiding. De baardtransplantatie zelf wordt
          uitgevoerd door het gecertificeerde team van onze partner Hair Clinic Wolf.
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Voor een volle baard</h2>
            <p>
              Heeft u last van een dunne of ontbrekende baard? Overweeg dan een baardtransplantatie
              bij HaarKliniek 45 in Grazen. Een baardtransplantatie kan kale plekken opvullen of
              zelfs een volledige baard creeren, wat vaak leidt tot meer zelfvertrouwen. Maar hoe
              werkt een baardtransplantatie eigenlijk? En wat komt er allemaal bij kijken?
            </p>
            <p>
              Een baardtransplantatie kan een oplossing bieden voor mannen zonder baard of met een
              onvolledige baard, ongeacht welk deel ontbreekt - of het nu de snor, sik, bakkebaarden
              of een ander deel betreft. U hoeft niet volledig kaal te zijn; zelfs mannen met een
              dunne baard kunnen kiezen voor een dikkere en vollere baard.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-1.png"
              alt="Baardtransplantatie voor en na - Hair Clinic Wolf"
            />
            <p class="image-attribution"><em>Resultaten van onze partner Hair Clinic Wolf</em></p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe werkt een baardtransplantatie?</h2>
        <p>
          Er zijn verschillende oorzaken voor een gebrek aan baardgroei, waaronder genetica,
          erfelijkheid, chirurgische littekens en brandwonden. Tijdens een baardtransplantatie
          worden gezonde haarzakjes uit het donorgebied (het achterhoofd) naar het gewenste gebied
          verplaatst, waar ze na verloop van tijd nieuwe haren produceren en kale plekken opvullen.
        </p>
        <p>
          De procedure wordt uitgevoerd onder plaatselijke verdoving en - ondanks de duur van 4 tot
          8 uur - is deze niet ingrijpend. U ervaart tijdens de ingreep geen pijn. Na de behandeling
          ontvangt u van ons uitgebreide nazorginstructies om het beste resultaat te garanderen.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Genetica en erfelijkheid:</strong> De meest voorkomende oorzaak van beperkte
            baardgroei
          </li>
          <li>
            <strong>Littekens:</strong> Chirurgische littekens of brandwonden kunnen de baardgroei
            belemmeren
          </li>
          <li>
            <strong>Alopecia areata:</strong> Een auto-immuunziekte die kale plekken kan veroorzaken
            in de baard
          </li>
          <li>
            <strong>Hormonale factoren:</strong> Testosterontekort of hormonale onbalans kan de
            baardgroei beinvloeden
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Werkwijze bij baardtransplantatie met DHI</h2>
        <p>
          De haarzakjes kunnen op verschillende manieren worden getransplanteerd. Hoewel FUE vaak
          wordt genoemd als een goede methode voor baardtransplantatie, levert de nieuwste techniek
          - Direct Hair Implantation (DHI) - uitstekende resultaten. Het gecertificeerde team van
          Hair Clinic Wolf adviseert de beste techniek op basis van uw persoonlijke situatie en
          foto's.
        </p>
        <p>
          DHI maakt gebruik van speciale implantatiepennen voor de directe plaatsing van grafts in
          de huid, wat minder bloedingen oplevert en meer controle over de richting en diepte van de
          haarzakjes mogelijk maakt. Dit resulteert in een natuurlijker ogende baard die perfect
          aansluit bij uw gezichtsstructuur.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Keuze van uw nieuwe baardlijn</h2>
        <p>
          U heeft de vrijheid om de vorm van uw nieuwe baardlijn te kiezen, met deskundig advies van
          onze arts. Een natuurlijke baard heeft vaak geen strakke rechte of scherpe lijnen, omdat u
          dit ook met scheren kunt bereiken. De plaatsing en vorm van de baardlijn zijn essentieel
          voor het uiterlijk van uw gezicht.
        </p>
        <p>
          Sommigen kiezen een rechte lijn, terwijl anderen de voorkeur geven aan een hogere, rondere
          lijn om een natuurlijker uiterlijk te behouden. Samen met onze specialist bepaalt u welke
          baardlijn het beste bij uw gezicht past en het gewenste resultaat bereikt.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Waarom de DHI-methode voor snor- en baardtransplantatie?</h2>
        <p>
          Bij HaarKliniek 45 bieden we de DHI-methode aan voor snor- en baardtransplantaties vanwege
          de volgende voordelen:
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💉</div>
            <h3>Directe haarimplantatie</h3>
            <p>
              Met DHI worden haarzakjes rechtstreeks in het gewenste gebied geplaatst, zonder de
              noodzaak voor incisies. Dit zorgt voor nauwkeurige implantatie in het gezicht.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🩸</div>
            <h3>Minder bloeding en schade</h3>
            <p>
              Omdat er geen incisies nodig zijn, is er bijna geen bloeding tijdens de procedure en
              wordt de huid minimaal beschadigd. Meer comfort, minder complicaties.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Sneller herstel</h3>
            <p>
              Door minimale schade en minder risico op bloedingen is de hersteltijd na een
              DHI-baardtransplantatie korter. U kunt sneller genieten van uw nieuwe baard.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🎯</div>
            <h3>Precisie en veiligheid</h3>
            <p>
              De DHI-implanter biedt de chirurg volledige controle over de richting, hoek en diepte
              van de haarzakjes - cruciaal voor een natuurlijk ogende baard.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
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
              De baardtransplantatie wordt uitgevoerd door Hair Clinic Wolf in Nederland of Turkije.
              HaarKliniek 45 begeleidt u voor en na de ingreep.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven u adviseren na de behandeling. U ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Persoonlijke nazorg staat centraal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wanneer zie ik resultaat na een baardtransplantatie?</h2>
        <p>
          Na de baardtransplantatie kunnen de getransplanteerde haren tijdelijk uitvallen, wat
          volkomen normaal is. Na ongeveer 15 dagen begint de tijdelijke haaruitval (ook bekend als
          shock fall), en dit duurt tot het einde van de tweede maand. Maak u geen zorgen - dit is
          een normaal onderdeel van het herstelproces.
        </p>
        <p>
          Vanaf de derde maand beginnen nieuwe haren te groeien. Na 7 tot 8 maanden bereikt u
          ongeveer 85-90% van het eindresultaat, en daarna groeien de haren verder door. Het
          definitieve resultaat is volledig zichtbaar na 12 tot 14 maanden, maar de individuele
          ervaring kan varieren.
        </p>
        <div class="steps-grid" style="margin-top: 2rem;">
          <div class="step-card">
            <div class="step-number">0-2m</div>
            <h3>Herstelperiode</h3>
            <p>
              De getransplanteerde haren vallen tijdelijk uit (shock fall). Dit is normaal en
              verwacht. De haarzakjes blijven actief en beginnen nieuwe haren te produceren.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3-8m</div>
            <h3>Haargroei start</h3>
            <p>
              Vanaf de derde maand groeien nieuwe haren. Na 7-8 maanden is 85-90% van het
              eindresultaat zichtbaar. De baard wordt voller en dichter.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">12-14m</div>
            <h3>Eindresultaat</h3>
            <p>
              Na 12 tot 14 maanden is het definitieve, permanente resultaat volledig zichtbaar. Een
              volle, natuurlijke baard die u een leven lang meegaat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Kosten baardtransplantatie</h2>
        <p>
          Wat kost een baardtransplantatie bij HaarKliniek 45? Onze prijzen zijn altijd op maat,
          afhankelijk van de omvang van de behandeling en uw persoonlijke situatie. Er zijn geen
          verborgen kosten of financiele verrassingen achteraf. Helaas vergoeden
          verzekeringsmaatschappijen een baardtransplantatie vaak niet.
        </p>
        <p>
          Kies vandaag nog voor een baardtransplantatie bij HaarKliniek 45 in Grazen en geniet van
          een volle baard. Heeft u vragen of wilt u een gratis consult? Plan online een afspraak of
          neem contact met ons op.
        </p>
        <h3>Ben ik geschikt voor een baardtransplantatie?</h3>
        <p>
          Bij HaarKliniek 45 geven we eerlijk advies. Niet iedereen is geschikt voor een
          baardtransplantatie. De geschiktheid kan worden beinvloed door de kwaliteit van het
          donorgebied en eventuele medische factoren. Vraag een gratis consult aan voor persoonlijk
          advies op maat.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over baardtransplantatie? Bekijk onze veelgestelde vragen voor
          antwoorden over geschiktheid, het benodigde aantal grafts, de eerste wassing, wanneer u
          weer kunt scheren en meer.
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
export class BaardtransplantatiePageComponent {
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
