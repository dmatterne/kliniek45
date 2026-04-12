import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haargroei-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./haargroei-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Niet-chirurgische oplossingen</p>
        <h1>Haargroei stimuleren</h1>
        <p class="hero-subtitle">Wetenschappelijk bewezen behandelingen die haaruitval afremmen en nieuwe haargroei activeren — zonder ingreep, met bewezen resultaat.</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <h2>Wanneer is haargroei stimuleren de juiste keuze?</h2>
            <p>
              Niet iedereen is klaar voor of in aanmerking voor een chirurgische haartransplantatie.
              Soms is het beter om eerst haargroei te stimuleren — hetzij als preventieve aanpak,
              hetzij als aanvulling op een eerder uitgevoerde transplantatie.
            </p>
            <p>
              Onze haargroeibehandelingen zijn gebaseerd op recente wetenschappelijke inzichten.
              Ze bevorderen de activiteit van slapende haarfollikels, verminderen haaruitval en
              verbeteren de kwaliteit en dichtheid van bestaand haar.
            </p>
          </div>
          <div class="intro-checkpoints">
            <div class="checkpoint">
              <span class="check">✓</span>
              <div>
                <strong>Beginnende haaruitval</strong>
                <p>Vroeg ingrijpen geeft de beste resultaten. Stimuleer follikels voordat ze permanent inactief worden.</p>
              </div>
            </div>
            <div class="checkpoint">
              <span class="check">✓</span>
              <div>
                <strong>Na een haartransplantatie</strong>
                <p>PRP en Regenera versnellen de ingroei van getransplanteerde follikels en verbeteren het eindresultaat.</p>
              </div>
            </div>
            <div class="checkpoint">
              <span class="check">✓</span>
              <div>
                <strong>Preventief onderhoud</strong>
                <p>Wie haaruitval wil voorkomen, kan haargroeibehandelingen als reguliere onderhoudsbehandeling inzetten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="treatments-overview">
      <div class="container">
        <h2 class="section-title">Onze haargroeibehandelingen</h2>
        <div class="treatment-cards-grid">
          <div class="treatment-overview-card">
            <div class="treatment-ov-icon">🧬</div>
            <h3>Hairegen</h3>
            <p>
              Hairegen is een innovatieve behandeling die de regeneratie van haarfollikels stimuleert via
              gerichte injectie van groeifactoren. Bewezen effectief voor zowel mannen als vrouwen.
            </p>
            <ul class="treatment-benefits">
              <li>Stimuleert slapende haarfollikels</li>
              <li>Verbetert haardichtheid zichtbaar</li>
              <li>Geen herstelperiode vereist</li>
            </ul>
            <a routerLink="/haargroei-stimuleren/hairegen" class="btn btn-secondary">Meer over Hairegen</a>
          </div>

          <div class="treatment-overview-card featured">
            <div class="treatment-ov-badge">Populairste keuze</div>
            <div class="treatment-ov-icon">🔬</div>
            <h3>Regenera Activa</h3>
            <p>
              Regenera Activa is een geavanceerde éénmalige behandeling die haaruitval binnen 30 dagen
              significant vertraagt. Gebruik van uw eigen cellen garandeert maximale biologische compatibiliteit.
            </p>
            <ul class="treatment-benefits">
              <li>Éénmalige behandeling volstaat vaak</li>
              <li>Aantoonbaar resultaat binnen 30 dagen</li>
              <li>Volledig autoloog (eigen cellen)</li>
            </ul>
            <a routerLink="/haargroei-stimuleren/regenera-activa" class="btn btn-primary">Meer over Regenera Activa</a>
          </div>

          <div class="treatment-overview-card">
            <div class="treatment-ov-icon">🧪</div>
            <h3>TrichoTest™ DNA-test</h3>
            <p>
              De TrichoTest™ is een unieke DNA-test die op basis van uw genetisch profiel bepaalt welke
              medicatie en supplementen het meest effectief zijn voor uw persoonlijke situatie.
            </p>
            <ul class="treatment-benefits">
              <li>Gepersonaliseerd behandeladvies</li>
              <li>Gebaseerd op DNA-analyse</li>
              <li>Maximale effectiviteit van medicatie</li>
            </ul>
            <a routerLink="/haargroei-stimuleren/dna-test-haaruitval" class="btn btn-secondary">Meer over TrichoTest™</a>
          </div>
        </div>
      </div>
    </section>

    <section class="why-stimulate">
      <div class="container">
        <h2 class="section-title">Waarom haargroei stimuleren bij HaarKliniek 45?</h2>
        <div class="why-grid">
          <div class="why-item">
            <div class="why-icon">🏥</div>
            <h3>Medisch verantwoord</h3>
            <p>Al onze behandelingen zijn wetenschappelijk onderbouwd en uitgevoerd door getrainde specialisten.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">🎯</div>
            <h3>Persoonlijk advies</h3>
            <p>Op basis van uw haaranalyse en situatie adviseren wij de meest geschikte behandeling voor u.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">⚡</div>
            <h3>Snelle resultaten</h3>
            <p>Veel patiënten merken al na 4–8 weken een verbetering in haardichtheid en haarverlies.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">🔄</div>
            <h3>Gecombineerd met transplantatie</h3>
            <p>Combineer haargroeibehandelingen met een haartransplantatie voor het beste eindresultaat.</p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class HaargroeiPageComponent {}
