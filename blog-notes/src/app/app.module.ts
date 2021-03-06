import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AddPageComponent } from './add-page/add-page.component';
import { FormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';
import { NavigatorComponent } from './navigator/navigator.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AddPageComponent,
    AddFormComponent,
    NavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
