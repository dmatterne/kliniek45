import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-herstel-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./nazorg-herstel-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">›</span>
          <a routerLink="/nazorg">Nazorg</a>
          <span aria-hidden="true">›</span>
          <span>Herstel</span>
        </nav>
        <h1 class="hero-title">Herstel na Haartransplantatie</h1>
        <p class="hero-subtitle">
          Genezing na een haartransplantatie verloopt in duidelijke fasen. Weten wat u kunt
          verwachten geeft u rust en helpt u de juiste keuzes te maken. Van de eerste uren na de
          ingreep tot het definitieve resultaat na twaalf maanden.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Gratis consult aanvragen</a>
      </div>
    </section>

    <section class="two-areas-section">
      <div class="container">
        <h2 class="section-title">Twee zones — twee hersteltrajecten</h2>
        <p class="section-subtitle">
          Bij een haartransplantatie zijn er twee gebieden die herstellen: het donorgebied en het
          ontvangergebied. Beide vragen om specifieke aandacht.
        </p>
        <div class="areas-grid">
          <div class="area-card area-donor">
            <div class="area-header">
              <span class="area-badge">Donorgebied</span>
              <span class="area-label">Achterhoofd / zijkanten</span>
            </div>
            <p>
              Het donorgebied waar de grafts werden weggenomen geneest relatief snel. Kleine rode
              puntjes verdwijnen binnen 7 tot 14 dagen. Littekens worden vrijwel onzichtbaar en zijn
              nauwelijks waarneembaar zodra het haar teruggroeit.
            </p>
            <ul class="area-list">
              <li>Genezing na 7–14 dagen</li>
              <li>Korte rode puntjes normaal</li>
              <li>Littekens worden onzichtbaar</li>
              <li>Minder kwetsbaar dan ontvangergebied</li>
            </ul>
          </div>
          <div class="area-card area-recipient">
            <div class="area-header">
              <span class="area-badge area-badge-recipient">Ontvangergebied</span>
              <span class="area-label">Haarlijn / kruin / schedel</span>
            </div>
            <p>
              Het ontvangergebied waar de grafts werden geplaatst is het meest kritieke gebied. De
              nieuwe grafts zijn kwetsbaar en moeten de kans krijgen om goed in te groeien. Extra
              voorzichtigheid is hier vereist gedurende de eerste tien dagen.
            </p>
            <ul class="area-list">
              <li>Eerste 10 dagen absoluut kritiek</li>
              <li>Korstjes beschermen de grafts</li>
              <li>Geen druk, wrijving of trauma</li>
              <li>Grafts volledig ingegroeid na dag 10–14</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Complete Hersteltijdlijn</h2>
        <p class="section-subtitle">Van dag één tot twaalf maanden — uw persoonlijke herstelreis</p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Dag 1</div>
            <div class="timeline-body">
              <h3>De dag na de ingreep</h3>
              <p>
                Lichte zwelling en roodheid zijn normaal en verwacht. Onze specialisten begeleiden u
                bij de eerste wasbeurt of geven gedetailleerde instructies mee voor thuis. Rust is
                de boodschap.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Rust nemen</span>
                <span class="tip ok">✓ Eerste was uitvoeren</span>
                <span class="tip nok">✗ Niet krabben</span>
                <span class="tip nok">✗ Niet buigen</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Dag 1–3</div>
            <div class="timeline-body">
              <h3>Kritieke ingroeifase</h3>
              <p>
                De grafts zitten nog niet volledig vast. Dit is de meest kritieke periode. Raak het
                getransplanteerde gebied niet aan. Slaap met een nekkussen op de rug. Vermijd elke
                activiteit waarbij u bukt of bloed naar het hoofd stroomt.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Nekkussen gebruiken</span>
                <span class="tip ok">✓ Rustig wandelen mag</span>
                <span class="tip nok">✗ Niet sporten</span>
                <span class="tip nok">✗ Niet bukken</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Dag 4–10</div>
            <div class="timeline-body">
              <h3>Korstjes vormen en verweken</h3>
              <p>
                Korstjes vormen zich volledig en beginnen na dag zeven te verweken. Was dagelijks
                zacht met de speciale shampoo. De eerste zichtbare genezing is nu merkbaar. Zwelling
                trekt weg.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Dagelijks zacht wassen</span>
                <span class="tip ok">✓ Lichte activiteiten</span>
                <span class="tip nok">✗ Niet krabben</span>
                <span class="tip nok">✗ Geen direct zonlicht</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Dag 10</div>
            <div class="timeline-body">
              <h3>Controleafspraak bij HaarKliniek 45</h3>
              <p>
                Het merendeel van de zichtbare genezing is voltooid. De korstjes zijn grotendeels
                verdwenen. Onze specialist bekijkt het herstelverloop en geeft aanvullende
                instructies voor de komende weken.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Controle in de kliniek</span>
                <span class="tip ok">✓ Grafts stevig verankerd</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Week 2</div>
            <div class="timeline-body">
              <h3>Hervatting van activiteiten + shockloss begint</h3>
              <p>
                U kunt de meeste dagelijkse activiteiten hervatten. Het getransplanteerde haar
                begint nu los te laten — de zogeheten shockloss. Dit is volledig normaal en
                verwacht. De haarfollikels blijven actief onder de huid.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Meeste activiteiten hervatten</span>
                <span class="tip ok">✓ Shockloss is normaal</span>
                <span class="tip nok">✗ Nog geen zwemmen</span>
                <span class="tip nok">✗ Nog geen sauna</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Maand 1–3</div>
            <div class="timeline-body">
              <h3>Shockloss op hoogtepunt — haarfollikels rusten</h3>
              <p>
                De shockloss bereikt een piek en stopt dan. De hoofdhuid ziet er dunner uit dan voor
                de ingreep — dit is tijdelijk. De haarfollikels bevinden zich in een rustfase en
                bereiden zich voor op nieuwe groei.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Dit is normaal en verwacht</span>
                <span class="tip ok">✓ Follikels zijn actief</span>
                <span class="tip nok">✗ Geen paniek</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Maand 3–4</div>
            <div class="timeline-body">
              <h3>Eerste nieuwe haargroei zichtbaar</h3>
              <p>
                De nieuwe haarfollikels beginnen te groeien. De eerste nieuwe haartjes komen door de
                huid. Ze zijn vaak dunner en lichter van kleur dan normaal haar — dit is volledig
                normaal en verandert naarmate het haar volwassener wordt.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Nieuwe groei zichtbaar</span>
                <span class="tip ok">✓ Zwemmen weer toegestaan</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">Maand 6</div>
            <div class="timeline-body">
              <h3>Duidelijke groei en verdikking</h3>
              <p>
                Rond maand zes heeft u al een goed beeld van het resultaat. Het haar wordt dikker en
                donkerder. De meeste patiënten zijn in dit stadium al tevreden met de zichtbare
                vooruitgang.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Haar knippen mag</span>
                <span class="tip ok">✓ Haar verven mag (na week 6)</span>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot timeline-dot-final"></div>
            <div class="timeline-time timeline-time-final">Maand 12</div>
            <div class="timeline-body">
              <h3>Eindresultaat — dicht, natuurlijk haar</h3>
              <p>
                Na twaalf maanden is het haar volledig uitgegroeid en heeft het de definitieve
                dikte, kleur en structuur bereikt. Bij HaarKliniek 45 plannen we een
                eindresultaatevaluatie om het resultaat samen te beoordelen en vast te leggen.
              </p>
              <div class="timeline-tips">
                <span class="tip ok">✓ Definitief eindresultaat</span>
                <span class="tip ok">✓ Evaluatieafspraak</span>
                <span class="tip ok">✓ Voor/na vergelijking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="shockloss-section">
      <div class="container">
        <div class="shockloss-card">
          <h2>⚠️ Shockloss: het haar valt uit — geen paniek</h2>
          <p>
            Twee tot vier weken na de transplantatie valt het getransplanteerde haar uit. Dit heet
            <strong>shockloss</strong> en is een volledig normaal en verwacht onderdeel van het
            genezingsproces.
          </p>
          <div class="shockloss-facts">
            <div class="fact">
              <span class="fact-icon">✅</span>
              <div>
                <strong>De haarfollikels blijven intact</strong>
                <p>
                  Alleen de haarschacht valt uit — de wortel blijft levend en actief onder de huid.
                </p>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">✅</span>
              <div>
                <strong>Nieuw haar groeit zeker terug</strong>
                <p>
                  Vanaf maand drie tot vier begint het nieuwe haar te groeien vanuit de geplaatste
                  follikels.
                </p>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">✅</span>
              <div>
                <strong>Dit is wetenschappelijk verklaard</strong>
                <p>
                  De transplantatiestress brengt de follikel tijdelijk in rustfase. Dit is geen
                  mislukking.
                </p>
              </div>
            </div>
            <div class="fact">
              <span class="fact-icon">📞</span>
              <div>
                <strong>Vragen? Bel ons gerust</strong>
                <p>
                  Heeft u twijfels of maakt u zich zorgen? Bel +32 485 593 302 — we stellen u
                  gerust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="restrictions-section">
      <div class="container">
        <h2 class="section-title">Wat u moet vermijden en wanneer</h2>
        <div class="restrictions-grid">
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">🚬</span>
              <h3>Roken</h3>
            </div>
            <div class="restriction-timeline bad">
              Stop minstens 2 weken voor en 4 weken na de ingreep
            </div>
            <p>
              Roken vermindert de zuurstoftoevoer naar de haarfollikels en vertraagt de genezing
              aanzienlijk. Dit verhoogt het risico op graft-verlies.
            </p>
          </div>
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">🍺</span>
              <h3>Alcohol</h3>
            </div>
            <div class="restriction-timeline bad">Geen alcohol eerste week na ingreep</div>
            <p>
              Alcohol verdunt het bloed, verhoogt bloedingsrisico en vertraagt het genezingsproces.
              Vermijd ook bloedverdunnende medicijnen tenzij voorgeschreven.
            </p>
          </div>
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">🏋️</span>
              <h3>Intensief sporten</h3>
            </div>
            <div class="restriction-timeline warning">1 week rust — zwemmen wachten tot week 4</div>
            <p>
              Intensieve lichaamsbeweging verhoogt de bloeddruk, veroorzaakt zweten en kan de grafts
              beschadigen. Licht wandelen is na dag drie toegestaan.
            </p>
          </div>
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">☀️</span>
              <h3>Zonlicht</h3>
            </div>
            <div class="restriction-timeline warning">
              Eerste week: paraplu/schaduw — daarna: pet of zonnebrand
            </div>
            <p>
              Direct UV-licht kan de gevoelige huid beschadigen. De eerste week geen zon op het
              getransplanteerde gebied. Daarna een pet of zonnebrandcrème SPF 50+.
            </p>
          </div>
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">💇</span>
              <h3>Haarstyling</h3>
            </div>
            <div class="restriction-timeline ok">
              Gel/spray: wachten 2 weken — verven: wachten 6 weken — tondeuse op ontvangstzone: 3
              maanden
            </div>
            <p>
              Chemische producten kunnen de huid irriteren. Geef het haar de tijd om te herstellen
              voor u stylingsproducten gebruikt.
            </p>
          </div>
          <div class="restriction-card">
            <div class="restriction-header">
              <span class="restriction-icon">🧢</span>
              <h3>Hoofddeksel</h3>
            </div>
            <div class="restriction-timeline warning">Geen strakke pet of muts eerste 2 weken</div>
            <p>
              Een strakke pet kan wrijving veroorzaken op de korstjes en de grafts beschadigen. Een
              losse, zachte pet is na dag tien eventueel toegestaan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="nav-section">
      <div class="container">
        <div class="nav-links">
          <a routerLink="/nazorg" class="nav-link">← Terug naar Nazorg</a>
          <a routerLink="/nazorg/korstjes-na-haartransplantatie" class="nav-link"
            >Korstjes na Haartransplantatie →</a
          >
          <a routerLink="/nazorg/slapen-na-haartransplantatie" class="nav-link"
            >Slapen na Haartransplantatie →</a
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
export class NazorgHerstelPageComponent {
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
