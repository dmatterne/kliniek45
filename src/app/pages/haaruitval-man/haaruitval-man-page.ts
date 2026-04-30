import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haaruitval-man-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./haaruitval-man-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <span class="hero-badge">Kenniscentrum</span>
        <h1 class="hero-title">Haaruitval bij Mannen</h1>
        <p class="hero-subtitle">
          Alles over de oorzaken, symptomen, de Norwood-schaal en de behandelopties voor mannelijke
          haaruitval bij HaarKliniek 45 in Grazen, Belgie.
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/behandelingen" class="btn btn-outline">Behandelingen bekijken</a>
        </div>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content">
            <h2>Androgenetische alopecia: de meest voorkomende oorzaak</h2>
            <p>
              95% van alle haaruitval bij mannen is androgenetische alopecia, ook wel mannelijke
              kaalheid of patroonkaalheid. De oorzaak ligt in een genetische gevoeligheid voor DHT
              (dihydrotestosteron), een bijproduct dat vrijkomt bij de omzetting van testosteron.
            </p>
            <p>
              DHT bindt zich aan receptoren in de haarfollikels en veroorzaakt miniaturisatie: de
              follikels worden geleidelijk kleiner en produceren steeds fijnere, kortere haren — tot
              ze uiteindelijk helemaal stoppen met groeien.
            </p>
            <p>
              De genetische gevoeligheid voor DHT kan van beide kanten van de familie overgedragen
              worden. Een vroege start van haaruitval duidt doorgaans op een sterkere genetische
              aanleg.
            </p>
          </div>
          <div class="intro-stats">
            <div class="stat-box">
              <span class="stat-big">95%</span>
              <span class="stat-text">van haaruitval bij mannen is erfelijk</span>
            </div>
            <div class="stat-box">
              <span class="stat-big">50%</span>
              <span class="stat-text">van de mannen heeft haaruitval op 50-jarige leeftijd</span>
            </div>
            <div class="stat-box">
              <span class="stat-big">20j</span>
              <span class="stat-text">haaruitval kan al voor het 20e levensjaar beginnen</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="symptoms-section">
      <div class="container">
        <h2 class="section-title">Herken de symptomen</h2>
        <p class="section-subtitle">
          Haaruitval bij mannen heeft herkenbare vroege signalen — hoe vroeger u actie onderneemt,
          hoe meer opties beschikbaar zijn
        </p>
        <div class="symptoms-grid">
          @for (symptom of symptoms; track symptom.title) {
            <div class="symptom-card">
              <div class="symptom-icon">
                <img [src]="symptom.icon" [alt]="symptom.title" width="48" height="48" />
              </div>
              <h3>{{ symptom.title }}</h3>
              <p>{{ symptom.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="norwood-section">
      <div class="container">
        <h2 class="section-title">De Norwood-schaal</h2>
        <p class="section-subtitle">
          De internationale standaard om mannelijke kaalheid in 7 fasen te classificeren
        </p>
        <div class="norwood-table">
          @for (phase of norwoodScale; track phase.phase) {
            <div class="norwood-row" [class.norwood-row--highlight]="phase.highlight">
              <div class="norwood-phase-badge">{{ phase.phase }}</div>
              <div class="norwood-content">
                <h3 class="norwood-title">{{ phase.title }}</h3>
                <p class="norwood-desc">{{ phase.desc }}</p>
              </div>
              @if (phase.transplantSuitable) {
                <span class="norwood-suitable-badge">Transplantatie mogelijk</span>
              }
            </div>
          }
        </div>
        <p class="norwood-note">
          Vanaf fase III is een haartransplantatie doorgaans een geschikte optie, mits de haaruitval
          gestabiliseerd is en er voldoende donormateriaal aanwezig is.
        </p>
      </div>
    </section>

    <section class="prevention-section">
      <div class="container">
        <h2 class="section-title">Preventie tips voor mannen</h2>
        <p class="section-subtitle">
          Hoewel erfelijke haaruitval niet volledig te voorkomen is, kunt u de progressie vertragen
        </p>
        <div class="prevention-grid">
          @for (tip of preventionTips; track tip.title) {
            <div class="prevention-card">
              <div class="prevention-icon">
                <img [src]="tip.icon" [alt]="tip.title" width="48" height="48" />
              </div>
              <h3>{{ tip.title }}</h3>
              <p>{{ tip.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="treatments-section">
      <div class="container">
        <h2 class="section-title">Behandelopties bij HaarKliniek 45</h2>
        <p class="section-subtitle">
          Van niet-chirurgische behandelingen tot permanente haartransplantatie
        </p>
        <div class="treatments-grid">
          @for (treatment of treatments; track treatment.title) {
            <a [routerLink]="treatment.link" class="treatment-card">
              <div class="treatment-icon">
                <img [src]="treatment.icon" [alt]="treatment.title" width="48" height="48" />
              </div>
              <h3 class="treatment-title">{{ treatment.title }}</h3>
              <p class="treatment-desc">{{ treatment.desc }}</p>
              <span class="treatment-type treatment-type--{{ treatment.type }}">{{
                treatment.typeLabel
              }}</span>
              <span class="treatment-cta">Meer info &rarr;</span>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="suitability-section">
      <div class="container">
        <div class="suitability-box">
          <h2>Wanneer is een haartransplantatie geschikt?</h2>
          <p>
            Een haartransplantatie bij mannen is het meest effectief wanneer aan een aantal
            voorwaarden is voldaan. Onze specialist beoordeelt dit grondig tijdens het gratis
            consult.
          </p>
          <ul class="suitability-list">
            @for (crit of suitabilityCriteria; track crit) {
              <li class="suitability-item">
                <span class="suitability-check">✓</span>
                <span>{{ crit }}</span>
              </li>
            }
          </ul>
          <a routerLink="/contact" class="btn btn-primary">Gratis geschiktheidsbeoordeling</a>
        </div>
      </div>
    </section>

    <section class="tips-cta-section">
      <div class="container">
        <div class="tips-cta-box">
          <h2>Praktische tips tegen haaruitval</h2>
          <p>
            Naast een behandeling zijn er ook levensstijl- en verzorgingstips die het
            haaruitvalproces kunnen vertragen. Lees onze 9 bewezen tips.
          </p>
          <a routerLink="/kenniscentrum/tips-haaruitval" class="btn btn-outline"
            >9 Tips tegen haaruitval</a
          >
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Waarom starten bij HaarKliniek 45?</h2>
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
export class HaaruitvalManPageComponent {
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

  symptoms = [
    {
      icon: 'assets/icons/benefit-icons-2024/preventie-haaruitval.png',
      title: 'Terugwijkende haarlijn',
      desc: 'De haarlijn trekt zich terug aan de slapen en het voorhoofd, wat een M-vormig patroon creëert.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/haarverdikking.png',
      title: 'Verdunning op de kruin',
      desc: 'Het haar op de bovenkant van het hoofd wordt dunner en de hoofdhuid wordt steeds meer zichtbaar.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/preventie-haaruitval.png',
      title: 'M-, U- of V-vormige haarlijn',
      desc: 'Een typisch mannelijk patroon waarbij de haarlijn een karakteristieke M-, U- of V-vorm aanneemt.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/snel-resultaat.png',
      title: 'Vroeg begin mogelijk',
      desc: 'Mannelijke kaalheid kan al voor het 20e levensjaar beginnen. Vroege actie leidt tot betere resultaten.',
    },
  ];

  norwoodScale = [
    {
      phase: 'Fase 1',
      title: 'Geen significante haaruitval',
      desc: 'De haarlijn is volledig intact, geen zichtbare recessie of verdunning.',
      highlight: false,
      transplantSuitable: false,
    },
    {
      phase: 'Fase 2',
      title: 'Lichte recessie aan de slapen',
      desc: 'Een lichte terugtrekking van de haarlijn aan de slapen, maar nog geen echte kaalheid.',
      highlight: false,
      transplantSuitable: false,
    },
    {
      phase: 'Fase 3',
      title: 'Diepere recessie — eerste zichtbare kaalheid',
      desc: 'Diepere recessie aan beide slapen, M-, U- of V-vormige haarlijn. Dit is de minimumdrempel voor een haartransplantatie.',
      highlight: true,
      transplantSuitable: true,
    },
    {
      phase: 'Fase 3V',
      title: 'Verlies op de kruin',
      desc: 'Naast de recessie aan de haarlijn ook verlies op de top van de hoofdhuid.',
      highlight: true,
      transplantSuitable: true,
    },
    {
      phase: 'Fase 4',
      title: 'Ernstigere recessie en kale kruin',
      desc: 'Verdere terugwijking van de haarlijn gecombineerd met weinig of geen haar op de kruin. Een smalle haarband scheidt beide zones.',
      highlight: true,
      transplantSuitable: true,
    },
    {
      phase: 'Fase 5',
      title: 'Grotere kale zones',
      desc: 'De kale zones aan haarlijn en kruin zijn groter geworden. De verbindende haarband is smaller geworden.',
      highlight: true,
      transplantSuitable: true,
    },
    {
      phase: 'Fase 6',
      title: 'Slapen en kruin smelten samen',
      desc: 'De kale zones aan de slapen en de kruin vloeien samen. Alleen een haarband aan de zijkanten en achterkant blijft over.',
      highlight: true,
      transplantSuitable: true,
    },
    {
      phase: 'Fase 7',
      title: 'Uitgebreide kaalheid',
      desc: 'Alleen een smalle haarband aan de zijkanten en achterkant van het hoofd blijft over. De meest uitgebreide vorm van mannelijke kaalheid.',
      highlight: false,
      transplantSuitable: true,
    },
  ];

  preventionTips = [
    {
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Stop met roken',
      desc: 'Roken vermindert de bloeddoorstroming naar de hoofdhuid en ontneemt de follikels van zuurstof en voedingsstoffen.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/geen-herstelperiode.png',
      title: 'Verminder stress',
      desc: 'Chronische stress verstoort de hormonale balans en kan haaruitval versnellen. Meditatie, sport en voldoende slaap helpen.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/gezonde-haarzakjes.png',
      title: 'Voeding rijk aan proteinen en ijzer',
      desc: 'Een dieet rijk aan proteinen (vlees, vis, eieren, peulvruchten), ijzer en vitaminen B en D ondersteunt gezonde haargroei.',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Bespreek uw medicatie',
      desc: 'Sommige medicijnen versnellen haaruitval. Overleg met uw arts of er alternatieven zijn. Stop nooit eigenhandig met medicatie.',
    },
  ];

  treatments = [
    {
      icon: 'assets/icons/process-icons-2025/implanteren-grafts.png',
      title: 'Haartransplantatie voor mannen',
      desc: 'Permanente oplossing voor gevorderde haaruitval. Eigen haar, eigen donorzone, langdurig resultaat.',
      link: '/behandelingen/haartransplantatie-mannen',
      type: 'surgical',
      typeLabel: 'Chirurgisch',
    },
    {
      icon: 'assets/icons/process-icons-2025/precisie-en-veiligheid.png',
      title: 'FUE Saffier',
      desc: 'Geavanceerde FUE-techniek met saffieren blad voor maximale precisie en sneller herstel.',
      link: '/behandelingen/fue-saffier',
      type: 'surgical',
      typeLabel: 'Chirurgisch',
    },
    {
      icon: 'assets/icons/process-icons-2025/directe-haarimplantatie.png',
      title: 'DHI',
      desc: 'Direct Hair Implantation met Choi-pen voor maximale dichtheid en precisie. Minder trauma aan het donorgebied.',
      link: '/behandelingen/dhi',
      type: 'surgical',
      typeLabel: 'Chirurgisch',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/haarverdikking.png',
      title: 'Micro Haarpigmentatie',
      desc: 'Niet-chirurgische oplossing die de optische illusie van een geschoren hoofd of meer dichtheid creëert.',
      link: '/behandelingen/micro-haarpigmentatie',
      type: 'nonsurgical',
      typeLabel: 'Niet-chirurgisch',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/stimulering-regeneratieproces.png',
      title: 'PRP-behandeling',
      desc: 'Platelet-rich plasma stimuleert de haarfollikels en vertraagt haaruitval. Ideaal als preventie of aanvulling.',
      link: '/haargroei-stimuleren/prp-behandeling',
      type: 'nonsurgical',
      typeLabel: 'Niet-chirurgisch',
    },
    {
      icon: 'assets/icons/benefit-icons-2024/haargroei-stimuleren.png',
      title: 'Regenera Activa',
      desc: 'Innovatieve behandeling met biologische groeifactoren die haargroei stimuleren en miniaturisering afremmen.',
      link: '/haargroei-stimuleren/regenera-activa',
      type: 'nonsurgical',
      typeLabel: 'Niet-chirurgisch',
    },
  ];

  suitabilityCriteria = [
    'Norwood fase 3 of hoger (zichtbare haaruitval)',
    'Stabiele haaruitval (geen actief snel progressief verlies)',
    'Voldoende donordichtheid aan achterhoofd en zijkanten',
    'Minimumleeftijd van 23 a 25 jaar',
    'Realistische verwachtingen over het resultaat',
    'Goede algemene gezondheid zonder contra-indicaties',
  ];
}
