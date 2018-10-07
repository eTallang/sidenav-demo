import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutingModule } from './app-routing.module';
import { StubComponent } from './stub/stub.component';

@NgModule({
  declarations: [
    AppComponent,
    StubComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SidenavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
