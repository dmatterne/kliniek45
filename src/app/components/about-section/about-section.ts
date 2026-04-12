import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
  styleUrls: ['./about-section.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class AboutSectionComponent {}
