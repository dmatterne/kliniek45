import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-dna-test-haaruitval-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./dna-test-haaruitval-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>DNA-test haaruitval</h1>
        <p class="hero-subtitle">TrichoTest — de wetenschappelijke DNA-analyse die uw haaruitval in kaart brengt en de ideale behandeling bepaalt.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is de TrichoTest DNA-analyse?</h2>
        <p>
          De TrichoTest is een farmacogenetische test die uw DNA analyseert om te bepalen hoe uw lichaam
          reageert op de meest gangbare behandelingen tegen haaruitval. De test identificeert genetische
          varianten (polymorfismen) die de werking van medicatie zoals minoxidil en finasteride
          beïnvloeden, evenals uw gevoeligheid voor oxidatieve stress en circulatieproblemen — twee
          belangrijke oorzaken van haaruitval.
        </p>
        <p>
          Op basis van de testresultaten krijgt u een persoonlijk behandelprotocol dat wetenschappelijk
          op maat is samengesteld voor uw genetisch profiel. Zo hoeft u niet meer trial-and-error te
          spelen met dure producten die voor u misschien niet werken.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Verloop van de test</h2>
        <ol class="steps-list">
          <li class="step-item">
            <span class="step-num">1</span>
            <div class="step-body">
              <h3>Monsterafname</h3>
              <p>Een eenvoudig wangslijmvliesmonster (wangswab) wordt afgenomen tijdens uw consult. De procedure is volledig pijnloos en duurt minder dan een minuut.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">2</span>
            <div class="step-body">
              <h3>Laboratoriumanalyse</h3>
              <p>Het monster wordt opgestuurd naar een gecertificeerd laboratorium dat uw DNA analyseert op de relevante genetische varianten. Dit duurt doorgaans 2–3 weken.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">3</span>
            <div class="step-body">
              <h3>Persoonlijk behandelprotocol</h3>
              <p>Op basis van de resultaten stelt het laboratorium een gedetailleerd rapport op met aanbevolen behandelingen, dosissen en producten die het best aansluiten bij uw DNA.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-num">4</span>
            <div class="step-body">
              <h3>Besprekingsconsult</h3>
              <p>Uw specialist bespreekt de resultaten en het protocol met u, en begeleidt u bij de implementatie van de aanbevolen behandeling.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat analyseert TrichoTest?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💊</div>
            <h3>Medicatie-respons</h3>
            <p>Hoe uw lichaam reageert op minoxidil, finasteride en andere haarverliesbehandelingen.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔬</div>
            <h3>DHT-gevoeligheid</h3>
            <p>Uw genetische aanleg voor androgenetische alopecia op basis van DHT-receptor polymorfismen.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🩸</div>
            <h3>Circulatie en oxidatieve stress</h3>
            <p>Varianten die uw haarzakjes kwetsbaarder maken voor doorbloedingsproblemen en oxidatieve schade.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">Is de TrichoTest geschikt voor iedereen?</h3>
            <p class="faq-answer">
              De TrichoTest is zinvol voor iedereen die haaruitval ervaart en wil weten welke behandelingen
              het meest effectief zijn voor hun specifieke genetisch profiel. Zowel mannen als vrouwen kunnen
              de test laten uitvoeren.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Vervangt de DNA-test een consult?</h3>
            <p class="faq-answer">
              Nee. De TrichoTest is een aanvulling op een medisch consult. De resultaten worden altijd
              besproken met een specialist die het protocol in uw bredere behandelplan integreert.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Zijn mijn genetische gegevens veilig?</h3>
            <p class="faq-answer">
              Ja. Het laboratorium verwerkt uw gegevens conform de Europese GDPR-wetgeving. Uw DNA-data
              worden uitsluitend gebruikt voor de TrichoTest-analyse en worden niet gedeeld met derden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class DnaTestHaaruitvalPageComponent {}
