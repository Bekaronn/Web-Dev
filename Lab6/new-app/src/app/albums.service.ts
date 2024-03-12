import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {AlbumModel} from "./album.model";
import {PhotoModel} from "./photo.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private _url: string = "http://localhost:3000/albums"
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this._url);
  }

  getAlbumById(id: number): Observable<AlbumModel> {
    return this.http.get<AlbumModel>(`${this._url}/${id}`);
  }

  createAlbum(album: AlbumModel): Observable<AlbumModel> {
    return this.http.post<AlbumModel>(this._url, album);
  }

  updateAlbum(album: AlbumModel): Observable<AlbumModel> {
    return this.http.put<AlbumModel>(`${this._url}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this._url}/${id}`);
  }

  // private _photoUrl: string = "https://jsonplaceholder.typicode.com/albums/1/photos"

  getPhotosById(id: number): Observable<PhotoModel[]>{
    return this.http.get<PhotoModel[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
