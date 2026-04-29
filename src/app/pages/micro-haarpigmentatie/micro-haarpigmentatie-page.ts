import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-micro-haarpigmentatie-page',
  standalone: true,
  imports: [NgFor, RouterLink, ConsultationComponent],
  styleUrls: ['./micro-haarpigmentatie-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Micro Haarpigmentatie</h1>
        <p class="hero-subtitle">
          Een niet-chirurgische oplossing voor haarverlies. Bij HaarKliniek 45 in Grazen creeren we
          met micro haarpigmentatie een natuurlijke haar-illusie.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <h2>Een innovatieve oplossing voor haarverlies</h2>
            <p>
              Bij HaarKliniek 45 begrijpen we hoe belangrijk uw haar is voor uw zelfvertrouwen en
              uitstraling. Naast haartransplantaties bieden we ook een andere innovatieve
              behandeling aan: micro haarpigmentatie (MHP). Met deze behandeling creeren we met
              behulp van gespecialiseerde pigmenten een haar-illusie door kleine haarfollikels na te
              bootsen op de hoofdhuid.
            </p>
            <p>
              Micro haarpigmentatie is een ideale oplossing voor wie niet in aanmerking komt voor
              een haartransplantatie, of voor wie een snelle, niet-chirurgische behandeling
              verkiest. Het resultaat is direct zichtbaar en geeft een vol, fris uiterlijk.
            </p>
          </div>
          <div class="image-block">
            <img
              src="assets/images/voor-na-mannen.png"
              alt="Micro haarpigmentatie voor en na - HaarKliniek 45"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Wat is micro haarpigmentatie?</h2>
        <p>
          Micro haarpigmentatie, ook wel bekend als scalp micropigmentation, is een
          niet-chirurgische cosmetische behandeling die haarfollikels nabootst. Door natuurlijke
          pigmenten op de hoofdhuid aan te brengen, creeren we de illusie van een buzz-cut of korte
          haarstoppels.
        </p>
        <p>
          Met een flinterdunne naald en inkt in natuurlijke kleuren worden de haarzakjes nauwkeurig
          nagebootst op de hoofdhuid. Deze techniek is perfect om dunner wordend haar, kale plekken
          of littekens te camoufleren. Het resultaat ziet er volkomen natuurlijk uit en sluit
          naadloos aan bij uw huid- en haarkleur.
        </p>
        <p>
          Deze behandeling vraagt om precisie, hygiëne en vakmanschap. Daarom werken we bij
          HaarKliniek 45 uitsluitend volgens strenge hygienerichtlijnen met gecertificeerde en
          gediplomeerde specialisten.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Micro haarpigmentatie voor mannen</h2>
        <p>
          Voor mannen kan haarverlies een deuk in het zelfvertrouwen betekenen. MHP biedt een
          natuurlijke en langdurige oplossing. Of u nu last heeft van mannelijke kaalheid, dunner
          wordend haar of littekens - onze behandeling kan u helpen. We creeren een look die past
          bij uw haartype, haar- en huidskleur, waardoor u er weer fris en jong uitziet.
        </p>
        <p>De micro haarpigmentatie voor mannen kan worden gebruikt voor:</p>
        <ul class="styled-list">
          <li>
            <strong>Mannelijke kaalheid (androgene alopecia):</strong> Geef een kale of dunne
            hoofdhuid de uitstraling van kortgeschoren haar
          </li>
          <li>
            <strong>Dunner wordend haar:</strong> Laat uw bestaande haardos voller lijken door
            pigmentatie tussen de haren aan te brengen
          </li>
          <li>
            <strong>Littekens van haartransplantatie:</strong> Camoufleer littekens in het
            donorgebied van een eerdere haartransplantatie
          </li>
          <li>
            <strong>Alopecia areata:</strong> Verberg kale plekken veroorzaakt door alopecia areata
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Micro haarpigmentatie voor vrouwen</h2>
        <p>
          Haarverlies is niet alleen een probleem voor mannen - veel vrouwen hebben er ook mee te
          maken. Voor vrouwen kan het verlies van volume en haardichtheid bijzonder vervelend zijn
          en een grote emotionele impact hebben. Micro haarpigmentatie biedt dan een goede oplossing
          om dunner wordend haar te verbergen en uw natuurlijke schoonheid te herstellen.
        </p>
        <p>
          Onze specialisten bij HaarKliniek 45 zorgen ervoor dat de pigmentatie perfect aansluit bij
          uw natuurlijke haarkleur en -structuur, zodat het resultaat subtiel en volkomen natuurlijk
          is. Voor vrouwen wordt MHP vaak ingezet om de haardichtheid optisch te vergroten zonder
          het bestaande haar te beschadigen.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoe verloopt het traject bij HaarKliniek 45?</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h3>De consultatie</h3>
            <p>
              Tijdens het gratis consultatiegesprek bespreken we al uw wensen en heeft u alle
              gelegenheid om vragen te stellen. De consultatie vindt plaats in onze kliniek in
              Grazen, Belgie, of telefonisch.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h3>Start behandeling</h3>
            <p>
              De behandeling duurt 4-5 uur per sessie. Om het beste resultaat te bereiken, zijn
              doorgaans 3 tot 4 sessies nodig. Deze worden gepland binnen drie weken na de
              behandeling.
            </p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h3>Nazorg</h3>
            <p>
              De hoofdhuid mag de eerste vijf dagen niet nat worden. Vermijd de eerste twee weken
              chloor, sauna en zout water. Zonlicht en zonnebank worden vier weken afgeraden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>De mogelijkheden met micro haarpigmentatie</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">💆</div>
            <h3>Haardichtheid vergroten</h3>
            <p>
              Laat uw bestaande haardos voller lijken door pigmentatie subtiel tussen de bestaande
              haren aan te brengen.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🔍</div>
            <h3>Littekens camoufleren</h3>
            <p>
              Verberg littekens van verwondingen of van een eerdere haartransplantatie door
              pigmentatie toe te passen op het getroffen gebied.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✂️</div>
            <h3>Kaalgeschoren look</h3>
            <p>
              Creeer de uitstraling van een natuurlijk kortgeschoren kapsel, zelfs bij volledige
              kaalheid of gevorderd haarverlies.
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⭕</div>
            <h3>Alopecia areata</h3>
            <p>
              Camoufleer kale plekken veroorzaakt door alopecia areata voor een egale, natuurlijk
              ogende hoofdhuid.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>Hoeveel behandelingen heeft u nodig?</h2>
        <p>
          Het aantal behandelingen dat u nodig heeft, is afhankelijk van uw specifieke situatie en
          gewenste resultaten. Meestal zijn drie tot vier sessies nodig om het beste resultaat te
          bereiken. Tijdens uw eerste consult bespreken we uw wensen en beoordelen we de conditie
          van uw hoofdhuid en haar.
        </p>
        <p>
          Elke sessie duurt meestal een paar uur, waarbij we zorgvuldig de pigmenten aanbrengen om
          een natuurlijke look te creeren. Tussen de sessies door laten we voldoende tijd om de huid
          te laten genezen en het pigment goed te laten intrekken.
        </p>
        <p>
          Voor een optimaal en langdurig resultaat raden we aan om ongeveer eens per 12 tot 18
          maanden een kleine nabehandeling te ondergaan. Micro haarpigmentatie is semi-permanent en
          kan 4 tot 6 jaar meegaan, afhankelijk van uw huidtype en de kwaliteit van de nazorg.
        </p>
      </div>
    </section>

    <section class="content-section alt-bg">
      <div class="container">
        <h2>Tarieven micro haarpigmentatie</h2>
        <p>
          Iedere schedel en vorm van kaalheid is anders, daarom is micro haarpigmentatie altijd
          maatwerk. Dit geldt ook voor de prijsbepaling. De kosten voor een complete behandeling,
          verspreid over 3-4 sessies, zijn afhankelijk van de te behandelen oppervlakte.
        </p>
        <p>
          Wilt u een prijsindicatie ontvangen? Neem contact op met HaarKliniek 45 in Grazen voor een
          gratis en vrijblijvend gesprek. Wij geven u een persoonlijke prijsopgave op maat, zonder
          verplichtingen.
        </p>
        <ul class="styled-list">
          <li>
            <strong>Maatwerk prijzen:</strong> De prijs is afgestemd op de grootte van het
            behandelgebied en uw persoonlijke situatie
          </li>
          <li><strong>Meerdere sessies:</strong> Doorgaans 3-4 sessies voor het beste resultaat</li>
          <li>
            <strong>Semi-permanent:</strong> 4-6 jaar werkzame duur, met optionele nabehandeling
          </li>
          <li>
            <strong>Gratis consultatie:</strong> Het eerste gesprek is altijd gratis en geheel
            vrijblijvend
          </li>
        </ul>
      </div>
    </section>

    <section class="faq-link-section">
      <div class="container">
        <p>
          Heeft u nog vragen over micro haarpigmentatie? Bekijk onze veelgestelde vragen voor
          antwoorden over hoe lang het resultaat meegaat, pijn, bijwerkingen, het verschil met
          haartransplantatie en meer.
        </p>
        <a [routerLink]="['/faq']">Bekijk alle veelgestelde vragen &rarr;</a>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2 class="section-heading-center">Waarom een behandeling bij HaarKliniek 45?</h2>
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
export class MicroHaarpigmentatiePageComponent {
  trustBadges = [
    'Gratis consult',
    'Betrouwbaar',
    'Belgisch adviescentrum',
    'Gecertificeerde specialisten',
    'Persoonlijke nazorg',
    'Geen verborgen kosten',
    'Garantiecertificaat',
    '100% expertise',
    'Hoogwaardige faciliteiten',
    'Gediplomeerd',
  ];
}
