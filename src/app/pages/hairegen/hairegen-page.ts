import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-hairegen-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./hairegen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Hairegen</h1>
        <p class="hero-subtitle">Geavanceerde haargeneeskunde die haaruitval remt en nieuwe haargroei stimuleert zonder chirurgie.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is Hairegen?</h2>
        <p>
          Hairegen is een innovatieve, niet-chirurgische behandeling die werkstoffen direct in de hoofdhuid
          injecteert om haarzakjes te voeden en te revitaliseren. De behandeling maakt gebruik van
          speciaal samengestelde cocktails van vitamines, mineralen, aminozuren en groeifactoren die de
          doorbloeding van de hoofdhuid verbeteren en slapende haarzakjes reactiveren.
        </p>
        <p>
          Hairegen is bijzonder effectief bij diffuse haaruitval, vroege stadia van androgenetische alopecia
          en als aanvulling op een chirurgische haartransplantatie om het herstel te versnellen en de
          haardichtheid te verbeteren.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe werkt het?</h2>
        <ol class="steps-list">
          <li class="step-item">
            <span class="step-num">1</span>
            <div class="step-body">
              <h3>Analyse van de hoofdhuid</h3>
              <p>Onze specialist onderzoekt uw hoofdhuid en haarstructuur met een trichoscoopanalyse om de behandeling optimaal af te stemmen op uw situatie.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">2</span>
            <div class="step-body">
              <h3>Voorbereiding en numbing</h3>
              <p>De hoofdhuid wordt gereinigd en zo nodig voorzien van een plaatselijk verdovend middel om het comfort tijdens de behandeling te maximaliseren.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">3</span>
            <div class="step-body">
              <h3>Injectie van de actieve stoffen</h3>
              <p>Via microinjecties worden de Hairegen-werkzame stoffen in de opperhuid van de hoofdhuid ingebracht, direct in de zones met haaruitval.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">4</span>
            <div class="step-body">
              <h3>Nabehandeling</h3>
              <p>Na de sessie ontvangt u thuiszorgadvies. Voor optimale resultaten worden doorgaans 4–6 sessies aanbevolen, met tussenpozen van 2–4 weken.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Voordelen van Hairegen</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💉</div>
            <h3>Niet-chirurgisch</h3>
            <p>Geen incisies, geen littekens en geen langdurig herstel. U kunt onmiddellijk na de behandeling uw dagelijkse activiteiten hervatten.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌱</div>
            <h3>Reactivatie van haarzakjes</h3>
            <p>Hairegen revitaliseert slapende follikels en stimuleert nieuwe haargroei in zones met diffuse verdunning.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔗</div>
            <h3>Ideale aanvulling op transplantatie</h3>
            <p>In combinatie met FUE of DHI versnelt Hairegen het herstel en verbetert de overlevingskans van getransplanteerde follikels.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Voor wie is Hairegen geschikt?</h3>
            <p class="faq-answer">
              Hairegen is geschikt voor mannen en vrouwen met vroege of diffuse haaruitval, en als aanvulling
              op een haartransplantatie. Een consult bepaalt of Hairegen de juiste keuze is voor uw situatie.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Wanneer zie ik resultaten?</h3>
            <p class="faq-answer">
              De eerste tekenen van verbetering (minder haaruitval, meer volume) zijn doorgaans merkbaar na
              3–4 sessies. Volledige resultaten worden zichtbaar na het voltooien van het behandelprotocol.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is de behandeling pijnlijk?</h3>
            <p class="faq-answer">
              De microinjecties veroorzaken een minimaal ongemak. Op aanvraag wordt een plaatselijk verdovend
              middel aangebracht om de behandeling zo comfortabel mogelijk te maken.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HairegenPageComponent {}
