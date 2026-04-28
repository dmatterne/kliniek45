import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-vrouwen-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./haartransplantatie-vrouwen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie voor Vrouwen</h1>
        <p class="hero-subtitle">
          Haarverlies bij vrouwen heeft een grote emotionele impact. Bij HaarKliniek 45 in Grazen
          bieden we gespecialiseerde, discrete oplossingen op maat.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Haarverlies bij vrouwen</h2>
            <p>
              Haarverlies bij vrouwen heeft een grote emotionele impact. Zowel genetische factoren
              als stress, trauma, hormonale veranderingen of alopecia kunnen leiden tot haarverlies.
              Bij vrouwen verloopt haarverlies anders dan bij mannen: in plaats van kale plekken of
              inhammen, treedt er vaak een diffuus, gelijkmatig dunner worden van het haar op over
              de hele hoofdhuid.
            </p>
            <p>
              Bij HaarKliniek 45 begrijpen we hoe ingrijpend haarverlies kan zijn voor uw
              zelfvertrouwen en welzijn. Onze gecertificeerde specialisten bieden u persoonlijk
              advies en een behandeling die is afgestemd op uw specifieke situatie en wensen.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-vrouwen.png"
              alt="Haartransplantatie vrouwen voor en na - HaarKliniek 45"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Alopecia androgenetica bij vrouwen</h2>
        <p>
          Alopecia androgenetica is de meest voorkomende oorzaak van haarverlies bij vrouwen. Anders
          dan bij mannen, waarbij haarverlies zich concentreert op de kruin of inhammen, treedt bij
          vrouwen een meer diffuus patroon op: het haar wordt over een groter gebied dunner, maar de
          haargrens blijft vaak intact.
        </p>
        <p>
          Naast erfelijke kaalheid kunnen ook andere factoren meespelen, zoals hormonale
          schommelingen (zwangerschap, menopauze), schildklierproblemen, ijzertekort, stress of
          bepaalde medicijnen. Tijdens uw gratis consultatie in Grazen bespreken we de oorzaken van
          uw haarverlies en bepalen we samen de beste aanpak.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Erfelijke factoren:</strong> Androgene alopecia is de meest voorkomende oorzaak
            bij vrouwen
          </li>
          <li>
            <strong>Hormonale veranderingen:</strong> Zwangerschap, menopauze en
            schildklierproblemen kunnen haarverlies veroorzaken
          </li>
          <li>
            <strong>Stress en trauma:</strong> Fysieke of emotionele stress kan leiden tot tijdelijk
            of permanent haarverlies
          </li>
          <li>
            <strong>Voedingstekorten:</strong> IJzer- of vitaminegebrek kan de haargroei aantasten
          </li>
          <li><strong>Alopecia areata:</strong> Auto-immuunziekte die kale plekken veroorzaakt</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Haartransplantatie inhammen bij vrouwen</h2>
        <p>
          Veel vrouwen ontwikkelen ongewenste inhammen naarmate ze ouder worden. Dit kan leiden tot
          een merkbare teruglopende haargrens, wat het zelfvertrouwen sterk kan beinvloeden. Bij
          HaarKliniek 45 kunnen we haren van de achterkant van het hoofd transplanteren naar de kale
          of dunner wordende plekken aan de voorkant.
        </p>
        <p>
          Dankzij de DHI-methode (Direct Hair Implantation) verloopt de behandeling met minimale
          schade aan de bestaande haren. De haarzakjes worden een voor een uit het donorgebied
          geoogst en direct in de behandelzone geplaatst. Dit zorgt voor een natuurlijk resultaat
          dat aansluit bij uw bestaande haarlijn.
        </p>
        <div class="image-block" style="margin-top: 2rem;">
          <img
            src="assets/images/voor-na-inhammen.png"
            alt="Haartransplantatie inhammen vrouwen voor en na"
          />
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Waarom de DHI-methode voor vrouwen?</h2>
        <p>
          Bij HaarKliniek 45 bieden we de DHI-methode (Direct Hair Implantation) aan voor
          haartransplantaties bij vrouwen. Deze methode heeft een aantal belangrijke voordelen die
          haar bijzonder geschikt maken voor de specifieke behoeften van vrouwelijke patienten.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💉</div>
            <h3>Directe haarimplantatie</h3>
            <p>
              Met DHI worden haarzakjes rechtstreeks in het gewenste gebied geplaatst, zonder de
              noodzaak voor incisies. Dit betekent nauwkeurige en zorgvuldige implantatie met
              minimale schade aan omliggende haren.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🩸</div>
            <h3>Minder bloeding en schade</h3>
            <p>
              Omdat er geen incisies nodig zijn, is er bijna geen bloeding tijdens de procedure en
              wordt de huid minimaal beschadigd. Dit zorgt voor meer comfort en een lager risico op
              complicaties.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Sneller herstel</h3>
            <p>
              Door minimale schade en minder risico op bloedingen is de hersteltijd na een
              DHI-transplantatie korter. U kunt sneller genieten van uw nieuwe haardos en terugkeren
              naar uw dagelijkse activiteiten.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🎯</div>
            <h3>Precisie en veiligheid</h3>
            <p>
              De DHI-implanter biedt de chirurg volledige controle over de richting, hoek en diepte
              van de geimplanteerde haarzakjes. Dit zorgt voor een nauwkeurige, veilige procedure
              met een zo natuurlijk mogelijk resultaat.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💆</div>
            <h3>Geschikt voor bestaand haar</h3>
            <p>
              De DHI-methode is ideaal voor vrouwen omdat de behandeling kan worden uitgevoerd
              zonder bestaand haar te schaden. Bestaande haren blijven intact, wat resulteert in een
              voller geheel.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✨</div>
            <h3>Natuurlijk eindresultaat</h3>
            <p>
              Door de precieze plaatsing van elke individuele haarzakje sluit het resultaat naadloos
              aan bij uw bestaande haar. Na 12 tot 14 maanden is het definitieve, blijvende
              resultaat zichtbaar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Ongeschoren haartransplantatie voor vrouwen</h2>
        <p>
          Voor vrouwen die hun haar niet willen scheren, bieden we ook de ongeschoren
          haartransplantatiemethode aan (ook wel de Long Hair techniek genoemd). Bij deze methode
          hoeft u uw haar niet te scheren. De haarzakjes worden discreet uit het donorgebied
          geoogst, waarbij uw bestaande haarlengte volledig behouden blijft.
        </p>
        <p>Dit is bijzonder gunstig voor vrouwen die:</p>
        <ul class="styled-list">
          <li>
            <strong>Discreet willen blijven:</strong> Na de behandeling is er vrijwel geen zichtbare
            verandering in het donorgebied
          </li>
          <li>
            <strong>Lang haar hebben:</strong> Uw bestaande haarlengte blijft volledig intact
            tijdens en na de behandeling
          </li>
          <li>
            <strong>Snel willen herstellen:</strong> Sneller herstel doordat er minder traumatische
            ingreep plaatsvindt
          </li>
          <li>
            <strong>Comfortabeler willen voelen:</strong> U kunt direct na de behandeling
            comfortabeler in het openbaar verschijnen
          </li>
        </ul>
        <p>
          Tijdens uw consultatie in Grazen bespreken we welke methode het beste past bij uw
          specifieke wensen en situatie.
        </p>
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
              Tijdens het gratis consultatiegesprek in Grazen, Belgie bespreken we al uw wensen en
              heeft u alle gelegenheid om vragen te stellen. We voeren ook een gratis hoofd- en
              haaranalyse uit.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Start behandeling</h3>
            <p>
              U ontvangt van ons duidelijke richtlijnen om de behandeling zo effectief mogelijk te
              laten verlopen. De behandeling vindt plaats in onze kliniek in Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven u adviseren na de behandeling. U ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Persoonlijke nazorg is voor ons vanzelfsprekend.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Kosten haartransplantatie vrouwen</h2>
        <p>
          Haartransplantaties worden helaas niet vergoed door de meeste verzekeringen, omdat het
          beschouwd wordt als een cosmetische ingreep. Bij HaarKliniek 45 hanteren we transparante
          prijzen zonder verborgen kosten. De prijs is altijd op maat, afhankelijk van de omvang van
          de behandeling en uw persoonlijke situatie.
        </p>
        <p>
          Wilt u weten wat een haartransplantatie voor u zou kosten? Vraag vandaag nog een gratis en
          vrijblijvend consult aan. Tijdens dit gesprek in Grazen bepalen we samen wat de beste
          aanpak is en geven we u een persoonlijke prijsopgave.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Transparante prijzen:</strong> Geen verborgen kosten of onverwachte meerkosten
            achteraf
          </li>
          <li>
            <strong>Prijs op maat:</strong> De prijs is afgestemd op uw specifieke situatie en het
            behandelgebied
          </li>
          <li>
            <strong>Gratis consultatie:</strong> Het eerste gesprek is altijd gratis en volledig
            vrijblijvend
          </li>
          <li>
            <strong>Belgische kliniek:</strong> Geen reis- of verblijfkosten naar het buitenland
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Ben ik geschikt voor een haartransplantatie?</h2>
        <p>
          Niet elke vrouw is geschikt voor een haartransplantatie. Tijdens de consultatie beoordelen
          we zorgvuldig of de behandeling geschikt is voor uw situatie. We behandelen geen vrouwen
          met tijdelijk haarverlies, omdat de haartransplantatie bedoeld is als permanente oplossing
          voor stabiel haarverlies.
        </p>
        <p>
          Andere factoren die de geschiktheid kunnen beinvloeden zijn de kwaliteit en dichtheid van
          het donorgebied, uw algehele gezondheid en eventuele medische aandoeningen. Als u last
          heeft van hart- en vaatziekten, diabetes of hematologische aandoeningen, zal onze
          behandelende arts beoordelen of een behandeling mogelijk is.
        </p>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over haartransplantatie voor vrouwen? Bekijk onze uitgebreide lijst met
          veelgestelde vragen voor antwoorden op vragen zoals: Is het resultaat permanent? Zijn alle
          vrouwen geschikt? Wat zijn de oorzaken van haarverlies? Is de behandeling pijnlijk? Moet
          het haar worden geschoren?
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
export class HaartransplantatieVrouwenPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgische kliniek',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
