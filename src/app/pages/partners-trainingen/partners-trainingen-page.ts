import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-partners-trainingen-page',
  standalone: true,
  imports: [RouterLink, ConsultationComponent],
  styleUrls: ['./partners-trainingen-page.scss'],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <p class="hero-eyebrow">Samenwerking</p>
        <h1>Partners &amp; Trainingen</h1>
        <p class="hero-subtitle">
          HaarKliniek 45 werkt samen met kappers, barbers en hairstylisten in heel België. Wij
          bieden gratis trainingen en partnerschappen voor professionals die het beste voor hun
          klanten willen.
        </p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Word partner</a>
          <a routerLink="/over-ons" class="btn btn-outline btn-light">Over ons</a>
        </div>
      </div>
    </section>

    <!-- Featured Partner: Hair Clinic Wolf -->
    <section class="content-section featured-partner-section">
      <div class="container">
        <div class="featured-partner-card">
          <div class="fp-logo">
            <img
              src="assets/images/partners/logo-hair-clinic-wolf.png"
              alt="Hair Clinic Wolf"
              class="fp-logo-img"
            />
          </div>
          <div class="fp-content">
            <p class="fp-eyebrow">Onze strategische partner</p>
            <h2>Hair Clinic Wolf</h2>
            <p>
              HaarKliniek 45 werkt nauw samen met <strong>Hair Clinic Wolf</strong> — een
              gerenommeerde haartransplantatiekliniek met jarenlange ervaring in Nederland en
              België. Deze samenwerking biedt onze patiënten toegang tot een bredere expertise en
              gedeelde kennis van de nieuwste technieken.
            </p>
            <p>
              Door samen te werken met Hair Clinic Wolf kunnen wij de beste zorg garanderen en
              profiteren van wederzijdse doorverwijzingen die uw behandeling optimaliseren.
            </p>
            <a
              href="https://www.hairclinicwolf.be"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
              >Bezoek Hair Clinic Wolf</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="content-section intro-section">
      <div class="container">
        <h2 class="section-title">Samenwerken voor betere haarzorg</h2>
        <p class="section-subtitle">
          Als kapper of barber heeft u dagelijks contact met klanten die worstelen met haaruitval.
          Wij helpen u om hen correct te informeren en de juiste stap te zetten — met respect voor
          uw vakmanschap en hun vertrouwen.
        </p>
        <div class="intro-highlights">
          <div class="highlight-item">
            <span class="highlight-icon">🎓</span>
            <h3>Gratis training</h3>
            <p>
              Onze specialist komt naar uw salon voor een &plusmn;&nbsp;1,5 uur durende gratis
              opleiding.
            </p>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">📜</span>
            <h3>Officieel certificaat</h3>
            <p>
              Na afloop ontvangt u een certificaat van HaarKliniek 45 dat u kunt tonen aan uw
              klanten.
            </p>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">🤝</span>
            <h3>Doorverwijzingen</h3>
            <p>
              Als partner ontvangt u doorverwijzingen van patiënten in uw regio die een kapper
              zoeken.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Training voor kappers -->
    <section class="content-section training-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Gratis training voor kappers &amp; barbers</h2>
            <p>
              Onze specialist komt naar uw salon voor een professionele opleiding van ongeveer 1,5
              uur. De training is volledig gratis en op maat van uw team. U kiest zelf het tijdstip
              dat het best past.
            </p>
            <p>
              Na de training bent u in staat om klanten die een haartransplantatie hebben ondergaan
              correct te behandelen en te begeleiden — een waardevolle specialisatie die u
              onderscheidt van de concurrentie.
            </p>
            <a routerLink="/contact" class="btn btn-primary">Gratis training aanvragen</a>
          </div>
          <div class="col">
            <div class="training-topics">
              <h3>Wat leert u tijdens de training?</h3>
              <div class="topic-list">
                <div class="topic-item">
                  <span class="topic-icon">🚿</span>
                  <div>
                    <h4>Veilig haar wassen na transplantatie</h4>
                    <p>
                      De juiste techniek en producten voor de eerste weken na de ingreep. Welke
                      bewegingen vermijden, welke watertemperatuur gebruiken en hoe lang de
                      hoofdhuid beschermen.
                    </p>
                  </div>
                </div>
                <div class="topic-item">
                  <span class="topic-icon">🔍</span>
                  <div>
                    <h4>Waarop letten bij post-transplantatiehoofdhuiden?</h4>
                    <p>
                      Hoe ziet een normale genezing eruit? Wanneer zijn korstjes, roodheid of
                      schilfering normaal en wanneer moet een klant contact opnemen met de kliniek?
                    </p>
                  </div>
                </div>
                <div class="topic-item">
                  <span class="topic-icon">✂️</span>
                  <div>
                    <h4>Knippen rondom getransplanteerde zones</h4>
                    <p>
                      Technische tips voor het knippen, scheren en stylen van haar in en rondom de
                      getransplanteerde zones, zonder de nieuwe follikels te beschadigen.
                    </p>
                  </div>
                </div>
                <div class="topic-item">
                  <span class="topic-icon">🧴</span>
                  <div>
                    <h4>Productaanbevelingen</h4>
                    <p>
                      Welke shampoos, conditioners en stylingproducten zijn veilig? Welke
                      bestanddelen zijn te vermijden en waarom? Wij geven u concrete
                      productaanbevelingen mee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnerschapsvoordelen -->
    <section class="content-section benefits-section">
      <div class="container">
        <h2 class="section-title">Voordelen van een partnerschap</h2>
        <p class="section-subtitle">
          Wordt u een officieel partner van HaarKliniek 45, dan profiteert u van een reeks
          exclusieve voordelen die uw zaak versterken.
        </p>
        <div class="partner-benefits-grid">
          <div class="partner-benefit">
            <div class="pb-icon">📞</div>
            <h3>Vaste contactpersoon</h3>
            <p>
              U heeft een rechtstreekse lijn met ons team. Voor vragen van klanten, specifieke cases
              of urgente situaties staat er altijd iemand voor u klaar.
            </p>
          </div>
          <div class="partner-benefit">
            <div class="pb-icon">🎓</div>
            <h3>Jaarlijkse gratis training</h3>
            <p>
              Elke jaar organiseert HaarKliniek 45 een bijscholingsmoment voor partners. U blijft
              up-to-date met de nieuwste technieken en inzichten in de sector.
            </p>
          </div>
          <div class="partner-benefit">
            <div class="pb-icon">🔄</div>
            <h3>Klantendoorverwijzingen</h3>
            <p>
              Patiënten die op zoek zijn naar een kapper of barber in uw regio worden actief naar u
              doorverwezen. Wederkerigheid staat centraal in onze samenwerking.
            </p>
          </div>
          <div class="partner-benefit">
            <div class="pb-icon">📈</div>
            <h3>Hogere klantretentie</h3>
            <p>
              Klanten die weten dat hun kapper gespecialiseerd is in post-transplantatie
              haarverzorging, blijven langer. Uw specialisatie wordt een concurrentievoordeel.
            </p>
          </div>
          <div class="partner-benefit">
            <div class="pb-icon">📜</div>
            <h3>Specialisatiecertificaat</h3>
            <p>
              U ontvangt een officieel certificaat van HaarKliniek 45, zichtbaar voor uw klanten.
              Dit versterkt het vertrouwen en onderstreept uw professionele aanpak.
            </p>
          </div>
          <div class="partner-benefit">
            <div class="pb-icon">🛍️</div>
            <h3>Haarproducten verkopen</h3>
            <p>
              Als partner kunt u speciaal ontwikkelde haarproducten van HaarKliniek 45 aanbieden aan
              uw klanten — een extra inkomstenstroom en dienstverlening in één.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wat wij verwachten -->
    <section class="content-section expectations-section">
      <div class="container">
        <div class="two-col-content">
          <div class="col">
            <h2 class="section-title">Wat wij verwachten van partners</h2>
            <p>
              Een partnerschap is een wederzijdse verbintenis. Wij vragen van onze partners een
              minimum aan engagement om de kwaliteit van de samenwerking te garanderen.
            </p>
            <div class="expectation-list">
              <div class="expectation-item">
                <span class="exp-icon">✅</span>
                <div>
                  <h4>Hygiënenormen</h4>
                  <p>
                    Uw salon voldoet aan de geldende Belgische hygiënenormen voor
                    haarverzorgingszaken.
                  </p>
                </div>
              </div>
              <div class="expectation-item">
                <span class="exp-icon">✅</span>
                <div>
                  <h4>Deelname aan jaarlijkse training</h4>
                  <p>
                    Minimaal één persoon per salon neemt deel aan het jaarlijkse bijscholingsmoment
                    van HaarKliniek 45.
                  </p>
                </div>
              </div>
              <div class="expectation-item">
                <span class="exp-icon">✅</span>
                <div>
                  <h4>Kleine promotionele aanwezigheid</h4>
                  <p>
                    U staat toe dat een klein promotioneel materiaaltje (sticker, folder of display)
                    zichtbaar is in uw salon.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="partner-cta-card">
              <h3>Klaar om partner te worden?</h3>
              <p>
                Neem vandaag nog contact op via het formulier of telefonisch. Onze
                partnercoördinator neemt binnen 24 uur contact met u op om de mogelijkheden te
                bespreken.
              </p>
              <p class="cta-note">
                De eerste training is volledig gratis en vrijblijvend. U beslist daarna of u partner
                wilt worden.
              </p>
              <a routerLink="/contact" class="btn btn-primary">Contacteer ons</a>
              <div class="partner-contact-info">
                <p>
                  Of stuur een e-mail naar:<br />
                  <strong>partners&#64;haarkliniek45.be</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner salons grid -->
    <section class="content-section partner-salons-section">
      <div class="container">
        <h2 class="section-title">Onze partnersalons</h2>
        <p class="section-subtitle">
          Deze kappers en barbers zijn gecertificeerd door HaarKliniek 45 en getraind in
          post-transplantatie haarverzorging.
        </p>
        <div class="partner-salons-grid">
          @for (salon of partnerSalons; track salon.name) {
            <a
              [href]="salon.url || '#'"
              [target]="salon.url ? '_blank' : '_self'"
              rel="noopener"
              class="salon-card"
              [attr.aria-label]="salon.name"
            >
              <img
                [src]="'assets/images/partners/' + salon.logo"
                [alt]="salon.name"
                class="salon-logo"
              />
              <span class="salon-name">{{ salon.name }}</span>
            </a>
          }
        </div>
        <div class="salons-cta">
          <a routerLink="/contact" class="btn btn-outline">Meld uw salon aan</a>
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
export class PartnersTrainingenPageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgische kliniek',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];

  partnerSalons = [
    { name: "Tony's Hair Factory", logo: 'logo-Tonys-Hair-Factory.png', url: '' },
    { name: 'The Barber Garden', logo: 'logo-The-Barber-Garden.png', url: '' },
    { name: "t' Knippenreitje", logo: 'logo-t-Knippenreitje.png', url: '' },
    { name: 'Simon Says', logo: 'logo-Simon-Says.png', url: '' },
    { name: 'Salon DeLuxe', logo: 'logo-Salon-DeLuxe.png', url: '' },
    {
      name: 'Peter van Dooren Intercoiffure',
      logo: 'logo-Peter-van-Dooren-Intercoiffure-01.png',
      url: '',
    },
    { name: 'Nero Barbershop', logo: 'logo-Nero-Barbershop.png', url: '' },
    { name: 'My BarberCo', logo: 'logo-My-BarberCo.png', url: '' },
    { name: 'Millstreet Barbershop', logo: 'logo-Millstreet-Barbershop.png', url: '' },
    { name: 'Licht Verknipt Barbershop', logo: 'logo-Licht-Verknipt-Barbershop.png', url: '' },
    { name: 'Kapsalon Sisco', logo: 'logo-Kapsalon-Sisco.png', url: '' },
    { name: 'House of Hair no.1', logo: 'logo-House-of-Hair-no.1.png', url: '' },
    { name: 'Hairplanets Barbershop', logo: 'logo-Hairplanets-Barbershop.png', url: '' },
    { name: 'Flawless Kapsalon', logo: 'logo-Flawless-Kapsalon.png', url: '' },
    { name: 'Dandies Barbershop', logo: 'logo-Dandies-Barbershop.png', url: '' },
    { name: 'Coiffeur Heunen', logo: 'logo-Coiffeur-Heunen.png', url: '' },
    { name: 'Belcrum Barbershop', logo: 'logo-Belcrum-Barbershop.png', url: '' },
  ];
}
