import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AuthFacade } from '@angular-web-security/csrf-demo/auth/data-access';
import { SharedUiNavbarModule } from '@angular-web-security/shared/ui-navbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
    SharedUiNavbarModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authFacade: AuthFacade) => {
        return () => {
          return authFacade.loadUser();
        };
      },
      deps: [AuthFacade],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
