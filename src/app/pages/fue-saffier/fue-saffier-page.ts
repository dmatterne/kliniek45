import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-fue-saffier-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrl: './fue-saffier-page.scss',
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <span class="hero__badge">Geavanceerde Techniek</span>
          <h1 class="hero__title">FUE Saffier Techniek</h1>
          <p class="hero__subtitle">De gouden standaard in haartransplantatie met saffieren mesjes</p>
          <div class="hero__actions">
            <a href="/contact" class="btn btn-primary">Gratis Consult Aanvragen</a>
            <a href="/werkwijze" class="btn btn-secondary">Hoe het werkt</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Wat is de FUE Saffier techniek?</h2>
          <div class="section__divider"></div>
        </div>
        <div class="text-block">
          <p>De FUE Saffier techniek is een verfijnde versie van de klassieke Follicular Unit Extraction (FUE) methode. Het voornaamste verschil ligt in het type mesjes dat wordt gebruikt bij het aanmaken van de ontvangende kanaaltjes: in plaats van stalen mesjes worden hier saffieren mesjes ingezet — vervaardigd van het edelsteenmineraal corundum. De unieke V-vormige punt van het saffieren mesje maakt het mogelijk om de kanaaltjes uiterst precies en met minimaal weefseltrauma aan te brengen.</p>
          <p>Dankzij de gladde, niet-poreuze oppervlakte van saffier is er aanzienlijk minder wrijving met het omliggende weefsel, wat leidt tot minder bloeding, sneller herstel en een hogere overlevingskans van de getransplanteerde haarzakjes. HaarKliniek 45 maakt uitsluitend gebruik van deze geavanceerde techniek voor de beste resultaten — omdat u niets minder verdient dan het allerbeste.</p>
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Waarom saffieren mesjes?</h2>
          <div class="section__divider"></div>
          <p class="section__lead">Saffier is harder, gladder en scherper dan staal — en dat maakt het verschil in uw eindresultaat.</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-card__icon">💎</span>
            <h3 class="benefit-card__title">Minder littekens</h3>
            <p class="benefit-card__text">De gladde saffieroppervlakte laat aanzienlijk minder sporen na in het weefsel dan traditioneel staal. Incisies sluiten sneller en littekens zijn nauwelijks zichtbaar — zelfs bij kort geschoren haar.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-card__icon">⚡</span>
            <h3 class="benefit-card__title">Sneller herstel</h3>
            <p class="benefit-card__text">Kleinere en nauwkeurigere incisies betekenen minimale weefselschade. Patiënten ervaren minder zwelling en pijn na de ingreep en kunnen sneller terugkeren naar hun dagelijkse activiteiten.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-card__icon">🎯</span>
            <h3 class="benefit-card__title">Hogere nauwkeurigheid</h3>
            <p class="benefit-card__text">Saffieren mesjes geven de specialist betere controle over de diepte en hoek van elke incisie. Dit resulteert in een natuurlijkere haargroeirichting en een esthetisch superieur eindresultaat.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Het FUE Saffier proces</h2>
          <div class="section__divider"></div>
          <p class="section__lead">Van consultatie tot implantatie — elke stap wordt met uiterste zorg uitgevoerd.</p>
        </div>
        <ol class="process-list">
          <li class="process-step">
            <div class="process-step__number">1</div>
            <div class="process-step__content">
              <h3>Consultatie en haarlijnontwerp</h3>
              <p>Onze specialist analyseert uw haarpatroon, beoordeelt de densiteit van uw donorzone en tekent samen met u de ideale haarlijn. Uw wensen en verwachtingen staan hierbij volledig centraal. Er wordt ook een digitale simulatie gemaakt zodat u het verwachte resultaat kunt visualiseren.</p>
            </div>
          </li>
          <li class="process-step">
            <div class="process-step__number">2</div>
            <div class="process-step__content">
              <h3>Verdoving van donor- en ontvangende zone</h3>
              <p>Beide zones worden grondig lokaal verdoofd zodat de behandeling volledig pijnvrij verloopt. U blijft de gehele procedure bij bewustzijn en kunt ontspannen. Op verzoek is er ook lichte sedatie mogelijk voor extra comfort.</p>
            </div>
          </li>
          <li class="process-step">
            <div class="process-step__number">3</div>
            <div class="process-step__content">
              <h3>Extractie van haarzakjes met FUE-methode</h3>
              <p>Met een microronde punch worden individuele haarzakjes (grafts) één voor één uit de donorzone onttrokken. Dit gebeurt uiterst zorgvuldig om de haarzakjes volledig intact te houden en de overleving te maximaliseren.</p>
            </div>
          </li>
          <li class="process-step">
            <div class="process-step__number">4</div>
            <div class="process-step__content">
              <h3>Aanmaken van kanaaltjes met saffieren mesjes</h3>
              <p>In de ontvangende zone worden met de saffieren mesjes microscopisch kleine kanaaltjes aangemaakt op de exacte hoek, richting en diepte die overeenkomen met uw natuurlijke haargroei. Dit is de stap die FUE Saffier onderscheidt van de standaard FUE-techniek.</p>
            </div>
          </li>
          <li class="process-step">
            <div class="process-step__number">5</div>
            <div class="process-step__content">
              <h3>Implantatie van haarzakjes in de kanaaltjes</h3>
              <p>De geëxtraheerde haarzakjes worden één voor één zorgvuldig in de aangemaakte kanaaltjes geplaatst. De nauwkeurige positionering garandeert een naturel, dicht en harmonieus eindresultaat.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section--green">
      <div class="container">
        <div class="stats-row">
          <div class="stat">
            <span class="stat__number">98%</span>
            <span class="stat__label">Graftoverleving</span>
          </div>
          <div class="stat">
            <span class="stat__number">7–14</span>
            <span class="stat__label">Dagen herstel</span>
          </div>
          <div class="stat">
            <span class="stat__number">12–18</span>
            <span class="stat__label">Maanden voor eindresultaat</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Veelgestelde vragen over FUE Saffier</h2>
          <div class="section__divider"></div>
        </div>
        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-item__question">Wat is het verschil tussen standaard FUE en FUE Saffier?</summary>
            <div class="faq-item__answer">
              <p>Het voornaamste verschil zit in het instrument waarmee de ontvangende kanaaltjes worden aangemaakt. Bij standaard FUE worden stalen mesjes gebruikt, terwijl bij FUE Saffier saffieren mesjes worden ingezet. Deze mesjes zijn harder, gladder en scherper, wat resulteert in kleinere incisies, minder weefselschade, sneller herstel en een hogere graftoverleving.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary class="faq-item__question">Is FUE Saffier geschikt voor iedereen?</summary>
            <div class="faq-item__answer">
              <p>FUE Saffier is voor de meeste kandidaten voor haartransplantatie een uitstekende keuze. Tijdens een gratis consultatie beoordelen onze specialisten uw haartype, de densiteit van uw donorzone en de uitgestrektheid van de kaalheid. Op basis hiervan adviseren zij de meest geschikte techniek voor uw specifieke situatie.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary class="faq-item__question">Hoelang duurt een FUE Saffier behandeling?</summary>
            <div class="faq-item__answer">
              <p>Een FUE Saffier behandeling duurt gemiddeld 6 tot 10 uur, afhankelijk van het aantal te transplanteren grafts. Kleinere sessies (1.000–2.000 grafts) duren doorgaans 5–6 uur; grotere sessies (3.000–4.000+ grafts) kunnen een volledige dag in beslag nemen.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary class="faq-item__question">Zijn de resultaten van FUE Saffier beter dan standaard FUE?</summary>
            <div class="faq-item__answer">
              <p>Klinische studies en praktijkervaring tonen aan dat FUE Saffier doorgaans betere resultaten geeft dan standaard FUE op vlak van graftoverleving, littekens en herstelsnelheid. Om die reden kiezen steeds meer topklinieken wereldwijd voor deze methode als hun standaardprotocol.</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class FueSaffierPageComponent {}
