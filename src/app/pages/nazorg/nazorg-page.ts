import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./nazorg-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Nazorg na haartransplantatie</h1>
        <p class="hero-subtitle">Een uitstekende nazorg is even belangrijk als de ingreep zelf — wij begeleiden u door elk stadium van het herstel.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Ons nazorgprotocol</h2>
        <p>
          Bij HaarKliniek 45 eindigt onze zorg niet bij het verlaten van de kliniek. Een grondige nazorg is
          cruciaal voor het optimale aanslaan van de getransplanteerde haarfollikels. Ons team staat na
          de ingreep voor u klaar met duidelijke instructies, opvolggesprekken en directe bereikbaarheid
          voor al uw vragen.
        </p>
        <p>
          De eerste weken na de transplantatie zijn het meest kritiek voor de overleving van de grafts.
          Wij begeleiden u stap voor stap door deze periode met een gedetailleerd nazorgschema.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Tijdlijn na de ingreep</h2>
        <ol class="steps-list">
          <li class="step-item">
            <span class="step-num">D1</span>
            <div class="step-body">
              <h3>Dag 1 — direct na de ingreep</h3>
              <p>U ontvangt een gedetailleerde nazorgkit en mondelinge instructies. De hoofdhuid kan licht zwellen en rood zijn — dit is normaal. Hoofd hoog houden bij het slapen aanbevolen.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">D2–5</span>
            <div class="step-body">
              <h3>Dagen 2–5 — voorzichtig wassen</h3>
              <p>Voorzichtig wassen met speciaal shampoo (inbegrepen). Niet krabben of wrijven. Vermijd zonlicht en sportiefs inspanning. Eventuele zwelling bereikt een piek rond dag 3.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">W2–4</span>
            <div class="step-body">
              <h3>Week 2–4 — shock loss fase</h3>
              <p>Het getransplanteerde haar valt tijdelijk uit. Dit is volledig normaal en onderdeel van het groeicyclus. De haarwortel blijft intact en zal opnieuw uitlopen.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">M3–6</span>
            <div class="step-body">
              <h3>Maand 3–6 — nieuwe groei</h3>
              <p>De nieuwe haren beginnen zichtbaar te groeien. Aanvankelijk fijner en lichter van kleur, maar geleidelijk aan dikker en donkerder wordend.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">M12+</span>
            <div class="step-body">
              <h3>Maand 12+ — eindresultaat</h3>
              <p>Het volledige resultaat is zichtbaar na 12–18 maanden. Op dit moment plant u een opvolgconsult waarbij eventuele bijsturing besproken kan worden.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat inbegrepen is bij uw behandeling</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💊</div>
            <h3>Medicatie en verzorgingsproducten</h3>
            <p>Shampoo, lotion, pijnstillers en antibiotica voor de eerste nazorgperiode zijn inbegrepen in de prijs.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">📞</div>
            <h3>Directe bereikbaarheid</h3>
            <p>Ons team is telefonisch en per e-mail bereikbaar voor vragen en geruststelling in de weken na de ingreep.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔄</div>
            <h3>Opvolgconsulten</h3>
            <p>Opvolgafspraken na 1 week, 1 maand, 6 maanden en 12 maanden zijn standaard inbegrepen in ons protocol.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Wanneer mag ik weer sporten na de transplantatie?</h3>
            <p class="faq-answer">
              Lichte activiteit is toegestaan na 1 week. Intensief sporten (krachttraining, zwemmen,
              contactsporten) wordt afgeraden gedurende 3–4 weken na de ingreep om de grafts te beschermen.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Mag ik zonlicht vermijden na de behandeling?</h3>
            <p class="faq-answer">
              Direct zonlicht op de behandelde zone is de eerste 4 weken te vermijden. Daarna is een pet
              of zonnebrandcrème aanbevolen tot het haar de zone voldoende bedekt.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Wat als ik meer vragen heb na de ingreep?</h3>
            <p class="faq-answer">
              U kunt ons team altijd bereiken via telefoon of e-mail. Wij voorzien ook een gedetailleerde
              schriftelijke nazorggids die u na de ingreep meekrijgt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class NazorgPageComponent {}
