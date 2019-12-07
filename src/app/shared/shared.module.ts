import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TabletopComponent } from './components/tabletop/tabletop.component';
import { AddDeckFormComponent } from './components/add-deck-form/add-deck-form.component';
import { ShowDeckComponent } from './components/show-deck/show-deck.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, SidenavComponent, TabletopComponent, AddDeckFormComponent, ShowDeckComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, SidenavComponent, TabletopComponent]
})
export class SharedModule {}
