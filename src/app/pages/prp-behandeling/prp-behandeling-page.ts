import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-prp-behandeling-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./prp-behandeling-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>PRP Behandeling</h1>
        <p class="hero-subtitle">
          Platelet-Rich Plasma therapie – stimuleer haargroei met je eigen bloedplaatjes voor
          gezonder, dikker haar zonder ingrijpende ingreep bij HaarKliniek 45 in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Wat is PRP en hoe werkt het?</h2>
            <p>
              Als je last hebt van dunner wordend haar en je nog niet klaar bent voor een
              haartransplantatie, overweeg dan eens een PRP-behandeling. PRP staat voor
              Platelet-Rich Plasma, een medische behandeling waarbij bloed wordt afgenomen, waarna
              het wordt gecentrifugeerd om het plasma met een verhoogde concentratie bloedplaatjes
              te verkrijgen.
            </p>
            <p>
              Dit geconcentreerde plasma gebruiken we vervolgens om de groei en gezondheid van de
              haarfollikels te stimuleren bij haaruitval of dunner wordend haar. Het plasma brengen
              we met een dunne naald in je hoofdhuid in. Deze behandeling is nagenoeg pijnloos.
            </p>
            <p>
              Het verbetert de kwaliteit van je haarzakjes, stimuleert haargroei, verlengt de
              levensduur van je haar en verbetert de kwaliteit ervan.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-inhammen.png"
              alt="PRP behandeling voor en na resultaat"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>PRP-behandeling bij HaarKliniek 45 in Grazen</h2>
        <p>
          Voor de PRP-behandeling kun je terecht bij ons in onze kliniek in Grazen, Belgie. Wij
          bieden PRP-behandelingen aan in de volgende pakketten:
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#128137;</div>
            <h3>Pakket 1</h3>
            <p>
              PRP behandeling 1 maal. Ideaal als startbehandeling of als aanvulling op een andere
              haargroeitherapie.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9889;</div>
            <h3>Pakket 2</h3>
            <p>
              PRP behandeling 4 maal. Het aanbevolen pakket voor optimale en langdurige resultaten
              bij haaruitval.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128218;</div>
            <h3>Maatwerk pakket</h3>
            <p>
              Na het gratis consult stellen we een behandelplan op maat samen dat perfect aansluit
              op jouw situatie en doelen.
            </p>
          </div>
        </div>
        <p>Neem contact op met HaarKliniek 45 voor actuele tarieven en beschikbaarheid.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>PRP-behandeling tegen haaruitval</h2>
        <p>
          Zowel mannen als vrouwen kunnen last krijgen van haar dat dunner wordt of zelfs uitvalt.
          Dit kan verschillende oorzaken hebben, maar zorgt er vrijwel altijd voor dat het
          zelfvertrouwen afneemt. Een PRP behandeling kan helpen bij het tegengaan van haaruitval.
          Hoe eerder je hiermee begint, hoe groter de kans op resultaat.
        </p>
        <p>
          Wil je meer weten over onze PRP-behandelingen? Neem dan contact op met onze specialist bij
          HaarKliniek 45 in Grazen, Belgie.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Wanneer is een PRP-behandeling effectief?</h2>
        <p>
          Een PRP-behandeling is effectief bij haaruitval door verminderde doorbloeding of verzwakte
          haarzakjes, bijvoorbeeld als gevolg van roken, stress of genetische aanleg. De behandeling
          stimuleert de haargroei met lichaamseigen groeifactoren en kan haarverlies helpen
          vertragen of zelfs omkeren.
        </p>
        <p>
          PRP wordt vaak gekozen als zelfstandig alternatief voor een haartransplantatie in een
          vroeg stadium, maar kan ook ingezet worden rondom een haartransplantatie om het herstel te
          versnellen en de grafts extra voeding te geven.
        </p>
        <p>
          Naast PRP zijn er ook de behandelingen Hairegen en Regenera Activa die we aanbieden bij
          HaarKliniek 45. Tijdens het gratis consult bepalen we samen welke behandeling het best
          past bij jouw situatie.
        </p>
      </div>
    </section>

    <section class="content-section">
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
              Je ontvangt van ons richtlijnen om de PRP-behandeling zorgvuldig te laten verlopen.
              Dit lokale non-chirurgische traject vindt plaats bij ons in Grazen, Belgie.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Nazorg</h3>
            <p>
              Wij blijven je adviseren na de behandeling. Je ontvangt advies over producten,
              verzorging en eventuele vervolgbehandelingen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>De voordelen van PRP</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">&#127807;</div>
            <h3>Stimuleren van de haargroei</h3>
            <p>
              PRP stimuleert de haargroei met lichaamseigen groeifactoren voor zichtbaar betere
              resultaten.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128137;</div>
            <h3>Gezonde voeding voor haarzakjes</h3>
            <p>Het plasma voedt de haarzakjes direct, waardoor ze sterker en gezonder worden.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128737;</div>
            <h3>Preventie haaruitval</h3>
            <p>Werkt preventief tegen verdere haaruitval door de haarfollikels te versterken.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9989;</div>
            <h3>Geen herstelperiode</h3>
            <p>
              Na de behandeling kun je direct terug naar je dagelijkse activiteiten – geen
              herstelperiode nodig.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#128274;</div>
            <h3>Veilig en lichaamseigen</h3>
            <p>
              We gebruiken alleen je eigen bloed, waardoor de kans op infecties en allergische
              reacties minimaal is.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">&#9200;</div>
            <h3>Snelle behandeling</h3>
            <p>
              Een PRP-sessie is snel en efficint, ideaal om te combineren met andere behandelingen
              bij HaarKliniek 45.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Hoeveel behandelingen heb ik nodig?</h2>
            <p>
              We raden aan om de eerste drie maanden elke maand een PRP-behandeling te ondergaan. Na
              zes maanden evalueren we samen met je behandelend arts je situatie en bepalen we of
              verdere behandelingen nodig of wenselijk zijn.
            </p>
            <p>
              De frequentie en het aantal behandelingen is afhankelijk van de ernst van je
              haaruitval en de respons op de behandeling. Tijdens het gratis consult stellen we een
              persoonlijk behandelplan op.
            </p>
          </div>
          <div>
            <h2>Veiligheid en gemak</h2>
            <p>
              PRP is snel en veilig omdat we alleen je eigen bloed gebruiken, waardoor de kans op
              infecties erg laag is. De behandeling is nagenoeg pijnloos en er is geen
              herstelperiode nodig.
            </p>
            <p>
              Omdat we uitsluitend lichaamseigen materiaal gebruiken, zijn allergische reacties
              praktisch uitgesloten. Dit maakt PRP een van de veiligste behandelingen beschikbaar
              voor haaruitval.
            </p>
          </div>
        </div>
        <div class="three-col-images" style="margin-top: 2rem;">
          <div class="image-block">
            <img
              src="assets/images/voor-na-inhammen.png"
              alt="PRP behandeling voor en na inhammen"
            />
          </div>
          <div class="image-block">
            <img src="assets/images/voor-na-mannen.png" alt="PRP behandeling voor en na mannen" />
          </div>
          <div class="image-block">
            <img src="assets/images/voor-na-vrouwen.png" alt="PRP behandeling voor en na vrouwen" />
          </div>
        </div>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heb je vragen over de PRP-behandeling, het aantal sessies, de kosten of wanneer PRP
          effectief is? Bekijk onze veelgestelde vragen voor uitgebreide antwoorden over PRP bij
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
export class PrpBehandelingPageComponent {
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
