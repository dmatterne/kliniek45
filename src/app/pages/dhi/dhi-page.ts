import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-dhi-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./dhi-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>DHI Haartransplantatie</h1>
        <p class="hero-subtitle">
          Direct Hair Implantation is een chirurgische techniek die via onze partner Hair Clinic
          Wolf wordt beoordeeld en uitgevoerd. HaarKliniek 45 helpt u lokaal met intake,
          voorbereiding en nazorg.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is een DHI haartransplantatie?</h2>
            <p>
              DHI, ofwel Direct Hair Implantation, is een moderne en effectieve
              haartransplantatietechniek. De resultaten zijn natuurlijk en langdurig. De grafts
              worden geoogst zoals bij FUE, maar met DHI worden ze direct met Choi pennen in de
              hoofdhuid geplaatst. Geen littekens en minder bloedingen zijn grote voordelen van de
              DHI-methode.
            </p>
            <p>
              De Choi pen zorgt voor een nauwkeurige plaatsing van haarzakjes, wat leidt tot een
              volledig natuurlijk resultaat. Andere methodieken waarmee haartransplantaties gedaan
              worden zijn FUE en FUE Saffier.
            </p>
            <p>
              Of DHI geschikt is, hangt af van uw donorgebied, haarverliespatroon en verwachtingen.
              Tijdens de intake bereiden we uw vragen voor en stemmen we het chirurgische vervolg af
              met Hair Clinic Wolf.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="DHI haartransplantatie resultaat voor en na"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Hoe werkt DHI?</h2>
        <p>
          De DHI-procedure verloopt in vier zorgvuldige stappen waarbij precisie en veiligheid
          centraal staan.
        </p>
        <div class="steps-grid steps-4">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>Incisies grafts</h3>
            <p>
              Eerst maken we kleine incisies rondom de haarzakjes om ze voor te bereiden op
              extractie uit het donorgebied.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Extracties grafts</h3>
            <p>
              We verzamelen de haarzakjes zorgvuldig uit het donorgebied, meestal aan de achterkant
              van het hoofd.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Bewaren grafts</h3>
            <p>
              De geextraheerde grafts worden in een speciale beschermende vloeistof geplaatst om hun
              kwaliteit te behouden.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">04</div>
            <h3>Implanteren grafts</h3>
            <p>
              Met de speciale Choi pen worden de grafts direct en nauwkeurig een voor een in de huid
              geimplanteerd.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Onze werkwijze bij HaarKliniek 45</h2>
        <p>
          Bij HaarKliniek 45 nemen we u mee in de voorbereiding op een mogelijk DHI-traject. We
          bespreken uw haarverlies, verwachtingen, nazorg en de informatie die Hair Clinic Wolf
          nodig heeft voor een medische beoordeling.
        </p>
        <p>
          De chirurgische stappen zelf, zoals extractie en implantatie met een Choi-implanter,
          worden uitgevoerd door het medische team van Hair Clinic Wolf. Wij blijven het lokale
          aanspreekpunt voor voorbereiding en opvolging.
        </p>
        <p>
          Maak vrijblijvend een afspraak in Grazen als u wilt weten of een DHI-traject het bespreken
          waard is en welke vragen u vooraf helder moet hebben.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Plan een consult bij HaarKliniek 45 in Grazen</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>De consultatie</h3>
            <p>
              Tijdens het consultatiegesprek bespreken we al je wensen en heb je alle gelegenheid om
              vragen te stellen. Dit kan telefonisch of persoonlijk in onze kliniek in Grazen,
              Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Start behandeling</h3>
            <p>
              Je ontvangt van ons richtlijnen voor voorbereiding. Als DHI passend is, vindt de
              chirurgische behandeling plaats via Hair Clinic Wolf.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven je adviseren na de behandeling. Je ontvangt advies over producten, wassing
              en eventuele vervolgbehandelingen. Persoonlijke nazorg is onze prioriteit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>De voordelen van de DHI-behandelmethode</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#128137;</div>
            <h3>Directe implantatie en minder bloedingen</h3>
            <p>
              Geen incisies in de ontvangstzone, wat resulteert in minder bloedingen en minder
              schade aan het omliggende weefsel.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128170;</div>
            <h3>Maximale dichtheid</h3>
            <p>
              Een hogere graftsdichtheid per vierkante centimeter is mogelijk, wat een vollere en
              natuurlijkere haardos oplevert.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9988;</div>
            <h3>Alleen scheren in het donorgebied</h3>
            <p>
              In tegenstelling tot de FUE-methode hoef je niet je volledige hoofd te scheren, enkel
              het donorgebied.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9889;</div>
            <h3>Kortere herstelperiode</h3>
            <p>
              Minder schade aan de huid betekent een sneller herstel en je kunt sneller terugkeren
              naar je dagelijks leven.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128300;</div>
            <h3>Geen zichtbare littekens</h3>
            <p>
              Door de precisie van de Choi pen zijn er geen lineaire incisies nodig, waardoor
              littekens minimaal zijn.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Natuurlijk en langdurig resultaat</h3>
            <p>
              De nauwkeurige plaatsing van elke graft zorgt voor een volledig natuurlijk uitziend en
              langdurig resultaat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>DHI voor en na resultaten</h2>
        <p>
          Benieuwd naar voorbeelden van DHI-resultaten? Gebruik deze pagina als startpunt voor uw
          vragen; chirurgische resultaten moeten altijd aan Hair Clinic Wolf worden toegeschreven.
        </p>
        <div class="three-col-images">
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-1.png"
              alt="DHI haartransplantatie voor en na resultaat 1"
            />
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-2.png"
              alt="DHI haartransplantatie voor en na resultaat 2"
            />
          </div>
          <div class="image-block">
            <img
              src="assets/images/mannen-voor-na-3.png"
              alt="DHI haartransplantatie voor en na resultaat 3"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Voor de behandeling</h2>
            <p>
              Bij HaarKliniek 45 gaan we graag eerst persoonlijk met je in gesprek. We geven je
              advies over welke behandelmethode de beste keuze is voor jouw haartransplantatie. Wij
              behandelen voornamelijk met de DHI-behandelmethode omdat we hier de mooiste resultaten
              mee boeken.
            </p>
            <p>
              Tijdens het gratis consult in Grazen bespreken we jouw situatie, wensen en
              verwachtingen. Als een haartransplantatie relevant is, stemmen we het vervolg af met
              Hair Clinic Wolf.
            </p>
          </div>
          <div>
            <h2>Nazorg na de behandeling</h2>
            <p>
              Na de haartransplantatie ontvang je van ons gedetailleerde instructies over hoe je je
              hoofdhuid moet verzorgen. Zo krijg je van ons een shampoo, speciaal ontworpen voor de
              verzorging van het getransplanteerde haar.
            </p>
            <p>
              Na de behandeling blijven we je adviseren. We zien je graag na een tijdje terug om te
              zien hoe goed de getransplanteerde haren groeien. Al binnen enkele maanden beginnen de
              nieuwe haren te groeien, en na ongeveer een jaar tot 14 maanden is het definitieve
              resultaat zichtbaar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over de DHI-behandeling, de procedure, het herstel of de kosten? Bekijk onze
          veelgestelde vragen voor uitgebreide antwoorden over DHI haartransplantatie bij
          HaarKliniek 45.
        </p>
        <a routerLink="/faq">Bekijk alle veelgestelde vragen &#8594;</a>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-heading-center">Waarom starten bij HaarKliniek 45?</h2>
      </div>
      <div class="badges-track-wrap" aria-hidden="true">
        <div class="badges-track">
          <ng-container *ngFor="let _ of [1, 2]">
            <span class="badge-pill" *ngFor="let b of trustBadges">{{ b }}</span>
          </ng-container>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class DhiPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgisch adviescentrum',
    'Partner Hair Clinic Wolf',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Duidelijke rolverdeling',
    'Persoonlijke begeleiding',
    'Lokale opvolging',
    'Discrete aanpak',
  ];
}
