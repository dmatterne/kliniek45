import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haargroei-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haargroei-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haargroei stimuleren</h1>
        <p>Niet-chirurgische behandelingen die haaruitval afremmen en nieuwe haargroei activeren — wetenschappelijk bewezen en schonend voor uw lichaam.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>PRP-behandeling voor haargroei</h2>
        <p>PRP (Platelet-Rich Plasma) is een geavanceerde behandeling waarbij uw eigen bloedplasma — verrijkt met groeifactoren — wordt geïnjecteerd in de hoofdhuid. Deze groeifactoren stimuleren slapende haarfollikels en versterken bestaande haartjes.</p>
        <p>De behandeling is volledig natuurlijk: er worden geen vreemde stoffen gebruikt. Uw eigen bloed wordt gecentrifugeerd om de trombocytenrijke fractie te isoleren, die vervolgens nauwkeurig wordt geïnjecteerd op de plaatsen waar haargroei gestimuleerd moet worden.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Hoe werkt PRP stap voor stap?</h2>
        <div class="steps-list">
          <div class="step-item"><div class="step-num">1</div><div class="step-body"><h4>Bloedafname</h4><p>Een kleine hoeveelheid bloed (20–30 ml) wordt afgenomen via een standaard bloedafname.</p></div></div>
          <div class="step-item"><div class="step-num">2</div><div class="step-body"><h4>Centrifugering</h4><p>Het bloed wordt gecentrifugeerd om het trombocytenrijke plasma te scheiden van de rode bloedcellen.</p></div></div>
          <div class="step-item"><div class="step-num">3</div><div class="step-body"><h4>Activering</h4><p>Het PRP wordt geactiveerd om de groeifactoren vrij te maken die haarfollikels stimuleren.</p></div></div>
          <div class="step-item"><div class="step-num">4</div><div class="step-body"><h4>Injectie in de hoofdhuid</h4><p>Het PRP wordt met fijne naalden op de juiste diepte in de hoofdhuid geïnjecteerd.</p></div></div>
          <div class="step-item"><div class="step-num">5</div><div class="step-body"><h4>Herhaling en opvolging</h4><p>Voor optimaal resultaat zijn 3–4 sessies aanbevolen met tussenpozen van 4–6 weken.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wie heeft baat bij PRP?</h2>
        <div class="suited-grid">
          <div class="suited-item"><span class="suited-icon">✅</span><div><h4>Beginnende haaruitval</h4><p>PRP is het meest effectief in een vroeg stadium van haaruitval wanneer follikels nog actief zijn.</p></div></div>
          <div class="suited-item"><span class="suited-icon">✅</span><div><h4>Vrouwen met diffuse haaruitval</h4><p>Vrouwen met verspreide haaruitval of dunner wordend haar reageren bijzonder goed op PRP.</p></div></div>
          <div class="suited-item"><span class="suited-icon">✅</span><div><h4>Na een haartransplantatie</h4><p>PRP versnelt het herstel na een transplantatie en bevordert de ingroei van de nieuwe follikels.</p></div></div>
          <div class="suited-item"><span class="suited-icon">✅</span><div><h4>Preventieve behandeling</h4><p>Wie haaruitval wil voorkomen of vertragen, kan PRP inzetten als onderhoudsprogramma.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Haaruitval behandeling</h2>
        <p>Naast PRP biedt HaarKliniek 45 ook medische adviezen en aanvullende behandelingen voor haaruitval. Haaruitval kent vele oorzaken: genetisch, hormonaal, door stress, voedingstekorten of auto-immuunziekten. Een correcte diagnose is de basis van een effectieve behandeling.</p>
        <div class="treatment-types">
          <div class="treatment-type"><h4>🔬 Haaranalyse en diagnose</h4><p>Via een uitgebreide haaranalyse bepalen wij de oorzaak van uw haaruitval en stellen een persoonlijk behandelplan op.</p></div>
          <div class="treatment-type"><h4>💊 Medische begeleiding</h4><p>Waar nodig verwijzen wij naar een dermatoloog of schrijven wij medisch verantwoorde producten voor die haaruitval afremmen.</p></div>
          <div class="treatment-type"><h4>🌿 Combinatietherapie</h4><p>De beste resultaten worden bereikt met een combinatie van PRP, medische behandeling en indien nodig haartransplantatie.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Is PRP pijnlijk?</h4><p>De injecties kunnen een lichte prik veroorzaken. Op aanvraag kan een verdovingscrème worden aangebracht om het comfort te verhogen.</p></div>
          <div class="faq-item"><h4>Wanneer zie ik resultaat van PRP?</h4><p>De eerste resultaten zijn na 2–3 maanden zichtbaar. Na 6 maanden is er een duidelijke verbetering in haardichtheid en -kwaliteit.</p></div>
          <div class="faq-item"><h4>Hoe lang houdt het PRP-effect stand?</h4><p>Het effect van PRP houdt 12–18 maanden aan. Daarna worden onderhoudssessies aanbevolen.</p></div>
          <div class="faq-item"><h4>Kan PRP gecombineerd worden met een haartransplantatie?</h4><p>Absoluut. PRP wordt vaak toegepast tijdens of na een transplantatie om de hersteltijd te verkorten en de resultaten te verbeteren.</p></div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaargroeiPageComponent {}
