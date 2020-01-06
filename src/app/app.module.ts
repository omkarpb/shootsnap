import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { ShootsnapListComponent } from './shootsnap-list/shootsnap-list.component';
import { AddSnapComponent } from './add-snap/add-snap.component';
import { LoginFormComponent } from './login-form/login-form.component';

const appRoutes: Routes = [
  { path: 'home', component: ShootsnapListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddSnapComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    NavigationFooterComponent,
    ShootsnapListComponent,
    AddSnapComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
