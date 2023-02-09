import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HoverhighlightDirective } from './directives/hoverhighlight.directive';
import { SearhPokeDirective } from './directives/searh-poke.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective, HoverhighlightDirective, SearhPokeDirective],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
