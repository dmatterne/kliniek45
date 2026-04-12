import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-partners-trainingen-page',
  standalone: true,
  imports: [ConsultationComponent, RouterLink],
  styleUrls: ['./partners-trainingen-page.scss'],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Over ons</span>
        <h1>Partners &amp; Trainingen</h1>
        <p class="subtitle">Wij werken samen met de beste specialisten en volgen voortdurend internationale opleidingen om u de hoogste kwaliteit te garanderen.</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Ons partnernetwerk</h2>
        <p>HaarKliniek 45 is actief lid van het internationale netwerk van haartransplantatie-specialisten. We werken samen met dermatologen, trichologisten en chirurgen die elk hun expertise inbrengen om u een optimaal behandelplan te bieden.</p>
        <p>Via ons partnernetwerk hebben wij toegang tot de nieuwste technieken, materialen en onderzoeksresultaten op het gebied van haartransplantatie en haargroei. Deze kennis vertalen wij direct naar betere behandelresultaten voor onze patiënten.</p>
        <p>Onze samenwerkingen zijn zorgvuldig geselecteerd op basis van kwaliteit, ethiek en patiëntgerichtheid. Wij delen de overtuiging dat eerlijke communicatie en uitstekende nazorg de basis vormen van elke succesvolle behandeling.</p>
      </div>
    </section>

    <section class="page-section bg-light">
      <div class="container">
        <h2>Opleidingen &amp; certificeringen</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-icon">🎓</span>
            <h3>Internationale congressen</h3>
            <p>Onze specialisten nemen jaarlijks deel aan internationale haartransplantatie-congressen in Europa en wereldwijd om op de hoogte te blijven van de laatste technieken.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🇪🇺</span>
            <h3>Europees gecertificeerd</h3>
            <p>Alle behandelingen voldoen aan de strenge Europese medische normen en richtlijnen. U bent volledig beschermd als patiënt onder Belgisch en Europees recht.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">📚</span>
            <h3>Permanente bijscholing</h3>
            <p>Medische kennis evolueert snel. Ons team investeert voortdurend in bijscholing en hands-on trainingen bij erkende instituten in binnen- en buitenland.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2>Samenwerking met medische specialisten</h2>
        <p>Voor complexe gevallen werken wij nauw samen met dermatologen en trichologisten. Deze multidisciplinaire aanpak garandeert dat elke patiënt de meest geschikte behandeling krijgt — of dat nu een chirurgische haartransplantatie, een haargroei-stimulerende behandeling of een combinatie is.</p>
        <p>Onze samenwerkingsverbanden strekken zich uit over België, Nederland en internationale expertcentra. Dit geeft ons een uniek perspectief en toegang tot kennis die direct ten goede komt aan uw behandeling.</p>
        <div style="margin-top:2rem;text-align:center;">
          <a routerLink="/contact" class="btn btn-primary">Neem contact op</a>
        </div>
      </div>
    </section>

    <app-consultation />
  `,
})
export class PartnersTrainingenPageComponent {}
