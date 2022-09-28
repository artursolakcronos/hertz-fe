import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../model/artist';
import ArtistService from '../service/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  id!: number;
  artist: Artist = new Artist;

  constructor(private route: ActivatedRoute,
    private artistService: ArtistService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.artistService.getArtistById(this.id).subscribe(response => {
      this.artist = response;
    }, error => console.error(error))
  }

}
