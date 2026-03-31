import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-micro-haarpigmentatie-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./micro-haarpigmentatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Micro haarpigmentatie</h1>
        <p>Een niet-chirurgische behandeling die de illusie van dichter haar of een kortgeschoren hoofd creëert — zonder operatie, zonder herstelperiode.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wat is micro haarpigmentatie?</h2>
        <p>Micro-haarpigmentatie (MHP) is een geavanceerde pigmentatietechniek waarbij minuscule stippen worden aangebracht op de hoofdhuid.
        Deze stippen imiteren de aanblik van kortgeschoren haarfollikels of verhogen optisch de haardichtheid bij dunner wordend haar.</p>
        <p>De behandeling is vrijwel pijnloos, heeft geen herstelperiode en levert onmiddellijk een zichtbaar resultaat.
        MHP is ideaal voor wie niet in aanmerking komt voor chirurgische haartransplantatie of op zoek is naar een niet-invasief alternatief.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Voor wie is MHP geschikt?</h2>
        <div class="suited-grid">
          <div class="suited-item"><span class="suited-icon">🔵</span><div><h4>Kaalheid of dunne haardekking</h4><p>MHP geeft de aanblik van een volledig kortgeschoren hoofd en camoufleert kaalheid volledig.</p></div></div>
          <div class="suited-item"><span class="suited-icon">🔵</span><div><h4>Littekenverberging</h4><p>Littekens van een eerdere transplantatie worden effectief gecamoufleerd.</p></div></div>
          <div class="suited-item"><span class="suited-icon">🔵</span><div><h4>Dunner wordend haar</h4><p>Door pigment aan te brengen tussen bestaande haartjes ziet het haar voller uit.</p></div></div>
          <div class="suited-item"><span class="suited-icon">🔵</span><div><h4>Alopecia areata</h4><p>Kale plekken door alopecia worden gecamoufleerd met nauwkeurig aangebrachte stipjes.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Hoe verloopt de behandeling?</h2>
        <div class="steps-list">
          <div class="step-item"><div class="step-num">1</div><div class="step-body"><h4>Consult en haaranalyse</h4><p>Onze specialist analyseert uw situatie en bespreekt het gewenste resultaat en het aantal sessies.</p></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-body"><h4>Ontwerp haarlijn</h4><p>De haarlijn en het te behandelen gebied worden nauwkeurig uitgetekend voor uw goedkeuring.</p></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-body"><h4>Pigmentatie sessie 1</h4><p>De eerste sessie legt de basis. Stippen worden aangebracht met een gespecialiseerde naald.</p></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-body"><h4>Sessies 2 & 3 (verfijning)</h4><p>In opvolgende sessies worden diepte en dichtheid bijgewerkt voor een realistisch resultaat.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Hoe lang houdt MHP stand?</h4><p>Micro haarpigmentatie houdt gemiddeld 3 tot 5 jaar. Daarna is een opfrissessie aan te raden.</p></div>
          <div class="faq-item"><h4>Is MHP pijnlijk?</h4><p>De meeste patiënten ervaren weinig tot geen pijn. Op gevoelige plekken kan een verdovingscrème worden aangebracht.</p></div>
          <div class="faq-item"><h4>Hoeveel sessies zijn nodig?</h4><p>Gemiddeld zijn 2 tot 3 sessies nodig, met een tussenperiode van 1–2 weken per sessie.</p></div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class MicroHaarpigmentatiePageComponent {}
