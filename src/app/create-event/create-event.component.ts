import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../model/event';
import EventService from '../service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();
  url: string = '';

  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.saveArtist();
    this.goToArtistList();
  }

  saveArtist() {
    this.eventService.createEvent(this.event).subscribe(response => {
    },
      error => console.error(error));
  }

  goToArtistList() {
    this.router.navigate(['/events'])
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.url = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}

}
