import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../model/artist';
import ArtistService from '../service/artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss']
})
export class UpdateArtistComponent implements OnInit {

  artist: any;
  id!: number;

  constructor(private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artistService.getArtistById(this.id).subscribe(response => {
      this.artist = response;
    }, error => console.error(error));
  }

  onSubmit() {
    this.artistService.updateArtist(this.id, this.artist).subscribe(response => {
      this.goToArtistList;
    },
      error => console.error(error));
  }

  goToArtistList() {
    this.router.navigate(['/artists'])
  }

}
