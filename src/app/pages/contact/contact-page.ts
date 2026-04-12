import { Component } from '@angular/core';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ConsultationComponent],
  styleUrls: ['./contact-page.scss'],
  template: `
    <section class="hero">
      <div class="container">
        <h1>Neem Contact Op</h1>
        <p class="subtitle">Wij helpen u graag verder</p>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <h2>Contactinformatie</h2>
        <div class="info-grid">
          <div class="info-card">
            <span class="info-icon">📞</span>
            <h3>Telefoon</h3>
            <p>076 204 5512</p>
          </div>
          <div class="info-card">
            <span class="info-icon">✉️</span>
            <h3>E-mail</h3>
            <p>info&#64;haarkliniek45.be</p>
          </div>
          <div class="info-card">
            <span class="info-icon">📍</span>
            <h3>Adres</h3>
            <p>HaarKliniek 45<br>België</p>
          </div>
          <div class="info-card">
            <span class="info-icon">🕐</span>
            <h3>Openingstijden</h3>
            <p>Ma–Vr: 9:00–18:00<br>Za: 10:00–16:00<br>Zo: Gesloten</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <h2>Stuur ons een bericht</h2>
        <form class="contact-form" (submit)="$event.preventDefault()">
          <div class="form-row">
            <div class="form-group">
              <label for="voornaam">Voornaam</label>
              <input id="voornaam" type="text" placeholder="Uw voornaam" />
            </div>
            <div class="form-group">
              <label for="achternaam">Achternaam</label>
              <input id="achternaam" type="text" placeholder="Uw achternaam" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">E-mailadres</label>
              <input id="email" type="email" placeholder="uw&#64;emailadres.be" />
            </div>
            <div class="form-group">
              <label for="telefoon">Telefoonnummer</label>
              <input id="telefoon" type="tel" placeholder="076 204 5512" />
            </div>
          </div>
          <div class="form-group">
            <label for="behandeling">Behandeling interesse</label>
            <select id="behandeling">
              <option value="">Selecteer een behandeling</option>
              <option value="haar-man">Haartransplantatie mannen</option>
              <option value="haar-vrouw">Haartransplantatie vrouwen</option>
              <option value="baard">Baardtransplantatie</option>
              <option value="dhi">DHI</option>
              <option value="fue">FUE Saffier</option>
              <option value="mhp">Micro haarpigmentatie</option>
              <option value="prp">PRP/Haargroei stimuleren</option>
              <option value="anders">Anders</option>
            </select>
          </div>
          <div class="form-group">
            <label for="bericht">Uw bericht</label>
            <textarea id="bericht" rows="5" placeholder="Vertel ons meer over uw situatie of stel uw vraag..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Verstuur bericht</button>
        </form>
      </div>
    </section>

    <app-consultation />
  `,
})
export class ContactPageComponent {}

