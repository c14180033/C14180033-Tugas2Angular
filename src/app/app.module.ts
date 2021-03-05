import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobvarService } from './globvar.service';
import { Hal1Component } from './hal1/hal1.component';
import { Hal2Component } from './hal2/hal2.component';
import { Hal3Component } from './hal3/hal3.component';

import { Routes, RouterModule, Router } from '@angular/router';

const ROUTES: Routes = [
    {path: '', component: Hal1Component},
    {path: 'hal2/:judulNote', component: Hal2Component},
    {path: 'hal3', component: Hal3Component}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(ROUTES) 
  ],
  declarations: [ AppComponent, HelloComponent, Hal1Component, Hal2Component, Hal3Component ],
  bootstrap:    [ AppComponent ],
  providers: [GlobvarService]
})
export class AppModule { }
