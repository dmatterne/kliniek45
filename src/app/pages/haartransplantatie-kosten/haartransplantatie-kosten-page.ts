import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-kosten-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./haartransplantatie-kosten-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie Kosten</h1>
        <p class="hero-subtitle">
          Transparante prijzen zonder verborgen kosten. Bij HaarKliniek 45 in Grazen ontvangt u een
          persoonlijke prijsopgave op maat.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat kost een haartransplantatie?</h2>
            <p>
              Wilt u graag een haartransplantatie laten uitvoeren? Dan bent u vast benieuwd naar de
              kosten. Er zijn een aantal factoren die bepalen hoe duur een haartransplantatie wordt.
              Denk aan het type behandeling, de vaardigheid van de chirurg, de omvang van het
              behandelgebied en waar u de behandeling laat uitvoeren.
            </p>
            <p>
              De prijzen voor een haartransplantatie kunnen flink varieren. In sommige Europese
              landen kunnen de kosten oplopen tot wel 16.000 euro. Verzekeraars vergoeden dit
              doorgaans niet, omdat het wordt gezien als een cosmetische ingreep. Bij HaarKliniek 45
              in Grazen hanteren we transparante en eerlijke prijzen op maat, zonder financiele
              verrassingen achteraf.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="Haartransplantatie kosten voor en na - HaarKliniek 45"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Waarom zijn shampoos en sprays niet altijd effectief?</h2>
        <p>
          Meer dan 95% van de mannen heeft last van erfelijke kaalheid. Velen proberen dit te
          bestrijden met shampoos, kruidenremedies, cremes en sprays. Soms werken deze middelen een
          beetje en kunnen ze het haarverlies tijdelijk vertragen, maar ze bieden geen permanente
          oplossing voor genetisch haarverlies.
        </p>
        <p>
          Een haartransplantatie kan dan wel uitkomst bieden. De getransplanteerde haarzakjes zijn
          afkomstig uit een gebied dat resistent is tegen haarverlies en zullen voor de rest van uw
          leven haar blijven produceren. Maar wat zijn de kosten van zo'n behandeling? En waar hangt
          dat van af?
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Vijf factoren die de prijs bepalen</h2>
        <p>
          De kosten van een haartransplantatie zijn over het algemeen afhankelijk van de volgende
          vijf factoren:
        </p>
        <ul class="styled-list">
          <li>
            <strong>1. Waar u de behandeling laat uitvoeren:</strong>
            De levenskosten in het gebied waar u uw haartransplantatie overweegt, beinvloeden de
            prijs. Ook varieren de tarieven per kliniek en regio. Bij HaarKliniek 45 in Grazen
            profiteert u van een eerlijke Belgische prijs zonder reiskosten naar het buitenland.
          </li>
          <li>
            <strong>2. Type behandeling:</strong>
            Er zijn verschillende technieken, zoals FUE Saffier en DHI. Elke techniek heeft zijn
            eigen indicaties en prijspunt. Onze specialisten adviseren u welke methode het beste bij
            uw situatie past.
          </li>
          <li>
            <strong>3. Vaardigheid van de chirurg:</strong>
            Een ervaren en gecertificeerde chirurg kan meer kosten, maar hogere prijzen betekenen
            niet altijd betere vaardigheden. Bij HaarKliniek 45 werkt u altijd met het
            gecertificeerde team van Hair Clinic Wolf.
          </li>
          <li>
            <strong>4. Hoeveel haar er verplaatst wordt:</strong>
            Veel klinieken bepalen de prijs aan de hand van het aantal te verplaatsen grafts. Een
            klein behandelgebied zoals inhammen kost minder dan een volledige kronbehandeling. Bij
            HaarKliniek 45 werken we met transparante totaalpakketten.
          </li>
          <li>
            <strong>5. Bijkomende kosten:</strong>
            Als u kiest voor een behandeling in het buitenland, let dan op of reis- en
            verblijfkosten inbegrepen zijn. Bij HaarKliniek 45 in Grazen zijn er geen bijkomende
            reiskosten - wij zijn uw lokale Belgische kliniek.
          </li>
        </ul>
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
              Tijdens het gratis consultatiegesprek in Grazen bespreken we al uw wensen. We voeren
              ook een gratis hoofd- en haaranalyse uit en geven u een persoonlijke prijsopgave.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Start behandeling</h3>
            <p>
              U ontvangt van ons duidelijke richtlijnen om de behandeling zo effectief mogelijk te
              laten verlopen. De haartransplantatie wordt uitgevoerd door Hair Clinic Wolf in
              Nederland of Turkije. HaarKliniek 45 begeleidt u voor en na de ingreep.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven u adviseren na de behandeling. U ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Persoonlijke nazorg is vanzelfsprekend.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Gratis consult bij HaarKliniek 45</h2>
        <p>
          Twijfelt u nog of heeft u nog onbeantwoorde vragen? Maak gratis en vrijblijvend een
          afspraak voor een consultatie bij onze kliniek in Grazen. Het eerste consult is altijd
          gratis en geheel vrijblijvend.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💬</div>
            <h3>Gratis consult</h3>
            <p>
              Het eerste consult is gratis en geheel vrijblijvend. Geen verplichtingen, wel alle
              antwoorden op uw vragen.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔬</div>
            <h3>Hoofd- en haaranalyse</h3>
            <p>
              We voeren gratis een professionele hoofd- en haaranalyse uit om uw situatie volledig
              te beoordelen.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💰</div>
            <h3>Persoonlijke prijsopgave</h3>
            <p>
              U ontvangt een prijsopgave op maat, specifiek voor uw situatie. Geen standaardprijzen,
              maar een eerlijke berekening.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3>Discreet en vertrouwelijk</h3>
            <p>
              Wij gaan discreet om met uw gegevens. Uw informatie wordt nooit zonder uw toestemming
              gedeeld.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Waarom uw traject starten bij HaarKliniek 45?</h2>
        <p>
          HaarKliniek 45 is geen uitvoerende kliniek, maar uw Belgische intake- en adviespartner. U
          start uw traject bij ons in Grazen; de haartransplantatie zelf wordt uitgevoerd door onze
          partner Hair Clinic Wolf in Nederland of Turkije.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Eerlijk en onafhankelijk advies:</strong> Jens Vandenreijt beoordeelt uw
            situatie objectief — ook als een transplantatie niet de beste optie voor u is
          </li>
          <li>
            <strong>Lokale intake en nazorg:</strong> Uw intake, haaranalyse en nazorg verlopen bij
            ons in Grazen — in uw eigen taal, dicht bij huis
          </li>
          <li>
            <strong>Non-chirurgische behandelingen lokaal:</strong> PRP, Hairegen, MHP en andere
            behandelingen voeren wij zelf uit in ons adviescentrum
          </li>
          <li>
            <strong>Gecertificeerde chirurgen via Hair Clinic Wolf:</strong> De transplantaties
            worden uitgevoerd door het ervaren, gecertificeerde team van Hair Clinic Wolf
          </li>
          <li>
            <strong>Belgisch aanspreekpunt:</strong> Na uw ingreep blijft u bij ons terecht voor
            vragen, opvolging en vervolgbehandelingen — geen communicatieproblemen
          </li>
          <li>
            <strong>Transparante kostenoverzichten:</strong> Wij geven u een helder beeld van alle
            kosten vóór u een beslissing neemt — geen verborgen tarieven
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Worden kosten vergoed door de verzekering?</h2>
        <p>
          Helaas vergoeden verzekeraars haartransplantaties doorgaans niet, omdat het gezien wordt
          als een cosmetische ingreep. Er zijn echter uitzonderingen, bijvoorbeeld bij haarverlies
          als gevolg van een medische aandoening of behandeling (chemotherapie, brandwonden).
        </p>
        <p>
          Kunt u de behandeling niet in een keer betalen? Neem contact op met HaarKliniek 45 om de
          betalingsmogelijkheden te bespreken. Wij denken graag met u mee om uw behandeling
          financieel haalbaar te maken.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over de kosten van een haartransplantatie? Bekijk onze veelgestelde
          vragen voor antwoorden over vergoedingen, betalingstermijnen en wat inbegrepen is in de
          prijs.
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
export class HaartransplantatieKostenPageComponent {
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
