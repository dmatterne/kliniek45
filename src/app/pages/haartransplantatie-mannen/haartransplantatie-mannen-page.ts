import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-mannen-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haartransplantatie-mannen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie voor mannen</h1>
        <p class="hero-subtitle">Permanente oplossing voor mannelijke haaruitval</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is een haartransplantatie?</h2>
        <p>
          Een haartransplantatie is een medische ingreep waarbij gezonde haarfollikels worden
          onttrokken aan een donorzone — doorgaans de achterzijde of zijkanten van het hoofd —
          en vervolgens worden geplaatst in kale of dunner wordende gebieden. De meest
          gebruikte technieken zijn FUE (Follicular Unit Extraction) en DHI (Direct Hair
          Implantation). Bij FUE worden individuele follikeleenheden één voor één verwijderd
          met een microchirurgisch instrument, waarna ze nauwkeurig worden geïmplanteerd in de
          ontvangende zones. Dit laat nauwelijks zichtbare littekens achter en biedt een
          zeer natuurlijk eindresultaat.
        </p>
        <p>
          De DHI-methode gaat een stap verder: haarfollikels worden direct geïmplanteerd via
          een speciale Choi-pen, zonder dat eerst incisies gemaakt hoeven te worden. Dit
          verkort de tijd dat follikels buiten het lichaam verblijven, wat de overlevingskans
          van het haar verhoogt. Bij HaarKliniek 45 bepalen onze specialisten in overleg met
          u welke techniek het meest geschikt is voor uw haarprofiel, haarlijnpatroon en de
          gewenste dichtheid. Beide technieken worden uitgevoerd onder plaatselijke verdoving
          en zijn vrijwel pijnloos.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Oorzaken van haaruitval bij mannen</h2>
        <p>
          Mannelijke haaruitval kent verschillende oorzaken. Het is belangrijk deze goed in
          kaart te brengen voordat een behandeling wordt gestart, zodat het resultaat
          optimaal en duurzaam is.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Genetische aanleg en erfelijkheid</strong> — De meest voorkomende oorzaak.
            Als haaruitval in uw familie voorkomt, is de kans groot dat u hier ook mee te
            maken krijgt.
          </li>
          <li>
            <strong>Androgenetische alopecia (mannelijk patroonkaalheid)</strong> — Dit patroon
            begint typisch met een terugtrekkende haarlijn aan de slapen en verdunning op de
            kruin, en kan leiden tot volledige kaalheid aan de bovenzijde van het hoofd.
          </li>
          <li>
            <strong>Leeftijd en hormonale veranderingen</strong> — Naarmate mannen ouder worden,
            neemt de gevoeligheid van haarfollikels voor dihydrotestosteron (DHT) toe, wat
            leidt tot verdunning en uitval.
          </li>
          <li>
            <strong>Stress en leefstijl</strong> — Chronische stress, slaaptekort, roken en
            een slecht voedingspatroon kunnen haaruitval versnellen of uitlokken.
          </li>
          <li>
            <strong>Medicijnen en ziektes</strong> — Bepaalde geneesmiddelen, chemotherapie
            en aandoeningen zoals schildklierstoornissen kunnen tijdelijke of permanente
            haaruitval veroorzaken.
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Voordelen van onze behandeling</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#9989;</div>
            <h3>Permanent resultaat</h3>
            <p>
              Getransplanteerde haarfollikels zijn resistent tegen DHT en blijven levenslang
              groeien. Eénmalige ingreep, blijvend effect.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Volledig natuurlijk</h3>
            <p>
              Wij plaatsen elk follikel met precisie in de juiste groeirichting. Het resultaat
              is volledig onzichtbaar — niemand ziet dat u een ingreep heeft gehad.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9889;</div>
            <h3>Snel herstel</h3>
            <p>
              De meeste patiënten hervatten hun normale dagelijkse activiteiten binnen
              enkele dagen. Na 10 tot 14 dagen zijn de meeste korstjes verdwenen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Geschikte kandidaten</h2>
        <p>
          Niet iedereen is direct een geschikte kandidaat voor een haartransplantatie. Tijdens
          een uitgebreid intakeconsult beoordelen onze specialisten uw haarprofiel en geven zij
          een eerlijk advies. Over het algemeen komt u in aanmerking als u stabiele haaruitval
          heeft (minimaal 6 tot 12 maanden geen progressie), over voldoende donorfollikels
          beschikt aan de achterzijde van het hoofd, in goede algemene gezondheid verkeert en
          bij voorkeur 25 jaar of ouder bent. Een jongere leeftijd is soms bespreekbaar, maar
          vereist extra zorgvuldige planning om toekomstige haaruitval op te vangen. Wij zijn
          altijd eerlijk over wat wel en niet haalbaar is voor uw specifieke situatie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">

          <div class="faq-item">
            <h3 class="faq-question">Hoelang duurt een haartransplantatie voor mannen?</h3>
            <p class="faq-answer">
              Afhankelijk van het aantal te transplanteren follikels duurt de ingreep gemiddeld
              tussen de 4 en 8 uur. Grote sessies waarbij meer dan 3.000 grafts worden
              geplaatst, kunnen twee dagen in beslag nemen. U bent de gehele tijd wakker en
              comfortabel dankzij plaatselijke verdoving. Wij zorgen voor tussentijdse pauzes
              en alle comfort tijdens uw behandeldag.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Wanneer zie ik het resultaat?</h3>
            <p class="faq-answer">
              Na de ingreep valt het getransplanteerde haar tijdelijk uit — dit is volledig
              normaal en onderdeel van het herstelproces. Na 3 tot 4 maanden begint nieuw haar
              zichtbaar te groeien. Het volledige, definitieve resultaat is zichtbaar na 12 tot
              18 maanden. Veel patiënten zien al na 6 maanden een opvallende verbetering.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Is de ingreep pijnlijk?</h3>
            <p class="faq-answer">
              De ingreep zelf is vrijwel pijnloos dankzij plaatselijke verdoving. De
              verdovingsinjecties kunnen even een licht branderig gevoel geven, maar zodra de
              verdoving werkt ervaart u geen pijn. Na de behandeling kan er enige gevoeligheid
              zijn in de behandelde gebieden, die we opvangen met milde pijnstillers. De meeste
              patiënten omschrijven het herstel als comfortabel en goed beheersbaar.
            </p>
          </div>

        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaartransplantatieMannenPageComponent {}
