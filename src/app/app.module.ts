import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MypageComponent } from './mypage/mypage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FundingPageComponent } from './funding-page/funding-page.component';
import { DealingComponent } from './dealing/dealing.component';
import { OrderComponent } from './order/order.component';
import { DealingHogaTableComponent } from './dealing-hoga-table/dealing-hoga-table.component';
import { FooterComponent } from './footer/footer.component';
import { FundingProgressComponent } from './funding-progress/funding-progress.component';
import { FundingConditionComponent } from './funding-condition/funding-condition.component';

const appRoutes: Routes = [
  { path: 'mypage', component: MypageComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'funding/:game', component: FundingPageComponent },
  { path: 'order', component: OrderComponent },
  { path: 'dealing/:game', component: DealingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MypageComponent,
    PageNotFoundComponent,
    FundingPageComponent,
    DealingComponent,
    OrderComponent,
    DealingHogaTableComponent,
    FooterComponent,
    FundingProgressComponent,
    FundingConditionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
