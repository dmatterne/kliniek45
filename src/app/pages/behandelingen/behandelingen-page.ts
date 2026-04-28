import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-behandelingen-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./behandelingen-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Behandelingen</p>
        <h1>Alle Haarbehandelingen</h1>
        <p class="hero-subtitle">
          Van chirurgische haartransplantaties tot non-invasieve haargroeibehandelingen —
          HaarKliniek 45 biedt oplossingen op maat voor elk type haaruitval in Grazen, België.
        </p>
        <div class="hero-actions">
          <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
          <a routerLink="/resultaten" class="btn btn-outline btn-light">Bekijk resultaten</a>
        </div>
      </div>
    </section>

    <!-- Waarom valt haar uit? -->
    <section class="content-section treatments-intro">
      <div class="container">
        <h2 class="section-title">Waarom valt haar uit?</h2>
        <p class="section-subtitle">
          Haaruitval is een veelvoorkomend fenomeen dat zowel mannen als vrouwen treft. Het
          begrijpen van de oorzaak is de eerste en belangrijkste stap naar een effectieve
          behandeling.
        </p>
        <div class="two-col-content">
          <div class="col">
            <h3>Oorzaken van haaruitval</h3>
            <ul class="causes-list">
              <li>
                <strong>Erfelijkheid (AGA):</strong>
                Androgenetische alopecia is de meest voorkomende oorzaak en treft tot 70&nbsp;% van
                de mannen en 40&nbsp;% van de vrouwen op enig moment in hun leven.
              </li>
              <li>
                <strong>Hormonale veranderingen:</strong>
                Zwangerschap, bevalling, menopauze of een schildklierprobleem kunnen tijdelijke of
                permanente haaruitval veroorzaken.
              </li>
              <li>
                <strong>Stress &amp; burnout:</strong>
                Telogen effluvium — plotselinge diffuse haaruitval als reactie op hevige fysieke of
                emotionele stress. Meestal reversibel na aanpak van de stressor.
              </li>
              <li>
                <strong>Voedingstekorten:</strong>
                Een tekort aan ijzer, zink, biotine of de B-vitaminen kan de haargroei ernstig
                verstoren en haaruitval verergeren.
              </li>
              <li>
                <strong>Medicatie:</strong>
                Bepaalde bloeddrukmedicijnen, antidepressiva, anticoagulantia of chemotherapie
                kunnen haaruitval als bijwerking hebben.
              </li>
              <li>
                <strong>Hoofdhuidaandoeningen:</strong>
                Alopecia areata, ringworm (tinea capitis), folliculitis of seborroïsch eczeem kunnen
                lokale kaalheid of diffuse uitval veroorzaken.
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>Haaruitval classificeren</h3>
            <div class="scale-block">
              <h4>Norwood-Hamilton schaal (mannen)</h4>
              <p>
                De Norwood-Hamilton schaal beschrijft 7 stadia van mannelijk haaruitval — van een
                licht terugtrekkende haarlijn (stadium I) tot uitgebreide kaalheid op het voorhoofd
                en de gehele kruin (stadium VII). Onze specialisten gebruiken deze schaal om het
                juiste aantal grafts en de optimale techniek te bepalen.
              </p>
            </div>
            <div class="scale-block">
              <h4>Ludwig schaal (vrouwen)</h4>
              <p>
                Vrouwelijk haaruitval verloopt anders dan bij mannen: het haar wordt dunner over de
                hele hoofdhuid, met behoud van de haarlijn. De Ludwig schaal beschrijft 3 graden van
                toenemende verdunning en helpt ons de beste behandelstrategie te kiezen.
              </p>
            </div>
            <p class="consult-nudge">
              Niet zeker in welk stadium u zich bevindt? Tijdens uw gratis consult analyseren onze
              specialisten uw haaruitval en stellen een gepersonaliseerd plan op.
            </p>
            <a routerLink="/consult" class="btn btn-outline">Boek een gratis consult</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Chirurgische behandelingen -->
    <section class="treatments-section content-section">
      <div class="container">
        <h2 class="section-title">Chirurgische haartransplantaties</h2>
        <p class="section-subtitle">
          Onze chirurgische haartransplantaties geven permanente, natuurlijke resultaten. Uw eigen
          haarfollikels worden verplaatst naar de kale of dunne zones — voor altijd.
        </p>
        <div class="treatments-grid">
          <div class="treatment-card">
            <div class="card-icon">👨</div>
            <h3>Haartransplantatie Mannen</h3>
            <p>
              Permanente oplossing voor mannelijk haaruitval. Van een terugtrekkende haarlijn tot
              uitgebreide kaalheid op de kruin — wij herstellen uw haar met precisie en een volledig
              natuurlijk resultaat, aangepast aan uw gezichtsvorm en leeftijd.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-mannen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">👩</div>
            <h3>Haartransplantatie Vrouwen</h3>
            <p>
              Speciaal afgestemd op vrouwelijke haaruitval en verdunning. Wij behandelen diffuse
              verdunning over de hoofdhuid, hersteloperaties na eerder mislukte ingrepen en
              specifieke zones die volume verliezen.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-vrouwen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">↩️</div>
            <h3>Haartransplantatie Inhammen</h3>
            <p>
              Gericht herstel van de haarlijn en inhammen. Een verfijnde behandeling waarbij de
              haarlijn opnieuw wordt getekend op basis van uw gezichtscontouren en proportie — voor
              een onmiskenbaar natuurlijk eindresultaat.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-inhammen" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">🔝</div>
            <h3>Haartransplantatie Kruin</h3>
            <p>
              Kaalheid op de kruin is een van de meest voorkomende patronen bij mannen. Met onze
              technieken vullen wij de kruin op met uw eigen follikels voor een duurzaam resultaat
              dat jarenlang standhoudt.
            </p>
            <a routerLink="/behandelingen/haartransplantatie-kruin" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">🌿</div>
            <h3>Long Hair Haartransplantatie</h3>
            <p>
              Haartransplantatie met lang haar zodat u het eindresultaat onmiddellijk kunt
              beoordelen op de behandeltafel. Het donorgebied wordt niet kaalgeschoren — ideaal voor
              patiënten met lang haar die hun look willen behouden.
            </p>
            <a routerLink="/behandelingen/long-hair-haartransplantatie" class="card-link"
              >Meer info →</a
            >
          </div>

          <div class="treatment-card">
            <div class="card-icon">🧔</div>
            <h3>Baardtransplantatie</h3>
            <p>
              Voor mannen die een vollere, dichtere of symmetrischere baard wensen. Kale plekken in
              de baard of snor worden gevuld met follikels van het achterhoofd voor een consistent,
              mannelijk resultaat.
            </p>
            <a routerLink="/behandelingen/baardtransplantatie" class="card-link">Meer info →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Technieken -->
    <section class="content-section techniques-section">
      <div class="container">
        <h2 class="section-title">Onze technieken</h2>
        <p class="section-subtitle">
          HaarKliniek 45 werkt uitsluitend met bewezen, state-of-the-art technieken voor optimale
          graftoverleving, minimale hersteltijd en het meest natuurlijke resultaat.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🎯</div>
            <h3>DHI — Direct Hair Implantation</h3>
            <p>
              De meest geavanceerde methode. Follikels worden rechtstreeks geplaatst met de Choi
              Implanter Pen — geen sneden, maximale overlevingskans van de grafts, hogere dichtheid
              per cm². Ideaal voor vrouwen, de kruinzone en patiënten die het donorgebied niet
              willen kaalscheren.
            </p>
            <a routerLink="/behandelingen/dhi" class="card-link">Meer over DHI →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">💎</div>
            <h3>FUE Saffier</h3>
            <p>
              Follicular Unit Extraction met saffieren incisiepunten. De uiterst fijne sneden
              resulteren in minimale littekenvorming, sneller herstel en een superieur esthetisch
              eindresultaat. Dé gouden standaard voor grotere gebieden zoals het voorhoofd en de
              haarlijn.
            </p>
            <a routerLink="/behandelingen/fue-saffier" class="card-link">Meer over FUE Saffier →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🎨</div>
            <h3>Micro-Haarpigmentatie (MHP)</h3>
            <p>
              Non-chirurgische oplossing voor het visueel verdichten van dun haar of het maskeren
              van kaalheid. Medisch pigment wordt aangebracht in de hoofdhuid — voor een
              stoppeleffect bij totale kaalheid of een volumetoevoeging bij dunner wordend haar.
            </p>
            <a routerLink="/behandelingen/micro-haarpigmentatie" class="card-link"
              >Meer over MHP →</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Haargroei stimulerende behandelingen -->
    <section class="content-section haargroei-stim-section">
      <div class="container">
        <h2 class="section-title">Haargroei stimulerende behandelingen</h2>
        <p class="section-subtitle">
          Niet iedereen is klaar voor of gebaat bij een chirurgische ingreep. Onze non-chirurgische
          behandelingen stimuleren haargroei, vertragen haaruitval en zijn ook uitstekend inzetbaar
          als nazorg na een transplantatie.
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🩸</div>
            <h3>PRP Behandeling</h3>
            <p>
              Platelet Rich Plasma — groeifactoren uit uw eigen bloed worden geconcentreerd via
              centrifuge en ingespoten in de hoofdhuid. Stimuleert haarfollikels, verbetert de
              doorbloeding en vertraagt actief haaruitval. Aanbevolen als bijkomende nazorg na
              haartransplantatie.
            </p>
            <a routerLink="/behandelingen/prp-behandeling" class="card-link">Meer over PRP →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Hairegen</h3>
            <p>
              Innovatief medisch apparaat dat microneedling combineert met elektrotherapie en
              mesotherapie. Stimuleert de doorbloeding van de hoofdhuid, activeert slapende
              follikels en versterkt het bestaande haar van binnenuit. Pijnloos en zonder
              revalidatieperiode.
            </p>
            <a routerLink="/behandelingen/hairegen" class="card-link">Meer over Hairegen →</a>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🧬</div>
            <h3>Regenera Activa</h3>
            <p>
              Regeneratieve behandeling op basis van uw eigen stamcellen. Kleine weefselstukjes
              worden verwerkt tot een suspensie en teruggeplaatst in de hoofdhuid — dit activeert de
              regeneratiecapaciteit van uw follikels en vertraagt actief progressief haaruitval.
            </p>
            <a routerLink="/behandelingen/regenera-activa" class="card-link"
              >Meer over Regenera →</a
            >
          </div>
        </div>

        <div class="dna-callout">
          <div class="dna-callout-icon">🧪</div>
          <div class="dna-callout-content">
            <h3>TrichoTest / DNA-test voor haaruitval</h3>
            <p>
              Niet zeker welke behandeling het beste bij u past? De TrichoTest analyseert uw
              genetisch profiel, het metabolisme van uw haarfollikels en uw gevoeligheid voor
              bepaalde werkzame stoffen. Het resultaat is een volledig gepersonaliseerd
              behandeladvies — wetenschappelijk onderbouwd.
            </p>
            <a routerLink="/behandelingen/dna-test-haaruitval" class="btn btn-outline"
              >Meer over de DNA-test</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="content-section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Welke behandeling past bij jou?</h2>
          <p>
            Ieder geval van haaruitval is uniek. Tijdens een gratis en volledig vrijblijvend consult
            analyseren onze Belgische specialisten uw situatie, het donorgebied en uw persoonlijke
            wensen — en adviseren de meest geschikte behandeling voor uw budget en verwachtingen.
          </p>
          <div class="cta-actions">
            <a routerLink="/consult" class="btn btn-primary">Gratis consult aanvragen</a>
            <a routerLink="/werkwijze" class="btn btn-outline">Onze werkwijze</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Waarom een behandeling bij HaarKliniek 45?</h2>
      </div>
      <div class="badges-track-wrap" aria-hidden="true">
        <div class="badges-track">
          @for (b of trustBadges; track b) {
            <span class="badge-pill">{{ b }}</span>
          }
          @for (b of trustBadges; track b) {
            <span class="badge-pill">{{ b }}</span>
          }
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class BehandelingenPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgische kliniek',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    '10+ jaar ervaring',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
