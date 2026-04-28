import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-werkwijze-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./werkwijze-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <span class="hero__badge">Uw behandeltraject</span>
        <h1 class="hero__title">Hoe werkt een haartransplantatie bij HaarKliniek 45?</h1>
        <p class="hero__subtitle">
          Van eerste consultatie tot definitief resultaat — transparant, persoonlijk en
          professioneel in Grazen, Belgie.
        </p>
        <div class="hero__actions">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/behandelingen" class="btn btn-outline">Onze behandelingen</a>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Uw behandeltraject in 7 stappen</h2>
          <div class="section__divider"></div>
          <p class="section__lead">
            Wij begeleiden u van A tot Z. Hieronder leest u precies wat u kunt verwachten — zodat u
            volledig voorbereid bent.
          </p>
        </div>
        <div class="timeline">
          @for (step of timelineSteps; track step.number; let last = $last) {
            <div class="timeline-step" [class.timeline-step--last]="last">
              <div class="timeline-step__marker">
                <div class="timeline-step__number">{{ step.number }}</div>
                @if (!last) {
                  <div class="timeline-step__line"></div>
                }
              </div>
              <div class="timeline-step__body">
                <div class="timeline-step__icon">{{ step.icon }}</div>
                <div class="timeline-step__content">
                  <h3 class="timeline-step__title">{{ step.title }}</h3>
                  <p class="timeline-step__desc">{{ step.desc }}</p>
                  @if (step.tags.length > 0) {
                    <div class="timeline-step__tags">
                      @for (tag of step.tags; track tag) {
                        <span class="tag">{{ tag }}</span>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Herstelschema na de behandeling</h2>
          <div class="section__divider"></div>
          <p class="section__lead">
            Elk herstelproces is uniek, maar onderstaande tijdlijn geeft een goed beeld van wat u
            kunt verwachten.
          </p>
        </div>
        <div class="recovery-timeline">
          @for (phase of recoveryPhases; track phase.period) {
            <div class="recovery-phase">
              <div class="recovery-phase__period">{{ phase.period }}</div>
              <div>
                <h3 class="recovery-phase__title">{{ phase.title }}</h3>
                <p class="recovery-phase__desc">{{ phase.desc }}</p>
                <span class="recovery-phase__badge recovery-phase__badge--{{ phase.badgeType }}">{{
                  phase.badge
                }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Dos &amp; Don&apos;ts na uw behandeling</h2>
          <div class="section__divider"></div>
          <p class="section__lead">
            Een goede nazorg is cruciaal voor het beste resultaat. Volg deze richtlijnen zorgvuldig
            op.
          </p>
        </div>
        <div class="dos-donts-grid">
          <div class="dos-column">
            <div class="dos-column__header">
              <span>✓</span>
              <h3>Wel doen</h3>
            </div>
            <ul class="dos-column__list">
              @for (item of dosItems; track item.title) {
                <li class="dos-column__item">
                  <span class="dos-column__check">✓</span>
                  <div>
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.desc }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>
          <div class="donts-column">
            <div class="donts-column__header">
              <span>✗</span>
              <h3>Niet doen</h3>
            </div>
            <ul class="donts-column__list">
              @for (item of dontsItems; track item.title) {
                <li class="donts-column__item">
                  <span class="donts-column__cross">✗</span>
                  <div>
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.desc }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--green">
      <div class="container">
        <div class="section__header section__header--light">
          <h2>Klaar om uw traject te starten?</h2>
          <div class="section__divider section__divider--light"></div>
          <p class="section__lead section__lead--light">
            Plan vandaag nog uw gratis consult bij HaarKliniek 45 in Grazen. Geen verplichtingen —
            alleen eerlijk advies.
          </p>
        </div>
        <div class="hero__actions">
          <a routerLink="/contact" class="btn btn-primary" style="background:#fff;color:#1a4d47;"
            >Gratis consult aanvragen</a
          >
          <a
            href="tel:+32485593302"
            class="btn btn-outline"
            style="border-color:rgba(255,255,255,0.6);color:#fff;"
            >+32 485 593 302</a
          >
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
export class WerkwijzePageComponent {
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

  timelineSteps = [
    {
      number: 1,
      icon: '💬',
      title: 'De Consultatie',
      desc: 'Alles begint met een gratis consult — telefonisch of persoonlijk in onze kliniek in Grazen. U bespreekt uw situatie, wensen en verwachtingen vrijblijvend met een specialist. Informeer ons over eerdere behandelingen en medicijngebruik voor een zo volledig mogelijk beeld.',
      tags: ['Gratis', 'Vrijblijvend', 'Telefonisch of persoonlijk'],
    },
    {
      number: 2,
      icon: '📸',
      title: "Foto's maken",
      desc: "Voor een nauwkeurige beoordeling worden foto's genomen vanuit verschillende hoeken. Bij een persoonlijk consult gebeurt dit in de kliniek. Deze foto's vormen de basis van uw persoonlijk dossier en zijn strikt vertrouwelijk.",
      tags: ['Meerdere hoeken', 'Vertrouwelijk dossier', 'Precisieanalyse'],
    },
    {
      number: 3,
      icon: '🔬',
      title: 'Vaststellen van de behandeling',
      desc: 'Onze specialist beoordeelt het donorgebied, de haarstructuur en de mate van haaruitval nauwkeurig. Op basis hiervan wordt het benodigde aantal grafts bepaald en een realistisch resultaatoverzicht opgesteld.',
      tags: ['Donoranalyse', 'Grafts bepalen', 'Resultaatprognose'],
    },
    {
      number: 4,
      icon: '📋',
      title: 'Behandelplan en Voorbereiding',
      desc: 'Na akkoord over het behandelplan plannen wij de ingreep in. U ontvangt heldere richtlijnen voor voor- en nabehandeling. Voorbereiding: geen alcohol 5 dagen voor de ingreep, stop met bloedverdunners in overleg met de arts, was uw haar de ochtend van de ingreep.',
      tags: ['Geen alcohol 5 dagen voor', 'Haar wassen ochtend van ingreep', 'Heldere instructies'],
    },
    {
      number: 5,
      icon: '✂️',
      title: 'De Behandeling',
      desc: 'Op de behandeldag verwelkomen wij u in HaarKliniek 45 in Grazen. Draag comfortabele kleding die niet over het hoofd getrokken moet worden. Onze arts en team leggen alles stap voor stap uit. Het eerste deel: oogsten van grafts uit het donorgebied. Daarna worden de grafts zorgvuldig geimplanteerd in de dunner wordende of kale zones. Na afloop ontvangt u medicatie en gedetailleerde instructies mee.',
      tags: ['Lokale verdoving', 'Dagbehandeling', 'FUE Saffier of DHI', 'Medicatie achteraf'],
    },
    {
      number: 6,
      icon: '🚿',
      title: 'Wassing en Eerste controle',
      desc: 'De eerste wassing vindt plaats 1 a 2 dagen na de behandeling en wordt door ons begeleid. Het verband wordt verwijderd en de eerste reiniging uitgevoerd. U krijgt productadvies en de juiste wastechniek uitgelegd voor thuis.',
      tags: ['Dag 1-2 na ingreep', 'Begeleid door team', 'Juiste wastechniek'],
    },
    {
      number: 7,
      icon: '🌱',
      title: 'Nazorg en Opvolging',
      desc: 'Onze begeleiding stopt niet wanneer u de kliniek verlaat. Dag 10 voorzien wij een controleafspraak. Maandelijks worden foto-updates gemaakt om de voortgang te volgen. Ons team is altijd bereikbaar via telefoon, WhatsApp of e-mail voor al uw vragen.',
      tags: ['Controle dag 10', 'Maandelijkse foto-updates', 'Telefoon en WhatsApp support'],
    },
  ];

  recoveryPhases = [
    {
      period: 'Dag 1-3',
      title: 'Rust en herstel',
      desc: 'Lichte zwelling en roodheid zijn normaal en verdwijnen vanzelf. Slaap met een nekkussen in een verhoogde positie. Vermijd direct contact met de behandelzone.',
      badge: 'Rust aanbevolen',
      badgeType: 'normal',
    },
    {
      period: 'Dag 4-10',
      title: 'Korstjes vormen en loslaten',
      desc: 'Kleine korstjes vormen zich in de behandelzone — onderdeel van het normale genezingsproces. Was het haar zachtjes volgens de instructies. Krab nooit aan de korstjes.',
      badge: 'Voorzichtig wassen',
      badgeType: 'warning',
    },
    {
      period: 'Week 2',
      title: 'Zichtbare genezing en shock loss',
      desc: 'Het grootste deel van de zichtbare genezing is achter de rug. De getransplanteerde haren kunnen tijdelijk uitvallen — dit heet shock loss en is volkomen normaal. De haarfollikels zijn intact en zullen opnieuw groeien.',
      badge: 'Normaal proces',
      badgeType: 'good',
    },
    {
      period: 'Maand 3-6',
      title: 'Nieuwe haargroei zichtbaar',
      desc: 'De eerste tekenen van nieuwe haargroei worden zichtbaar. Het haar is aanvankelijk fijn en licht maar wordt geleidelijk dikker en sterker. U ziet nu merkbare vooruitgang.',
      badge: 'Zichtbare groei',
      badgeType: 'good',
    },
    {
      period: 'Maand 12',
      title: 'Definitief resultaat',
      desc: 'Na 12 maanden is het definitieve resultaat zichtbaar. Sommige patienten zien zelfs tot 18 maanden verdere verbetering. Het getransplanteerde haar groeit permanent en kan gewassen, geknipt en gestyled worden zoals uw eigen haar.',
      badge: 'Definitief resultaat',
      badgeType: 'success',
    },
  ];

  dosItems = [
    {
      title: 'Slaap verhoogd',
      desc: 'Slaap de eerste nachten met een nekkussen in een verhoogde positie om zwelling te minimaliseren.',
    },
    {
      title: 'Zacht wassen vanaf dag 2',
      desc: 'Was het haar voorzichtig met de speciale shampoo en de wastechniek die ons team u heeft uitgelegd.',
    },
    {
      title: 'Voldoende water drinken',
      desc: 'Hydratatie ondersteunt het genezingsproces. Drink dagelijks minimaal 1,5 a 2 liter water.',
    },
    {
      title: 'Voorgeschreven medicatie nemen',
      desc: 'Neem de voorgeschreven medicatie (pijnstillers, antibiotica) stipt in zoals aangegeven door de arts.',
    },
    {
      title: 'Bescherm het hoofd tegen direct zonlicht',
      desc: 'Draag de eerste 2 weken een luchtige hoed of pet als bescherming tegen de zon.',
    },
  ];

  dontsItems = [
    {
      title: 'Niet krabben of wrijven (grafts)',
      desc: 'Krab nooit aan de grafts of korstjes. Dit kan de net geplaatste follikels beschadigen.',
    },
    {
      title: 'Geen intensief sporten (3 weken)',
      desc: 'Vermijd intensieve inspanning, zweten en verhoogde bloeddruk gedurende minimaal 3 weken.',
    },
    {
      title: 'Niet zwemmen (4 weken)',
      desc: 'Zwembad, zee en sauna zijn de eerste 4 weken verboden vanwege infectierisico en chemicalien.',
    },
    {
      title: 'Niet roken (2 weken)',
      desc: 'Roken vermindert de bloeddoorstroming en belemmert de genezing van de haarfollikels.',
    },
    {
      title: 'Geen alcohol (1 week)',
      desc: 'Alcohol verdunt het bloed en vertraagt het herstelproces. Vermijd alcohol de eerste week na de ingreep.',
    },
    {
      title: 'Geen directe zon zonder bescherming (2 weken)',
      desc: 'UV-straling kan het gevoelige behandelgebied beschadigen. Draag altijd bescherming buiten.',
    },
  ];
}
