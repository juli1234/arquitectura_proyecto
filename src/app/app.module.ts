import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {firebase} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule, FirestoreSettingsToken} from "@angular/fire/firestore"
import {ChatComponent} from './componentes/chat/chat.component'
import {FormsModule}  from "@angular/forms"

@NgModule({
  declarations: [AppComponent, ChatComponent],
  entryComponents: [ChatComponent],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,AngularFirestoreModule ],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken,useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
