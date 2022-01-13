import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { DeletepersonComponent } from './deleteperson/deleteperson.component';
import { SearchpersonComponent } from './searchperson/searchperson.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsuccessComponent,
    AddpersonComponent,
    DeletepersonComponent,
    SearchpersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
