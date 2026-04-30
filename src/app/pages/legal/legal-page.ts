import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type LegalPageKey = 'privacy' | 'cookies' | 'voorwaarden';

type LegalSection = {
  title: string;
  body: string;
};

const legalPages: Record<
  LegalPageKey,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: LegalSection[];
  }
> = {
  privacy: {
    eyebrow: 'Privacy',
    title: 'Privacybeleid',
    intro:
      'Dit privacybeleid legt uit hoe HaarKliniek 45 omgaat met persoonsgegevens die u met ons deelt bij contact, intake, advies en opvolging.',
    sections: [
      {
        title: 'Welke gegevens verwerken we?',
        body: 'Wij verzamelen alleen gegevens die u vrijwillig via e-mail of WhatsApp verstrekt. Wij gebruiken geen contactformulieren en verzamelen geen gegevens automatisch via de website. We verwerken contactgegevens, afspraakgegevens en informatie die u vrijwillig deelt om uw vraag of intake goed te kunnen opvolgen. Medische of gevoelige informatie wordt alleen gevraagd wanneer die relevant is voor advies, voorbereiding of nazorg.',
      },
      {
        title: 'Waarom verwerken we gegevens?',
        body: 'We gebruiken gegevens om uw vraag te beantwoorden, een consult te plannen, u te begeleiden tijdens een traject en waar nodig de samenwerking met Hair Clinic Wolf correct af te stemmen. Rechtsgrond: Wij verwerken uw persoonsgegevens op basis van uw toestemming (door contact op te nemen geeft u aan dat wij uw vraag mogen beantwoorden) of op basis van gerechtvaardigd belang (opvolging van een consult of intakegesprek).',
      },
      {
        title: 'Delen met partners',
        body: 'Wanneer een chirurgisch haartransplantatietraject relevant is, kunnen noodzakelijke gegevens met Hair Clinic Wolf worden gedeeld. Dit gebeurt alleen voor het traject waarvoor u informatie of begeleiding vraagt.',
      },
      {
        title: 'Bewaartermijn en rechten',
        body: 'Wij stellen een concrete bewaartermijn vast (bij voorkeur 2 jaar na laatste contact). We bewaren gegevens niet langer dan nodig voor contact, opvolging, administratie en wettelijke verplichtingen. U kunt vragen om inzage, correctie of verwijdering via info@haarkliniek45.be. Heeft u vragen of wilt u uw gegevens laten verwijderen? Stuur een e-mail naar info@haarkliniek45.be.',
      },
    ],
  },
  cookies: {
    eyebrow: 'Cookies',
    title: 'Cookiebeleid',
    intro:
      'Deze pagina beschrijft hoe HaarKliniek 45 cookies en vergelijkbare technieken kan gebruiken op de website.',
    sections: [
      {
        title: 'Functionele cookies',
        body: 'Deze website plaatst zelf geen cookies. Uw browser kan cookies ontvangen als gevolg van externe links (WhatsApp, Facebook, Instagram). Wij hebben geen controle over cookies van derden.',
      },
      {
        title: 'Analyse en verbetering',
        body: 'Deze website maakt momenteel geen gebruik van tracking- of analysetools. Functionele cookies kunnen worden geplaatst door externe diensten waarvan links aanwezig zijn op deze website (WhatsApp, Google Maps, sociale media)',
      },
      {
        title: 'Externe diensten',
        body: 'Links naar WhatsApp, Google Maps, sociale media of Hair Clinic Wolf kunnen buiten onze website vallen. Die partijen kunnen eigen cookies of privacyvoorwaarden gebruiken.',
      },
      {
        title: 'Beheer',
        body: 'U kunt cookies beheren of verwijderen via uw browserinstellingen. Een toekomstige cookie-banner moet aansluiten op de daadwerkelijk gebruikte tracking- en analysetools.',
      },
    ],
  },
  voorwaarden: {
    eyebrow: 'Voorwaarden',
    title: 'Algemene voorwaarden',
    intro:
      'Deze voorwaarden verduidelijken de rol van HaarKliniek 45 als advies-, intake- en opvolgpunt. Laat deze tekst juridisch nakijken voor definitieve publicatie.',
    sections: [
      {
        title: 'Rol van HaarKliniek 45',
        body: 'HaarKliniek 45 biedt intake, advies, lokale begeleiding, non-chirurgische behandelingen en nazorg. Chirurgische haartransplantaties worden niet door HaarKliniek 45 uitgevoerd.',
      },
      {
        title: 'Samenwerking met Hair Clinic Wolf',
        body: 'Voor chirurgische haartransplantaties werken we samen met Hair Clinic Wolf. De medische beoordeling, planning en uitvoering van een chirurgische ingreep gebeuren door de uitvoerende partner.',
      },
      {
        title: 'Geen resultaatgarantie',
        body: 'Informatie op de website is algemeen en vervangt geen persoonlijk of medisch advies. Resultaten verschillen per persoon en zijn afhankelijk van onder meer diagnose, donorgebied, nazorg en individuele reactie.',
      },
      {
        title: 'Afspraken en informatie',
        body: 'Een gratis consult is vrijblijvend. Offertes, behandeladviezen en vervolgafspraken worden pas concreet na persoonlijke beoordeling en bevestiging van de betrokken partij.',
      },
    ],
  },
};

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./legal-page.scss'],
  template: `
    <section class="page-hero legal-hero">
      <div class="container">
        <p class="page-hero-badge">{{ page.eyebrow }}</p>
        <h1>{{ page.title }}</h1>
        <p class="page-subtitle">{{ page.intro }}</p>
      </div>
    </section>

    <section class="content-section legal-content">
      <div class="container">
        <div class="legal-layout">
          <div class="legal-main">
            @for (section of page.sections; track section.title) {
              <article class="legal-section">
                <h2>{{ section.title }}</h2>
                <p>{{ section.body }}</p>
              </article>
            }
          </div>

          <aside class="legal-aside">
            <h2>Contact</h2>
            <p>Vragen over privacy, cookies of voorwaarden? Neem contact op met HaarKliniek 45.</p>
            <a routerLink="/contact" class="btn btn-primary">Contact opnemen</a>
          </aside>
        </div>
      </div>
    </section>
  `,
})
export class LegalPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly page = legalPages[(this.route.snapshot.data['page'] as LegalPageKey) ?? 'privacy'];
}
