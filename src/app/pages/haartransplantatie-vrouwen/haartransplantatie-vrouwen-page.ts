import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-haartransplantatie-vrouwen-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./haartransplantatie-vrouwen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Haartransplantatie voor vrouwen</h1>
        <p class="hero-subtitle">Herstel uw haarlijn met de nieuwste technieken</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Wat is een haartransplantatie voor vrouwen?</h2>
        <p>
          Haaruitval bij vrouwen verloopt fundamenteel anders dan bij mannen. Terwijl mannen
          doorgaans een duidelijk patroon van kaalheid vertonen — terugtrekkende haarlijn of
          kale plek op de kruin — ervaren vrouwen vaker diffuse haaruitval: een geleidelijke
          algehele verdunning over het gehele hoofd of specifieke zones. Dit maakt de diagnose
          en behandelplanning complexer en vereist een gespecialiseerde aanpak die rekening
          houdt met het vrouwelijke haarprofiel.
        </p>
        <p>
          Bij gelokaliseerde haaruitval — zoals een hoge haarlijn, een brede scheiding of
          kale plekken door littekens of alopecia areata — zijn FUE- en DHI-technieken
          uitstekend toepasbaar. Bij diffuse haaruitval is een uitgebreide analyse essentieel
          om te bepalen of de donorzone voldoende stabiel haar bevat. Onze specialisten voeren
          een grondige trichoscopische analyse uit en bespreken eerlijk welke behandeling in
          uw specifieke geval het best aansluit bij uw verwachtingen en haarprofiel.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Oorzaken van haaruitval bij vrouwen</h2>
        <p>
          Haaruitval bij vrouwen kent uiteenlopende oorzaken. Een correcte diagnose is
          cruciaal om de juiste behandeling te kiezen en blijvend resultaat te bereiken.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Hormonale veranderingen</strong> — Zwangerschap, bevalling, menopauze en
            hormoonschommelingen door anticonceptie kunnen tijdelijke of blijvende haaruitval
            veroorzaken. Postpartum haaruitval is veelvoorkomend maar herstelt vaak vanzelf.
          </li>
          <li>
            <strong>Erfelijkheid en genetica</strong> — Vrouwelijke androgenetische alopecia
            (het vrouwelijk patroon) is erfelijk bepaald en uit zich als diffuse verdunning,
            met name rondom de kruin en scheiding.
          </li>
          <li>
            <strong>IJzertekort en voedingstekorten</strong> — Een tekort aan ijzer, zink,
            vitamine D of biotine is een van de meest voorkomende behandelbare oorzaken van
            haaruitval bij vrouwen.
          </li>
          <li>
            <strong>Stress en burn-out</strong> — Chronische psychologische stress kan leiden
            tot telogeen effluvium, waarbij een groot deel van het haar tegelijk in de
            rustfase treedt en uitvalt.
          </li>
          <li>
            <strong>Schildklierproblemen</strong> — Zowel een trage (hypothyreoïdie) als
            overactieve schildklier (hyperthyreoïdie) kan diffuse haaruitval veroorzaken.
          </li>
          <li>
            <strong>Alopecia areata</strong> — Een auto-immuunaandoening waarbij het
            immuunsysteem haarfollikels aanvalt, resulterend in ronde kale plekken. Kan
            in bepaalde gevallen chirurgisch worden behandeld.
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
              Getransplanteerde haarfollikels zijn resistent en blijven levenslang groeien.
              Eénmalige ingreep voor een blijvend, zelfverzekerd resultaat.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Volledig natuurlijk</h3>
            <p>
              Onze specialisten plaatsen elk follikel met oog voor de vrouwelijke haarlijn
              en groeirichting. Het eindresultaat is volledig onzichtbaar voor de buitenwereld.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9889;</div>
            <h3>Snel herstel</h3>
            <p>
              De meeste patiënten hervatten hun dagelijkse activiteiten binnen enkele dagen.
              Na twee weken zijn de meeste zichtbare tekenen van de ingreep verdwenen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Geschikte kandidaten voor vrouwen</h2>
        <p>
          Bij vrouwen is de beoordeling van geschiktheid nauwkeuriger dan bij mannen, omdat
          het patroon van haaruitval een cruciale rol speelt. Vrouwen die het meest baat hebben
          bij een haartransplantatie zijn diegenen met een duidelijk gelokaliseerd verliespatroon
          — zoals een hoge haarlijn, brede scheiding of verlies door littekens — en een stabiele,
          voldoende dichte donorzone aan de achterzijde van het hoofd. Bij diffuse haaruitval is
          het risico dat ook de donorfollikels kwetsbaar zijn, waardoor transplantatie minder
          voorspelbaar is. Onze artsen voeren altijd een gedetailleerde trichoscopische analyse
          uit. Tevens wordt gekeken naar uw algehele gezondheid, mogelijke onderliggende oorzaken
          en de stabiliteit van uw haaruitval over de afgelopen 12 maanden.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Veelgestelde vragen</h2>
        <div class="faq-list">

          <div class="faq-item">
            <h3 class="faq-question">Verschilt een haartransplantatie voor vrouwen van die voor mannen?</h3>
            <p class="faq-answer">
              Ja, er zijn belangrijke verschillen. Bij vrouwen is haaruitval vaker diffuus
              verspreid, wat de selectie van een geschikte donorzone complexer maakt. Bovendien
              hoeven vrouwen bij FUE doorgaans hun haar niet volledig te kaalscheren — in de
              meeste gevallen worden alleen kleine plukjes haar bijgeknipt op de donorplekken,
              zodat het haar de behandeling grotendeels camoufleert. De herstelperiode en het
              verloop van de haargroei zijn vergelijkbaar met die bij mannen.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Moet ik mijn hoofd kaalscheren?</h3>
            <p class="faq-answer">
              In de meeste gevallen niet. Bij vrouwen passen wij de zogenaamde
              geen-kaalscheer FUE-techniek toe, waarbij alleen kleine, gerichte plukjes
              haar worden bijgeknipt op de donorlocaties. Uw bestaande haar camoufleert
              deze plekken direct na de ingreep. Dit is een van de redenen waarom vrouwen
              de behandeling als minder ingrijpend ervaren dan mannen.
            </p>
          </div>

          <div class="faq-item">
            <h3 class="faq-question">Welke techniek is het best voor vrouwen?</h3>
            <p class="faq-answer">
              Dit hangt volledig af van uw specifieke situatie. Bij een gelokaliseerde
              haarlijnverlaging of het invullen van dunne plekken is de DHI-techniek vaak
              de beste keuze vanwege de hoge precisie en de mogelijkheid om bestaand haar
              in de ontvangende zone ongemoeid te laten. De Saffier FUE-techniek biedt
              eveneens uitstekende resultaten bij grotere behandelgebieden. Tijdens uw
              persoonlijk consult stellen wij een behandelplan op dat volledig is
              afgestemd op uw unieke haarprofiel en wensen.
            </p>
          </div>

        </div>
      </div>
    </section>

    <app-consultation />
  `
})
export class HaartransplantatieVrouwenPageComponent {}
