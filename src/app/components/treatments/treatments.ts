import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.html',
  styleUrls: ['./treatments.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class TreatmentsComponent {}
