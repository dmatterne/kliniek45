import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-korstjes-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./nazorg-korstjes-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">›</span>
          <a routerLink="/nazorg">Nazorg</a>
          <span aria-hidden="true">›</span>
          <span>Korstjes</span>
        </nav>
        <h1 class="hero-title">Korstjes na Haartransplantatie</h1>
        <p class="hero-subtitle">
          Korstjes na een haartransplantatie zijn een volledig normaal en noodzakelijk onderdeel van
          het genezingsproces. Ze beschermen de grafts terwijl ze ingroeien. Leer alles over wat u
          mag doen, wat absoluut niet mag en hoe lang ze aanhouden.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Stel uw vraag</a>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-card">
          <div class="intro-icon">🩹</div>
          <div>
            <h2>Korstjes zijn normaal — geen reden tot ongerustheid</h2>
            <p>
              Na een haartransplantatie worden kleine insnijdingen gemaakt in de huid. Het wondvocht
              dat daarna vrijkomt, droogt op en vormt korstjes rondom de getransplanteerde grafts.
              Dit is een natuurlijk beschermend proces en een teken dat uw lichaam actief aan het
              genezen is.
            </p>
            <p>
              Bij HaarKliniek 45 informeren we elke patiënt uitgebreid over dit onderwerp zodat u
              weet wat u kunt verwachten en hoe u correct moet handelen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-long-section">
      <div class="container">
        <h2 class="section-title">Hoe lang duren de korstjes?</h2>
        <div class="timeline-grid">
          <div class="timeline-item">
            <div class="timeline-marker">Dag 1–3</div>
            <div class="timeline-content">
              <h3>Korstjes vormen zich</h3>
              <p>
                Direct na de ingreep begint het wondvocht op te drogen. De kleine korstjes rondom
                elke graft worden zichtbaar. Dit is pijnloos en normaal.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">Dag 4–7</div>
            <div class="timeline-content">
              <h3>Korstjes worden vaster</h3>
              <p>
                De korstjes zijn nu duidelijk zichtbaar. Ze beschermen de ingegroeide grafts. Laat
                ze ongemoeid en was zacht met de speciale shampoo.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">Dag 7–10</div>
            <div class="timeline-content">
              <h3>Verweken en loslaten</h3>
              <p>
                Vanaf dag zeven kunt u de korstjes voorzichtig verweken met lauwwarm water en
                conditioner. Ze laten geleidelijk los — forceer dit nooit.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">Dag 10–15</div>
            <div class="timeline-content">
              <h3>Grotendeels verdwenen</h3>
              <p>
                Bij de meeste patiënten zijn de korstjes op dag tien tot vijftien volledig
                verdwenen. Zijn ze na dag vijftien nog aanwezig? Neem contact op met onze kliniek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="no-scratch-section">
      <div class="container">
        <div class="warning-card">
          <div class="warning-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <div>
            <h2>Krab nooit aan de korstjes — nooit</h2>
            <p>
              Dit is de allerbelangrijkste regel:
              <strong
                >u mag de korstjes absoluut niet krabben, plukken of verwijderen met kracht.</strong
              >
            </p>
            <div class="risks-grid">
              <div class="risk-item">
                <span class="risk-icon">🩸</span>
                <div>
                  <strong>Wonden heropenen</strong>
                  <span
                    >Krabben kan de gehechte wonden heropenen en blootstellen aan infectie.</span
                  >
                </div>
              </div>
              <div class="risk-item">
                <span class="risk-icon">🦠</span>
                <div>
                  <strong>Infectie</strong>
                  <span
                    >Bacteriën kunnen via beschadigde huid binnendringen en ernstige infecties
                    veroorzaken.</span
                  >
                </div>
              </div>
              <div class="risk-item">
                <span class="risk-icon">💔</span>
                <div>
                  <strong>Graft-verlies</strong>
                  <span
                    >Een graft die nog niet volledig is ingegroeid kan letterlijk losgetrokken
                    worden.</span
                  >
                </div>
              </div>
              <div class="risk-item">
                <span class="risk-icon">📉</span>
                <div>
                  <strong>Slechter resultaat</strong>
                  <span
                    >Beschadigde grafts groeien minder goed of helemaal niet uit, wat het
                    eindresultaat aantast.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="washing-section">
      <div class="container">
        <h2 class="section-title">Correct wassen: stap voor stap</h2>
        <p class="section-subtitle">
          De juiste wastechniek maakt een enorm verschil voor uw herstel
        </p>
        <div class="steps">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Gebruik uitsluitend de meegeleverde shampoo</h3>
              <p>
                Onze specialist geeft u een speciaal samengestelde shampoo mee die zachtzinnig is
                voor de gevoelige huid en grafts. Gebruik geen gewone shampoo in de eerste twee
                weken.
              </p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Lauwwarm water — nooit te heet</h3>
              <p>
                Warm water kan de bloedvaten verwijden en zwelling veroorzaken. Gebruik altijd
                lauwwarm water. De eerste week laat u de douchestraal nooit direct op het
                getransplanteerde gebied vallen.
              </p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Zacht deppen — nooit wrijven</h3>
              <p>
                Breng de shampoo aan met licht tikkende bewegingen van de vingertoppen. Wrijf of
                masseer nooit krachtig. Na het wassen droogt u het haar zacht dep met een schone
                handdoek — nooit frotteren.
              </p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Korstjes verweken (na dag 7)</h3>
              <p>
                Breng een kleine hoeveelheid conditioner aan op de korstjes. Laat dit 10–15 minuten
                inwerken. Spoel daarna zacht af. De korstjes zullen geleidelijk loslaten. Forceer
                dit nooit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="itch-section">
      <div class="container">
        <h2 class="section-title">Jeuk door korstjes: wat kunt u doen?</h2>
        <div class="itch-grid">
          <div class="itch-info">
            <p>
              Jeuk is een normaal bijverschijnsel van de genezende huid. Het is het teken dat de
              huid zich herstelt. Toch voelt de verleiding om te krabben soms overweldigend. Hier
              zijn veilige manieren om de jeuk te verlichten:
            </p>
            <ul class="comfort-list">
              <li>
                <span class="comfort-icon">🧊</span>
                <div>
                  <strong>IJspak naast (niet op) het gebied</strong>
                  <p>
                    Een koud kompres naast het getransplanteerde gebied kan de jeuk tijdelijk
                    verlichten.
                  </p>
                </div>
              </li>
              <li>
                <span class="comfort-icon">💨</span>
                <div>
                  <strong>Koel houden</strong>
                  <p>Slaap in een koele, goed geventileerde kamer. Warmte verergert de jeuk.</p>
                </div>
              </li>
              <li>
                <span class="comfort-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6l1 4H8L9 3z"/><path d="M8 7v13a1 1 0 001 1h6a1 1 0 001-1V7"/><path d="M10 11h4"/></svg></span>
                <div>
                  <strong>Regelmatig wassen</strong>
                  <p>
                    Een schone hoofdhuid jeukt minder. Was dagelijks zacht met de speciale shampoo.
                  </p>
                </div>
              </li>
              <li>
                <span class="comfort-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.5 20H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 011.66.9l.82 1.2a2 2 0 001.66.9H20a2 2 0 012 2v2"/><circle cx="18" cy="18" r="3"/><path d="M18 15v6M15 18h6"/></svg></span>
                <div>
                  <strong>Antihistaminicum op voorschrift</strong>
                  <p>
                    In ernstige gevallen kan uw arts een antihistaminicum voorschrijven. Vraag ons
                    om advies.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="itch-dont">
            <h3 class="warning-title">⛔ Wat u absoluut niet mag doen bij jeuk</h3>
            <ul class="dont-list">
              <li>Krabben met nagels — ook niet licht</li>
              <li>Het gebied wrijven met een handdoek</li>
              <li>Ijs direct op de grafts leggen</li>
              <li>Haarlak of producten op de jeukende zone aanbrengen</li>
              <li>Een haardroogkap of warme luchtblazer gebruiken</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="comfort-section">
      <div class="container">
        <h2 class="section-title">Comforttips voor een vlotter herstel</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <span class="tip-icon">😴</span>
            <h3>Verhoogd slapen</h3>
            <p>
              Slaap met een nekkussen de eerste nachten. Verhoogd hoofd vermindert zwelling en houdt
              druk weg van de grafts.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🏃</span>
            <h3>Activiteiten vermijden</h3>
            <p>
              Geen intensief sporten de eerste week. Zweten bevordert jeuk en kan de korstjes weken
              op het verkeerde moment.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🧢</span>
            <h3>Geen pet of muts</h3>
            <p>
              Vermijd petten en mutsen de eerste twee weken. Ze kunnen wrijving veroorzaken en de
              korstjes beschadigen.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🥗</span>
            <h3>Gezonde voeding</h3>
            <p>
              Eet voldoende eiwitten en vitaminen. Een goed voedingspatroon versnelt het
              genezingsproces aanzienlijk.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="warning-signs-section">
      <div class="container">
        <h2 class="section-title">Wanneer contact opnemen?</h2>
        <p class="section-subtitle">
          Neem onmiddellijk contact op via <a href="tel:+32485593302">+32 485 593 302</a> of
          <a href="https://wa.me/32485593302" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          als u het volgende merkt:
        </p>
        <div class="signs-grid">
          <div class="sign-card sign-urgent">
            <span class="sign-icon">🌡️</span>
            <h3>Koorts</h3>
            <p>Koorts boven 38°C kan wijzen op een infectie. Neem onmiddellijk contact op.</p>
          </div>
          <div class="sign-card sign-urgent">
            <span class="sign-icon">🔴</span>
            <h3>Extreme roodheid of pus</h3>
            <p>Sterke roodheid met warmte of etter zijn tekenen van infectie. Wacht niet.</p>
          </div>
          <div class="sign-card sign-warning">
            <span class="sign-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
            <h3>Korstjes na dag 15</h3>
            <p>Zijn de korstjes na vijftien dagen nog aanwezig? Stuur ons een foto via WhatsApp.</p>
          </div>
          <div class="sign-card sign-warning">
            <span class="sign-icon">😰</span>
            <h3>Overmatige zwelling</h3>
            <p>
              Enige zwelling is normaal. Neemt die toe na dag drie? Neem contact op voor advies.
            </p>
          </div>
        </div>
        <div class="nav-links">
          <a routerLink="/nazorg" class="nav-link">← Terug naar Nazorg</a>
          <a routerLink="/nazorg/herstel-na-haartransplantatie" class="nav-link"
            >Herstel na Haartransplantatie →</a
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
export class NazorgKorstjesPageComponent {
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
