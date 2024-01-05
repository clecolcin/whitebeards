import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app';
import { NavBarComponent } from './components/nav-bar';
import { CoursesComponent } from "./components/courses";
import { RegisterComponent } from "./components/sign-in";
import { SignInComponent } from "./components/sign-in";
import { LoadingComponent } from "./components/loading-spinner";
import { DataRepositoryService } from "./services/data-repository"
import { AccountMenuComponent } from "./components/account-menu";

/*
const config = {
  apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
  authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://stackblitzfire.firebaseio.com",
  storageBucket: "stackblitzfire.appspot.com",
  messagingSenderId: "42917465053"
};
*/

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoursesComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    //AngularFireModule.initializeApp(config),
  ],
  providers: [DataRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
