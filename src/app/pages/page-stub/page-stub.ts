import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-stub',
  templateUrl: './page-stub.html',
  styleUrls: ['./page-stub.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class PageStubComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
