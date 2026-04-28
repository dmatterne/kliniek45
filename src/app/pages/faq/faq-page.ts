import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

interface FaqItem {
  q: string;
  a: string;
  open: boolean;
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./faq-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Veelgestelde Vragen</h1>
        <p class="subtitle">
          Alles wat u wilt weten over haartransplantatie bij HaarKliniek 45 in Grazen, België
        </p>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <p class="intro-text">
          Heeft u vragen over haartransplantatie, onze technieken of de nazorg? Hieronder vindt u
          antwoord op de meest gestelde vragen. Staat uw vraag er niet bij? Neem dan vrijblijvend
          contact op — ons team helpt u graag persoonlijk verder.
        </p>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        @for (cat of faqCategories; track cat.title) {
          <div class="faq-category">
            <h2 class="category-title">{{ cat.title }}</h2>
            <div class="faq-list">
              @for (item of cat.items; track item.q) {
                <div class="faq-item" [class.open]="item.open">
                  <button class="faq-question" (click)="toggle(item)">
                    {{ item.q }}
                    <span class="faq-icon">{{ item.open ? '−' : '+' }}</span>
                  </button>
                  @if (item.open) {
                    <div class="faq-answer">
                      <p>{{ item.a }}</p>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Nog steeds vragen?</h2>
        <p>
          Onze specialisten staan klaar voor een gratis en vrijblijvend gesprek. Wij beantwoorden al
          uw vragen persoonlijk.
        </p>
        <div class="cta-buttons">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a href="tel:+32485593302" class="btn btn-outline">Bel ons: +32 485 593 302</a>
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Waarom een behandeling bij HaarKliniek 45?</h2>
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
export class FaqPageComponent {
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

  faqCategories: { title: string; items: FaqItem[] }[] = [
    {
      title: 'Algemene vragen',
      items: [
        {
          q: 'Is een haartransplantatie pijnlijk?',
          a: 'De ingreep wordt uitgevoerd onder lokale verdoving, waardoor u tijdens de behandeling geen pijn ervaart. U kunt wel een lichte druksensatie voelen. Na de ingreep is er enige gevoeligheid, maar dit verdwijnt doorgaans binnen enkele dagen.',
          open: false,
        },
        {
          q: 'Hoelang duurt een haartransplantatie?',
          a: 'Afhankelijk van het aantal grafts en de gebruikte techniek duurt een haartransplantatie 4 tot 8 uur. Het is een dagbehandeling — u gaat dezelfde dag naar huis.',
          open: false,
        },
        {
          q: 'Wanneer zie ik het eindresultaat?',
          a: 'Na de ingreep vallen de getransplanteerde haren tijdelijk uit (2 tot 4 weken) — dit is volkomen normaal en onderdeel van het proces. Nieuwe haargroei wordt zichtbaar na 3 tot 4 maanden. Het definitieve resultaat is te beoordelen na 12 tot 18 maanden.',
          open: false,
        },
        {
          q: 'Hoe lang blijft het resultaat?',
          a: 'Het resultaat van een haartransplantatie is permanent. De getransplanteerde haren zijn afkomstig uit het donorgebied dat genetisch resistent is tegen DHT — het hormoon dat haaruitval veroorzaakt. Ze blijven dus voor de rest van uw leven groeien.',
          open: false,
        },
        {
          q: 'Hoeveel grafts heb ik nodig?',
          a: 'Dit hangt af van de mate van haaruitval en de gewenste dichtheid. Voor een kleine behandelzone zijn 1.000 tot 1.500 grafts voldoende; voor grotere zones gaat dit richting 3.000 tot 4.500 of meer. Tijdens het gratis consult bepalen wij nauwkeurig het benodigde aantal grafts voor uw situatie.',
          open: false,
        },
        {
          q: 'Wat kost een haartransplantatie?',
          a: 'De prijs hangt af van het aantal grafts en de gekozen techniek. Tijdens het gratis consult ontvangt u een gepersonaliseerde offerte op maat — geen verborgen kosten, volledige transparantie.',
          open: false,
        },
      ],
    },
    {
      title: 'Vragen over geschiktheid',
      items: [
        {
          q: 'Ben ik een goede kandidaat voor een haartransplantatie?',
          a: 'Goede kandidaten hebben een stabiele haaruitval, voldoende donordichtheid en zijn minimaal 23 tot 25 jaar oud. Onze specialist beoordeelt uw situatie uitgebreid tijdens het gratis consult en adviseert u eerlijk over de mogelijkheden en verwachtingen.',
          open: false,
        },
        {
          q: 'Kunnen vrouwen ook een haartransplantatie ondergaan?',
          a: 'Ja, een haartransplantatie is ook voor vrouwen effectief bij bepaalde types haaruitval. De planning verschilt van die bij mannen omdat haaruitval bij vrouwen vaak diffuser van aard is. Onze specialist bespreekt de opties specifiek voor uw situatie.',
          open: false,
        },
        {
          q: 'Is er een maximumleeftijd voor een haartransplantatie?',
          a: 'Er is geen strikte maximumleeftijd. Zolang u in goede gezondheid verkeert en over voldoende donormateriaal beschikt, zijn er mogelijkheden. Onze specialist bespreekt graag de opties met u, ongeacht uw leeftijd.',
          open: false,
        },
        {
          q: 'Kan ik een haartransplantatie ondergaan als ik medicijnen gebruik?',
          a: 'Dit hangt af van het type medicatie. Bespreek uw medicijngebruik altijd met onze specialist. Sommige medicijnen — zoals bloedverdunners — dienen mogelijk tijdelijk gestopt te worden in overleg met uw huisarts. Stop nooit eigenhandig met medicatie.',
          open: false,
        },
      ],
    },
    {
      title: 'Vragen over technieken',
      items: [
        {
          q: 'Wat is het verschil tussen FUE Saffier en DHI?',
          a: 'Bij FUE Saffier worden kanaaltjes geopend met een saffieren blad voor maximale precisie; meer grafts per sessie zijn mogelijk. Bij DHI (Direct Hair Implantation) worden grafts rechtstreeks geimplanteerd via een Choi-pen — ideaal voor maximale precisie in een beperkt gebied. Beide technieken laten minimale littekens achter.',
          open: false,
        },
        {
          q: 'Wat is de Long Hair methode?',
          a: 'De Long Hair methode laat toe om een haartransplantatie uit te voeren zonder het haar te scheren. Dit is ideaal voor kleinere behandelzones of voor patienten die discretie wensen. Het resultaat is direct zichtbaar na de ingreep.',
          open: false,
        },
        {
          q: 'Kan ik ook een baardtransplantatie laten doen?',
          a: 'Ja, HaarKliniek 45 biedt ook baardtransplantaties aan. De techniek is vergelijkbaar met de reguliere haartransplantatie en geeft een natuurlijk, permanent resultaat. Vraag een gratis consult aan voor meer informatie.',
          open: false,
        },
      ],
    },
    {
      title: 'Vragen over herstel en nazorg',
      items: [
        {
          q: 'Wanneer kan ik het werk hervatten?',
          a: 'Bij kantoorfuncties kunt u doorgaans na 2 tot 3 dagen weer aan het werk. Voor zwaar fysiek werk of intensieve sporten dient u minimaal 2 tot 3 weken te wachten.',
          open: false,
        },
        {
          q: 'Wanneer mag ik mijn haar wassen?',
          a: 'U ontvangt gedetailleerde instructies en productadvies van ons team. In het algemeen kunt u het haar vanaf dag 2 wassen met een speciale milde shampoo en een zachte wastechniek die wij u uitleggen.',
          open: false,
        },
        {
          q: 'Kan ik na de ingreep sporten?',
          a: 'Licht wandelen is toegestaan vanaf dag 1. Intensief sporten, zwemmen en contactsporten dient u minimaal 3 tot 4 weken te vermijden om de grafts niet te beschadigen.',
          open: false,
        },
        {
          q: 'Zijn er littekens zichtbaar na een haartransplantatie?',
          a: 'Bij FUE- en DHI-technieken worden microscopisch kleine ronde puntjes achtergelaten in het donorgebied. Deze zijn bij normaal haar praktisch onzichtbaar en worden als niet-storend ervaren door de overgrote meerderheid van de patienten.',
          open: false,
        },
        {
          q: 'Hoelang moet ik rechtop slapen na de ingreep?',
          a: 'De eerste 3 tot 10 nachten slaapt u best met een nekkussen in een licht verhoogde positie om zwelling te beperken en de grafts te beschermen.',
          open: false,
        },
        {
          q: 'Wanneer vallen de korstjes weg?',
          a: 'De korstjes verdwijnen doorgaans na 10 tot 15 dagen. Met de speciale wastechniek die wij u aanleren, gaat dit sneller en comfortabeler.',
          open: false,
        },
      ],
    },
    {
      title: 'Vragen over de kliniek',
      items: [
        {
          q: 'Waar is HaarKliniek 45 gevestigd?',
          a: 'HaarKliniek 45 bevindt zich op Verdaelstraat 45, 3450 Grazen, Belgie. De kliniek is goed bereikbaar met eigen wagen en beschikt over gratis parkeermogelijkheden in de buurt.',
          open: false,
        },
        {
          q: 'Hoe maak ik een afspraak?',
          a: 'U kunt contact opnemen via het contactformulier op onze website, telefonisch via +32 485 593 302 of per e-mail via info@haarkliniek45.be. Het eerste consult is altijd gratis en vrijblijvend.',
          open: false,
        },
        {
          q: 'Bieden jullie ook niet-chirurgische behandelingen aan?',
          a: 'Ja, naast haartransplantaties bieden wij ook niet-chirurgische behandelingen aan zoals PRP-therapie, Hairegen, Regenera Activa, een DNA-test voor gepersonaliseerd haaradvies en micro haarpigmentatie.',
          open: false,
        },
      ],
    },
  ];

  toggle(item: FaqItem): void {
    item.open = !item.open;
  }
}
