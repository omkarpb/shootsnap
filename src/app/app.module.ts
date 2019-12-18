import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { ShootsnapListComponent } from './shootsnap-list/shootsnap-list.component';
import { AddSnapComponent } from './add-snap/add-snap.component';

const appRoutes: Routes = [
  { path: 'home', component: ShootsnapListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddSnapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    NavigationFooterComponent,
    ShootsnapListComponent,
    AddSnapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,     // <-- debugging purposes only
        onSameUrlNavigation: 'reload' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
