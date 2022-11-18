import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { GeneralComponent } from './mainbody/general/general.component';
import { MenuComponent } from './mainbody/general/menu/menu.component';
import { ContentAreaComponent } from './mainbody/general/content-area/content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GeneralComponent,
    MenuComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
