import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpService) {}
  result:boolean = true;
 

  getNote() {
    return this.http.getHttp("getNotes");
  }
}
