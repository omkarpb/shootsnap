import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnapsService {
  snaps = [];
  url = 'http://localhost:3000/snaps';

  constructor(
    private http: HttpClient
  ) { }

  getSnaps() {
    return this.http.get(this.url);
  }

  saveSnap(snap) {
    this.snaps.push(snap);
  }

  updateSnap(snap) {
    console.log('service', snap);
    return this.http.put(`${this.url}/${snap._id}`, snap);
  }
}
