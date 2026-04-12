import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./faq-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow">Alles wat u wilt weten</span>
        <h1>Veelgestelde Vragen</h1>
        <p class="subtitle">Duidelijke antwoorden over haartransplantatie, herstel en onze behandelingen</p>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        @for (cat of categories; track cat.label) {
          <div class="faq-category">
            <h2 class="category-title">{{ cat.label }}</h2>
            <div class="faq-list">
              @for (item of cat.items; track item.q; let i = $index) {
                <div class="faq-item" [class.open]="openKey === cat.label + i">
                  <button class="faq-question" (click)="toggle(cat.label + i)">
                    <span>{{ item.q }}</span>
                    <span class="faq-icon">{{ openKey === cat.label + i ? '−' : '+' }}</span>
                  </button>
                  @if (openKey === cat.label + i) {
                    <div class="faq-answer">
                      <p>{{ item.a }}</p>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Heeft u nog vragen?</h2>
        <p>Ons team staat klaar om al uw vragen persoonlijk te beantwoorden.</p>
        <a routerLink="/contact" class="btn btn-primary">Neem contact op</a>
      </div>
    </section>

    <app-consultation />
  `,
})
export class FaqPageComponent {
  openKey = '';
  toggle(key: string) { this.openKey = this.openKey === key ? '' : key; }

  categories = [
    {
      label: 'Algemeen',
      items: [
        { q: 'Wat is een haartransplantatie?', a: 'Een haartransplantatie is een chirurgische ingreep waarbij gezonde haarzakjes van de achterkant of zijkanten van uw hoofd worden overgebracht naar gebieden met dunner wordend of geen haar. De FUE en DHI zijn de meest gebruikte moderne technieken.' },
        { q: 'Ben ik geschikt voor een haartransplantatie?', a: 'Geschikte kandidaten zijn personen met stabiele haaruitval, voldoende donorhaarzakjes en een goede algemene gezondheid. Een persoonlijk consult is nodig om uw situatie te beoordelen. De meeste mensen ouder dan 25 jaar komen in aanmerking.' },
        { q: 'Is het resultaat permanent?', a: 'Ja. Getransplanteerde haarzakjes zijn afkomstig uit DHT-resistente gebieden en vallen in principe niet meer uit. Eenmaal getransplanteerd groeien ze levenslang mee. U kunt ze wassen, knippen, verven en stylen zoals uw eigen haar.' },
        { q: 'Hoeveel grafts heb ik nodig?', a: 'Het aantal benodigde grafts hangt af van de omvang van het kale gebied, de gewenste dichtheid en de kwaliteit van de donorzone. Kleine behandelingen vereisen 500-1.500 grafts, middelgrote 1.500-3.000, en uitgebreide behandelingen tot 4.000 grafts of meer.' },
        { q: 'Wat is het verschil tussen FUE, FUE Saffier en DHI?', a: 'FUE extraheert grafts en implanteert via incisies. FUE Saffier gebruikt een saffiermes voor scherpere incisies met minder littekenvorming. DHI gebruikt een Choi-pen die extractie en implantatie combineert, wat meer dichtheid en sneller herstel oplevert.' },
      ],
    },
    {
      label: 'Voorbereiding',
      items: [
        { q: 'Hoe verloopt het eerste consult?', a: 'Tijdens het gratis consult bestuderen we uw haarpatroon, donorzone en medische achtergrond. We bespreken uw verwachtingen, stellen een behandelplan op en geven een transparante prijsofferte. Dit duurt gemiddeld 45-60 minuten en is volledig vrijblijvend.' },
        { q: 'Welke voorbereiding is nodig vóór de ingreep?', a: 'We vragen u bloedverdunners en bepaalde supplementen te stoppen (na medisch overleg), alcohol en roken te vermijden in de week voor de ingreep, en comfortabele kleding te dragen. Een uitgebreide checklist ontvangt u na het plannen van uw afspraak.' },
        { q: 'Kan ik een haartransplantatie combineren met haargroei-stimulerende behandelingen?', a: 'Absoluut. PRP, Regenera Activa en Hairegen kunnen zowel voor als na een haartransplantatie worden ingezet. Voor de transplantatie versterken ze de donorzone. Daarna versnellen ze het herstel en stimuleren de haargroei.' },
      ],
    },
    {
      label: 'Behandeling & herstel',
      items: [
        { q: 'Hoe lang duurt de ingreep?', a: 'Afhankelijk van het aantal te transplanteren grafts duurt een behandeling gemiddeld 4 tot 8 uur. Kleine behandelingen (1.000-1.500 grafts) zijn sneller afgerond, grotere behandelingen (3.000+ grafts) nemen een volledige dag in beslag.' },
        { q: 'Is een haartransplantatie pijnlijk?', a: 'De ingreep wordt uitgevoerd onder lokale anesthesie, waardoor u geen pijn voelt. Na de ingreep kunt u enige gevoeligheid ervaren, maar dit is goed beheersbaar met pijnstillers. De meeste patiënten beschrijven de behandeling als comfortabeler dan verwacht.' },
        { q: 'Hoe lang duurt het herstel?', a: 'De meeste patiënten kunnen na 3-5 dagen al terug aan het werk. In de eerste week zijn er korstjes en lichte zwelling. Na 2 weken zijn de korstjes verdwenen. Sportieve activiteiten kunnen na 2-3 weken worden hervat.' },
        { q: 'Kan ik na een haartransplantatie sporten?', a: 'Lichte activiteiten zijn na 2 weken toegestaan. Intensief sporten en zweten moet u de eerste 2-3 weken vermijden om infecties en het loslaten van grafts te voorkomen. Zwemmen is pas na 4-6 weken aanbevolen.' },
        { q: 'Kan ik werken na de ingreep?', a: 'De meeste mensen keren na 3-5 dagen terug naar kantoorwerk. Zwaar lichamelijk werk wordt de eerste 2 weken afgeraden. Werken vanuit huis is direct na de ingreep mogelijk. Uw specialist geeft persoonlijk advies op basis van uw beroep.' },
      ],
    },
    {
      label: 'Resultaten',
      items: [
        { q: 'Wanneer zie ik resultaat?', a: 'De eerste nieuwe haargroei is zichtbaar vanaf maand 4-6. Tussen maand 8-12 is er al significant verschil. Het volledige eindresultaat is na 12-18 maanden bereikt. Het is normaal dat getransplanteerd haar in de eerste weken tijdelijk uitvalt - dit is onderdeel van het herstelproces.' },
        { q: 'Kan haaruitval terugkomen na een transplantatie?', a: 'Getransplanteerde haarzakjes zijn DHT-resistent en vallen in principe niet meer uit. Wel kan het omringend haar verder uitvallen. We bespreken dit tijdens het consult en plannen zo nodig toekomstige sessies. We adviseren ook ondersteunende behandelingen.' },
      ],
    },
    {
      label: 'Kosten & praktisch',
      items: [
        { q: 'Wat kost een haartransplantatie?', a: 'De kosten variëren sterk afhankelijk van het aantal grafts, de gebruikte techniek en uw individuele situatie. Tijdens uw vrijblijvend consult ontvangt u een persoonlijke offerte op maat. Wij bieden transparante prijzen zonder verborgen kosten.' },
        { q: 'Wat is de Long Hair haartransplantatie?', a: 'Bij de Long Hair methode worden haarzakjes getransplanteerd zonder het haar volledig te scheren. Dit is ideaal voor mensen die hun huidig haar willen behouden tijdens het herstel, of voor vrouwen die geen korte-haarfase willen doormaken.' },
      ],
    },
  ];
}
