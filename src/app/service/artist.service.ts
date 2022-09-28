import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export default class ArtistService {

  private baseURL = "http://localhost:8080/artists";
  private updateURL = "http://localhost:8080/update-artist"

  constructor(private http: HttpClient) {

  }

  getArtistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseURL}`);
  }


  createArtist(artist: Artist): Observable<Object> {
    return this.http.post(`${this.baseURL}`, artist);
  }


  getArtistById(id: number): Observable<Object> {
    return this.http.get(`${this.baseURL}/${id}`);
  }


  updateArtist(id: number, artist: Artist): Observable<Object> {
    return this.http.put(`${this.updateURL}/${id}`, artist);
  }

}
