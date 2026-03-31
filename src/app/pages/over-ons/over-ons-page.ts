import { Component } from '@angular/core';
import { ReviewsComponent } from '../../components/reviews/reviews';

@Component({
  selector: 'app-over-ons-page',
  standalone: true,
  imports: [ReviewsComponent],
  styleUrl: './over-ons-page.scss',
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <span class="hero__badge">Uw Belgische haarkliniek</span>
          <h1 class="hero__title">Wij zijn HaarKliniek 45</h1>
          <p class="hero__subtitle">Een toegewijde Belgische haarkliniek waar uw vertrouwen en zelfzekerheid centraal staan</p>
          <div class="hero__actions">
            <a href="/contact" class="btn btn-primary">Maak kennis met ons</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section__header">
          <h2>Onze missie</h2>
          <div class="section__divider"></div>
        </div>
        <div class="text-block">
          <p>Bij HaarKliniek 45 geloven wij dat iedereen het recht heeft om zich goed in zijn of haar vel te voelen. Haaruitval kan een enorme impact hebben op het zelfvertrouwen en de levenskwaliteit — en precies daar willen wij een verschil maken. Onze missie is eenvoudig: elke patiënt een eerlijk, persoonlijk advies geven en, indien gewenst, een haarbehandeling op maat uitvoeren die voldoet aan de hoogste Belgische en Europese medische normen.</p>
          <p>Wij werken uitsluitend met de modernste technieken — waaronder FUE Saffier, DHI en PRP-therapie — en hechten evenveel waarde aan de menselijke kant van ons vak als aan het medisch-technische aspect. Dat betekent: geen verkooppraatjes, geen onrealistische beloften en geen verborgen kosten. Alleen eerlijke communicatie, gecertificeerde expertise en een persoonlijke begeleiding van het eerste gesprek tot lang na de behandeling.</p>
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <div class="section__header">
          <h2>Onze waarden</h2>
          <div class="section__divider"></div>
          <p class="section__lead">Drie kernwaarden vormen de basis van alles wat wij doen bij HaarKliniek 45.</p>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <span class="value-card__icon">🔍</span>
            <h3 class="value-card__title">Transparantie</h3>
            <ul class="value-card__list">
              <li>Eerlijke informatie over verwachte resultaten</li>
              <li>Geen verborgen kosten of onaangename verrassingen</li>
              <li>Duidelijke communicatie in uw eigen taal</li>
              <li>Openheid over risicos en beperkingen</li>
            </ul>
          </div>
          <div class="value-card">
            <span class="value-card__icon">🏆</span>
            <h3 class="value-card__title">Kwaliteit</h3>
            <ul class="value-card__list">
              <li>Gecertificeerde haarspecialisten en dermatologen</li>
              <li>Internationale behandelprotocollen gevolgd</li>
              <li>Premium saffieren instrumenten en materialen</li>
              <li>Permanente bijscholing en kennisupdate</li>
            </ul>
          </div>
          <div class="value-card">
            <span class="value-card__icon">💚</span>
            <h3 class="value-card__title">Persoonlijk</h3>
            <ul class="value-card__list">
              <li>Elke behandeling volledig op maat gemaakt</li>
              <li>Individuele begeleiding gedurende het gehele traject</li>
              <li>Uitgebreide nazorg en follow-up</li>
              <li>Altijd bereikbaar voor uw vragen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="team-section">
          <div class="team-section__content">
            <div class="section__header section__header--left">
              <h2>Ons team</h2>
              <div class="section__divider"></div>
            </div>
            <p>HaarKliniek 45 werkt met een hecht team van gecertificeerde haarspecialisten en dermatologen die allen gepassioneerd zijn door hun vakgebied. Elk teamlid beschikt over een gedegen opleiding in de haartransplantatiechirurgie en volgt regelmatig internationale opleidingen en congressen om op de hoogte te blijven van de nieuwste ontwikkelingen in de sector.</p>
            <p>Onze specialisten combineren technische precisie met een warme, mensgerichte aanpak. Zij nemen de tijd voor elk gesprek, luisteren naar uw wensen en stellen een behandelplan op dat echt bij u past — zonder u iets aan te praten wat niet nodig is. U bent bij ons in veilige handen, van het eerste contact tot de afsluitende controle.</p>
            <div class="team-section__cta">
              <a href="/contact" class="btn btn-primary">Maak een afspraak</a>
            </div>
          </div>
          <div class="team-section__photo">
            <div class="team-photo-placeholder">
              <span class="team-photo-placeholder__icon">👨‍⚕️</span>
              <span class="team-photo-placeholder__text">Ons Team</span>
              <span class="team-photo-placeholder__sub">Gecertificeerde haarspecialisten</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--green">
      <div class="container">
        <div class="section__header section__header--light">
          <h2>Waarom België?</h2>
          <div class="section__divider section__divider--light"></div>
          <p class="section__lead section__lead--light">Topkwaliteit haartransplantatie zonder de noodzaak om ver te reizen.</p>
        </div>
        <div class="reasons-grid">
          <div class="reason-card">
            <div class="reason-card__header">
              <span class="reason-card__icon">🇪🇺</span>
              <h3 class="reason-card__title">Europese medische normen</h3>
            </div>
            <p>Belgische klinieken zijn gebonden aan strikte Europese regelgeving en kwaliteitsnormen. U profiteert van dezelfde hoge medische standaarden als in de meest gerenommeerde Europese haartransplantatieklinieken, met volledige wettelijke bescherming als patiënt.</p>
          </div>
          <div class="reason-card">
            <div class="reason-card__header">
              <span class="reason-card__icon">📍</span>
              <h3 class="reason-card__title">Toegankelijke ligging</h3>
            </div>
            <p>Geen lange vluchten of dure hotelverblijven nodig. HaarKliniek 45 is vlot bereikbaar vanuit heel België en de buurlanden. U kunt na de behandeling comfortabel naar huis en de nazorg opvolgen vanuit uw vertrouwde omgeving.</p>
          </div>
          <div class="reason-card">
            <div class="reason-card__header">
              <span class="reason-card__icon">🗣️</span>
              <h3 class="reason-card__title">Nederlandstalige service</h3>
            </div>
            <p>Behandeld worden in uw eigen taal maakt een wereld van verschil. Bij HaarKliniek 45 verloopt alles van consultatie tot nazorgbrieven in het Nederlands. Geen misverstanden door taalbarrières, maar heldere en vertrouwde communicatie.</p>
          </div>
          <div class="reason-card">
            <div class="reason-card__header">
              <span class="reason-card__icon">💶</span>
              <h3 class="reason-card__title">Competitieve prijzen</h3>
            </div>
            <p>Topkwaliteit hoeft niet altijd een topprijs te betekenen. Vergeleken met klinieken in Londen of Parijs biedt HaarKliniek 45 uitstekende waarde voor uw investering. Transparante prijsstelling, zonder verborgen kosten of last-minute surprises.</p>
          </div>
        </div>
      </div>
    </section>

    <app-reviews />
  `,
})
export class OverOnsPageComponent {}
