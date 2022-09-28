import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import EventService from '../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[] = []

  constructor(private eventService: EventService,
    private router: Router) { }


  ngOnInit(): void {

    this.getEvents();

    new Observable(data => {
      setTimeout(() => { }, 2000);
      setTimeout(() => { }, 4000);
      setTimeout(() => { }, 6000);
    }).subscribe();

  }

  getEvents() {
    this.eventService.getEventList().subscribe(response => {
      this.events = response;
    });

  }

  updateEvent(id: number) {
    this.router.navigate(['update-event', id])
  }

  deleteEvent(id: number) {
    if (confirm("Are you sure to delete event with id: " + id + "?")) {
      this.eventService.deleteEvent(id).subscribe(response => {
        console.info(response);
        this.getEvents();
      }, error => console.error(error)
      )
    }
  }

  eventDetails(id: number) {
    this.router.navigate(['event-details', id])
  }
}
