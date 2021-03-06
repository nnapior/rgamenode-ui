import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { CommunityHomeComponent } from './community-home/community-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddGameComponent } from './add-game/add-game.component';
import { GameComponent } from './game/game.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SafePipe } from './Safepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    CommunityHomeComponent,
    AddGameComponent,
    GameComponent,
    ProfileComponent,
    EditGameComponent,
	SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
	FileUploadModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
	  SafePipe
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
