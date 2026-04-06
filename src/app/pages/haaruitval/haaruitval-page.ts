import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haaruitval-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haaruitval-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haaruitval — oorzaken en oplossingen</h1>
        <p class="hero-subtitle">Begrijp de oorzaken van haaruitval en ontdek welke behandeling het beste bij uw situatie past.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Waarom valt haar uit?</h2>
        <p>
          Gemiddeld verliest een persoon dagelijks 50 tot 100 haren — dit is volledig normaal. Haaruitval
          wordt problematisch wanneer het verlies structureel hoger ligt dan de aangroei, wat leidt tot
          zichtbare verdunning of kale plekken. De oorzaken zijn divers en vaak een combinatie van
          meerdere factoren.
        </p>
        <p>
          Een correcte diagnose is de eerste stap naar een effectieve behandeling. Bij HaarKliniek 45
          voeren wij een grondige analyse uit van uw haaruitval-patroon, familiegeschiedenis en
          levensomstandigheden om de juiste behandeling aan te bevelen.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Meest voorkomende oorzaken</h2>
        <div class="causes-grid">
          <div class="cause-card">
            <div class="cause-icon">🧬</div>
            <h3>Androgenetische alopecia</h3>
            <p>De meest voorkomende vorm bij mannen (mannelijke kaalheid) en vrouwen. Genetisch bepaald en gerelateerd aan het hormoon DHT. Kenmerkt zich bij mannen door terugwijkende haarlijn en kruinkaalheid.</p>
          </div>
          <div class="cause-card">
            <div class="cause-icon">⚡</div>
            <h3>Alopecia areata</h3>
            <p>Een auto-immuunziekte waarbij het immuunsysteem de haarfollikels aanvalt, resulterend in ronde kale plekken. Kan spontaan verdwijnen maar ook verder uitbreiden.</p>
          </div>
          <div class="cause-card">
            <div class="cause-icon">😰</div>
            <h3>Telogen effluvium</h3>
            <p>Diffuse haaruitval als reactie op stress, ziekte, bevalling, crash-diëten of hormonale schommelingen. Doorgaans tijdelijk en reversibel.</p>
          </div>
          <div class="cause-card">
            <div class="cause-icon">💊</div>
            <h3>Medicatie en medische condities</h3>
            <p>Chemotherapie, schildklieraandoeningen, ijzertekort en bepaalde medicijnen kunnen haaruitval veroorzaken. Behandeling van de onderliggende oorzaak is dan prioritair.</p>
          </div>
          <div class="cause-card">
            <div class="cause-icon">✂️</div>
            <h3>Traction alopecia</h3>
            <p>Haaruitval door aanhoudende mechanische spanning op de haarfollikels — veroorzaakt door strakke vlechten, paardenstaart of bepaalde haarverzorgingsgewoontes.</p>
          </div>
          <div class="cause-card">
            <div class="cause-icon">🔬</div>
            <h3>Cicatriciale alopecia</h3>
            <p>Littekenvorming in de haarfollikels als gevolg van schimmelinfecties, bepaalde huidaandoeningen of trauma. Vereist gespecialiseerde medische opvolging.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Behandelingsopties bij HaarKliniek 45</h2>
        <p>Afhankelijk van de oorzaak en ernst van uw haaruitval bieden wij verschillende behandelingen aan:</p>
        <ul class="styled-list">
          <li>
            <strong>Haartransplantatie (FUE Saffier / DHI)</strong> — Permanente oplossing voor
            androgenetische alopecia en littekenalopecia.
          </li>
          <li>
            <strong>Regenera Activa</strong> — Biologische stamceltherapie voor vroege stadia van
            haaruitval.
          </li>
          <li>
            <strong>Hairegen</strong> — Niet-chirurgische revitalisatie van de hoofdhuid via microinjecties.
          </li>
          <li>
            <strong>DNA-test (TrichoTest)</strong> — Farmacogenetische analyse om de meest effectieve
            medicamenteuze behandeling voor uw DNA te bepalen.
          </li>
          <li>
            <strong>Micro Haarpigmentatie (MHP)</strong> — Cosmetische oplossing die kaalheid optisch
            camoufleert met pigmentpuntjes.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Kan haaruitval gestopt worden?</h3>
            <p class="faq-answer">
              Dat hangt af van de oorzaak. Androgenetische alopecia kan worden geremd met medicatie
              (minoxidil, finasteride) of gestopt worden via haartransplantatie. Telogen effluvium is
              vaak tijdelijk en verdwijnt van zodra de trigger wegvalt.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Wanneer moet ik actie ondernemen?</h3>
            <p class="faq-answer">
              Hoe vroeger u handelt, hoe meer behandelingsopties beschikbaar zijn en hoe beter de
              resultaten. Wacht niet tot de haaruitval ver gevorderd is — neem contact op bij de
              eerste tekenen van verdunning.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is een consult bij HaarKliniek 45 gratis?</h3>
            <p class="faq-answer">
              Ja, het eerste consult is volledig gratis en vrijblijvend. Onze specialist analyseert uw
              situatie en stelt een persoonlijk behandelplan voor zonder verplichtingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaaruitvalPageComponent {}
