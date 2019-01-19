import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './user-page/data-storage.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { FIREBASE_CONFIG } from 'src/environments/environment';
import { SharingService } from './Services/shareservice';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    UserPageComponent,
    AdminComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule

  ],
  providers: [AuthService, DataStorageService,SharingService],
  bootstrap: [AppComponent]
})
export class AppModule {

}


