import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-kosten-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haartransplantatie-kosten-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie kosten</h1>
        <p class="hero-subtitle">Transparante prijzen zonder verborgen kosten — ontdek wat een haartransplantatie bij HaarKliniek 45 kost.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe worden de kosten bepaald?</h2>
        <p>
          De kosten van een haartransplantatie zijn sterk afhankelijk van uw persoonlijke situatie: de
          omvang van de kale zone, het aantal benodigde grafts, de gekozen techniek en de complexiteit
          van de behandeling. Daarom hanteert HaarKliniek 45 geen vaste lijstprijzen, maar wordt de prijs
          altijd bepaald op basis van een grondige analyse tijdens uw persoonlijk consult.
        </p>
        <p>
          Wij werken met een transparante prijsstelling: u ontvangt vooraf een gedetailleerde offerte
          zonder verborgen kosten. Alle voorbereidingen, de eigenlijke ingreep, de nazorgmedicatie en de
          opvolgafspraken zijn inbegrepen in de prijs.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Factoren die de prijs beïnvloeden</h2>
        <div class="cost-factors">
          <div class="cost-factor">
            <span class="factor-icon">📊</span>
            <div>
              <h4>Aantal grafts</h4>
              <p>De prijs is direct gerelateerd aan het aantal te transplanteren follikeleenheden (grafts). Een kleine behandeling (500–1.000 grafts) kost minder dan een grote sessie (3.000+ grafts).</p>
            </div>
          </div>
          <div class="cost-factor">
            <span class="factor-icon">🔬</span>
            <div>
              <h4>Gekozen techniek</h4>
              <p>FUE Saffier en DHI vereisen meer expertise en tijd dan standaard FUE, wat de prijs beïnvloedt. De Long Hair techniek kost doorgaans iets meer door de verhoogde complexiteit.</p>
            </div>
          </div>
          <div class="cost-factor">
            <span class="factor-icon">🎯</span>
            <div>
              <h4>Behandelzone</h4>
              <p>Een haarlijnbehandeling met enkele honderden grafts kost aanzienlijk minder dan een gecombineerde haarlijn- en kruinbehandeling met 3.000+ grafts.</p>
            </div>
          </div>
          <div class="cost-factor">
            <span class="factor-icon">💊</span>
            <div>
              <h4>Aanvullende behandelingen</h4>
              <p>Combinaties met PRP-therapie of andere aanvullende behandelingen worden apart geprijsd en zijn optioneel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Vergelijking met het buitenland</h2>
        <p>
          Veel mensen overwegen een haartransplantatie in Turkije of andere landen omwille van de
          lagere prijzen. Hoewel de initiële kost lager kan liggen, zijn er belangrijke overwegingen:
        </p>
        <ul class="styled-list">
          <li>
            <strong>Reiskosten en verblijf</strong> — Vliegtickets, hotel en eventueel begeleiding
            verhogen de totaalkost aanzienlijk.
          </li>
          <li>
            <strong>Nazorg op afstand</strong> — Complicaties of vragen na de ingreep zijn moeilijker
            op te volgen wanneer uw kliniek in het buitenland zit.
          </li>
          <li>
            <strong>Kwaliteitsgarantie</strong> — Belgische klinieken vallen onder strikte Europese
            medische regelgeving die uw bescherming als patiënt waarborgt.
          </li>
          <li>
            <strong>Persoonlijke opvolging</strong> — Bij HaarKliniek 45 bent u altijd welkom voor een
            opvolgconsult, vlak bij huis.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Betaling en financiering</h2>
        <p>
          Wij begrijpen dat een haartransplantatie een investering is. Daarom bieden wij flexibele
          betalingsmogelijkheden aan, waaronder gespreide betaling. Vraag naar de mogelijkheden
          tijdens uw vrijblijvend consult. Er worden nooit kosten aangerekend voor het intakeconsult.
        </p>
        <div class="cta-box">
          <h3>Ontvang een persoonlijke prijsofferte</h3>
          <p>Plan een gratis en vrijblijvend consult. Onze specialist berekent het exacte aantal grafts
          en bezorgt u een transparante offerte op maat.</p>
        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaartransplantatieKostenPageComponent {}
