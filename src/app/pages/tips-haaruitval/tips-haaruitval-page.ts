import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-tips-haaruitval-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./tips-haaruitval-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <span class="hero-badge">Kenniscentrum</span>
        <h1 class="hero-title">9 Tips Tegen Haaruitval</h1>
        <p class="hero-subtitle">
          Praktische en bewezen tips om haaruitval te vertragen, te voorkomen of te behandelen —
          voor mannen en vrouwen in Grazen, Belgie en daarbuiten.
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Gratis persoonlijk advies</a>
          <a routerLink="/behandelingen" class="btn btn-outline">Behandelingen bekijken</a>
        </div>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-box">
          <h2>Haaruitval: een veelvoorkomend probleem</h2>
          <p>
            Haaruitval treft zowel mannen als vrouwen en heeft uiteenlopende oorzaken: van erfelijke
            aanleg tot hormonale schommelingen, voedingstekorten, stress, medicijnen of verkeerde
            haarverzorging.
          </p>
          <p>
            Normaal verliest u 50 tot 100 haren per dag. Wanneer dit verlies groter is dan de
            aangroei, spreekt men van problematische haaruitval. Gelukkig zijn er concrete stappen
            die u kunt nemen om dit te vertragen of de oorzaak aan te pakken.
          </p>
          <p>
            Hieronder vindt u 9 bewezen tips die ons team aanbeveelt aan iedere patient. Voor een
            gepersonaliseerd advies kunt u altijd terecht voor een gratis consult bij HaarKliniek
            45.
          </p>
        </div>
      </div>
    </section>

    <section class="tips-section">
      <div class="container">
        @for (tip of tips; track tip.number) {
          <div class="tip-card" [class.tip-card--featured]="tip.featured">
            <div class="tip-number">{{ tip.number }}</div>
            <div class="tip-content">
              <div class="tip-header">
                <span class="tip-icon">
                  <img [src]="tip.icon" [alt]="tip.title" width="48" height="48" />
                </span>
                <h2 class="tip-title">{{ tip.title }}</h2>
              </div>
              <p class="tip-intro">{{ tip.intro }}</p>
              <p class="tip-detail">{{ tip.detail }}</p>
              @if (tip.link) {
                <a [routerLink]="tip.link" class="tip-link">{{ tip.linkText }} &rarr;</a>
              }
              @if (tip.bullets.length > 0) {
                <ul class="tip-bullets">
                  @for (bullet of tip.bullets; track bullet) {
                    <li>{{ bullet }}</li>
                  }
                </ul>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Persoonlijk advies op maat</h2>
          <p>
            Iedereen ervaart haaruitval anders. De meest effectieve aanpak hangt af van uw
            specifieke situatie, genetisch profiel en de oorzaak van uw haaruitval.
          </p>
          <p>
            Onze specialisten staan klaar voor een gratis en vrijblijvend intakegesprek. Wij
            analyseren uw situatie en stellen een persoonlijk behandelplan op — zonder
            verplichtingen.
          </p>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
            <a href="tel:+32485593302" class="btn btn-outline">Bel +32 485 593 302</a>
          </div>
          <p class="cta-address">HaarKliniek 45 — Verdaelstraat 45, 3450 Grazen, Belgie</p>
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
export class TipsHaaruitvalPageComponent {
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

  tips = [
    {
      number: 1,
      icon: 'assets/icons/benefit-icons-2024/gezonde-haarzakjes.png',
      title: 'DNA-test voor persoonsgericht advies',
      intro:
        'Een TrichoTest is een genetische test die uw persoonlijk haaruitvalprofiel in kaart brengt op basis van uw DNA.',
      detail:
        'De test toont aan of Minoxidil of Finasteride effectief zal zijn voor uw specifieke genetische profiel, welke vitaminen en mineralen uw lichaam extra nodig heeft, en wat de meest kansrijke behandelstrategie is. Dit voorkomt onnodige kosten aan ineffectieve behandelingen.',
      link: '/behandelingen/dna-test-haaruitval',
      linkText: 'Meer over de DNA-test',
      bullets: [],
      featured: true,
    },
    {
      number: 2,
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Neem de juiste vitaminen',
      intro:
        'Vitaminetekorten zijn een veelgenegeerde oorzaak van haaruitval. De juiste suppletie kan een merkbaar verschil maken.',
      detail:
        'B-vitaminen (met name biotine/B7), zink, ijzer en vitamine D zijn essentieel voor gezonde haargroei. De benodigde hoeveelheden variëren sterk per persoon. Een DNA-test of bloedanalyse bepaalt precies waar uw tekorten liggen, zodat u gericht suppleeert.',
      link: null,
      linkText: '',
      bullets: [
        'Biotine (B7) voor haarkeratine',
        'Zink voor celgroei en herstel',
        'IJzer voor zuurstoftransport',
        'Vitamine D voor folliculaire functie',
      ],
      featured: false,
    },
    {
      number: 3,
      icon: 'assets/icons/benefit-icons-2024/stimulering-regeneratieproces.png',
      title: 'Kies haargroei stimulerende behandelingen',
      intro:
        'Niet-chirurgische behandelingen kunnen de haargroei stimuleren en haaruitval vertragen — ook zonder ingreep.',
      detail:
        'PRP-therapie (platelet-rich plasma) injecteert groeifactoren rechtstreeks in de hoofdhuid. Hairegen en Regenera Activa stimuleren de folliculaire stamcellen. Deze behandelingen zijn ideaal als vroege interventie of ter ondersteuning van een haartransplantatie.',
      link: '/behandelingen',
      linkText: 'Alle niet-chirurgische behandelingen',
      bullets: [],
      featured: false,
    },
    {
      number: 4,
      icon: 'assets/icons/benefit-icons-2024/stimulering-regeneratieproces.png',
      title: 'Voorkom een ijzertekort',
      intro:
        'IJzer is essentieel voor het transport van zuurstof naar de haarfollikels. Een tekort leidt direct tot verzwakking en verlies van haar.',
      detail:
        'Voedingsmiddelen rijk aan ijzer: rood vlees, peulvruchten (linzen, bonen), bladgroenten (spinazie), noten en zaden. Combineer ijzerrijke voeding met vitamine C voor een betere opname. Een DNA-test of bloedtest toont aan of uw lichaam genetisch een hogere ijzerbehoefte heeft.',
      link: null,
      linkText: '',
      bullets: [
        'Rood vlees en gevogelte',
        'Linzen en kikkererwten',
        'Spinazie en boerenkool',
        'Pompoenpitten en sesamzaad',
      ],
      featured: false,
    },
    {
      number: 5,
      icon: 'assets/icons/benefit-icons-2024/expertise.png',
      title: 'Controleer uw medicijngebruik',
      intro:
        'Bepaalde medicijnen kunnen als bijwerking haaruitval veroorzaken — dit wordt vaak over het hoofd gezien.',
      detail:
        'Bloeddrukverlagende middelen (betablokkers), antidepressiva, hormonale anticonceptie, statines en sommige antibiotica kunnen haaruitval veroorzaken of verergeren. Bespreek dit met uw arts. Stop nooit eigenhandig met medicatie maar vraag naar eventuele alternatieven.',
      link: null,
      linkText: '',
      bullets: [],
      featured: false,
    },
    {
      number: 6,
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Stop met roken',
      intro:
        'Roken heeft een direct negatief effect op de bloeddoorstroming naar de hoofdhuid en daarmee op de gezondheid van uw haarfollikels.',
      detail:
        'Nicotine en andere schadelijke stoffen in tabaksrook vernauwen de bloedvaten en verminderen de aanvoer van zuurstof en voedingsstoffen naar de haarfollikels. Stoppen met roken geeft uw follikels de kans om te herstellen en kan haaruitval significant vertragen.',
      link: null,
      linkText: '',
      bullets: [],
      featured: false,
    },
    {
      number: 7,
      icon: 'assets/icons/benefit-icons-2024/geen-herstelperiode.png',
      title: 'Verminder stress',
      intro:
        'Langdurige stress is een bewezen oorzaak van haaruitval via telogeen effluvium — een verstoring van de haargroeicyclus.',
      detail:
        'Bij chronische stress worden haarfollikels voortijdig in de rustfase (telogeen) geduwd, waarna meer haar tegelijk uitvalt. Voldoende slaap (7-9 uur), regelmatige lichaamsbeweging, meditatie en sociale verbinding helpen stresshormonen te reguleren. De haargroei herstelt na het wegnemen van de stressbron.',
      link: null,
      linkText: '',
      bullets: [],
      featured: false,
    },
    {
      number: 8,
      icon: 'assets/icons/process-icons-2025/alleen-scheren-donorgebied.png',
      title: 'Vermijd chemische behandelingen en overmatige hitte',
      intro:
        'Agressieve haarbehandelingen beschadigen niet alleen de haarschacht, maar ook de follikels bij langdurig gebruik.',
      detail:
        'Permanenten, blekingen, agressieve haarkleuren en chemische ontspanners tasten de haarstructuur aan. Overmatig gebruik van fohn, stijltang en krultang veroorzaakt broosheid en breuk. Kies voor milde, sulfaat- en parabeenvrije shampoos en gebruik altijd een hittebeschermingsspray.',
      link: null,
      linkText: '',
      bullets: [
        'Gebruik sulfaat- en parabeenvrije shampoo',
        'Maximaal 2x per week hitte-styling',
        'Altijd hittebescherming gebruiken',
        'Vermijd strakke staarten en vlechten',
      ],
      featured: false,
    },
    {
      number: 9,
      icon: 'assets/icons/benefit-icons-2024/expertise.png',
      title: 'Laat u adviseren door onze experts',
      intro:
        'De meest effectieve aanpak van haaruitval is altijd persoonlijk. Iedereen heeft een ander genetisch profiel, een andere oorzaak en andere noden.',
      detail:
        'Bij HaarKliniek 45 in Grazen bieden wij een gratis en vrijblijvend intakeconsult aan. Onze specialist luistert naar uw situatie, analyseert uw haaruitval en stelt een persoonlijk behandelplan op — of u nu kiest voor een niet-chirurgische behandeling, een haartransplantatie, of gewoon meer informatie wil.',
      link: '/contact',
      linkText: 'Plan uw gratis consult',
      bullets: [],
      featured: true,
    },
  ];
}
