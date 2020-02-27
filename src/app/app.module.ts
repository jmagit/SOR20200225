import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCoreModule, ERROR_LEVEL } from 'src/my-core';
import { MainModule } from './main/main.module';
import { SecurityModule } from './security/security.module';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCoreModule, MainModule, SecurityModule,
    CommonServicesModule,
  ],
  providers: [
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
