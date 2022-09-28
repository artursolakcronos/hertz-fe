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

    this.artistService.getArtistList().subscribe(response => {
      this.artists = response;
    });

    new Observable(data => {
      setTimeout(() => { }, 2000);
      setTimeout(() => { }, 4000);
      setTimeout(() => { }, 6000);
    }).subscribe();

  }

  updateArtist(id: number) {
    this.router.navigate(['update-artist', id])
  }
}
