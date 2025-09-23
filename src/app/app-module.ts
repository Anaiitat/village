import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { FilterByNamePipe } from './filterbyname-pipe';
import { SortbypricePipe } from './sortbyprice-pipe';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [App, Home, Header, FilterByNamePipe, SortbypricePipe, Footer, About],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterLink],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
