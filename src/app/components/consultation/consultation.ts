import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.html',
  styleUrls: ['./consultation.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ConsultationComponent {}
