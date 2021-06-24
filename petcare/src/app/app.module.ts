import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { PetsComponent } from './pets/pets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerEditComponent } from './owner/owner-edit/owner-edit.component';
import { PetCreateComponent } from './pets/pet-create/pet-create.component';
import { OwnerDeleteComponent } from './owner/owner-delete/owner-delete.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetDeleteComponent } from './pets/pet-delete/pet-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    OwnerCreateComponent,
    OwnerEditComponent,
    PetsComponent,
    PetCreateComponent,
    HomeComponent,
    OwnerDeleteComponent,
    PetEditComponent,
    PetDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'owner', component:OwnerComponent},
      {path:'owner/owner-create', component:OwnerCreateComponent},
      {path:'owner/owner-edit/:id', component:OwnerEditComponent},
      {path:'owner/owner-delete/:id', component:OwnerDeleteComponent},
      {path:'pet', component:PetsComponent},
      {path:'pet/pet-create', component:PetCreateComponent},
      {path:'pet/pet-edit/:id', component:PetEditComponent},
      {path:'pet/pet-delete/:id', component:PetDeleteComponent},
      {path:'', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
