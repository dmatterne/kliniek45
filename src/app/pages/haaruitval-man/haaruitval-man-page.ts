import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haaruitval-man-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./haaruitval-man-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Haaruitval</span>
        <h1>Haaruitval bij mannen</h1>
        <p class="subtitle">Androgenetische alopecia begrijpen — oorzaken, patronen en behandelingsmogelijkheden.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Androgenetische alopecia bij mannen</h2>
        <p>Mannelijke kaalheid — ook wel androgenetische alopecia of male pattern baldness (MPB) — is de meest voorkomende vorm van haaruitval bij mannen. Naar schatting heeft meer dan 50% van de mannen boven de 50 er in meer of mindere mate last van. De oorzaak ligt in een combinatie van genetische aanleg en de werking van het hormoon DHT (dihydrotestosteron).</p>
        <p>DHT is een bijproduct van testosteron dat bindt aan receptoren in de haarzakjes. Bij genetisch gevoelige haarzakjes veroorzaakt DHT een verkorting van de groeicyclus: haartjes worden dunner, korter en vallen uiteindelijk voortijdig uit. Omdat de haarzakjes aan de achterkant van het hoofd niet gevoelig zijn voor DHT, blijven die gebieden bewaard — en zijn ze geschikt als donorzone voor haartransplantatie.</p>
        <p>Haaruitval bij mannen volgt doorgaans een voorspelbaar patroon dat wordt beschreven door de Norwood-schaal.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>De Norwood-schaal</h2>
        <p>De Norwood-schaal classificeert mannelijke haaruitval in 7 stadia:</p>
        <div class="norwood-list">
          <div class="norwood-item"><span class="norwood-num">I</span><div><strong>Geen of minimale haaruitval</strong> — Volledige haardekking, eventueel lichte terugtrekking van de haarlijn aan de slapen.</div></div>
          <div class="norwood-item"><span class="norwood-num">II</span><div><strong>Lichte terugtrekking</strong> — De haarlijn trekt terug aan de slapen, maar de kruin is nog volledig bedekt.</div></div>
          <div class="norwood-item"><span class="norwood-num">III</span><div><strong>Duidelijke inhammen</strong> — Significante terugtrekking aan de slapen; mogelijk beginnen van kaalheid op kruin (III Vertex).</div></div>
          <div class="norwood-item"><span class="norwood-num">IV</span><div><strong>Haarlijn en kruin</strong> — Verdere terugtrekking van de haarlijn met een kale zone op de kruin. Een band haar scheidt beide gebieden.</div></div>
          <div class="norwood-item"><span class="norwood-num">V</span><div><strong>Band versmalt</strong> — De haarband tussen haarlijn en kruin wordt smaller. Beide kale zones groeien naar elkaar toe.</div></div>
          <div class="norwood-item"><span class="norwood-num">VI</span><div><strong>Samengevoegde kaalheid</strong> — Haarlijn en kruin zijn volledig samengesmolten. Alleen haar aan zijkanten en achterhoofd blijft over.</div></div>
          <div class="norwood-item"><span class="norwood-num">VII</span><div><strong>Uitgebreide kaalheid</strong> — Enkel nog een smalle band haar aan de zijkanten en achterkant van het hoofd. Meest gevorderd stadium.</div></div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Oorzaken van haaruitval bij mannen</h2>
        <div class="benefits-grid">
          <div class="benefit-card"><span class="benefit-icon">🧬</span><h3>Genetica</h3><p>Aanleg voor DHT-gevoelige haarzakjes wordt via zowel moeder als vader overgeërfd.</p></div>
          <div class="benefit-card"><span class="benefit-icon">⚗️</span><h3>DHT hormoon</h3><p>Dihydrotestosteron miniatuuriseert haarzakjes en verkort de groeicyclus progressief.</p></div>
          <div class="benefit-card"><span class="benefit-icon">📅</span><h3>Leeftijd</h3><p>DHT-invloed accumuleert met de leeftijd. Haaruitval verergert vaak na de 30 en 40.</p></div>
          <div class="benefit-card"><span class="benefit-icon">🧠</span><h3>Stress &amp; leefstijl</h3><p>Chronische stress, slaaptekort en voedingstekorten (zink, biotine, ijzer) versnellen haaruitval.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Behandelingsmogelijkheden</h2>
        <div class="treatments-grid">
          <a routerLink="/behandelingen/haartransplantatie-mannen" class="treatment-link-card">
            <span class="tl-icon">💇‍♂️</span>
            <h3>Haartransplantatie</h3>
            <p>Permanente oplossing via FUE Saffier of DHI — getransplanteerde haarzakjes groeien levenslang.</p>
            <span class="tl-arrow">→</span>
          </a>
          <a routerLink="/haargroei-stimuleren" class="treatment-link-card">
            <span class="tl-icon">🌱</span>
            <h3>Haargroei stimuleren</h3>
            <p>PRP, Hairegen en Regenera Activa vertragen haaruitval en versterken bestaande haarzakjes.</p>
            <span class="tl-arrow">→</span>
          </a>
          <a routerLink="/haargroei-stimuleren/dna-test-haaruitval" class="treatment-link-card">
            <span class="tl-icon">🧬</span>
            <h3>TrichoTest™ DNA-test</h3>
            <p>Een gepersonaliseerd behandelplan op basis van uw DNA-profiel en medicatiegevoeligheid.</p>
            <span class="tl-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item"><h4>Vanaf welke leeftijd kan ik een haartransplantatie overwegen?</h4><p>We raden aan te wachten tot de haaruitval gestabiliseerd is, doorgaans na de leeftijd van 25 jaar. Een vroeg consult is altijd zinvol om het juiste moment te bepalen.</p></div>
          <div class="faq-item"><h4>Stopt haaruitval na een transplantatie?</h4><p>Getransplanteerde haarzakjes zijn DHT-resistent en vallen niet meer uit. Het omringend niet-getransplanteerd haar kan echter verder uitvallen. Ondersteunende behandelingen helpen dit te vertragen.</p></div>
          <div class="faq-item"><h4>Moet ik medicatie nemen?</h4><p>Medicatie zoals finasteride kan haaruitval vertragen maar heeft bijwerkingen. Onze specialist bespreekt alle opties — inclusief niet-chirurgische alternatieven — tijdens uw gratis consult.</p></div>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class HaaruitvalManPageComponent {}
