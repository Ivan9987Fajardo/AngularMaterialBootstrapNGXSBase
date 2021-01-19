import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InitService } from './core/services/init.service';
import { STATES } from './core/store/states.state';
import { FeatureAModule } from './features/feature-a/feature-a.module';
import { FeatureBModule } from './features/feature-b/feature-b.module';
import { SharedModule } from './shared/shared.module';

export const initializeApp = (initService: InitService) => {
  return (): Promise<any> => {
    return initService.init();
  };
};
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
    NgxsModule.forRoot(STATES, {
      developmentMode: !environment.production,
    }),
  ],
  providers: [
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
