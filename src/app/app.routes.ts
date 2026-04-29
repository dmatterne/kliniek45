import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home';
import { BehandelingenPageComponent } from './pages/behandelingen/behandelingen-page';
import { HaartransplantatieMannenPageComponent } from './pages/haartransplantatie-mannen/haartransplantatie-mannen-page';
import { HaartransplantatieVrouwenPageComponent } from './pages/haartransplantatie-vrouwen/haartransplantatie-vrouwen-page';
import { HaartransplantatieInhammenPageComponent } from './pages/haartransplantatie-inhammen/haartransplantatie-inhammen-page';
import { HaartransplantatieKruinPageComponent } from './pages/haartransplantatie-kruin/haartransplantatie-kruin-page';
import { LongHairHaartransplantatiePageComponent } from './pages/long-hair-haartransplantatie/long-hair-haartransplantatie-page';
import { HaartransplantatieKostenPageComponent } from './pages/haartransplantatie-kosten/haartransplantatie-kosten-page';
import { BaardtransplantatiePageComponent } from './pages/baardtransplantatie/baardtransplantatie-page';
import { MicroHaarpigmentatiePageComponent } from './pages/micro-haarpigmentatie/micro-haarpigmentatie-page';
import { DhiPageComponent } from './pages/dhi/dhi-page';
import { FueSaffierPageComponent } from './pages/fue-saffier/fue-saffier-page';
import { WerkwijzePageComponent } from './pages/werkwijze/werkwijze-page';
import { OverOnsPageComponent } from './pages/over-ons/over-ons-page';
import { ResultatenPageComponent } from './pages/resultaten/resultaten-page';
import { FaqPageComponent } from './pages/faq/faq-page';
import { ContactPageComponent } from './pages/contact/contact-page';
import { HaargroeiPageComponent } from './pages/haargroei/haargroei-page';
import { HairegenPageComponent } from './pages/hairegen/hairegen-page';
import { RegeneraActivaPageComponent } from './pages/regenera-activa/regenera-activa-page';
import { DnaTestHaaruitvalPageComponent } from './pages/dna-test-haaruitval/dna-test-haaruitval-page';
import { PrpBehandelingPageComponent } from './pages/prp-behandeling/prp-behandeling-page';
import { NazorgPageComponent } from './pages/nazorg/nazorg-page';
import { NazorgKorstjesPageComponent } from './pages/nazorg-korstjes/nazorg-korstjes-page';
import { NazorgHerstelPageComponent } from './pages/nazorg-herstel/nazorg-herstel-page';
import { NazorgSlapenPageComponent } from './pages/nazorg-slapen/nazorg-slapen-page';
import { HaaruitvalPageComponent } from './pages/haaruitval/haaruitval-page';
import { HaaruitvalManPageComponent } from './pages/haaruitval-man/haaruitval-man-page';
import { TipsHaaruitvalPageComponent } from './pages/tips-haaruitval/tips-haaruitval-page';
import { NotFoundPageComponent } from './pages/not-found/not-found-page';
import { LegalPageComponent } from './pages/legal/legal-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  // Behandelingen
  { path: 'behandelingen', component: BehandelingenPageComponent },
  {
    path: 'behandelingen/haartransplantatie-mannen',
    component: HaartransplantatieMannenPageComponent,
  },
  {
    path: 'behandelingen/haartransplantatie-vrouwen',
    component: HaartransplantatieVrouwenPageComponent,
  },
  {
    path: 'behandelingen/haartransplantatie-inhammen',
    component: HaartransplantatieInhammenPageComponent,
  },
  {
    path: 'behandelingen/haartransplantatie-kruin',
    component: HaartransplantatieKruinPageComponent,
  },
  {
    path: 'behandelingen/long-hair-haartransplantatie',
    component: LongHairHaartransplantatiePageComponent,
  },
  {
    path: 'behandelingen/haartransplantatie-kosten',
    component: HaartransplantatieKostenPageComponent,
  },
  {
    path: 'behandelingen/haartransplantatie-resultaat',
    redirectTo: '/resultaten',
    pathMatch: 'full',
  },
  { path: 'behandelingen/baardtransplantatie', component: BaardtransplantatiePageComponent },
  { path: 'behandelingen/micro-haarpigmentatie', component: MicroHaarpigmentatiePageComponent },
  { path: 'behandelingen/dhi', component: DhiPageComponent },
  { path: 'behandelingen/fue-saffier', component: FueSaffierPageComponent },

  // Haargroei stimuleren
  { path: 'haargroei-stimuleren', component: HaargroeiPageComponent },
  { path: 'haargroei-stimuleren/hairegen', component: HairegenPageComponent },
  { path: 'haargroei-stimuleren/regenera-activa', component: RegeneraActivaPageComponent },
  { path: 'haargroei-stimuleren/dna-test-haaruitval', component: DnaTestHaaruitvalPageComponent },
  { path: 'haargroei-stimuleren/prp-behandeling', component: PrpBehandelingPageComponent },

  // Over ons
  { path: 'over-ons', component: OverOnsPageComponent },

  // Resultaten
  { path: 'resultaten', component: ResultatenPageComponent },

  // Kennis
  { path: 'faq', component: FaqPageComponent },
  { path: 'haaruitval', component: HaaruitvalPageComponent },
  { path: 'haaruitval/haaruitval-man', component: HaaruitvalManPageComponent },
  { path: 'haaruitval/tips-tegen-haaruitval', component: TipsHaaruitvalPageComponent },
  { path: 'nazorg', component: NazorgPageComponent },
  { path: 'nazorg/korstjes-na-haartransplantatie', component: NazorgKorstjesPageComponent },
  { path: 'nazorg/herstel-na-haartransplantatie', component: NazorgHerstelPageComponent },
  { path: 'nazorg/slapen-na-haartransplantatie', component: NazorgSlapenPageComponent },

  // Werkwijze & Contact
  { path: 'werkwijze', component: WerkwijzePageComponent },
  { path: 'contact', component: ContactPageComponent },

  // Legal
  { path: 'privacybeleid', component: LegalPageComponent, data: { page: 'privacy' } },
  { path: 'cookiebeleid', component: LegalPageComponent, data: { page: 'cookies' } },
  { path: 'algemene-voorwaarden', component: LegalPageComponent, data: { page: 'voorwaarden' } },

  { path: '**', component: NotFoundPageComponent },
];
