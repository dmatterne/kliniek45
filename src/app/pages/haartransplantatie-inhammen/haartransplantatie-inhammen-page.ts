import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-inhammen-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haartransplantatie-inhammen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie inhammen</h1>
        <p class="hero-subtitle">Herstel uw haarlijn en vul inhammen op met een permanente, natuurlijk uitziende transplantatie.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat zijn haarlijn-inhammen?</h2>
        <p>
          Inhammen — ook wel temporale terugtrekking of "widow's peak" achteruitgang genoemd — zijn een van de
          vroegste en meest herkenbare vormen van androgenetische alopecia bij mannen. Ze ontstaan wanneer de
          haarlijn aan de slapen begint terug te trekken, waardoor een M-vormig patroon ontstaat. Bij vrouwen
          kunnen inhammen het gevolg zijn van traktietrekhaarverlies of lokale haaruitval.
        </p>
        <p>
          Bij HaarKliniek 45 behandelen wij inhammen met behulp van de FUE Saffier- of DHI-techniek. De
          getransplanteerde haarfollikels worden nauwkeurig geplaatst langs de gewenste haarlijn, met aandacht
          voor de natuurlijke haargroeirichting. Het resultaat is een egale, jeugdige haarlijn die volledig
          permanent is en niet te onderscheiden van uw eigen haar.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Oorzaken van inhammen</h2>
        <ul class="styled-list">
          <li>
            <strong>Androgenetische alopecia</strong> — De meest voorkomende oorzaak. Genetische gevoeligheid
            voor DHT zorgt voor geleidelijke terugtrekking van de haarlijn, te beginnen bij de slapen.
          </li>
          <li>
            <strong>Tractiehaaruitval</strong> — Herhaaldelijk strak samengebonden haar kan leiden tot lokale
            haaruitval rondom de haarlijn en slapen.
          </li>
          <li>
            <strong>Littekens of alopecia areata</strong> — Kale plekken door littekens of auto-immuunaandoeningen
            kunnen de haarlijn onregelmatig maken.
          </li>
          <li>
            <strong>Leeftijdsgebonden haarterugtrekking</strong> — Een geleidelijke, natuurlijke achteruitgang
            van de haarlijn die bij veel mannen al op jongere leeftijd begint.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>De behandeling stap voor stap</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">1. Haarlijnontwerp</h3>
            <p class="faq-answer">
              Samen met onze specialist tekent u de ideale haarlijn uit. Hierbij houden wij rekening met uw
              gezichtsvorm, leeftijd en de toekomstige evolutie van haaruitval. Wij gebruiken digitale simulatie
              zodat u het verwachte resultaat vooraf kunt beoordelen.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">2. Extractie van follikels</h3>
            <p class="faq-answer">
              Gezonde haarfollikels worden één voor één onttrokken aan de donorzone (achterkant van het hoofd)
              via de FUE-methode. Dit laat nauwelijks littekens achter en de donorzone herstelt snel.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">3. Implantatie langs de haarlijn</h3>
            <p class="faq-answer">
              De follikels worden nauwkeurig geïmplanteerd op de juiste hoek en richting om een volledig
              natuurlijke, egale haarlijn te creëren. De haargroeirichting wordt afgestemd op het omliggende haar.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">4. Herstel en groei</h3>
            <p class="faq-answer">
              Na enkele weken valt het getransplanteerde haar tijdelijk uit (shock loss). Vanaf maand 3-4 begint
              de permanente haargroei. Het definitieve resultaat is na 12-18 maanden volledig zichtbaar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Voordelen van inhammen behandeling</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">✂️</div>
            <h3>Permanente haarlijn</h3>
            <p>
              De getransplanteerde follikels zijn resistent tegen haaruitval en blijven levenslang groeien.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🎯</div>
            <h3>Volledig natuurlijk</h3>
            <p>
              Dankzij nauwkeurige plaatsing op de juiste hoek en richting is het resultaat onzichtbaar
              voor de buitenwereld.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Minimale herstelperiode</h3>
            <p>
              De meeste patiënten kunnen na enkele dagen hun normale activiteiten hervatten.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Hoeveel grafts zijn nodig voor inhammen?</h3>
            <p class="faq-answer">
              Afhankelijk van de grootte van de inhammen zijn doorgaans 500 tot 1.500 grafts nodig. Bij
              uitgebreidere haarlijncorrectie kan dit oplopen tot 2.000 grafts. Tijdens het consult berekent
              onze specialist het exact benodigde aantal.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Kan de haarlijn lager worden geplaatst?</h3>
            <p class="faq-answer">
              Een haarlijn kan lager worden geplaatst, maar onze specialisten adviseren een leeftijdsadequate
              haarlijn die ook bij toekomstige haaruitval naturel oogt. Wij bespreken altijd realistisch
              wat esthetisch verantwoord is.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Hoe lang duurt de ingreep voor inhammen?</h3>
            <p class="faq-answer">
              Een behandeling voor inhammen duurt gemiddeld 3 tot 6 uur, afhankelijk van het aantal te
              transplanteren grafts en de complexiteit van het haarlijnontwerp.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaartransplantatieInhammenPageComponent {}
