import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-herstel-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./nazorg-herstel-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Nazorg</span>
        <h1>Herstel na haartransplantatie</h1>
        <p class="subtitle">Een volledig overzicht van uw hersteltraject — van de dag na de ingreep tot het eindresultaat na 18 maanden.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Het herstelproces</h2>
        <p>Na een haartransplantatie verloopt het herstel in verschillende fasen. Het is belangrijk te weten dat shock loss — het tijdelijk uitvallen van de getransplanteerde haartjes — volledig normaal is en geen indicatie is van een mislukte behandeling. De haarzakjes blijven intact in de hoofdhuid en zullen opnieuw uitgroeien.</p>
        <p>Geduld is de sleutel bij haartransplantatie. Het definitieve resultaat is pas na 12 tot 18 maanden volledig zichtbaar. In die tussenperiode is het normaal dat de groei langzaam en soms ongelijkmatig verloopt.</p>
        <p>Wij begeleiden u tijdens het volledige hersteltraject met opvolgconsults, antwoorden op uw vragen en een gedetailleerd nazorgprotocol dat u mee naar huis krijgt.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Herstelschema week per week</h2>
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-day">Week 1</div><div class="timeline-body"><h4>Rust &amp; korstjes</h4><p>Rust is essentieel. Korstjes vormen zich op het ontvangende gebied. Zwelling van het voorhoofd is normaal en verdwijnt na 3-5 dagen.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Week 2</div><div class="timeline-body"><h4>Korstjes verdwijnen</h4><p>De korstjes lossen op bij het wassen. De huid normaliseert. Lichte activiteiten zijn nu toegestaan.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Week 3–4</div><div class="timeline-body"><h4>Shock loss</h4><p>De getransplanteerde haartjes vallen tijdelijk uit. Dit is volledig normaal — de haarzakjes blijven intact.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Maand 2–3</div><div class="timeline-body"><h4>Slapende fase</h4><p>De haarzakjes rusten. Weinig zichtbare verandering — dit is de fase die het meest geduld vraagt.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Maand 4–6</div><div class="timeline-body"><h4>Eerste groei</h4><p>Nieuwe fijne haartjes beginnen zichtbaar door te komen. Het haar kan in het begin dun en licht van kleur zijn.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Maand 6–9</div><div class="timeline-body"><h4>Verdere groei</h4><p>De haartjes worden dikker en donkerder. Het resultaat begint duidelijk zichtbaar te worden.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Maand 12</div><div class="timeline-body"><h4>80% resultaat</h4><p>Het grootste deel van het eindresultaat is zichtbaar. De meeste patiënten zijn zeer tevreden op dit punt.</p></div></div>
          <div class="timeline-item"><div class="timeline-day">Maand 18</div><div class="timeline-body"><h4>Eindresultaat</h4><p>Volledig eindresultaat bereikt. Het haar heeft zijn definitieve dikte, kleur en textuur aangenomen.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wat u kunt verwachten</h2>
        <div class="benefits-grid">
          <div class="benefit-card"><span class="benefit-icon">🍂</span><h3>Shock loss</h3><p>Volledig normaal. De haarzakjes zijn niet verloren — ze groeien opnieuw uit vanaf maand 3-4.</p></div>
          <div class="benefit-card"><span class="benefit-icon">🌸</span><h3>Rode huid</h3><p>Tijdelijke roodheid op het ontvangende gebied. Verdwijnt geleidelijk in de eerste 4-8 weken.</p></div>
          <div class="benefit-card"><span class="benefit-icon">✨</span><h3>Jeuk</h3><p>Teken van genezing. Deppen met koud water helpt. Krab nooit in de behandelde zone.</p></div>
          <div class="benefit-card"><span class="benefit-icon">🌱</span><h3>Nieuwe groei</h3><p>Progressief en soms ongelijkmatig in het begin — volledig normaal. Geduld wordt beloond.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Wanneer kan ik weer sporten?</h4><p>Lichte wandelingen zijn na 1 week toegestaan. Intensief sporten, zweten en tillen kan pas na 3 weken worden hervat om infecties en graftverlies te vermijden.</p></div>
          <div class="faq-item"><h4>Wanneer mag ik zwemmen?</h4><p>Zwembad en zee zijn pas na 4 tot 6 weken toegestaan. Chloor en zout water kunnen het genezingsproces verstoren en infecties veroorzaken.</p></div>
          <div class="faq-item"><h4>Wanneer kan ik naar de kapper?</h4><p>Een voorzichtige knipbeurt (geen scheren) is mogelijk vanaf week 4. Scheren van het behandelde gebied is pas na maand 3-4 aanbevolen.</p></div>
        </div>
      </div>
    </section>

    
    <section class="cta-section">
      <div class="container">
        <h2>Vragen over uw herstel?</h2>
        <p>Ons team beantwoordt al uw vragen over nazorg en herstel na uw behandeling.</p>
        <a routerLink="/contact" class="btn btn-gold">Contacteer ons</a>
        <a routerLink="/faq" class="btn btn-secondary" style="margin-left:1rem">Veelgestelde vragen</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class NazorgHerstellPageComponent {}

