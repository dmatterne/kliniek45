import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haargroei-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./haargroei-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Haargroei stimuleren</p>
        <h1>Haargroei Stimuleren</h1>
        <p class="hero-subtitle">
          Niet iedereen heeft een chirurgische ingreep nodig. Onze non-invasieve
          haargroeibehandelingen activeren slapende follikels, vertragen haaruitval en zijn ideaal
          als nazorg na een transplantatie.
        </p>
        <div class="hero-actions">
          <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/behandelingen" class="btn btn-outline btn-light">Alle behandelingen</a>
        </div>
      </div>
    </section>

    <!-- Intro: stimulatie vs transplantatie -->
    <section class="content-section intro-section">
      <div class="container">
        <h2 class="section-title">Stimulatie of transplantatie?</h2>
        <p class="section-subtitle">
          De keuze tussen haargroei stimuleren en een haartransplantatie hangt af van de mate van
          haaruitval, uw leeftijd, de kwaliteit van het donorgebied en uw persoonlijke wensen. Onze
          specialisten adviseren u eerlijk en transparant.
        </p>
        <div class="two-col-content">
          <div class="col">
            <div class="info-card info-card--green">
              <h3>Wanneer kiezen voor stimulatie?</h3>
              <ul class="check-list">
                <li>Haar dat zichtbaar dunner wordt maar nog aanwezig is</li>
                <li>Nazorg na een haartransplantatie om het resultaat te maximaliseren</li>
                <li>Trage haargroei of zwak, broos haar</li>
                <li>Preventief bij genetische aanleg voor haaruitval</li>
                <li>Patiënten die (nog) geen chirurgische ingreep wensen</li>
                <li>Diffuse haaruitval over de gehele hoofdhuid</li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="info-card info-card--cream">
              <h3>De rol van nazorg</h3>
              <p>
                Na een haartransplantatie is de nazorg minstens even belangrijk als de ingreep zelf.
                De eerste weken zijn cruciaal voor de overleving van de getransplanteerde grafts.
                Behandelingen zoals PRP, Hairegen en Regenera Activa versnellen het herstel,
                verhogen de graftoverleving en stimuleren de groei van het omliggende haar.
              </p>
              <p>
                HaarKliniek 45 begeleidt u van het eerste consult tot de definitieve nazorgafspraak
                — altijd door hetzelfde vertrouwde team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Behandelingen grid -->
    <section class="content-section treatments-grid-section">
      <div class="container">
        <h2 class="section-title">Onze haargroeibehandelingen</h2>
        <p class="section-subtitle">
          Vier wetenschappelijk onderbouwde behandelingen voor haargroei en haaruitvalpreventie,
          beschikbaar in onze kliniek in Grazen, België.
        </p>
        <div class="hg-treatments-grid">
          <div class="hg-card">
            <div class="hg-card-icon">🩸</div>
            <div class="hg-card-body">
              <h3>PRP Behandeling</h3>
              <p class="hg-card-tagline">Platelet Rich Plasma — uw eigen groeifactoren</p>
              <p>
                Een kleine hoeveelheid bloed wordt afgenomen en via centrifuge verrijkt met
                trombocyten en groeifactoren. Dit Platelet Rich Plasma wordt ingespoten in de
                hoofdhuid, waar het de activiteit van haarfollikels stimuleert, de doorbloeding
                verbetert en haaruitval vertraagt.
              </p>
              <ul class="hg-benefits">
                <li>Volledig eigen materiaal — geen afstoting</li>
                <li>Ideaal als aanvulling na haartransplantatie</li>
                <li>Minimale ongemakken, geen revalidatie</li>
                <li>3 sessies met tussenpozen van 4–6 weken</li>
              </ul>
              <a routerLink="/behandelingen/prp-behandeling" class="btn btn-outline"
                >Meer over PRP</a
              >
            </div>
          </div>

          <div class="hg-card">
            <div class="hg-card-icon">⚡</div>
            <div class="hg-card-body">
              <h3>Hairegen</h3>
              <p class="hg-card-tagline">Microneedling + elektrotherapie voor de hoofdhuid</p>
              <p>
                Hairegen is een innovatief medisch apparaat dat drie werkingsmechanismen combineert:
                microneedling, elektrotherapie en mesotherapie. Samen stimuleren deze technieken de
                doorbloeding van de hoofdhuid, activeren slapende follikels en versterken het
                bestaande haar van binnenuit.
              </p>
              <ul class="hg-benefits">
                <li>Pijnloos en niet-invasief</li>
                <li>Versterkt haar na transplantatie</li>
                <li>Zichtbaar resultaat na 4–6 weken</li>
                <li>Combineerbaar met PRP en Regenera Activa</li>
              </ul>
              <a routerLink="/behandelingen/hairegen" class="btn btn-outline">Meer over Hairegen</a>
            </div>
          </div>

          <div class="hg-card">
            <div class="hg-card-icon">🧬</div>
            <div class="hg-card-body">
              <h3>Regenera Activa</h3>
              <p class="hg-card-tagline">Regeneratieve geneeskunde met eigen stamcellen</p>
              <p>
                Bij Regenera Activa worden kleine stukjes huidweefsel achter het oor geëxtraheerd,
                verwerkt tot een suspensie van stamcellen en groeifactoren, en teruggeplaatst in de
                hoofdhuid. Dit activeert de regeneratiecapaciteit van de haarfollikels op een uniek
                biologisch niveau.
              </p>
              <ul class="hg-benefits">
                <li>Eenmalige behandeling, langdurig effect</li>
                <li>Remt actief progressief haaruitval</li>
                <li>Geen synthetische stoffen — 100&nbsp;% eigen materiaal</li>
                <li>Resultaten zichtbaar na 2–4 maanden</li>
              </ul>
              <a routerLink="/behandelingen/regenera-activa" class="btn btn-outline"
                >Meer over Regenera Activa</a
              >
            </div>
          </div>

          <div class="hg-card">
            <div class="hg-card-icon">🧪</div>
            <div class="hg-card-body">
              <h3>TrichoTest / DNA-test</h3>
              <p class="hg-card-tagline">Genetische analyse voor een persoonlijk behandelplan</p>
              <p>
                De TrichoTest analyseert uw DNA op markers die verband houden met haaruitval, de
                gevoeligheid voor androgenen en het metabolisme van werkzame stoffen zoals Minoxidil
                en Finasteride. Het resultaat is een volledig gepersonaliseerd behandelplan —
                gebaseerd op uw unieke genetisch profiel.
              </p>
              <ul class="hg-benefits">
                <li>Wetenschappelijk onderbouwd advies</li>
                <li>Welk medicament werkt voor u persoonlijk?</li>
                <li>Inzicht in de progressie van haaruitval</li>
                <li>Slechts één afname — eenvoudig en snel</li>
              </ul>
              <a routerLink="/behandelingen/dna-test-haaruitval" class="btn btn-outline"
                >Meer over de DNA-test</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Minoxidil info blok -->
    <section class="content-section minoxidil-section">
      <div class="container">
        <div class="info-banner">
          <div class="info-banner-icon">💊</div>
          <div class="info-banner-content">
            <h2>De rol van Minoxidil bij haargroei</h2>
            <p>
              Minoxidil is een topisch middel dat de doorbloeding van de hoofdhuid bevordert en
              haarfollikels stimuleert. Het is beschikbaar als lotion of spray en wordt op de
              hoofdhuid aangebracht.
            </p>
            <p>
              <strong>Na een haartransplantatie</strong> kan Minoxidil worden opgestart vanaf dag 20
              na de ingreep. Dit ondersteunt de activatie van de getransplanteerde follikels en
              vermindert het tijdelijk verlies van het omliggende eigen haar (shock loss).
            </p>
            <ul class="minox-list">
              <li><strong>5&nbsp;% Minoxidil</strong> — voor mannen, tweemaal daags aanbrengen</li>
              <li>
                <strong>2&nbsp;% Minoxidil</strong> — voor mannen en vrouwen met gevoeliger
                hoofdhuid
              </li>
              <li>Effect zichtbaar na 3–6 maanden bij consequent gebruik</li>
              <li>Altijd in overleg met uw specialist — dosering en timing zijn cruciaal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Vitaminen & mineralen -->
    <section class="content-section vitamins-section">
      <div class="container">
        <h2 class="section-title">Vitaminen &amp; mineralen voor gezond haar</h2>
        <p class="section-subtitle">
          Voeding en suppletie spelen een ondersteunende rol bij gezonde haargroei. Onze
          specialisten bespreken met u welke tekorten uw haaruitval kunnen verklaren.
        </p>
        <div class="vitamins-grid">
          <div class="vitamin-card">
            <div class="vitamin-icon">🅱️</div>
            <h3>B-vitaminen</h3>
            <p>
              Biotine (B7), niacine (B3) en pantotheenzuur (B5) zijn essentieel voor de opbouw van
              het haar. Een tekort leidt tot breekbaar, dun haar en verhoogde uitval.
            </p>
          </div>
          <div class="vitamin-card">
            <div class="vitamin-icon">⚙️</div>
            <h3>Zink</h3>
            <p>
              Zink is betrokken bij celdeling en eiwitsynthese — beide essentieel voor gezonde
              haargroei. Een zinktekort is een van de meest voorkomende voedingsgebonden oorzaken
              van haaruitval.
            </p>
          </div>
          <div class="vitamin-card">
            <div class="vitamin-icon">🔴</div>
            <h3>IJzer</h3>
            <p>
              IJzergebrek (ferritinetekort) is een frequente oorzaak van diffuse haaruitval, vooral
              bij vrouwen. Bloedonderzoek kan snel uitsluitsel geven over een eventueel tekort.
            </p>
          </div>
          <div class="vitamin-card">
            <div class="vitamin-icon">☀️</div>
            <h3>Vitamine D &amp; E</h3>
            <p>
              Vitamine D speelt een rol bij de follikelcyclus en celregeneratie. Vitamine E is een
              krachtige antioxidant die de hoofdhuid beschermt tegen oxidatieve stress.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="content-section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Wil je weten welke behandeling het beste bij jou past?</h2>
          <p>
            Plan een gratis en vrijblijvend consult bij HaarKliniek 45 in Grazen, België. Onze
            specialisten analyseren uw hoofdhuid, bespreken uw situatie en stellen een
            gepersonaliseerd behandelplan op — zonder verborgen kosten.
          </p>
          <div class="cta-actions">
            <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
            <a routerLink="/behandelingen" class="btn btn-outline">Alle behandelingen</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
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
export class HaargroeiPageComponent {
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
}
