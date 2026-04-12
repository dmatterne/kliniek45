import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-korstjes-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./nazorg-korstjes-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Nazorg</span>
        <h1>Korstjes na haartransplantatie</h1>
        <p class="subtitle">Wat u moet weten over korstvorming na een haartransplantatie en hoe u er correct mee omgaat.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Waarom ontstaan korstjes?</h2>
        <p>Na een haartransplantatie vormen zich kleine korstjes op zowel het ontvangende gebied als op de donorzone. Deze korstjes zijn volledig normaal en maken deel uit van het natuurlijke genezingsproces. Ze bestaan uit gestold lymfevocht en gedroogd bloed dat vrijkomt bij de microincisies die tijdens de ingreep worden gemaakt.</p>
        <p>De korstjes dienen als beschermend schild voor de kwetsbare, pas geplaatste haarzakjes. Het is essentieel dat u ze niet aanraakt of verwijdert vóór ze spontaan loslaten — dit kan grafts beschadigen en het eindresultaat negatief beïnvloeden. Uw specialist geeft na de ingreep een gedetailleerd verzorgingsprotocol mee.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Tijdlijn van de korstjes</h2>
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-day">Dag 1–3</div><div class="timeline-body"><h4>Vorming</h4><p>Korstjes beginnen te vormen op het ontvangende gebied en de donorzone. De huid kan rood en gevoelig aanvoelen.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Dag 4–7</div><div class="timeline-body"><h4>Harder &amp; droger</h4><p>De korstjes worden harder en droger. Voorzichtig wassen met de meegeleverde lotion mag nu worden gestart.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Dag 8–14</div><div class="timeline-body"><h4>Loslaten</h4><p>De korstjes beginnen spontaan los te laten. Zachte massage bij het wassen helpt dit proces te begeleiden.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Dag 14+</div><div class="timeline-body"><h4>Huid genormaliseerd</h4><p>Vrijwel alle korstjes zijn verdwenen. De huid heeft haar normale kleur en textuur herwonnen.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Verzorgingstips</h2>
        <div class="dos-donts">
          <div class="dos">
            <h3 class="dos-title">✅ Wel doen</h3>
            <ul>
              <li>Deppen met lauwe water via de meegeleverde spray</li>
              <li>De door ons voorgeschreven shampoo en lotion gebruiken</li>
              <li>Slaap op uw rug met een verhoogd hoofd de eerste week</li>
              <li>Houd de huid goed gehydrateerd met de nazorgcrème</li>
              <li>Meld ongebruikelijke roodheid of koorts direct bij ons</li>
            </ul>
          </div>
          <div class="donts">
            <h3 class="dont-title">❌ Niet doen</h3>
            <ul>
              <li>Krabben of wrijven aan de behandelde zone</li>
              <li>Korstjes forceren te verwijderen</li>
              <li>Direct zonlicht op de behandelde zone de eerste maand</li>
              <li>Intensief sporten of zweten de eerste 2 weken</li>
              <li>Zwemmen in zwembad of zee de eerste 4-6 weken</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Mag ik korstjes voorzichtig verwijderen?</h4><p>Nee, nooit met de hand verwijderen. U riskeert grafts mee te trekken. Laat ze spontaan loslaten of was ze zacht weg met de meegeleverde lotion na dag 7.</p></div>
          <div class="faq-item"><h4>Wanneer verdwijnen de korstjes volledig?</h4><p>Bij de meeste patiënten zijn de korstjes na 10 tot 14 dagen volledig verdwenen. Het exacte tijdstip verschilt per persoon en per huidtype.</p></div>
          <div class="faq-item"><h4>Is jeuk normaal?</h4><p>Ja, jeuk is een teken van genezing en volledig normaal. Krab echter niet — deppen met koud water of licht kloppen geeft verlichting.</p></div>
        </div>
      </div>
    </section>

    
    <section class="cta-section">
      <div class="container">
        <h2>Vragen over uw nazorg?</h2>
        <p>Ons team staat klaar om u te begeleiden gedurende het volledige hersteltraject.</p>
        <a routerLink="/contact" class="btn btn-gold">Neem contact op</a>
        <a routerLink="/nazorg" class="btn btn-secondary" style="margin-left:1rem">Alle nazorg info</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class NazorgKorstjesPageComponent {}

