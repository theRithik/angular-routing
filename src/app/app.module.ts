import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import {  RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const appRoutes:Routes=[
  {path:'', redirectTo:'products', pathMatch:'full' },
{path:'home', component:HomeComponent},
{path:'products', component:ProductsComponent},
{path:'products/:id', component:ProductsComponent},
{path:'contact', component:ContactComponent},
{path:'details/:id', component:DetailsComponent},
{path:'**', component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
