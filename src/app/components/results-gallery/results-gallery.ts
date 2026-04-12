import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results-gallery',
  templateUrl: './results-gallery.html',
  styleUrls: ['./results-gallery.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ResultsGalleryComponent {}
