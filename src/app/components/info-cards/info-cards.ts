import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.html',
  styleUrls: ['./info-cards.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class InfoCardsComponent {}
