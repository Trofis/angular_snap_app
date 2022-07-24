import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     {provide: LOCALE_ID, useValue: 'fr-FR'} // Indique la locale de l'app ici france
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
        registerLocaleData(fr.default); // Locale date par défaut
  }

 }
