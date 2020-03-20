import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { MaxPipe } from './app.maximum';
import { MinPipe } from './app.minimum';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { FbComponent } from './fb/fb.component';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatOptionModule } from '@angular/material'
import { MatSelectModule } from '@angular/material/select'
import { MatStepperModule } from '@angular/material/stepper'
import { MatRadioModule } from '@angular/material/radio'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { BasicsCmpComponent } from './basics-cmp/basics-cmp.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { usdPnoPipe } from './fb/app.updatedCellPhone';
import { HttpClientModule } from '@angular/common/http';
import { RgbCmpComponent } from './rgb-cmp/rgb-cmp.component';
import { RwdCmpComponent } from './rwd-cmp/rwd-cmp.component';
import { PowerBIReportsComponent } from './power-bi-reports/power-bi-reports.component';
import { StatsService } from './stats.service';

const routes: Routes = [
  { path: 'new-cmp', component: NewCmpComponent },
  { path: 'home', component: HomeCmpComponent },
  { path: 'basics', component: BasicsCmpComponent },
  { path: 'login', component: LoginCmpComponent },
  { path: 'contact', component: FbComponent },
  { path: 'rgb', component: RgbCmpComponent },
  { path: 'rwd', component: RwdCmpComponent },
  { path: 'charts', component: PowerBIReportsComponent }
];
@NgModule({
  declarations: [
    usdPnoPipe,
    SqrtPipe,
    MaxPipe,
    MinPipe,
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    RegisterComponent,
    FbComponent,
    NavBarComponent,
    HomeCmpComponent,
    BasicsCmpComponent,
    LoginCmpComponent,
    RgbCmpComponent,
    RwdCmpComponent,
    PowerBIReportsComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MyserviceService,
    StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
