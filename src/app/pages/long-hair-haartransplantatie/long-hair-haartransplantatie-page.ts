import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-long-hair-haartransplantatie-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./long-hair-haartransplantatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Long Hair haartransplantatie</h1>
        <p class="hero-subtitle">Haartransplantatie zonder het hoofd kaal te scheren — het resultaat is direct zichtbaar na de ingreep.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is de Long Hair techniek?</h2>
        <p>
          Bij een klassieke haartransplantatie wordt het haar in de donorzone kort of volledig geschoren
          alvorens de follikels te extraheren. De Long Hair techniek — ook wel "unshaven FUE" of "no-shave
          FUE" genoemd — maakt het mogelijk om haarfollikels te extraheren zonder het omliggende haar
          zichtbaar in te korten. Hierdoor blijft uw kapsel intact en is het resultaat onmiddellijk
          zichtbaar na de ingreep.
        </p>
        <p>
          Deze methode is bijzonder populair bij vrouwen en bij mannen die hun haar lang dragen en niet
          willen dat collega's of familieleden zien dat zij een behandeling hebben ondergaan. Bij
          HaarKliniek 45 bieden wij de Long Hair techniek aan voor geschikte kandidaten, waarbij de
          extractie en implantatie zo worden uitgevoerd dat het bestaande haar de behandelde zones
          maximaal camoufleert.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Voordelen van Long Hair haartransplantatie</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💇</div>
            <h3>Kapsel blijft intact</h3>
            <p>Het omliggende haar wordt niet geschoren, waardoor het kapsel direct na de ingreep intact blijft.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">👁️</div>
            <h3>Direct zichtbaar resultaat</h3>
            <p>Doordat lang haar wordt geïmplanteerd, is het effect van de behandeling meteen na de ingreep zichtbaar.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔒</div>
            <h3>Discrete ingreep</h3>
            <p>Het bestaande haar camoufleert de extractieplekken en implantatiezone, zodat de behandeling onopvallend blijft.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Voor wie is Long Hair geschikt?</h2>
        <ul class="styled-list">
          <li>
            <strong>Vrouwen met haaruitval</strong> — Vrouwen die hun haar lang dragen en niet willen dat
            de behandeling zichtbaar is voor de buitenwereld.
          </li>
          <li>
            <strong>Mannen met lang haar</strong> — Mannen met een langere haardracht die hun stijl niet
            willen aanpassen voor de behandeling.
          </li>
          <li>
            <strong>Publieke figuren of beroepspersonen</strong> — Mensen die zich niet kunnen
            permitteren met een geschoren hoofd te verschijnen in hun werkomgeving.
          </li>
          <li>
            <strong>Kleine lokale behandelzones</strong> — Bij beperkte zones (haarlijn, inhammen,
            littekens) is Long Hair FUE bijzonder praktisch.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Is Long Hair FUE technisch moeilijker?</h3>
            <p class="faq-answer">
              Ja, de Long Hair techniek vereist meer technische vaardigheid en duurt langer dan klassieke FUE
              omdat de specialist voorzichtiger te werk moet gaan om het omliggende haar niet te beschadigen.
              Bij HaarKliniek 45 hebben onze specialisten uitgebreide ervaring met deze methode.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Valt het getransplanteerde lange haar ook uit?</h3>
            <p class="faq-answer">
              Ja, ook bij Long Hair FUE treedt shock loss op: het getransplanteerde haar valt na 2-4 weken
              tijdelijk uit. Daarna groeit het opnieuw uit. Dit is volledig normaal en maakt deel uit van
              het herstelproces.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Kost Long Hair FUE meer dan klassieke FUE?</h3>
            <p class="faq-answer">
              De Long Hair techniek vereist meer tijd en expertise, wat de prijs iets hoger kan maken.
              Tijdens uw gratis consult berekenen wij een transparante prijs op maat van uw situatie.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class LongHairHaartransplantatiePageComponent {}
