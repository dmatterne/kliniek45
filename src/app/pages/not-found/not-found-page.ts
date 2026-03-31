import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./not-found-page.scss'],
  template: `
    <div class="not-found">
      <div class="container">
        <p class="error-code">404</p>
        <h1>Pagina niet gevonden</h1>
        <p class="explanation">De pagina die u zoekt bestaat niet of is verplaatst.</p>
        <div class="actions">
          <a routerLink="/" class="btn btn-primary">Terug naar Home</a>
          <a routerLink="/behandelingen" class="btn btn-secondary">Bekijk onze behandelingen</a>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundPageComponent {}
