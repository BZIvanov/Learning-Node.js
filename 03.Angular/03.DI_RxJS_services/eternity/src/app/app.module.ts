import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FundOneComponent } from './fundamentals/fund-one/fund-one.component';
import { FundTwoComponent } from './fundamentals/fund-two/fund-two.component';
import { PlayerParentComponent } from './fundamentals/player-parent/player-parent.component';
import { PlayerChildComponent } from './fundamentals/player-child/player-child.component';
import { FundThreeComponent } from './fundamentals/fund-three/fund-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FundOneComponent,
    FundTwoComponent,
    PlayerParentComponent,
    PlayerChildComponent,
    FundThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
