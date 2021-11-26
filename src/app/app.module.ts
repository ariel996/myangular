import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
