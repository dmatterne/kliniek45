import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-prp-behandeling-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./prp-behandeling-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Haargroei stimuleren</span>
        <h1>PRP-behandeling</h1>
        <p class="subtitle">Activeer uw haargroei met uw eigen bloedplaatjes — een volledig natuurlijke en minimaal invasieve behandeling.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Wat is PRP?</h2>
        <p>PRP staat voor Platelet Rich Plasma — bloedplaatjesrijk plasma gewonnen uit uw eigen bloed. Bloedplaatjes bevatten een hoge concentratie aan groeifactoren die de celregeneratie en weefselherstel stimuleren. Bij een PRP-behandeling voor haaruitval worden deze groeifactoren rechtstreeks in de hoofdhuid geïnjecteerd, waar ze de haarzakjes activeren en de bloedcirculatie verbeteren.</p>
        <p>De behandeling is volledig autoloog — dit betekent dat er uitsluitend met uw eigen lichaamsmateriaal wordt gewerkt. Er zijn geen synthetische stoffen, geen allergierisico's en geen lange herstelperiode. PRP is erkend in de medische wereld als een effectieve aanvullende behandeling bij androgenetische alopecia en kan zowel zelfstandig als in combinatie met een haartransplantatie worden ingezet.</p>
        <p>Bij HaarKliniek 45 gebruiken wij een gecertificeerde centrifuge om het plasma optimaal te concentreren. Zo garanderen wij een hoge concentratie aan groeifactoren voor maximaal effect.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Hoe verloopt de behandeling?</h2>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Bloedafname</h4>
              <p>Ongeveer 20–30 ml bloed wordt afgenomen uit uw arm, vergelijkbaar met een standaard bloedafname bij de arts.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Centrifugeren</h4>
              <p>Het bloed wordt gecentrifrugeerd om de bloedplaatjes te concentreren en te scheiden van de rode bloedcellen. Dit levert een gouden vloeistof op: het PRP.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Micro-injecties in de hoofdhuid</h4>
              <p>Het geconcentrieerde PRP wordt via kleine injecties toegediend in de gebieden met haaruitval. Een verdovingscrème zorgt voor maximaal comfort.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">4</div>
            <div class="step-body">
              <h4>Opvolging &amp; herhaalsessies</h4>
              <p>Voor optimaal resultaat zijn gemiddeld 3 sessies nodig met een tussenperiode van 4–6 weken. Daarna is een onderhoudssessie per jaar aanbevolen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Voordelen van PRP</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-icon">🩸</span>
            <h3>Volledig natuurlijk</h3>
            <p>Uitsluitend uw eigen bloed — geen synthetische stoffen, geen allergierisico's.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">⚡</span>
            <h3>Minimaal invasief</h3>
            <p>Geen operatie, geen littekens. U kunt dezelfde dag nog gewone activiteiten hervatten.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🔄</span>
            <h3>Synergetisch effect</h3>
            <p>PRP versterkt haartransplantaties en werkt uitstekend samen met Hairegen en Regenera Activa.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Voor wie is PRP geschikt?</h2>
        <div class="candidates-grid">
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Haaruitval in beginstadium</h4><p>PRP is het meest effectief bij dunner wordend haar en vroege haaruitval.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Na een haartransplantatie</h4><p>PRP versnelt het aanslaan van grafts en stimuleert snellere haargroei na de ingreep.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Diffuse haaruitval bij vrouwen</h4><p>Vrouwen met verspreide haaruitval door hormonen of stress reageren goed op PRP.</p></div></div>
          <div class="candidate-item"><span class="cand-icon">✔</span><div><h4>Onderhoud na transplantatie</h4><p>PRP als onderhoudssessie houdt de haargroei op peil en vertraagt verdere haaruitval.</p></div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Hoeveel sessies zijn nodig?</h4><p>Voor optimaal resultaat worden 3 sessies aanbevolen met een interval van 4–6 weken. Daarna is een jaarlijkse onderhoudssessie ideaal.</p></div>
          <div class="faq-item"><h4>Is PRP pijnlijk?</h4><p>De injecties zijn kort en mild. We brengen vooraf een verdovingscrème aan zodat de behandeling zo comfortabel mogelijk verloopt.</p></div>
          <div class="faq-item"><h4>Wanneer zie ik resultaat?</h4><p>De eerste tekenen van verdikkend haar zijn zichtbaar na 3–6 maanden. Maximaal resultaat wordt bereikt na alle 3 sessies plus 6 maanden groeitijd.</p></div>
        </div>
      </div>
    </section>

    
    <section class="cta-section">
      <div class="container">
        <h2>Klaar voor een gezonder haarbeeld?</h2>
        <p>Plan een gratis consult en ontdek of PRP de juiste behandeling is voor u.</p>
        <a routerLink="/contact" class="btn btn-gold">Gratis consult aanvragen</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class PrpBehandelingPageComponent {}

