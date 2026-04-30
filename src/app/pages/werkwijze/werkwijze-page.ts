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
        <span class="hero__badge">Uw traject</span>
        <h1 class="hero__title">Uw intake-, behandel- en opvolgtraject</h1>
        <p class="hero__subtitle">
          Van het eerste gratis consult in Grazen tot lokale nazorg na een behandeling —
          transparant, persoonlijk en met een duidelijke rolverdeling.
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
          <h2>Uw traject in 6 stappen</h2>
          <div class="section__divider"></div>
          <p class="section__lead">
            Hieronder leest u wat u van HaarKliniek 45 kunt verwachten en wanneer Hair Clinic Wolf
            in beeld komt voor chirurgische uitvoering.
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
                <div class="timeline-step__icon">
                  <img [src]="step.icon" [alt]="step.title" width="48" height="48" />
                </div>
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

    <!-- Process images -->
    <section class="section section--white">
      <div class="container">
        <img src="assets/images/werkwijze-consult.jpg" alt="Intake consult bij HaarKliniek 45" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/werkwijze-behandelplan.jpg" alt="Medisch behandelplan opstellen" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/werkwijze-fotos.jpg" alt="Foto-opvolging tijdens herstelproces" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/werkwijze-wassing.webp" alt="Eerste wassing na haartransplantatie" loading="lazy" class="content-img" width="800" height="533">
        <img src="assets/images/werkwijze-controleafspraken.png" alt="Controleafspraken nazorg" loading="lazy" class="content-img" width="800" height="533">
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Algemene herstelinformatie</h2>
          <div class="section__divider"></div>
          <p class="section__lead">
            Elk herstelproces is uniek. Onderstaande tijdlijn is algemene informatie en vervangt
            nooit de persoonlijke instructies van de uitvoerende behandelaar.
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
            Een goede nazorg ondersteunt het herstel. Volg altijd de persoonlijke instructies van de
            uitvoerende behandelaar.
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
            Plan vandaag nog uw gratis consult bij HaarKliniek 45 in Grazen. Geen verplichtingen,
            wel duidelijk advies over lokale opties en partnertrajecten.
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
export class WerkwijzePageComponent {
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

  timelineSteps = [
    {
      number: 1,
      icon: 'assets/icons/process-icons-2025/gratis-consult.png',
      title: 'Gratis consult',
      desc: 'Plan een gratis en vrijblijvend kennismakingsgesprek bij ons in Grazen. Jens Vandenreijt bespreekt uw situatie, uw wensen en beantwoordt al uw vragen.',
      tags: ['Gratis', 'Vrijblijvend', 'Bij ons in Grazen'],
    },
    {
      number: 2,
      icon: 'assets/icons/process-icons-2025/expertise.png',
      title: 'Intake & haaranalyse',
      desc: "Tijdens de intake bespreken we uw haaruitvalpatroon, maken we indien nodig foto's en brengen we uw vragen in kaart. Op basis hiervan adviseren we de passende vervolgstap.",
      tags: ['Haaranalyse', 'Vertrouwelijk dossier', 'Persoonlijk plan'],
    },
    {
      number: 3,
      icon: 'assets/icons/process-icons-2025/expertise.png',
      title: 'Behandelplan & advies',
      desc: 'U ontvangt een helder behandelplan met advies over non-chirurgische behandelingen (PRP, Hairegen, MHP, etc.) en — indien van toepassing — een verwijzing naar onze partner Hair Clinic Wolf voor een haartransplantatie.',
      tags: ['Eerlijk advies', 'Non-chirurgische opties', 'Doorverwijzing indien nodig'],
    },
    {
      number: 4,
      icon: 'assets/icons/benefit-icons-2024/geen-bijwerkingen.png',
      title: 'Non-chirurgische behandeling (optioneel)',
      desc: 'Indien u kiest voor non-chirurgische behandelingen, voeren we deze uit in onze kliniek in Grazen. Denk aan PRP-therapie, Hairegen, Micro Haarpigmentatie of Regenera Activa.',
      tags: ['PRP', 'Hairegen', 'MHP', 'Regenera Activa'],
    },
    {
      number: 5,
      icon: 'assets/icons/process-icons-2025/implanteren-grafts.png',
      title: 'Haartransplantatie bij Hair Clinic Wolf (optioneel)',
      desc: 'Kiest u voor een haartransplantatie? Dan verwijzen wij u door naar Hair Clinic Wolf in Nederland of Turkije. Zij zijn onze vaste partner en bieden FUE Saffier, DHI en baardtransplantaties aan met jarenlange ervaring.',
      tags: ['FUE Saffier', 'DHI', 'Via Hair Clinic Wolf'],
    },
    {
      number: 6,
      icon: 'assets/icons/benefit-icons-2024/haargroei-stimuleren.png',
      title: 'Nazorg in België',
      desc: 'Na uw behandeling — lokaal of via Hair Clinic Wolf — staat HaarKliniek 45 klaar voor opvolging. We helpen met praktische nazorgvragen en verwijzen bij medische vragen terug naar de uitvoerende behandelaar.',
      tags: ['Nazorg in Grazen', 'Belgisch aanspreekpunt', 'Opvolging herstel'],
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
      desc: 'Veel resultaten worden pas na 12 tot 18 maanden goed beoordeeld. De timing en kwaliteit van het resultaat verschillen per persoon en worden opgevolgd volgens het advies van de uitvoerende behandelaar.',
      badge: 'Evaluatiemoment',
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
