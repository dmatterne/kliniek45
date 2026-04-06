import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-regenera-activa-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./regenera-activa-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Regenera Activa</h1>
        <p class="hero-subtitle">Biologische haartherapie met uw eigen stamcellen — wetenschappelijk bewezen en minimaal invasief.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is Regenera Activa?</h2>
        <p>
          Regenera Activa is een gepatenteerde, minimaal invasieve behandeling waarbij een kleine hoeveelheid
          haarzakjes van uw eigen hoofdhuid worden gebruikt om een concentraat van stamcellen en groeifactoren
          te bereiden. Dit concentraat wordt vervolgens in de aangetaste zones geïnjecteerd om de
          haarfollikels te regenereren en haaruitval te stoppen.
        </p>
        <p>
          In tegenstelling tot PRP-therapie (platelet-rich plasma) maakt Regenera Activa gebruik van
          progenitor-cellen uit uw eigen haarfollikels — de meest doelgerichte biologische stimuli voor
          haarregeneratie die momenteel beschikbaar zijn. Klinische studies tonen aan dat de behandeling
          zowel de haardichtheid verhoogt als de haaruitval significant remt bij androgenetische alopecia.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Verloop van de behandeling</h2>
        <ol class="steps-list">
          <li class="step-item">
            <span class="step-num">1</span>
            <div class="step-body">
              <h3>Microbiopsie</h3>
              <p>Onder lokale verdoving worden 3 tot 5 minuscule ponsjes (1,5 mm) genomen uit een zone achter op de hoofdhuid. Dit laat nauwelijks zichtbare sporen na.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">2</span>
            <div class="step-body">
              <h3>Centrifugatie en filtratie</h3>
              <p>De weefselstukjes worden verwerkt in een speciale centrifuge waarmee het concentraat van stamcellen en groeifactoren wordt bereid. Dit duurt ongeveer 15 minuten.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">3</span>
            <div class="step-body">
              <h3>Injectie in de behandelzone</h3>
              <p>Het concentraat wordt met microinjecties ingebracht in de zones met haaruitval. De injecties stimuleren de aanwezige haarzakjes direct op cellulair niveau.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">4</span>
            <div class="step-body">
              <h3>Herstel en opvolging</h3>
              <p>Na de behandeling kunt u onmiddellijk naar huis. Er is geen hersteltijd vereist. Na 6 maanden evalueert uw specialist de resultaten en bespreekt verdere opties.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Voordelen</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🧬</div>
            <h3>100% autoloog</h3>
            <p>Uitsluitend uw eigen cellen worden gebruikt — geen risico op afstoting of bijwerkingen.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Eén sessie volstaat</h3>
            <p>In tegenstelling tot PRP of Hairegen is doorgaans één behandelsessie voldoende voor een aantoonbaar resultaat.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">📈</div>
            <h3>Klinisch bewezen</h3>
            <p>Wetenschappelijke studies tonen significante verbetering in haardichtheid en remming van haaruitval na 6–12 maanden.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Is Regenera Activa een alternatief voor een haartransplantatie?</h3>
            <p class="faq-answer">
              Regenera Activa is geen vervanging voor een chirurgische haartransplantatie, maar een aanvulling.
              De behandeling is het meest effectief in vroege stadia van haaruitval (Norwood 1–3). Bij
              gevorderde kaalheid is een transplantatie de aangewezen optie.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Hoe lang houden de resultaten aan?</h3>
            <p class="faq-answer">
              Klinische opvolgstudies tonen resultaten die tot 2 jaar aantoonbaar blijven. Na verloop van
              tijd kan een herhalingssessie worden aanbevolen afhankelijk van de progressie van de haaruitval.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Verschilt Regenera Activa van PRP?</h3>
            <p class="faq-answer">
              Ja. PRP werkt via groeifactoren uit bloedplaatjes. Regenera Activa maakt gebruik van
              progenitor-cellen uit de haarfollikels zelf, wat een meer gerichte werking heeft op
              haarregeneratie. Regenera Activa heeft ook een sterker wetenschappelijk onderbouwd
              bewijs dan klassieke PRP.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class RegeneraActivaPageComponent {}
