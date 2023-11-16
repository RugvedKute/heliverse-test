import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPipe } from './pipes/search.service';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { HeaderComponent } from './shared/components/header/header.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SearchBarComponent,
    SearchPipe,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PaginatorModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    ButtonModule,
      TableModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
