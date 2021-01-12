import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureAModule } from './features/feature-a/feature-a.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeatureBModule } from './features/feature-b/feature-b.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './styles/material/material.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAModule,
    FeatureBModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
