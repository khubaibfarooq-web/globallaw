import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeParallaxComponent } from './home-parallax/home-parallax.component';
import { AboutLawComponent } from './about-law/about-law.component';
import { CountersComponent } from './counters/counters.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CallTodayComponent } from './call-today/call-today.component';
import { OurPackagesComponent } from './our-packages/our-packages.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { DarkTogglerComponent } from './dark-toggler/dark-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeParallaxComponent,
    AboutLawComponent,
    CountersComponent,
    PracticeAreaComponent,
    OurServicesComponent,
    OurTeamComponent,
    CallTodayComponent,
    OurPackagesComponent,
    GetQuoteComponent,
    DarkTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
