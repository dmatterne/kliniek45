import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-dhi-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./dhi-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>DHI haartransplantatie</h1>
        <p>Direct Hair Implantation — de meest nauwkeurige techniek voor maximale haardichtheid en minimale herstelperiode.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wat is de DHI-techniek?</h2>
        <p>DHI (Direct Hair Implantation) is een verfijning van de klassieke FUE-methode. Bij DHI worden geëxtraheerde
        haarfollikels direct geïmplanteerd via een speciale Choi-implantatiepen, zonder dat er eerst incisies worden gemaakt.
        Dit verkort de tijd dat de follikels buiten het lichaam zijn, wat de overlevingskans aanzienlijk verhoogt.</p>
        <p>Het resultaat is een hogere haardichtheid, minder trauma voor de hoofdhuid en een snellere genezing.
        DHI is bijzonder geschikt voor patiënten die extra dichtheid wensen of bij wie bestaande haargroei niet volledig mag worden onderbroken.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>DHI vs. klassieke FUE</h2>
        <div class="compare-table">
          <div class="compare-row header"><div class="compare-col label"></div><div class="compare-col"><strong>DHI</strong></div><div class="compare-col"><strong>FUE klassiek</strong></div></div>
          <div class="compare-row"><div class="compare-col label">Incisies vooraf</div><div class="compare-col">❌ Niet nodig</div><div class="compare-col">✅ Vereist</div></div>
          <div class="compare-row"><div class="compare-col label">Haardichtheid</div><div class="compare-col">⭐⭐⭐⭐⭐ Maximaal</div><div class="compare-col">⭐⭐⭐⭐ Hoog</div></div>
          <div class="compare-row"><div class="compare-col label">Herstelperiode</div><div class="compare-col">✅ Korter</div><div class="compare-col">➡️ Standaard</div></div>
          <div class="compare-row"><div class="compare-col label">Bestaand haar gespaard</div><div class="compare-col">✅ Ja</div><div class="compare-col">⚠️ Beperkt</div></div>
          <div class="compare-row"><div class="compare-col label">Precisie hoek/richting</div><div class="compare-col">⭐⭐⭐⭐⭐ Uitmuntend</div><div class="compare-col">⭐⭐⭐⭐ Goed</div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Hoe verloopt een DHI-behandeling?</h2>
        <div class="steps-list">
          <div class="step-item"><div class="step-num">1</div><div class="step-body"><h4>Consult en planning</h4><p>Analyse van het donorgebied en bepaling van het benodigde aantal follikels.</p></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-body"><h4>Lokale verdoving</h4><p>Verdoving van zowel het donor- als het ontvangend gebied. De ingreep is volledig pijnloos.</p></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-body"><h4>Extractie via FUE</h4><p>Follikels worden geoogst uit het donorgebied met een micromotor van 0,7–0,9 mm.</p></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-body"><h4>Directe implantatie via Choi-pen</h4><p>Follikels worden onmiddellijk geplaatst op de juiste hoek, richting en diepte.</p></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-body"><h4>Nazorg en opvolging</h4><p>U ontvangt een gedetailleerd verzorgingsschema en opvolgafspraken.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Voordelen van DHI</h2>
        <div class="benefits-grid">
          <div class="benefit-card"><span class="benefit-icon">🎯</span><h3>Maximale precisie</h3><p>De Choi-pen biedt ongekende controle over hoek en richting van elke follikel.</p></div>
          <div class="benefit-card"><span class="benefit-icon">⚡</span><h3>Hogere overlevingskans</h3><p>Directe implantatie vergroot de overlevingskans van follikels aanzienlijk.</p></div>
          <div class="benefit-card"><span class="benefit-icon">🌿</span><h3>Minder beschadiging</h3><p>Geen voorafgaande incisies betekent minder trauma en sneller herstel.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Is DHI geschikt voor iedereen?</h4><p>DHI is ideaal voor patiënten met beginnende tot gevorderde haaruitval. Uw specialist bepaalt tijdens het consult de beste aanpak.</p></div>
          <div class="faq-item"><h4>Hoeveel follikels per sessie?</h4><p>Afhankelijk van het donorgebied kunnen 1.500 tot 3.000 follikels per sessie worden geïmplanteerd.</p></div>
          <div class="faq-item"><h4>Wanneer is het resultaat zichtbaar?</h4><p>Na 3–4 maanden start de zichtbare groei. Het definitieve resultaat is na 12 maanden volledig zichtbaar.</p></div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class DhiPageComponent {}
