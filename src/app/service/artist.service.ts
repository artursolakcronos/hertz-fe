import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export default class ArtistService {

  private baseURL = "http://localhost:8080/artists";

  constructor(private http: HttpClient) {

  }

  getArtistList(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseURL}`);
  }


  createArtist(artist: Artist): Observable<Object> {
    return this.http.post(`${this.baseURL}`, artist);
  }


  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseURL}/${id}`);
  }


  updateArtist(id: number, artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.baseURL}/${id}`, artist);
  }


  deleteArtist(id: number): Observable<Object> {
    return this.http.delete<Artist>(`${this.baseURL}/${id}`);
  }

}
