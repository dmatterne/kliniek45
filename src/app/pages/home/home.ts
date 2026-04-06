import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { InfoCardsComponent } from '../../components/info-cards/info-cards';
import { AboutSectionComponent } from '../../components/about-section/about-section';
import { TreatmentsComponent } from '../../components/treatments/treatments';
import { ProcessTimelineComponent } from '../../components/process-timeline/process-timeline';
import { ResultsGalleryComponent } from '../../components/results-gallery/results-gallery';
import { WhyChooseComponent } from '../../components/why-choose/why-choose';
import { ConsultationComponent } from '../../components/consultation/consultation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  standalone: true,
  imports: [
    HeroComponent,
    InfoCardsComponent,
    AboutSectionComponent,
    TreatmentsComponent,
    ProcessTimelineComponent,
    ResultsGalleryComponent,
    WhyChooseComponent,
    ConsultationComponent,
  ],
})
export class HomePageComponent {}
