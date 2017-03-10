import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer } from './app.reducers';
import { SharedModule } from './shared';
import { HeroModule } from './hero';
import { CrisisModule } from './crisis';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HeroModule,
    CrisisModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
