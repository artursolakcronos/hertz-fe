import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Artist } from '../model/artist';
import ArtistService from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService,
    private router: Router) { }

  ngOnInit(): void {

    this.getArtists();

    new Observable(data => {
      setTimeout(() => { }, 2000);
      setTimeout(() => { }, 4000);
      setTimeout(() => { }, 6000);
    }).subscribe();

  }

  getArtists() {
    this.artistService.getArtistList().subscribe(response => {
      this.artists = response;
    });

  }

  updateArtist(id: number) {
    this.router.navigate(['update-artist', id])
  }

  deleteArtist(id: number) {
    if (confirm("Are you sure to delete artist with id: " + id + "?")) {
      this.artistService.deleteArtist(id).subscribe(response => {
        console.info(response);
        this.getArtists();
      }, error => console.error(error)
      )
    }
  }

  artistDetails(id: number) {
    this.router.navigate(['artist-details', id])
  }
}
