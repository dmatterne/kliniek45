import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-kruin-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./haartransplantatie-kruin-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie Kruin</h1>
        <p class="hero-subtitle">
          Wordt het haar op uw kruin dunner? Bij HaarKliniek 45 in Grazen bieden we een nauwkeurige,
          permanente oplossing voor haarverlies op de kruin.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Haargroei voor de kruin</h2>
            <p>
              Merkt u haarverlies op de kruin? Een haartransplantatie kan dan een goede oplossing
              zijn. Het verschilt per persoon hoe het haarverlies verloopt - bij sommige gaat dit
              snel terwijl het bij anderen langzamer gaat. Dit geldt ook voor haarverlies van de
              kruin, dat kan variëren in grootte en patroon.
            </p>
            <p>
              De haartransplantatie voor de kruin is vaak wat complexer dan bij inhammen, en dit
              komt door de specifieke groeirichting en doorbloeding in dit gebied. Onze medisch
              specialisten bij HaarKliniek 45 in Grazen zorgen echter voor een prachtig en
              natuurlijk resultaat. De behandeling gebeurt nauwkeurig, onder plaatselijke verdoving,
              zodat u geen tot nauwelijks pijn ervaart tijdens en na de behandeling.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-1.png"
              alt="Haartransplantatie kruin voor en na - HaarKliniek 45"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Haargroei op de kruin na een haartransplantatie</h2>
        <p>
          Bij een haartransplantatie voor haargroei op de kruin gebruiken we donormateriaal vanuit
          uw achterhoofd. We verplaatsen de haarzakjes naar het behandelgebied op de kruin. Deze
          haarzakjes zijn meestal immuun tegen haarverlies en zullen daarom haar blijven produceren
          op uw kruin - voor de rest van uw leven.
        </p>
        <p>
          Samen met de arts bepaalt u de beste transplantatiemethode. Afhankelijk van de omvang van
          het behandelgebied, uw haarstructuur en uw persoonlijke wensen, adviseren wij u over de
          meest geschikte aanpak. Bij HaarKliniek 45 staat een eerlijk en persoonlijk advies altijd
          voorop.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Permanente oplossing:</strong> De getransplanteerde haarzakjes blijven haar
            produceren voor het leven
          </li>
          <li>
            <strong>Immuun tegen haarverlies:</strong> Donormateriaal uit het achterhoofd is
            resistent tegen androgene alopecia
          </li>
          <li>
            <strong>Natuurlijk resultaat:</strong> Na 12-14 maanden is het definitieve, volledig
            natuurlijke resultaat zichtbaar
          </li>
          <li><strong>Plaatselijke verdoving:</strong> U ervaart geen pijn tijdens de ingreep</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe verloopt de genezing na een kruintransplantatie?</h2>
        <p>
          Na de haartransplantatie kunnen er korstjes en jeuk ontstaan. Het is cruciaal om hier niet
          aan te krabben om infecties en schade aan de haarzakjes te voorkomen. Volg de
          nazorginstructies van onze specialisten nauwkeurig op voor het beste resultaat.
        </p>
        <p>
          Ongeveer twee maanden na de behandeling vallen de haren op de kruin tijdelijk uit. Geen
          zorgen: dit is een normaal en verwacht onderdeel van het herstelproces. De haarzakjes
          blijven intact en er zullen nieuwe, sterkere haren uit groeien. Het eindresultaat is pas
          na 12 tot 14 maanden volledig zichtbaar - maar het is het wachten waard, want het
          resultaat blijft u een leven lang.
        </p>
        <div class="steps-grid" style="margin-top: 2rem;">
          <div class="step-card">
            <div class="step-number">1-2w</div>
            <h3>Eerste weken</h3>
            <p>
              Korstjes vormen zich in het behandelgebied. Volg de wassinstructies nauwkeurig op.
              Vermijd sporten en zonlicht.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">2-3m</div>
            <h3>Tijdelijke uitval</h3>
            <p>
              De getransplanteerde haren vallen tijdelijk uit (shock fall). Dit is normaal - de
              haarzakjes blijven intact en beginnen nieuwe haren te produceren.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">12-14m</div>
            <h3>Eindresultaat</h3>
            <p>
              Na 12 tot 14 maanden is het definitieve resultaat volledig zichtbaar. Een volle,
              natuurlijke kruin die een leven lang meegaat.
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

    <section class="content-section">
      <div class="container">
        <h2>Waarom de DHI-methode voor de kruin?</h2>
        <p>
          Bij HaarKliniek 45 bieden we de DHI-methode aan voor een haartransplantatie van de kruin
          vanwege de volgende voordelen:
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💉</div>
            <h3>Directe haarimplantatie</h3>
            <p>
              Met DHI worden haarzakjes rechtstreeks in het gewenste gebied geplaatst, zonder de
              noodzaak voor incisies. Dit zorgt voor nauwkeurige en zorgvuldige implantatie op de
              kruin.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🩸</div>
            <h3>Minder bloeding en schade</h3>
            <p>
              Omdat er geen incisies zijn, is er bijna geen bloeding tijdens de procedure en wordt
              de huid minimaal beschadigd. Dit zorgt voor meer comfort en minder complicaties.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Sneller herstel</h3>
            <p>
              Door minimale schade en minder risico op bloedingen is de hersteltijd na een
              DHI-transplantatie korter. U kunt sneller genieten van uw volle kruin.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🎯</div>
            <h3>Precisie en veiligheid</h3>
            <p>
              De DHI-implanter biedt de chirurg volledige controle over de richting, hoek en diepte.
              Dit is bijzonder belangrijk bij de kruin, vanwege de complexe groeirichtingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Kosten haartransplantatie kruin</h2>
        <p>
          Wat kost een haartransplantatie van de kruin bij HaarKliniek 45? Onze prijzen zijn altijd
          op maat, afhankelijk van de omvang van het behandelgebied en uw persoonlijke situatie. Er
          zijn geen verborgen kosten of financiele verrassingen achteraf.
        </p>
        <p>
          Helaas vergoeden verzekeringen deze behandeling doorgaans niet. Wilt u weten wat een
          haartransplantatie bij u zou kosten? Vraag vandaag nog een gratis en vrijblijvend consult
          aan in Grazen. Wij geven u altijd een eerlijk en persoonlijk advies.
        </p>
        <h3>Ben ik geschikt voor een kruintransplantatie?</h3>
        <p>
          Niet iedereen is geschikt voor een haartransplantatie. We gaan dan ook graag met u in
          gesprek om de mogelijkheden te bespreken. Bij HaarKliniek 45 behandelen we geen personen
          met tijdelijk haarverlies van de kruin. Het kan ook zo zijn dat er in het donorgebied
          onvoldoende haarzakjes aanwezig zijn om het gewenste resultaat te behalen.
        </p>
        <p>
          Heeft u momenteel last van hart- en vaatziekten, diabetes of hematologische aandoeningen?
          Dan zullen onze medisch specialisten beoordelen of u geschikt bent voor de behandeling.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over haartransplantatie voor de kruin? Bekijk onze veelgestelde vragen
          voor antwoorden over het benodigde aantal grafts, de beste methode, kosten en meer.
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
export class HaartransplantatieKruinPageComponent {
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
