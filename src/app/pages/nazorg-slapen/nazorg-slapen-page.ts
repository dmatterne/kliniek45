import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-nazorg-slapen-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./nazorg-slapen-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">›</span>
          <a routerLink="/nazorg">Nazorg</a>
          <span aria-hidden="true">›</span>
          <span>Slapen</span>
        </nav>
        <h1 class="hero-title">Slapen na Haartransplantatie</h1>
        <p class="hero-subtitle">
          Uw slaaphouding heeft een directe invloed op het herstel van de grafts. De juiste positie
          beschermt de getransplanteerde haarfollikels, vermindert zwelling en zorgt voor een
          optimaal genezingsverloop.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Stel uw vraag</a>
      </div>
    </section>

    <section class="why-section">
      <div class="container">
        <h2 class="section-title">Waarom is slaaphouding zo belangrijk?</h2>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">🩸</div>
            <h3>Beschermen van de grafts</h3>
            <p>
              De eerste dagen zijn de grafts nog niet volledig verankerd in de huid. Druk op het
              getransplanteerde gebied — door een kussen of een onhandige houding — kan een graft
              letterlijk dislokeren. Dit leidt tot graft-verlies en een minder dicht eindresultaat.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">💧</div>
            <h3>Zwelling verminderen</h3>
            <p>
              Na de ingreep treedt zwelling op rondom het voorhoofd en de behandelde zone. Een
              verhoogd hoofd tijdens het slapen verbetert de bloed- en lymfedrainage en beperkt de
              zwelling aanzienlijk. Hoe lager het hoofd hangt, hoe meer vocht zich ophoopt.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">😴</div>
            <h3>Zijligging en buikligging vermijden</h3>
            <p>
              Op uw zij of buik slapen brengt het hoofd in contact met het kussen. Dit creëert
              wrijving en druk op de korstjes en grafts, wat beschadiging kan veroorzaken — zelfs
              zonder dat u het merkt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="positions-section">
      <div class="container">
        <h2 class="section-title">Aanbevolen slaapposities</h2>
        <p class="section-subtitle">Drie opties — van ideaal tot aanvaardbaar</p>
        <div class="positions-grid">
          <div class="position-card position-best">
            <div class="position-badge">⭐ Beste keuze</div>
            <div class="position-icon">🛏️</div>
            <h3>Op de rug met nekkussen</h3>
            <p>
              Slapen op de rug met een nekkussen (reiskussen) is de ideale positie. Het nekkussen
              zorgt ervoor dat u niet wegdraait naar uw zij en houdt uw hoofd stabiel en licht
              verhoogd. Geen enkel deel van het getransplanteerde gebied komt in contact met het
              beddengoed.
            </p>
            <ul class="position-benefits">
              <li>Geen contact met het kussen op de grafts</li>
              <li>Hoofd stabiel — kunt niet ongemerkt omdraaien</li>
              <li>Nekkussen houdt hoofd comfortabel verhoogd</li>
              <li>Vermindert zwelling optimaal</li>
            </ul>
          </div>
          <div class="position-card position-ok">
            <div class="position-badge position-badge-ok">👍 Aanvaardbaar</div>
            <div class="position-icon">🪑</div>
            <h3>Halfzittend slapen</h3>
            <p>
              Slapen in een halfzittende positie — in een fauteuil of met heel veel kussens in de
              rug — houdt het hoofd maximaal verhoogd. Dit is iets minder comfortabel maar biedt
              uitstekende bescherming voor de grafts.
            </p>
            <ul class="position-benefits">
              <li>Maximale hoogte vermindert zwelling sterk</li>
              <li>Geen hoofdkussencontact</li>
              <li>Minder comfortabel voor langere periodes</li>
            </ul>
          </div>
          <div class="position-card position-avoid">
            <div class="position-badge position-badge-avoid">🚫 Vermijden</div>
            <div class="position-icon">⚠️</div>
            <h3>Posities om te vermijden</h3>
            <p>
              Bepaalde slaapposities zijn gevaarlijk in de herstelfase en moeten absoluut vermeden
              worden gedurende de eerste tien dagen.
            </p>
            <ul class="position-avoid-list">
              <li>Op de buik slapen — directe druk op grafts</li>
              <li>Op de zij slapen op het getransplanteerde gebied</li>
              <li>Plat op het hoofd liggen zonder verhoging</li>
              <li>Op een ruw of oud kussen slapen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="angle-section">
      <div class="container">
        <h2 class="section-title">Hoe hoog moet het hoofd liggen?</h2>
        <div class="angle-grid">
          <div class="angle-card">
            <div class="angle-value">45°</div>
            <div class="angle-label">Dag 1–3</div>
            <p>
              De eerste drie dagen is een hoek van minimaal 45 graden aanbevolen. Dit is het meest
              kritieke venster voor graft-bescherming en zwellingreductie. Gebruik extra kussens of
              slaap in een fauteuil.
            </p>
          </div>
          <div class="angle-card">
            <div class="angle-value">30°</div>
            <div class="angle-label">Dag 4–7</div>
            <p>
              Vanaf dag vier mag de hoek geleidelijk worden verminderd naar circa 30 graden. De
              grafts zijn nu beter verankerd, maar voorzichtigheid blijft geboden. Het nekkussen is
              nog steeds aan te raden.
            </p>
          </div>
          <div class="angle-card">
            <div class="angle-value">Normaal</div>
            <div class="angle-label">Dag 10+</div>
            <p>
              Vanaf dag tien tot veertien zijn de grafts volledig ingegroeid. U kunt geleidelijk
              terugkeren naar uw normale slaaphouding. Wees de eerste weken daarna nog steeds
              voorzichtig met ruw beddengoed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="duration-section">
      <div class="container">
        <div class="duration-card">
          <h2>Hoe lang moet u dit volhouden?</h2>
          <p>
            De eerste <strong>drie tot tien nachten</strong> zijn het meest kritiek. De eerste drie
            nachten zijn absoluut essentieel — verzuim dit niet. Hoe langer u de aanbevolen
            slaaphouding aanhoudt, hoe beter uw resultaat.
          </p>
          <div class="duration-timeline">
            <div class="dur-step">
              <div class="dur-dot dur-critical"></div>
              <div class="dur-label">Nacht 1–3</div>
              <div class="dur-desc">
                Absoluut kritiek — 45° positie, nekkussen, geen uitzonderingen
              </div>
            </div>
            <div class="dur-step">
              <div class="dur-dot dur-important"></div>
              <div class="dur-label">Nacht 4–7</div>
              <div class="dur-desc">Zeer belangrijk — nekkussen aanhouden, 30° positie</div>
            </div>
            <div class="dur-step">
              <div class="dur-dot dur-normal"></div>
              <div class="dur-label">Nacht 8–14</div>
              <div class="dur-desc">
                Aanbevolen — nekkussen indien mogelijk, rustig terugkeren naar normaal
              </div>
            </div>
            <div class="dur-step">
              <div class="dur-dot dur-free"></div>
              <div class="dur-label">Na dag 14</div>
              <div class="dur-desc">Normale slaaphouding toegestaan</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="practical-section">
      <div class="container">
        <h2 class="section-title">Praktische slaaptips</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <span class="tip-icon">🛏️</span>
            <h3>Gebruik een nekkussen</h3>
            <p>
              Een reiskussen (U-vormig) is uw beste hulpmiddel. Het voorkomt omdraaien en houdt het
              hoofd comfortabel verhoogd zonder contact op de grafts.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🏔️</span>
            <h3>Extra kussens in de rug</h3>
            <p>
              Stapel twee tot drie kussens onder uw hoofd en rug om de aanbevolen hoek te bereiken.
              Een kussen onder de knieën geeft extra comfort bij rugligging.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🧺</span>
            <h3>Handdoek op het kussen</h3>
            <p>
              Leg dagelijks een schone handdoek over uw kussen. Dit absorbeert wondvocht en houdt
              het slaapoppervlak hygiënisch. Vervang elke ochtend.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🌬️</span>
            <h3>Koele slaapkamer</h3>
            <p>
              Slaap in een goed geventileerde, koele kamer. Warmte bevordert zwelling en jeuk. Een
              temperatuur van 17–19°C is ideaal voor herstel.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">🧴</span>
            <h3>Beddengoed niet aanraken</h3>
            <p>
              Zorg dat het beddengoed het getransplanteerde gebied niet direct raakt. Dit is precies
              waarom het nekkussen zo waardevol is.
            </p>
          </div>
          <div class="tip-card">
            <span class="tip-icon">📵</span>
            <h3>Scherm vermijden voor het slapengaan</h3>
            <p>
              Blauw licht houdt u wakker. Leg uw gsm 30 minuten voor het slapen weg. Goede
              slaapkwaliteit bevordert de aanmaak van groeihormonen die het herstel ondersteunen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="swelling-section">
      <div class="container">
        <h2 class="section-title">Zwelling na de ingreep</h2>
        <div class="swelling-content">
          <div class="swelling-info">
            <p>
              Zwelling is een normaal bijverschijnsel in de eerste drie tot vijf dagen na de
              ingreep. Bij grotere transplantaties kan de zwelling zich uitbreiden naar het
              voorhoofd en zelfs rondom de ogen. Dit ziet er soms alarmerend uit maar is volledig
              verwacht en tijdelijk.
            </p>
            <p>
              De zwelling trekt gewoonlijk weg tussen dag drie en vijf. Een verhoogde slaaphouding
              is de meest effectieve manier om de zwelling te beperken.
            </p>
            <div class="swelling-tips">
              <div class="swelling-tip ok">
                <span>✓</span>
                <p>Verhoogd slapen vermindert zwelling effectief</p>
              </div>
              <div class="swelling-tip ok">
                <span>✓</span>
                <p>Koude doek naast (niet op) het gebied kan helpen</p>
              </div>
              <div class="swelling-tip nok">
                <span>✗</span>
                <p>Zout eten verhoogt vochtretentie en verergert zwelling</p>
              </div>
              <div class="swelling-tip nok">
                <span>✗</span>
                <p>Ijs direct op de grafts aanbrengen is verboden</p>
              </div>
            </div>
          </div>
          <div class="swelling-timeline-card">
            <h3>Verwacht verloop van de zwelling</h3>
            <div class="swell-day">
              <span class="swell-marker">Dag 1–2</span>
              <div class="swell-bar swell-low"></div>
              <span class="swell-note">Lichte zwelling rond behandeld gebied</span>
            </div>
            <div class="swell-day">
              <span class="swell-marker">Dag 3–4</span>
              <div class="swell-bar swell-high"></div>
              <span class="swell-note">Piek — eventueel rondom ogen</span>
            </div>
            <div class="swell-day">
              <span class="swell-marker">Dag 5–7</span>
              <div class="swell-bar swell-mid"></div>
              <span class="swell-note">Zwelling trekt weg</span>
            </div>
            <div class="swell-day">
              <span class="swell-marker">Dag 10</span>
              <div class="swell-bar swell-gone"></div>
              <span class="swell-note">Vrijwel verdwenen</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sleep-tips-section">
      <div class="container">
        <h2 class="section-title">Tips voor een betere nachtrust</h2>
        <p class="section-subtitle">
          De eerste nachten zijn ongewoon maar tijdelijk. Houd het einddoel voor ogen: prachtig,
          permanent haar. Dit ongemak is de investering waard.
        </p>
        <div class="mental-tips">
          <div class="mental-tip">
            <span class="mental-icon">🎯</span>
            <div>
              <strong>Focus op het resultaat</strong>
              <p>
                Dit is slechts tien nachten van ongemak voor een leven lang resultaat. Visualiseer
                het eindresultaat.
              </p>
            </div>
          </div>
          <div class="mental-tip">
            <span class="mental-icon">🍵</span>
            <div>
              <strong>Lichte maaltijd voor het slapengaan</strong>
              <p>
                Zware maaltijden voor het slapen verstoren de nachtrust. Eet licht en niet te laat.
              </p>
            </div>
          </div>
          <div class="mental-tip">
            <span class="mental-icon">📚</span>
            <div>
              <strong>Rustgevende routine</strong>
              <p>
                Een vast slaapschema helpt. Lees een boek, luister naar ontspannende muziek of doe
                een korte meditatie.
              </p>
            </div>
          </div>
          <div class="mental-tip">
            <span class="mental-icon">📞</span>
            <div>
              <strong>Bel ons bij twijfel</strong>
              <p>
                Maakt u zich zorgen of heeft u pijn die u hindert bij het slapen? Bel ons op +32 485
                593 302.
              </p>
            </div>
          </div>
        </div>
        <div class="nav-links">
          <a routerLink="/nazorg" class="nav-link">← Terug naar Nazorg</a>
          <a routerLink="/nazorg/herstel-na-haartransplantatie" class="nav-link"
            >Herstel na Haartransplantatie →</a
          >
        </div>
      </div>
    </section>

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
export class NazorgSlapenPageComponent {
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
