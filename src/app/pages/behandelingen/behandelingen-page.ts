import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-behandelingen-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./behandelingen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Onze behandelingen</h1>
        <p class="hero-subtitle">
          Professionele haartransplantaties en haarherstelbehandelingen uitgevoerd door
          ervaren specialisten — voor blijvende, natuurlijke resultaten.
        </p>
      </div>
    </section>

    <section class="treatments-intro">
      <div class="container">
        <p>
          Bij HaarKliniek 45 bieden wij een volledig scala aan haarherstelbehandelingen aan,
          afgestemd op uw persoonlijke situatie en wensen. Of u nu te maken heeft met
          mannelijke kaalheid, diffuse haaruitval als vrouw of een dunner wordende baard —
          onze specialisten begeleiden u van het eerste consult tot het definitieve resultaat.
          Elke behandeling wordt voorafgegaan door een grondige analyse van uw haarprofiel
          en een eerlijk adviesgesprek over de verwachte uitkomsten.
        </p>
        <p>
          Wij werken uitsluitend met bewezen technieken zoals FUE (Follicular Unit Extraction)
          en DHI (Direct Hair Implantation), aangevuld met modernere methoden zoals de Saffier
          FUE-techniek en micro-haarpigmentatie. Onze prioriteit is een zo hoog mogelijke
          haardichtheid met een volledig natuurlijk ogend resultaat — onzichtbaar voor de
          buitenwereld, maar merkbaar in uw zelfvertrouwen.
        </p>
      </div>
    </section>

    <section class="treatments-section">
      <div class="container">
        <div class="treatments-grid">

          <div class="treatment-card">
            <div class="card-icon">&#128104;</div>
            <h3>Haartransplantatie mannen</h3>
            <p>
              Mannelijke haaruitval treft meer dan de helft van alle mannen boven de 50.
              Met onze FUE- en DHI-technieken herstellen wij uw haarlijn op een permanente
              en volledig natuurlijke manier.
            </p>
            <a [routerLink]="['/behandelingen/haartransplantatie-mannen']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

          <div class="treatment-card">
            <div class="card-icon">&#128105;</div>
            <h3>Haartransplantatie vrouwen</h3>
            <p>
              Haaruitval bij vrouwen verloopt anders dan bij mannen en vereist een specifieke
              aanpak. Wij behandelen diffuse haaruitval en lokale verdunning met precisie en
              zorg voor het vrouwelijke haarprofiel.
            </p>
            <a [routerLink]="['/behandelingen/haartransplantatie-vrouwen']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

          <div class="treatment-card">
            <div class="card-icon">&#129492;</div>
            <h3>Baardtransplantatie</h3>
            <p>
              Een volle, goed gevormde baard versterkt uw uitstraling. Via baardtransplantatie
              vullen wij dunne plekken op of bouwen een volledig nieuwe baard op — voor een
              krachtig en verzorgd resultaat.
            </p>
            <a [routerLink]="['/behandelingen/baardtransplantatie']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

          <div class="treatment-card">
            <div class="card-icon">&#127912;</div>
            <h3>Micro haarpigmentatie</h3>
            <p>
              Micro-haarpigmentatie (MHP) is een niet-chirurgische techniek waarbij minuscule
              pigmentstipjes op de hoofdhuid worden aangebracht. Het geeft de illusie van kort
              geschoren haar of verhoogt optisch de haardichtheid.
            </p>
            <a [routerLink]="['/behandelingen/micro-haarpigmentatie']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

          <div class="treatment-card">
            <div class="card-icon">&#128137;</div>
            <h3>DHI haartransplantatie</h3>
            <p>
              De DHI-techniek maakt gebruik van een speciale Choi-pen waarmee haarfollikels
              direct worden geïmplanteerd zonder vooraf gemaakte incisies — minder littekens,
              sneller herstel.
            </p>
            <a [routerLink]="['/behandelingen/dhi']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

          <div class="treatment-card">
            <div class="card-icon">&#128142;</div>
            <h3>FUE Saffier techniek</h3>
            <p>
              De Saffier FUE-techniek gebruikt messen van synthetisch saffier voor uiterst
              nauwkeurige incisies. Kleinere wondjes, minder korstvorming en een hogere
              overlevingskans voor de getransplanteerde follikels.
            </p>
            <a [routerLink]="['/behandelingen/fue-saffier']" class="card-link">
              Lees meer &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class BehandelingenPageComponent {}
