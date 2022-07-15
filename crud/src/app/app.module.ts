import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewloginComponent } from './login/newlogin/newlogin.component';
import { EditloginComponent } from './login/editlogin/editlogin.component';
import { DeleteloginComponent } from './login/deletelogin/deletelogin.component';
import { ShowloginComponent } from './login/showlogin/showlogin.component';
import { ListallloginComponent } from './login/listalllogin/listalllogin.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NewloginComponent,
    EditloginComponent,
    DeleteloginComponent,
    ShowloginComponent,
    ListallloginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }