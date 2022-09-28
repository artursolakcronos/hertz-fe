import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { UpdateArtistComponent } from './update-artist/update-artist.component';

const routes: Routes = [
  { path: 'artists', component: ArtistListComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: 'update-artist/:id', component: UpdateArtistComponent },
  { path: 'artist-details/:id', component: ArtistDetailsComponent },
  { path: 'events', component: EventListComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: '', redirectTo: 'artists', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
