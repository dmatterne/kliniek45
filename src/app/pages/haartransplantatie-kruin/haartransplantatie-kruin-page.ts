import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-kruin-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haartransplantatie-kruin-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie kruin</h1>
        <p class="hero-subtitle">Herstel de haardichtheid op uw kruin met een permanente en natuurlijk uitziende behandeling.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Kruin kaalheid — een veelvoorkomend probleem</h2>
        <p>
          Kaalheid op de kruin — ook wel vertex-kaalheid of "monk's spot" — is een van de meest voorkomende
          vormen van androgenetische alopecia. Bij mannen begint dit vaak als een kleine kale plek op de
          achterkant van de kruin die geleidelijk uitbreidt. Bij vrouwen uit het zich als een algehele
          verdunning op de kruinzone.
        </p>
        <p>
          Een kruin-haartransplantatie vereist bijzondere aandacht voor de zogenaamde "wervel" (whorling
          pattern): het natuurlijke draaipatroon van het haar op de kruin. Bij HaarKliniek 45 plaatsen
          onze specialisten elke follikel zorgvuldig met de juiste hoek en richting, zodat het
          eindresultaat volledig naadloos aansluit bij uw bestaande haar.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Specifieke aandachtspunten bij kruin-behandeling</h2>
        <ul class="styled-list">
          <li>
            <strong>Wervelpatroon</strong> — Haarfollikels op de kruin groeien radiaal rondom een centraal
            punt. Correcte hoekplaatsing is cruciaal voor een naturel resultaat.
          </li>
          <li>
            <strong>Grote oppervlakte</strong> — De kruinzone vereist doorgaans meer grafts dan de haarlijn.
            We plannen de behandeling zorgvuldig om donor- en ontvangstzone optimaal te benutten.
          </li>
          <li>
            <strong>Progressie van haaruitval</strong> — Bij jongere patiënten houden we rekening met
            verdere haaruitval en reserveren we donor-haar voor eventuele toekomstige behandelingen.
          </li>
          <li>
            <strong>Donorzone-capaciteit</strong> — Een grondige analyse van uw donorzone is essentieel
            om de haalbaarheid en dichtheid van de behandeling in kaart te brengen.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Voordelen</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🔄</div>
            <h3>Naturel wervelpatroon</h3>
            <p>Follikels worden geplaatst met oog voor het natuurlijke wervelpatroon van de kruin.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✅</div>
            <h3>Permanente dichtheid</h3>
            <p>Getransplanteerde haren zijn DHT-resistent en blijven levenslang groeien op de kruin.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌿</div>
            <h3>Onzichtbaar resultaat</h3>
            <p>Het behandelde gebied is na volledige groei niet te onderscheiden van het omliggende haar.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Hoeveel grafts zijn nodig voor de kruin?</h3>
            <p class="faq-answer">
              Voor een volledige kruinbehandeling zijn gemiddeld 1.500 tot 3.500 grafts nodig, afhankelijk
              van de omvang van de kale zone en de gewenste haardichtheid. In sommige gevallen worden
              meerdere sessies aanbevolen.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is de kruin moeilijker te behandelen dan de haarlijn?</h3>
            <p class="faq-answer">
              De kruin vereist meer technische expertise door het complexe wervelpatroon. Onze specialisten
              zijn hierin gespecialiseerd en gebruiken de DHI- of FUE Saffier-techniek voor maximale
              precisie bij de plaatsing.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Kan ik haarlijn én kruin tegelijk laten behandelen?</h3>
            <p class="faq-answer">
              In veel gevallen is dit mogelijk in één sessie. Dit hangt af van het aantal benodigde grafts
              en de capaciteit van uw donorzone. Uw specialist bespreekt de opties tijdens het consult.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaartransplantatieKruinPageComponent {}
