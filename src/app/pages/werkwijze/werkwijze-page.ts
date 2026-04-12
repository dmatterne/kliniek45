import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-werkwijze-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrl: './werkwijze-page.scss',
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <span class="hero__badge">Stap voor stap</span>
          <h1 class="hero__title">Onze Werkwijze</h1>
          <p class="hero__subtitle">Van eerste contact tot volledig herstel</p>
          <div class="hero__actions">
            <a routerLink="/contact" class="btn btn-primary">Start uw traject</a>
            <a routerLink="/behandelingen/fue-saffier" class="btn btn-secondary">Onze technieken</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Ons 6-stappenproces</h2>
          <div class="section__divider"></div>
          <p class="section__lead">Een haartransplantatie bij HaarKliniek 45 verloopt altijd volgens een doordacht en beproefd stappenplan. Zo weet u altijd wat u kunt verwachten.</p>
        </div>
        <div class="timeline">
          <div class="timeline-step">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">1</span>
              <div class="timeline-step__line"></div>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">🗣️</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Vrijblijvend consult</h3>
                <p class="timeline-step__desc">Alles begint met een gratis en vrijblijvend kennismakingsgesprek. Tijdens dit consult analyseert onze specialist uw haarpatroon en donorzone, bespreekt uw verwachtingen en stelt eventuele vragen over uw medische achtergrond. U krijgt een eerlijk beeld van de mogelijkheden en de beperkingen. Er is geen enkele verplichting om na het gesprek door te gaan.</p>
                <div class="timeline-step__tags">
                  <span class="tag">Gratis</span>
                  <span class="tag">Vrijblijvend</span>
                  <span class="tag">Ca. 45 min</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">2</span>
              <div class="timeline-step__line"></div>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">✏️</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Haarlijnontwerp</h3>
                <p class="timeline-step__desc">Samen met de specialist ontwerpt u de ideale haarlijn. Dit is een creatief en persoonlijk proces: uw gezichtsvorm, leeftijd, haartype en wensen worden meegenomen in het ontwerp. Wij maken gebruik van digitale simulatie zodat u vooraf een realistisch beeld krijgt van het verwachte eindresultaat. Pas wanneer u volledig tevreden bent met het ontwerp, gaan we verder.</p>
                <div class="timeline-step__tags">
                  <span class="tag">Digitale simulatie</span>
                  <span class="tag">Op maat</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">3</span>
              <div class="timeline-step__line"></div>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">💊</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Voorbereiding</h3>
                <p class="timeline-step__desc">Op de dag van de behandeling wordt u ontvangen in onze kliniek. Na een korte briefing neemt u een comfortabele positie in. Lokale verdoving wordt aangebracht op zowel de donorzone als de ontvangende zone. De verdoving werkt snel en effectief: u voelt geen pijn gedurende de gehele procedure. Wij zorgen voor uw comfort — muziek, films of podcasts zijn beschikbaar.</p>
                <div class="timeline-step__tags">
                  <span class="tag">Lokale verdoving</span>
                  <span class="tag">Pijnvrij</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">4</span>
              <div class="timeline-step__line"></div>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">✂️</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Extractie (FUE / DHI)</h3>
                <p class="timeline-step__desc">Met een microronde punch worden individuele haarzakjes (grafts) één voor één zorgvuldig uit de donorzone onttrokken — doorgaans de achterkant en zijkanten van het hoofd, waar haargroei genetisch stabiel is. De geëxtraheerde grafts worden opgeslagen in een speciale voedingsoplossing om de levensvatbaarheid te waarborgen.</p>
                <div class="timeline-step__tags">
                  <span class="tag">FUE Saffier</span>
                  <span class="tag">DHI</span>
                  <span class="tag">Individuele grafts</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">5</span>
              <div class="timeline-step__line"></div>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">🔬</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Implantatie</h3>
                <p class="timeline-step__desc">Na de extractie worden de kanaaltjes aangemaakt (bij FUE Saffier) of worden de grafts direct geïmplanteerd (bij DHI). Elke graft wordt nauwkeurig geplaatst op de juiste hoek, richting en diepte — zodat de nieuwe haren straks op een volstrekt natuurlijke manier groeien. Dit is het meest cruciale onderdeel van de behandeling.</p>
                <div class="timeline-step__tags">
                  <span class="tag">Saffieren mesjes</span>
                  <span class="tag">Precisie-implantatie</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-step timeline-step--last">
            <div class="timeline-step__marker">
              <span class="timeline-step__number">6</span>
            </div>
            <div class="timeline-step__body">
              <div class="timeline-step__icon">🏠</div>
              <div class="timeline-step__content">
                <h3 class="timeline-step__title">Nazorg</h3>
                <p class="timeline-step__desc">Na de behandeling ontvangt u gedetailleerde schriftelijke aftercare-instructies mee naar huis. Een controlebezoek is ingepland voor de dag erna en opnieuw na 10 dagen. Onze specialisten zijn bereikbaar voor al uw vragen tijdens het herstelproces. Follow-up afspraken na 3, 6 en 12 maanden garanderen dat uw herstel optimaal verloopt.</p>
                <div class="timeline-step__tags">
                  <span class="tag">Schriftelijke instructies</span>
                  <span class="tag">Follow-up</span>
                  <span class="tag">12 maanden begeleiding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Wat te verwachten na de behandeling</h2>
          <div class="section__divider"></div>
          <p class="section__lead">Haargroei na een transplantatie verloopt in fasen. Kennis hiervan helpt u realistische verwachtingen te stellen.</p>
        </div>
        <div class="recovery-timeline">
          <div class="recovery-phase">
            <div class="recovery-phase__period">Week 1–2</div>
            <div class="recovery-phase__content">
              <h3 class="recovery-phase__title">Direct herstel</h3>
              <p class="recovery-phase__desc">Korstjes, lichte zwelling en roodheid zijn normaal en verwacht. De getransplanteerde haren zijn kwetsbaar in deze periode — volg de aftercare-instructies nauwgezet op. Vermijd fysieke inspanning en slaap met het hoofd licht omhoog.</p>
              <span class="recovery-phase__badge recovery-phase__badge--normal">Volledig normaal</span>
            </div>
          </div>
          <div class="recovery-phase">
            <div class="recovery-phase__period">Maand 1–3</div>
            <div class="recovery-phase__content">
              <h3 class="recovery-phase__title">Shock loss</h3>
              <p class="recovery-phase__desc">De getransplanteerde haren vallen tijdelijk uit — dit heet shock loss en is een normaal en verwacht onderdeel van het herstelproces. De haarzakjes zijn intact en gezond; alleen de haarschacht valt uit. Geen paniek: dit is de voorbereiding op de echte, permanente haargroei die volgt.</p>
              <span class="recovery-phase__badge recovery-phase__badge--warning">Normaal — geen zorgen!</span>
            </div>
          </div>
          <div class="recovery-phase">
            <div class="recovery-phase__period">Maand 4–8</div>
            <div class="recovery-phase__content">
              <h3 class="recovery-phase__title">Nieuwe haargroei</h3>
              <p class="recovery-phase__desc">Nieuwe haargroei begint zichtbaar te worden. Aanvankelijk fijn en licht van kleur, maar de haarschachten worden geleidelijk dikker en sterker. Dit is het moment waarop de eerste opvallende resultaten zichtbaar worden.</p>
              <span class="recovery-phase__badge recovery-phase__badge--good">Zichtbare vooruitgang</span>
            </div>
          </div>
          <div class="recovery-phase">
            <div class="recovery-phase__period">Maand 12–18</div>
            <div class="recovery-phase__content">
              <h3 class="recovery-phase__title">Eindresultaat</h3>
              <p class="recovery-phase__desc">Het volledige eindresultaat wordt zichtbaar. De getransplanteerde haren zijn volledig gerijpt, hebben hun definitieve dikte en kleur bereikt en groeien zoals uw eigen natuurlijke haren. Dit is het moment voor de definitieve evaluatie en de tevredenheidsfoto.</p>
              <span class="recovery-phase__badge recovery-phase__badge--success">Volledig resultaat</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Do's en Don'ts na de behandeling</h2>
          <div class="section__divider"></div>
          <p class="section__lead">De juiste nazorg is essentieel voor een optimaal resultaat. Volg deze richtlijnen zorgvuldig op.</p>
        </div>
        <div class="dos-donts-grid">
          <div class="dos-column">
            <div class="dos-column__header">
              <span class="dos-column__icon">✅</span>
              <h3>Do's</h3>
            </div>
            <ul class="dos-column__list">
              <li class="dos-column__item">
                <span class="dos-column__check">✓</span>
                <div>
                  <strong>Rust nemen</strong>
                  <p>Neem de eerste 3–5 dagen volledige rust. Uw lichaam gebruikt energie voor herstel.</p>
                </div>
              </li>
              <li class="dos-column__item">
                <span class="dos-column__check">✓</span>
                <div>
                  <strong>Zacht wassen na 3 dagen</strong>
                  <p>Vanaf dag 3 kunt u de hoofdhuid voorzichtig wassen met de meegeleverde shampoo en lotion, volgens de instructies.</p>
                </div>
              </li>
              <li class="dos-column__item">
                <span class="dos-column__check">✓</span>
                <div>
                  <strong>Beschermen tegen zon</strong>
                  <p>Draag de eerste maanden een hoed in de zon. Directe UV-blootstelling kan het herstel vertragen.</p>
                </div>
              </li>
              <li class="dos-column__item">
                <span class="dos-column__check">✓</span>
                <div>
                  <strong>Voorgeschreven medicijnen nemen</strong>
                  <p>Neem antibiotica, pijnstillers en eventuele andere voorgeschreven medicatie stipt in volgens schema.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="donts-column">
            <div class="donts-column__header">
              <span class="donts-column__icon">❌</span>
              <h3>Don'ts</h3>
            </div>
            <ul class="donts-column__list">
              <li class="donts-column__item">
                <span class="donts-column__cross">✗</span>
                <div>
                  <strong>Niet krabben of wrijven</strong>
                  <p>Krab of wrijf nooit aan de behandelde zones, ook niet als het jeuk veroorzaakt. Korstjes mogen op eigen tempo loslaten.</p>
                </div>
              </li>
              <li class="donts-column__item">
                <span class="donts-column__cross">✗</span>
                <div>
                  <strong>Geen sport eerste 2 weken</strong>
                  <p>Vermijd intensieve lichaamsbeweging, zwaar tillen en sport de eerste 14 dagen volledig. Zweten verhoogt infectierisico.</p>
                </div>
              </li>
              <li class="donts-column__item">
                <span class="donts-column__cross">✗</span>
                <div>
                  <strong>Geen alcohol eerste week</strong>
                  <p>Alcohol verdunt het bloed en interfereert met genezing. Vermijd alcoholconsumptie de eerste week na de behandeling.</p>
                </div>
              </li>
              <li class="donts-column__item">
                <span class="donts-column__cross">✗</span>
                <div>
                  <strong>Geen sauna of zwembad</strong>
                  <p>Vermijd sauna, zwembad, jacuzzi en stoomkamers gedurende minstens 4 weken na de behandeling.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class WerkwijzePageComponent {}

