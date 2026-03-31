import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./faq-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <h1>Veelgestelde Vragen</h1>
        <p class="subtitle">Alles wat u wilt weten over haartransplantatie</p>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <p class="intro-text">
          Hieronder vindt u antwoorden op de meest gestelde vragen over haartransplantatie. Staat uw vraag er niet bij? Neem dan gerust contact met ons op voor persoonlijk advies.
        </p>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="faq-list">
          @for (item of faqs; track item.q; let i = $index) {
            <div class="faq-item" [class.open]="openIndex === i">
              <button class="faq-question" (click)="toggle(i)">
                <span>{{ item.q }}</span>
                <span class="faq-icon">{{ openIndex === i ? '−' : '+' }}</span>
              </button>
              @if (openIndex === i) {
                <div class="faq-answer">
                  <p>{{ item.a }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Heeft u nog vragen?</h2>
        <p>Ons team staat klaar om al uw vragen persoonlijk te beantwoorden.</p>
        <a href="/contact" class="btn btn-primary">Neem contact op</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class FaqPageComponent {
  openIndex = -1;
  toggle(i: number) { this.openIndex = this.openIndex === i ? -1 : i; }

  faqs = [
    { q: 'Wat is een haartransplantatie?', a: 'Een haartransplantatie is een chirurgische ingreep waarbij gezonde haarzakjes van de achterkant of zijkanten van uw hoofd worden overgebracht naar gebieden met dunner wordend of geen haar. De FUE (Follicular Unit Extraction) en DHI (Direct Hair Implantation) zijn de meest gebruikte moderne technieken.' },
    { q: 'Ben ik geschikt voor een haartransplantatie?', a: 'Geschikte kandidaten zijn personen met stabiele haaruitval, voldoende donorhaarzakjes aan de achterkant van het hoofd, en een goede algemene gezondheid. Een persoonlijk consult is nodig om uw specifieke situatie te beoordelen. De meeste mensen ouder dan 25 jaar komen in aanmerking.' },
    { q: 'Hoe lang duurt de ingreep?', a: 'Afhankelijk van het aantal te transplanteren haarzakjes (grafts) duurt een behandeling gemiddeld 4 tot 8 uur. Kleine behandelingen (1000-1500 grafts) zijn sneller afgerond, terwijl grotere behandelingen (3000+ grafts) een volledige dag in beslag kunnen nemen.' },
    { q: 'Is een haartransplantatie pijnlijk?', a: 'De ingreep wordt uitgevoerd onder lokale anesthesie, waardoor u geen pijn voelt tijdens de behandeling. Na de ingreep kunt u enige gevoeligheid en mild ongemak ervaren, maar dit is goed beheersbaar met pijnstillers. De meeste patiënten beschrijven de behandeling als comfortabeler dan verwacht.' },
    { q: 'Wanneer zie ik resultaat?', a: 'De eerste nieuwe haargroei is zichtbaar vanaf maand 4-6. Tussen maand 8-12 is er al significant zichtbaar verschil. Het volledige eindresultaat is pas na 12-18 maanden volledig zichtbaar. Het is normaal dat getransplanteerd haar in de eerste weken tijdelijk uitvalt (shock loss) - dit is onderdeel van het herstelproces.' },
    { q: 'Hoe lang duurt het herstel?', a: 'De meeste patiënten kunnen na 3-5 dagen al terug aan het werk. In de eerste week zijn er korstjes en lichte zwelling. Na 2 weken zijn de korstjes verdwenen. Sportieve activiteiten kunnen na 2-3 weken worden hervat. Zon bescherming is de eerste maanden belangrijk.' },
    { q: 'Wat kost een haartransplantatie?', a: 'De kosten variëren sterk afhankelijk van het aantal grafts, de gebruikte techniek en uw individuele situatie. Tijdens uw vrijblijvend consult ontvangt u een persoonlijke offerte op maat. Wij bieden transparante prijzen zonder verborgen kosten. Financieringsopties zijn beschikbaar.' },
    { q: 'Is het resultaat permanent?', a: 'Ja! Getransplanteerde haarzakjes zijn afkomstig uit gebieden die genetisch resistent zijn tegen haaruitval. Eenmaal getransplanteerd, groeien deze haartjes voor altijd mee. U kunt ze wassen, knippen, verven en stylen zoals uw eigen haar.' },
    { q: 'Kan ik werken na de ingreep?', a: 'De meeste mensen keren na 3-5 dagen terug naar kantoorwerk. Zwaar lichamelijk werk of intensieve activiteiten worden de eerste 2 weken afgeraden. Werken vanuit huis is direct na de ingreep mogelijk. Uw specialist geeft persoonlijk advies op basis van uw beroep.' },
    { q: 'Wat is het verschil tussen FUE en DHI?', a: 'Bij FUE worden haarzakjes geëxtraheerd en vervolgens geïmplanteerd via vooraf gemaakte kanaaltjes. Bij DHI worden haarzakjes direct geïmplanteerd via een speciale Choi-pen, zonder dat eerst kanaaltjes worden gemaakt. DHI biedt meer precisie en hogere dichtheid, terwijl FUE beter geschikt is voor grotere gebieden.' },
  ];
}
