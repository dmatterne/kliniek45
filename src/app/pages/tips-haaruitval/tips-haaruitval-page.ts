import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-tips-haaruitval-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./tips-haaruitval-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Haaruitval</span>
        <h1>9 Tips tegen haaruitval</h1>
        <p class="subtitle">Praktische tips om haaruitval te vertragen, haargroei te stimuleren en uw haarvolume te bewaren.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <p class="intro-text">Haaruitval is zelden volledig te stoppen, maar er is veel wat u zelf kunt doen om het te vertragen en uw resterende haar te versterken. Hieronder vindt u 9 bewezen tips — van voeding tot medische behandelingen — die u vandaag al kunt toepassen.</p>
        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <h3>Eet haarvoeding</h3>
            <p>Zorg voor voldoende zink, biotine, ijzer en vitamine D in uw dieet. Vette vis, eieren, noten en groene bladgroenten zijn uitstekende bronnen. Tekorten aan deze voedingsstoffen zijn een onderschatte oorzaak van haaruitval.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <h3>Beheer stress</h3>
            <p>Chronische stress verhoogt cortisol, wat de haargroeicyclus verstoort en telogen effluvium (plotselinge haaruitval) kan veroorzaken. Meditatie, sport en voldoende slaap helpen cortisolniveaus te verlagen.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <h3>Behandel uw haar zacht</h3>
            <p>Vermijd hete föhns en stijltangen. Gebruik een brede tandkam op nat haar. Vermijd te strakke kapsels (vlecht, paardenstaart) die tractie-alopecia kunnen veroorzaken.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">4</div>
            <h3>Overweeg minoxidil</h3>
            <p>Minoxidil (Rogaine) is een bewezen werkzaam middel dat de doorbloeding van de haarzakjes verbetert. Raadpleeg uw arts voor de juiste dosering en vorm (lotion of foam). Resultaten zijn zichtbaar na 4–6 maanden.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">5</div>
            <h3>Laat een TrichoTest™ doen</h3>
            <p>De TrichoTest™ is een DNA-test die analyseert welke medicijnen en supplementen het best bij uw genetisch profiel passen. Zo vermijdt u nutteloze middelen en focust u op wat echt werkt voor u.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">6</div>
            <h3>Overweeg een PRP-behandeling</h3>
            <p>Platelet Rich Plasma (PRP) injecties stimuleren haarzakjes met groeifactoren uit uw eigen bloed. Effectief bij vroege haaruitval en als aanvulling op andere behandelingen.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">7</div>
            <h3>Regenera Activa</h3>
            <p>Een innovatieve éénmalige behandeling die uw eigen haargroeicelreserve activeert. Regenera Activa is bijzonder effectief bij androgenetische alopecia en levert resultaat vanaf 4–6 weken.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">8</div>
            <h3>Neem gerichte supplementen</h3>
            <p>Biotine, zink, selenium en ijzer kunnen haargroei ondersteunen bij een tekort. Laat eerst bloedwaarden controleren voor u begint met supplementen — overdosering is ook schadelijk.</p>
          </div>
          <div class="tip-card">
            <div class="tip-num">9</div>
            <h3>Plan een consult bij een specialist</h3>
            <p>Zelfbehandeling heeft zijn grenzen. Een haarzakjesspecialist kan de exacte oorzaak van uw haaruitval bepalen en een behandelplan op maat opstellen — inclusief niet-chirurgische én chirurgische opties.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Gratis consult aanvragen</h2>
        <p>Onze specialist analyseert uw haaruitval en stelt een persoonlijk behandelplan op — volledig vrijblijvend.</p>
        <a routerLink="/contact" class="btn btn-gold">Afspraak maken</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class TipsHaaruitvalPageComponent {}
