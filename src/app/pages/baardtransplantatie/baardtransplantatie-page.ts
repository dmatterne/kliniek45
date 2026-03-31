import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-baardtransplantatie-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./baardtransplantatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Baardtransplantatie</h1>
        <p>Vul kale plekken op en creëer een volle, goed gevormde baard — voor een krachtige en verzorgde uitstraling.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wat is een baardtransplantatie?</h2>
        <p>Een baardtransplantatie is een minimaal invasieve ingreep waarbij haarfollikels van de achterkant van het hoofd
        worden overgebracht naar de kaak, wangen of bovenlip. De getransplanteerde haartjes groeien volledig
        en permanent, waardoor u een volle baard kunt laten groeien die u jarenlang plezier geeft.</p>
        <p>De behandeling is geschikt voor mannen met dunne of ongelijkmatige baardgroei, kale plekken in
        de baard, of die hun baard willen verlengen. Bij HaarKliniek 45 gebruiken wij de FUE-techniek voor een nauwkeurig en littekenloos resultaat.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Wie komt in aanmerking?</h2>
        <div class="candidates-grid">
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Dunne of ongelijkmatige baard</h4><p>Mannen met dunne baardzones die een vollere uitstraling wensen.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Kale plekken door littekens</h4><p>Littekens die baardgroei verhinderen kunnen worden gecamoufleerd.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Beperkte genetische aanleg</h4><p>Mannen met genetisch beperkte baardaanleg die alsnog een volle baard willen.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Asymmetrische baardlijn</h4><p>Een onregelmatige baardlijn kan via transplantatie worden gecorrigeerd.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Hoe verloopt de behandeling?</h2>
        <div class="steps-list">
          <div class="step-item"><div class="step-num">1</div><div class="step-body"><h4>Gratis consult</h4><p>Onze specialist bestudeert uw baardpatroon en bepaalt hoeveel follikels nodig zijn.</p></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-body"><h4>Ontwerp baardlijn</h4><p>Samen met u tekenen we de gewenste baardvorm uit, rekening houdend met uw gezichtsstructuur.</p></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-body"><h4>Extractie (FUE)</h4><p>Haarfollikels worden onder lokale verdoving één voor één geoogst uit het donorgebied.</p></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-body"><h4>Implantatie</h4><p>De follikels worden nauwkeurig geïmplanteerd op de juiste hoek voor een volledig natuurlijke baardgroei.</p></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-body"><h4>Herstel en groei</h4><p>Na 2–3 weken vallen de haartjes tijdelijk uit. Vanaf maand 3–4 start de definitieve baardgroei.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Voordelen</h2>
        <div class="benefits-grid">
          <div class="benefit-card"><span class="benefit-icon">💎</span><h3>Permanent resultaat</h3><p>De getransplanteerde follikels groeien voor de rest van uw leven.</p></div>
          <div class="benefit-card"><span class="benefit-icon">🎯</span><h3>Volledig natuurlijk</h3><p>De baard groeit precies zoals uw eigen haar — niemand merkt het verschil.</p></div>
          <div class="benefit-card"><span class="benefit-icon">⏱️</span><h3>Snel herstel</h3><p>Na 5–7 dagen zijn de meeste patiënten al terug aan het werk.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Is een baardtransplantatie pijnlijk?</h4><p>De ingreep wordt uitgevoerd onder lokale verdoving. Na de behandeling is er lichte gevoeligheid die snel verdwijnt.</p></div>
          <div class="faq-item"><h4>Hoe lang duurt de ingreep?</h4><p>Afhankelijk van het aantal follikels duurt een baardtransplantatie 4 tot 8 uur.</p></div>
          <div class="faq-item"><h4>Wanneer zie ik het definitieve resultaat?</h4><p>Het volledige resultaat is na 9–12 maanden zichtbaar.</p></div>
          <div class="faq-item"><h4>Kan ik mijn baard nadien scheren?</h4><p>Ja, zodra de haartjes zijn aangeslagen kunt u uw baard bijhouden of laten groeien zoals u wenst.</p></div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class BaardtransplantatiePageComponent {}
