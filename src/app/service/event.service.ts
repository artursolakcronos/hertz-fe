import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export default class EventService {

  private baseURL = "http://localhost:8080/events";

  constructor(private http: HttpClient) {

  }

  getEventList(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseURL}`);
  }


  createEvent(event: Event): Observable<Object> {
    return this.http.post(`${this.baseURL}`, event);
  }


  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseURL}/${id}`);
  }


  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseURL}/${id}`, event);
  }


  deleteEvent(id: number): Observable<Object> {
    return this.http.delete<Event>(`${this.baseURL}/${id}`);
  }

}
