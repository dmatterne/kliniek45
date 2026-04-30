import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-behandelingen-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./behandelingen-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Behandelingen</p>
        <h1>Haaradvies, behandelingen en partnertrajecten</h1>
        <p class="hero-subtitle">
          Start in Grazen met een gratis intake en duidelijk advies. Non-chirurgische behandelingen
          en nazorg begeleiden we lokaal; chirurgische haartransplantaties verlopen via Hair Clinic
          Wolf.
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/resultaten" class="btn btn-outline btn-light">Bekijk resultaten</a>
        </div>
      </div>
    </section>

    <!-- Waarom valt haar uit? -->
    <section class="content-section treatments-intro">
      <div class="container">
        <h2 class="section-title">Waarom valt haar uit?</h2>
        <p class="section-subtitle">
          Haaruitval is een veelvoorkomend fenomeen dat zowel mannen als vrouwen treft. Het
          begrijpen van de oorzaak is de eerste en belangrijkste stap naar een effectieve
          behandeling.
        </p>
        <div class="two-col-content">
          <div class="col">
            <h3>Oorzaken van haaruitval</h3>
            <ul class="causes-list">
              <li>
                <strong>Erfelijkheid (AGA):</strong>
                Androgenetische alopecia is de meest voorkomende oorzaak en treft tot 70&nbsp;% van
                de mannen en 40&nbsp;% van de vrouwen op enig moment in hun leven.
              </li>
              <li>
                <strong>Hormonale veranderingen:</strong>
                Zwangerschap, bevalling, menopauze of een schildklierprobleem kunnen tijdelijke of
                permanente haaruitval veroorzaken.
              </li>
              <li>
                <strong>Stress &amp; burnout:</strong>
                Telogen effluvium — plotselinge diffuse haaruitval als reactie op hevige fysieke of
                emotionele stress. Meestal reversibel na aanpak van de stressor.
              </li>
              <li>
                <strong>Voedingstekorten:</strong>
                Een tekort aan ijzer, zink, biotine of de B-vitaminen kan de haargroei ernstig
                verstoren en haaruitval verergeren.
              </li>
              <li>
                <strong>Medicatie:</strong>
                Bepaalde bloeddrukmedicijnen, antidepressiva, anticoagulantia of chemotherapie
                kunnen haaruitval als bijwerking hebben.
              </li>
              <li>
                <strong>Hoofdhuidaandoeningen:</strong>
                Alopecia areata, ringworm (tinea capitis), folliculitis of seborroïsch eczeem kunnen
                lokale kaalheid of diffuse uitval veroorzaken.
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>Haaruitval classificeren</h3>
            <div class="scale-block">
              <h4>Norwood-Hamilton schaal (mannen)</h4>
              <p>
                De Norwood-Hamilton schaal beschrijft 7 stadia van mannelijk haaruitval — van een
                licht terugtrekkende haarlijn (stadium I) tot uitgebreide kaalheid op het voorhoofd
                en de gehele kruin (stadium VII). Onze specialist gebruikt deze schaal om het
                juiste aantal grafts en de optimale techniek te bepalen.
              </p>
            </div>
            <div class="scale-block">
              <h4>Ludwig schaal (vrouwen)</h4>
              <p>
                Vrouwelijk haaruitval verloopt anders dan bij mannen: het haar wordt dunner over de
                hele hoofdhuid, met behoud van de haarlijn. De Ludwig schaal beschrijft 3 graden van
                toenemende verdunning en helpt ons de beste behandelstrategie te kiezen.
              </p>
            </div>
            <p class="consult-nudge">
              Niet zeker in welk stadium u zich bevindt? Tijdens uw gratis consult bespreken we uw
              haaruitval, verwachtingen en de mogelijke vervolgstappen.
            </p>
            <a routerLink="/contact" class="btn btn-outline">Boek een gratis consult</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Chirurgische behandelingen -->
    <section class="treatments-section content-section">
      <div class="container">
        <h2 class="section-title">Chirurgische haartransplantaties</h2>
        <p class="section-subtitle">
          Via onze partner Hair Clinic Wolf zijn permanente, natuurlijke haartransplantaties
          mogelijk. HaarKliniek 45 verzorgt de intake, het consult en de nazorg vanuit Belgi&euml;.
        </p>
        <div class="treatments-grid">
          <div class="treatment-card">
            <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg></div>
            <h3>Haartransplantatie Mannen</h3>
            <p>
              Intake en advies voor mannelijk haaruitval. Als een transplantatie passend is,
              verloopt de medische uitvoering via Hair Clinic Wolf.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-mannen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg></div>
            <h3>Haartransplantatie Vrouwen</h3>
            <p>
              Advies voor vrouwelijke haaruitval en verdunning, met aandacht voor oorzaak,
              verwachtingen en mogelijke niet-chirurgische of chirurgische vervolgstappen.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-vrouwen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">↩️</div>
            <h3>Haartransplantatie Inhammen</h3>
            <p>
              Lokale intake voor vragen over inhammen en haarlijn. De haarlijnplanning en
              chirurgische uitvoering worden door Hair Clinic Wolf beoordeeld.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-inhammen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">🔝</div>
            <h3>Haartransplantatie Kruin</h3>
            <p>
              Kaalheid op de kruin vraagt om realistisch advies over donorgebied, dichtheid en
              verwachtingen. We bereiden dit traject lokaal met u voor.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-kruin" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 19.82L5.71 18M3.82 19.82L5.71 18M3.82 19.82c1.5-1 6-2.5 10-3M3.82 19.82l1.89-1.82"/></svg></div>
            <h3>Long Hair Haartransplantatie</h3>
            <p>
              Informatie over Long Hair haartransplantatie voor wie scheren wil beperken. De
              geschiktheid en uitvoering worden via Hair Clinic Wolf bepaald.
            </p>
            <a routerLink="/behandelingen/long-hair-haartransplantatie" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">🧔</div>
            <h3>Baardtransplantatie</h3>
            <p>
              Intake voor vragen over een vollere of symmetrischere baard. De chirurgische
              baardtransplantatie verloopt via Hair Clinic Wolf.
            </p>
            <a routerLink="/behandelingen/baardtransplantatie" class="card-link">Meer info →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Technieken -->
    <section class="content-section techniques-section">
      <div class="container">
        <h2 class="section-title">Technieken via Hair Clinic Wolf</h2>
        <p class="section-subtitle">
          We leggen de verschillen uit en helpen u gericht vragen voorbereiden. De keuze en
          uitvoering van DHI of FUE Saffier gebeurt in het chirurgische traject bij Hair Clinic
          Wolf.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h3>DHI — Direct Hair Implantation</h3>
            <p>
              Methode waarbij grafts met een Choi Implanter Pen worden geplaatst. We bespreken
              wanneer DHI relevant kan zijn en verwijzen voor medische beoordeling naar Hair Clinic
              Wolf.
            </p>
            <a routerLink="/behandelingen/dhi" class="card-link">Meer over DHI →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3l-4 6 5 13 5-13-4-6"/><path d="M2 9h20"/></svg></div>
            <h3>FUE Saffier</h3>
            <p>
              Follicular Unit Extraction met saffieren instrumenten. We helpen u begrijpen wanneer
              deze methode kan passen en wat u vooraf aan de partnerkliniek moet vragen.
            </p>
            <a routerLink="/behandelingen/fue-saffier" class="card-link">Meer over FUE Saffier →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🎨</div>
            <h3>Micro-Haarpigmentatie (MHP)</h3>
            <p>
              Non-chirurgische oplossing voor het visueel verdichten van dun haar of het maskeren
              van kaalheid. Medisch pigment wordt aangebracht in de hoofdhuid — voor een
              stoppeleffect bij totale kaalheid of een volumetoevoeging bij dunner wordend haar.
            </p>
            <a routerLink="/behandelingen/micro-haarpigmentatie" class="card-link"
              >Meer over MHP →</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Haargroei stimulerende behandelingen -->
    <section class="content-section haargroei-stim-section">
      <div class="container">
        <h2 class="section-title">Haargroei stimulerende behandelingen</h2>
        <p class="section-subtitle">
          Niet iedereen is klaar voor of gebaat bij een chirurgische ingreep. Onze non-chirurgische
          behandelingen stimuleren haargroei, vertragen haaruitval en zijn ook uitstekend inzetbaar
          als nazorg na een transplantatie.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon"><img src="assets/icons/process-icons-2025/minder-bloeding-en-schade.png" alt="" width="32" height="32" aria-hidden="true"></div>
            <h3>PRP Behandeling</h3>
            <p>
              Platelet Rich Plasma — groeifactoren uit uw eigen bloed worden geconcentreerd via
              centrifuge en ingespoten in de hoofdhuid. Stimuleert haarfollikels, verbetert de
              doorbloeding en vertraagt actief haaruitval. Aanbevolen als bijkomende nazorg na
              haartransplantatie.
            </p>
            <a routerLink="/haargroei-stimuleren/prp-behandeling" class="card-link"
              >Meer over PRP →</a
            >
          </div>

          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <h3>Hairegen</h3>
            <p>
              Innovatief medisch apparaat dat microneedling combineert met elektrotherapie en
              mesotherapie. Stimuleert de doorbloeding van de hoofdhuid, activeert slapende
              follikels en versterkt het bestaande haar van binnenuit. Nagenoeg pijnloos — minimaal ongemak.
            </p>
            <a routerLink="/haargroei-stimuleren/hairegen" class="card-link"
              >Meer over Hairegen →</a
            >
          </div>

          <div class="benefit-card">
            <div class="benefit-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 15c6.667-6 13.333 0 20-6M2 9c6.667 6 13.333 0 20 6M7 11.5v1M17 11.5v1M12 11.5v1M7 9.5V8M17 9.5V8M12 9.5V8"/></svg></div>
            <h3>Regenera Activa</h3>
            <p>
              Regeneratieve behandeling op basis van uw eigen stamcellen. Kleine weefselstukjes
              worden verwerkt tot een suspensie en teruggeplaatst in de hoofdhuid — dit activeert de
              regeneratiecapaciteit van uw follikels en vertraagt actief progressief haaruitval.
            </p>
            <a routerLink="/haargroei-stimuleren/regenera-activa" class="card-link"
              >Meer over Regenera →</a
            >
          </div>
        </div>

        <div class="dna-callout">
          <div class="dna-callout-icon">🧪</div>
          <div class="dna-callout-content">
            <h3>TrichoTest / DNA-test voor haaruitval</h3>
            <p>
              Niet zeker welke behandeling het beste bij u past? De TrichoTest analyseert uw
              genetisch profiel, het metabolisme van uw haarfollikels en uw gevoeligheid voor
              bepaalde werkzame stoffen. Het resultaat is een volledig gepersonaliseerd
              behandeladvies — wetenschappelijk onderbouwd.
            </p>
            <a routerLink="/haargroei-stimuleren/dna-test-haaruitval" class="btn btn-outline"
              >Meer over de DNA-test</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="content-section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Welke behandeling past bij jou?</h2>
          <p>
            Ieder geval van haaruitval is uniek. Tijdens een gratis en volledig vrijblijvend consult
            bespreekt Jens Vandenreijt uw situatie en persoonlijke wensen. U krijgt helder advies
            over lokale non-chirurgische opties, nazorg en eventuele doorverwijzing naar Hair Clinic
            Wolf voor een haartransplantatie.
          </p>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
            <a routerLink="/werkwijze" class="btn btn-outline">Onze werkwijze</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
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
export class BehandelingenPageComponent {
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
