import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-over-ons-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./over-ons-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Over ons</p>
        <h1>Over HaarKliniek 45</h1>
        <p class="hero-subtitle">
          Gespecialiseerde haarkliniek in Grazen, België. Wij brengen wereldklasse haarherstel naar
          Belgische patiënten — met eerlijkheid, vakmanschap en persoonlijke zorg als pijlers.
        </p>
        <div class="hero-actions">
          <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/resultaten" class="btn btn-outline btn-light">Bekijk resultaten</a>
        </div>
      </div>
    </section>

    <!-- Missie -->
    <section class="content-section mission-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Onze missie</h2>
            <p>
              HaarKliniek 45 is een gespecialiseerde kliniek voor haartransplantatie en
              haarrestauratie, gevestigd in Grazen, België. Wij zijn opgericht met één duidelijk
              doel: Belgische patiënten toegang geven tot de hoogste kwaliteit van haarherstel —
              zonder het land te verlaten.
            </p>
            <p>
              Met meer dan 10 jaar ervaring en gecertificeerde specialisten leveren wij resultaten
              die spreken voor zich. Van de eerste consultatie tot de laatste nazorgafspraak: u bent
              in veilige handen.
            </p>
            <p>
              Onze aanpak is altijd individueel. Geen standaardpakketten, geen onrealistische
              beloften — alleen een eerlijk advies op basis van uw unieke situatie.
            </p>
            <div class="mission-stats">
              <div class="stat">
                <span class="stat-number">10+</span>
                <span class="stat-label">Jaar ervaring</span>
              </div>
              <div class="stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">Gecertificeerd</span>
              </div>
              <div class="stat">
                <span class="stat-number">🇧🇪</span>
                <span class="stat-label">Belgische kliniek</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mission-image-block">
              <img
                src="assets/images/logoTransp.png"
                alt="HaarKliniek 45 — Haartransplantatie in Grazen, België"
                class="mission-logo"
              />
              <div class="mission-quote">
                <p>
                  &ldquo;Wij geloven dat elk individu recht heeft op een eerlijke, deskundige
                  behandeling — dicht bij huis, met volledige transparantie over kosten,
                  risico&rsquo;s en resultaten.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Drie pijlers -->
    <section class="content-section pillars-section">
      <div class="container">
        <h2 class="section-title">Onze drie pijlers</h2>
        <p class="section-subtitle">
          Alles wat wij doen, is gebouwd op drie fundamenten die wij nooit uit het oog verliezen.
        </p>
        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-icon">🤝</div>
            <h3>Transparantie &amp; Eerlijkheid</h3>
            <p>
              Wij geven u altijd een eerlijk advies — ook als dat betekent dat een transplantatie op
              dit moment niet de beste keuze is. U weet op voorhand precies wat u kunt verwachten:
              het verloop van de ingreep, de hersteltijd, de kosten en een realistisch beeld van het
              eindresultaat.
            </p>
            <ul class="pillar-list">
              <li>Geen verborgen kosten</li>
              <li>Realistische resultaatsverwachtingen</li>
              <li>Volledige info vóór elke beslissing</li>
            </ul>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">🎯</div>
            <h3>Vakmanschap &amp; Precisie</h3>
            <p>
              Onze specialisten werken uitsluitend met de meest geavanceerde technieken: FUE
              Saffier, DHI met Choi Implanter Pen en micro-haarpigmentatie. Permanente bijscholing
              en certificering garanderen dat wij altijd op de hoogte zijn van de nieuwste
              ontwikkelingen in de sector.
            </p>
            <ul class="pillar-list">
              <li>State-of-the-art apparatuur</li>
              <li>Gecertificeerde chirurgen &amp; specialisten</li>
              <li>Aanhoudende nascholing</li>
            </ul>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">💚</div>
            <h3>Persoonlijke Zorg &amp; Nazorg</h3>
            <p>
              Vanaf het eerste consult tot uw laatste nazorgafspraak werkt u steeds met hetzelfde
              vertrouwde team. Wij zijn bereikbaar voor al uw vragen — voor, tijdens en na de
              behandeling. Uw tevredenheid op lange termijn is ons uiteindelijke doel.
            </p>
            <ul class="pillar-list">
              <li>Vast aanspreekpunt gedurende het hele traject</li>
              <li>Uitgebreid nazorgprotocol</li>
              <li>Altijd bereikbaar voor vragen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Onze aanpak -->
    <section class="content-section approach-section">
      <div class="container">
        <h2 class="section-title">Onze aanpak</h2>
        <p class="section-subtitle">
          Van eerste contact tot definitief resultaat — wij begeleiden u stap voor stap door het
          volledige traject.
        </p>
        <div class="approach-steps">
          <div class="step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>Gratis consultatie</h3>
              <p>
                Alles begint met een uitgebreide, gratis en vrijblijvende consultatie. Onze
                specialist analyseert uw hoofd­huid en donorgebied, bespreekt uw medische
                voorgeschiedenis en beantwoordt al uw vragen.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>Gepersonaliseerd behandelplan</h3>
              <p>
                Op basis van de consultatie stellen wij een volledig individueel plan op: welke
                techniek (FUE, DHI, Saffier), hoeveel grafts, de prijs, de planning en de verwachte
                resultaten. Geen standaardpakketten.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>De behandeling</h3>
              <p>
                De ingreep wordt uitgevoerd onder lokale verdoving in onze moderne kliniek in
                Grazen. U bent dezelfde dag terug thuis. Het team staat de hele dag naast u en legt
                elke stap uit.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>Nazorg &amp; opvolging</h3>
              <p>
                Nazorg is minstens even belangrijk als de ingreep. Wij voorzien een gedetailleerd
                nazorgprotocol, opvolgafspraken en zijn steeds bereikbaar voor vragen. Resultaten
                worden gefotografeerd en vergeleken bij elke follow-up.
              </p>
            </div>
          </div>
        </div>
        <div class="approach-treatments">
          <h3>Beschikbare behandelingen</h3>
          <div class="treatment-tags">
            <span class="tag">FUE Saffier</span>
            <span class="tag">DHI</span>
            <span class="tag">Micro-haarpigmentatie</span>
            <span class="tag">PRP</span>
            <span class="tag">Hairegen</span>
            <span class="tag">Regenera Activa</span>
            <span class="tag">TrichoTest</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Waarom België vs buitenland -->
    <section class="content-section belgium-section">
      <div class="container">
        <h2 class="section-title">Waarom behandeling in België?</h2>
        <p class="section-subtitle">
          Steeds meer mensen laten zich verleiden door goedkope behandelingen in het buitenland. Wij
          leggen u eerlijk uit waarom dat risico&rsquo;s met zich meebrengt.
        </p>
        <div class="comparison-grid">
          <div class="comparison-card comparison-card--pro">
            <h3>✅ HaarKliniek 45 in België</h3>
            <ul>
              <li>Geen dure vluchten, hotels of tijdverlies</li>
              <li>Belgische medische normen en wetgeving</li>
              <li>Volledige nazorg in eigen taal en nabijheid</li>
              <li>Transparante, all-in prijzen zonder verrassingen</li>
              <li>Complicaties kunnen onmiddellijk worden behandeld</li>
              <li>Opvolgafspraken zonder extra reiskosten</li>
              <li>Volledige medische dossieropbouw in België</li>
            </ul>
          </div>
          <div class="comparison-card comparison-card--con">
            <h3>⚠️ Behandeling in het buitenland</h3>
            <ul>
              <li>Vlieg- en hotelkosten verminderen de besparing</li>
              <li>Communicatie en nazorg op afstand zijn beperkt</li>
              <li>Andere medische normen en regelgeving</li>
              <li>Bij complicaties bent u op uzelf aangewezen</li>
              <li>Opvolging is duur of onmogelijk</li>
              <li>Stressvol herstel ver van huis</li>
              <li>Moeilijk verhaal bij klachten of teleurstelling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Locatie -->
    <section class="content-section location-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Onze locatie</h2>
            <div class="location-details">
              <div class="location-item">
                <span class="location-icon">📍</span>
                <div>
                  <strong>Adres</strong>
                  <p>Verdaelstraat 45<br />3450 Grazen, België</p>
                </div>
              </div>
              <div class="location-item">
                <span class="location-icon">🕐</span>
                <div>
                  <strong>Openingsuren</strong>
                  <p>Maandag–vrijdag: 9u–18u<br />Consultaties op afspraak</p>
                </div>
              </div>
              <div class="location-item">
                <span class="location-icon">🚗</span>
                <div>
                  <strong>Bereikbaarheid</strong>
                  <p>Gratis parking aanwezig<br />Bereikbaar vanuit heel België</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="location-highlights">
              <h3>Een groene, rustige omgeving</h3>
              <p>
                Onze kliniek is gevestigd in een rustige, groene omgeving in Grazen. U kunt rekenen
                op een serene sfeer die bijdraagt aan een ontspannen behandelervaring — ver van de
                drukte van de stad.
              </p>
              <p>
                De kliniek is modern ingericht met state-of-the-art medische apparatuur en voldoet
                aan alle Belgische normen voor medische faciliteiten. Gratis parking direct bij de
                ingang.
              </p>
              <a routerLink="/consult" class="btn btn-primary">Maak een afspraak</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="content-section team-section">
      <div class="container">
        <h2 class="section-title">Ons team</h2>
        <p class="section-subtitle">
          Een multidisciplinair team van gecertificeerde professionals staat voor u klaar. Elke
          specialist is volledig toegewijd aan uw traject van begin tot einde.
        </p>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">👨‍⚕️</div>
            <h3>Hoofdchirurg Haartransplantatie</h3>
            <p>
              Gecertificeerd haartransplantatiechirurg met meer dan 10 jaar ervaring in FUE, DHI en
              Saffier-technieken. Lid van de internationale haartransplantatie vereniging (ISHRS).
            </p>
          </div>
          <div class="team-card">
            <div class="team-avatar">🩺</div>
            <h3>Haarrestauratie Specialist</h3>
            <p>
              Specialist in non-chirurgische haargroeibehandelingen: PRP, Regenera Activa, Hairegen
              en TrichoTest. Begeleidt patiënten bij preventie en nazorg.
            </p>
          </div>
          <div class="team-card">
            <div class="team-avatar">💼</div>
            <h3>Patiëntbegeleider</h3>
            <p>
              Uw eerste en vaste aanspreekpunt gedurende het hele traject. Coördineert afspraken,
              beantwoordt vragen en zorgt dat u zich te allen tijde goed geïnformeerd en ondersteund
              voelt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigatie links -->
    <section class="content-section nav-links-section">
      <div class="container">
        <div class="nav-links-grid">
          <a routerLink="/werkwijze" class="nav-link-card">
            <span class="nav-link-icon">📋</span>
            <h3>Onze werkwijze</h3>
            <p>Hoe verloopt een behandeling bij HaarKliniek 45 stap voor stap?</p>
            <span class="nav-link-arrow">→</span>
          </a>
          <a routerLink="/resultaten" class="nav-link-card">
            <span class="nav-link-icon">📸</span>
            <h3>Resultaten</h3>
            <p>Bekijk echte voor-en-na-foto&rsquo;s van onze patiënten.</p>
            <span class="nav-link-arrow">→</span>
          </a>
          <a routerLink="/partners-trainingen" class="nav-link-card">
            <span class="nav-link-icon">🤝</span>
            <h3>Partners &amp; Trainingen</h3>
            <p>Samenwerken met HaarKliniek 45 als kapper of barber.</p>
            <span class="nav-link-arrow">→</span>
          </a>
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
export class OverOnsPageComponent {
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
}
