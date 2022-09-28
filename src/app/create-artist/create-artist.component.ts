import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../model/artist';
import ArtistService from '../service/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist = new Artist();

  constructor(private artistService: ArtistService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.artist);
    this.saveArtist();
    this.getToArtistList();
  }

  saveArtist() {
    this.artistService.createArtist(this.artist).subscribe(response => {
      console.log(response);
    },
      error => console.error(error));
  }

  getToArtistList() {
    this.router.navigate(['/artists'])
  }

}
