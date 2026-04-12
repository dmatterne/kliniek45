import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-slapen-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./nazorg-slapen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Nazorg</span>
        <h1>Slapen na haartransplantatie</h1>
        <p class="subtitle">Hoe u de eerste weken het best slaapt na uw haartransplantatie om uw grafts optimaal te beschermen.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Waarom is slaaphouding belangrijk?</h2>
        <p>De eerste 7 tot 10 dagen na een haartransplantatie zijn de pas geplaatste grafts nog kwetsbaar. Wrijving of druk op het behandelde gebied kan grafts losrukken of beschadigen, wat het eindresultaat negatief beïnvloedt. De juiste slaaphouding is daarom één van de belangrijkste aspecten van de nazorg.</p>
        <p>Naast het beschermen van de grafts is het ook belangrijk om zwelling van het voorhoofd te beperken. Een verhoogd hoofdeinde de eerste nachten helpt vocht af te voeren en de zwelling te minimaliseren.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Slaaptips voor de eerste weken</h2>
        <div class="steps-list">
          <div class="step-item"><div class="step-num">1</div><div class="step-body"><h4>Slaap op uw rug</h4><p>Vermijd alle druk op het behandelde gebied. Slaap de eerste 2 weken uitsluitend op uw rug.</p></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-body"><h4>Gebruik een nekrol of steunkussen</h4><p>Een U-vormig reiskussen of nekrol voorkomt dat uw hoofd ongemerkt naar de zijkant rolt tijdens het slapen.</p></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-body"><h4>Verhoog uw hoofdeinde de eerste week</h4><p>Leg extra kussens onder uw matras of gebruik een verstelbaar hoofdeinde. Dit beperkt zwelling van het voorhoofd.</p></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-body"><h4>Wissel kussensloop dagelijks</h4><p>Een schone kussensloop elke nacht minimaliseert het risico op bacteriële infectie in de kwetsbare genezingsperiode.</p></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-body"><h4>Vermijd zijdelings slapen de eerste week</h4><p>Zijdelings slapen oefent druk uit op de zijkanten van het hoofd en de donorzone. Wacht minstens 10-14 dagen.</p></div></div>
          <div class="step-item"><div class="step-num">6</div><div class="step-body"><h4>Meld slaapproblemen bij uw specialist</h4><p>Heeft u moeite met slapen door ongemak? Neem contact op. We kunnen indien nodig een mild slaapondersteunend middel voorschrijven.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wanneer kunt u weer normaal slapen?</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Na 1 week</h4><p>Voorzichtig zijdelings slapen is mogelijk als het behandelde gebied geen pijn meer geeft en de korstjes steviger zijn.</p></div>
          <div class="faq-item"><h4>Na 2 weken</h4><p>De meeste beperkingen zijn opgeheven. U kunt in een comfortabelere houding slapen, maar vermijd nog druk op het ontvangende gebied.</p></div>
          <div class="faq-item"><h4>Na 1 maand</h4><p>Volledig vrij slapen is toegestaan. De grafts zijn stevig verankerd en zijn bestand tegen normale slaapdruk.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Wat als ik toch op mijn zij ben gevallen tijdens het slapen?</h4><p>Geen paniek. Controleer of de grafts nog op hun plaats zitten. Bij twijfel of bij bloeding neemt u contact op met uw specialist.</p></div>
          <div class="faq-item"><h4>Mag ik een gewone muts dragen tijdens het slapen?</h4><p>Alleen de speciale beschermkap die wij meegeven is toegelaten de eerste week. Gewone mutsen of petjes mogen pas na 10-14 dagen.</p></div>
          <div class="faq-item"><h4>Hoe lang duurt de pijn 's nachts?</h4><p>Meeste patiënten hebben de eerste 2-3 nachten licht ongemak. Pijnstillers die wij voorschrijven helpen dit te beheersen.</p></div>
        </div>
      </div>
    </section>

    
    <section class="cta-section">
      <div class="container">
        <h2>Nog vragen over de eerste nachten?</h2>
        <p>Neem gerust contact op — ons team is bereikbaar voor al uw nazorgvragen.</p>
        <a routerLink="/contact" class="btn btn-gold">Contacteer ons</a>
        <a routerLink="/nazorg" class="btn btn-secondary" style="margin-left:1rem">Terug naar nazorg</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class NazorgSlapenPageComponent {}

