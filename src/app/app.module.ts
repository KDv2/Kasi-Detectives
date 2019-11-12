import { NgModule, ApplicationModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { PopupPageModule } from './popup/popup.module';
import { ReportedIncidentPageModule } from './reported-incident/reported-incident.module'
import * as firebase from 'firebase'
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import {Contacts,ContactFieldType, IContactFindOptions } from '@ionic-native/contacts/ngx';
var firebaseConfig = {
    apiKey: "AIzaSyAIvPu8kmlxGnWsGd8kekx5ts7TRnqv8mk",
    authDomain: "kasi-detectives-v2.firebaseapp.com",
    databaseURL: "https://kasi-detectives-v2.firebaseio.com",
    projectId: "kasi-detectives-v2",
    storageBucket: "kasi-detectives-v2.appspot.com",
    messagingSenderId: "332597753588",
    appId: "1:332597753588:web:07be8a011678e4d67090a1",
    measurementId: "G-Y24B0V4XD4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [  BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule, PopupPageModule, ReportedIncidentPageModule],
  providers: [
    StatusBar,
   File,
    SocialSharing,
    Keyboard,
    SMS,
    Contacts,
    Camera,
    Geolocation,
    AndroidPermissions,
    LocalNotifications, 
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
