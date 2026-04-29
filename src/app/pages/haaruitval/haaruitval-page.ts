import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haaruitval-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./haaruitval-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <span class="hero-badge">Kenniscentrum</span>
        <h1 class="hero-title">Haaruitval — Alles wat u moet weten</h1>
        <p class="hero-subtitle">
          Een uitgebreide gids over de oorzaken van haaruitval, de verschillende types en de
          mogelijke behandelingen bij HaarKliniek 45 in Grazen, Belgie.
        </p>
        <div class="hero-actions">
          <a routerLink="/behandelingen" class="btn btn-primary">Behandelingen bekijken</a>
          <a routerLink="/faq" class="btn btn-outline">Veelgestelde vragen</a>
        </div>
      </div>
    </section>

    <section class="info-section">
      <div class="container">
        <h2 class="section-title">Wat is haaruitval?</h2>
        <p class="section-subtitle">
          Het verschil tussen normale haargroei en problematische haaruitval
        </p>
        <div class="content-grid">
          <div class="content-text">
            <p>
              Elk haar doorloopt een groeicyclus die bestaat uit drie fasen: de groeifase (anageen),
              de overgangsfase (katageen) en de rustfase (telogeen). Na de rustfase valt het haar
              uit en begint een nieuwe cyclus.
            </p>
            <p>
              Het is normaal om dagelijks 50 tot 100 haren te verliezen. Dit wordt vervangen door
              nieuw haar. Wanneer het verlies echter groter is dan de aangroei, of wanneer de haren
              dunner en korter worden, spreekt men van problematische haaruitval.
            </p>
            <p>
              Vroege detectie is cruciaal: hoe eerder een behandeling wordt gestart, hoe beter het
              resultaat. Wacht niet tot u grote kale plekken heeft voor u hulp zoekt.
            </p>
          </div>
          <div class="content-stats">
            <div class="stat-card">
              <span class="stat-number">50–100</span>
              <span class="stat-label">haren per dag normaal verlies</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">95%</span>
              <span class="stat-label">van haaruitval bij mannen is erfelijk</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">40%</span>
              <span class="stat-label">van de vrouwen ervaart haaruitval</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="types-section">
      <div class="container">
        <h2 class="section-title">Types haaruitval</h2>
        <p class="section-subtitle">
          Er zijn verschillende vormen van haaruitval, elk met eigen kenmerken en behandelaanpak
        </p>
        <div class="types-grid">
          @for (type of hairLossTypes; track type.name) {
            <div class="type-card">
              <div class="type-icon">
                <img [src]="type.icon" [alt]="type.name" width="48" height="48" />
              </div>
              <h3 class="type-name">{{ type.name }}</h3>
              <p class="type-desc">{{ type.desc }}</p>
              <span class="type-tag">{{ type.tag }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="causes-section">
      <div class="container">
        <h2 class="section-title">Oorzaken van haaruitval</h2>
        <p class="section-subtitle">
          Haaruitval heeft zelden een enkele oorzaak — vaak spelen meerdere factoren een rol
        </p>
        <div class="causes-grid">
          @for (cause of causes; track cause.title) {
            <div class="cause-card">
              <div class="cause-icon">
                <img [src]="cause.icon" [alt]="cause.title" width="48" height="48" />
              </div>
              <h3 class="cause-title">{{ cause.title }}</h3>
              <p class="cause-desc">{{ cause.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="gender-section gender-section--light">
      <div class="container">
        <div class="gender-grid">
          <div class="gender-content">
            <span class="gender-badge">Voor mannen</span>
            <h2>Haaruitval bij mannen</h2>
            <p>
              De meest voorkomende vorm van haaruitval bij mannen is de androgenetische alopecia,
              ook wel mannelijke kaalheid. Deze wordt veroorzaakt door een genetische gevoeligheid
              voor DHT (dihydrotestosteron), een bijproduct dat vrijkomt bij de omzetting van
              testosteron.
            </p>
            <p>
              De progressie wordt beschreven via de <strong>Norwood-schaal</strong> in 7 fasen, van
              een lichte terugwijkende haarlijn tot volledige kaalheid aan de kruin. Het verloopt
              geleidelijk en kan al voor het 20e levensjaar beginnen.
            </p>
            <a routerLink="/kenniscentrum/haaruitval-man" class="btn btn-primary"
              >Meer over haaruitval bij mannen</a
            >
          </div>
          <div class="norwood-visual">
            <div class="norwood-grid">
              @for (phase of norwoodPhases; track phase.number) {
                <div class="norwood-phase">
                  <span class="norwood-num">{{ phase.number }}</span>
                  <span class="norwood-desc">{{ phase.label }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gender-section">
      <div class="container">
        <div class="gender-grid gender-grid--reverse">
          <div class="gender-content">
            <span class="gender-badge gender-badge--rose">Voor vrouwen</span>
            <h2>Haaruitval bij vrouwen</h2>
            <p>
              Bij vrouwen verloopt haaruitval vaak diffuser dan bij mannen. In plaats van kale
              plekken ervaart een vrouw globaal dunner wordend haar, vooral op de kruin. De
              <strong>Ludwig-schaal</strong> beschrijft dit in 3 graden van ernst.
            </p>
            <p>
              Oorzaken zijn onder meer hormonale schommelingen (zwangerschap, menopauze,
              schildklierproblematiek), stress, voedingstekorten en bepaalde medicatie. Een grondig
              onderzoek is essentieel voor de juiste diagnose.
            </p>
            <p>
              Een haartransplantatie is ook voor vrouwen mogelijk bij bepaalde types haaruitval. De
              aanpak verschilt van die bij mannen en wordt individueel bepaald.
            </p>
            <a routerLink="/behandelingen" class="btn btn-outline">Behandelopties bekijken</a>
          </div>
          <div class="gender-visual">
            <div class="ludwig-scale">
              @for (lp of ludwigPhases; track lp.num) {
                <div class="ludwig-phase">
                  <span class="ludwig-num">{{ lp.num }}</span>
                  <div>
                    <strong>{{ lp.title }}</strong>
                    <p>{{ lp.desc }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="action-section">
      <div class="container">
        <h2 class="section-title">Wat kunt u doen?</h2>
        <p class="section-subtitle">Vroege actie is de sleutel tot het beste resultaat</p>
        <div class="action-steps">
          @for (step of actionSteps; track step.num) {
            <div class="action-step">
              <span class="action-num">{{ step.num }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          }
        </div>
        <div class="action-links">
          <a routerLink="/behandelingen" class="btn btn-primary">Alle behandelingen</a>
          <a routerLink="/faq" class="btn btn-outline">Veelgestelde vragen</a>
        </div>
      </div>
    </section>

    <section class="subpages-section">
      <div class="container">
        <h2 class="section-title">Meer lezen?</h2>
        <div class="subpages-grid">
          <a routerLink="/kenniscentrum/haaruitval-man" class="subpage-card">
            <div class="subpage-icon">👨</div>
            <h3>Haaruitval bij mannen</h3>
            <p>
              Alles over androgenetische alopecia, de Norwood-schaal en behandelopties voor mannen.
            </p>
            <span class="subpage-link">Lees meer &rarr;</span>
          </a>
          <a routerLink="/kenniscentrum/tips-haaruitval" class="subpage-card">
            <div class="subpage-icon">💡</div>
            <h3>9 Tips tegen haaruitval</h3>
            <p>
              Praktische tips om haaruitval te vertragen of te voorkomen — van vitaminen tot
              levensstijl.
            </p>
            <span class="subpage-link">Lees meer &rarr;</span>
          </a>
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
export class HaaruitvalPageComponent {
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

  hairLossTypes = [
    {
      icon: 'assets/icons/benefit-icons-2024/gezonde-haarzakjes.png',
      name: 'Alopecia Androgenetica',
      desc: 'De meest voorkomende vorm: erfelijke haaruitval veroorzaakt door DHT. Treft zowel mannen (Norwood-schaal) als vrouwen (Ludwig-schaal).',
      tag: 'Meest voorkomend',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      name: 'Alopecia Areata',
      desc: 'Een auto-immuunziekte waarbij het immuunsysteem de haarfollikels aanvalt, resulterend in ronde kale plekken op het hoofd of lichaam.',
      tag: 'Auto-immuun',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/stimulering-regeneratieproces.png',
      name: 'Telogeen Effluvium',
      desc: 'Tijdelijke, diffuse haaruitval veroorzaakt door stress, ziekte, een bevalling of andere fysiologische schokken. Groeit vaak terug na herstel.',
      tag: 'Tijdelijk',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/haarverdikking.png',
      name: 'Tractie Alopecia',
      desc: 'Veroorzaakt door herhaaldelijk trekken aan het haar door strakke kapsels, vlechten of extensies. Leidt tot geleidelijke beschadiging van de follikels.',
      tag: 'Door styling',
    },
  ];

  causes = [
    {
      icon: 'assets/icons/benefit-icons-2024/gezonde-haarzakjes.png',
      title: 'Erfelijke aanleg',
      desc: '95% van haaruitval bij mannen is erfelijk bepaald. De gevoeligheid voor DHT is genetisch overgedragen en kan van beide kanten van de familie komen.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/lage-jaarlijkse-kosten.png',
      title: 'Hormonale schommelingen',
      desc: 'Zwangerschap, bevalling, menopauze, schildklierproblematiek en schommelingen in androgeenspiegels kunnen leiden tot tijdelijke of blijvende haaruitval.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/stimulering-regeneratieproces.png',
      title: 'Stress en ziekte',
      desc: 'Langdurige stress, hoge koorts, operaties of ernstige ziekten kunnen de haargroeicyclus verstoren en resulteren in telogeen effluvium — diffuse tijdelijke haaruitval.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/gezonde-haarzakjes.png',
      title: 'Voedingstekorten',
      desc: 'Een tekort aan ijzer, zink, biotine, vitamine D of proteinen kan de haargroei negatief beinvloeden. Een DNA-test kan specifieke tekorten in kaart brengen.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Medicijnen',
      desc: 'Bloeddrukverlagende middelen, antidepressiva, chemotherapie, hormonale anticonceptie en bepaalde cholesterolmedicijnen kunnen haaruitval als bijwerking hebben.',
    },
    {
      icon: 'assets/icons/process-icons-2025/alleen-scheren-donorgebied.png',
      title: 'Verkeerde haarverzorging',
      desc: 'Overmatig gebruik van hittegereedschappen, agressieve chemicalien (bleking, permanenten) en strakke kapsels kunnen de haarschacht en follikels beschadigen.',
    },
  ];

  norwoodPhases = [
    { number: 'I', label: 'Geen verlies' },
    { number: 'II', label: 'Lichte recessie' },
    { number: 'III', label: 'Zichtbare kaalheid' },
    { number: 'III V', label: 'Verlies op kruin' },
    { number: 'IV', label: 'Recessie + kruin' },
    { number: 'V', label: 'Grotere kale zones' },
    { number: 'VI', label: 'Slapen + kruin samen' },
    { number: 'VII', label: 'Alleen zijband over' },
  ];

  ludwigPhases = [
    { num: 'I', title: 'Ludwig I', desc: 'Lichte verdunning aan de kruin' },
    { num: 'II', title: 'Ludwig II', desc: 'Duidelijkere verdunning, bredere scheiding' },
    { num: 'III', title: 'Ludwig III', desc: 'Ernstige verdunning, zichtbare hoofdhuid aan kruin' },
  ];

  actionSteps = [
    {
      num: '1',
      title: 'Vroege detectie',
      desc: 'Hoe vroeger u actie onderneemt, hoe meer opties er zijn. Behandelingen werken beter bij recent of mild haaruitval. Wacht niet tot de situatie ernstig is.',
    },
    {
      num: '2',
      title: 'Medische evaluatie',
      desc: 'Laat de oorzaak professioneel vaststellen. Een DNA-test kan aantonen of haaruitval erfelijk is en welke behandelingen het meest effectief zullen zijn voor uw genetisch profiel.',
    },
    {
      num: '3',
      title: 'Behandeling kiezen',
      desc: 'Van niet-chirurgische opties zoals PRP en Regenera Activa tot een volledige haartransplantatie — er is een oplossing voor elke situatie. Onze specialist stelt een persoonlijk behandelplan op.',
    },
  ];
}
