import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { UpdateArtistComponent } from './update-artist/update-artist.component';

const routes: Routes = [
  { path: 'artists', component: ArtistListComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: 'update-artist/:id', component: UpdateArtistComponent },
  { path: '', redirectTo: 'artists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
