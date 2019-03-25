import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(public http: HttpClient) {}
  apiBaseurl=environment.baseUrl;
  baseUrl=environment.baseUrl;
  postUser(user, url) {
    var httpOptions = {
      headers: new HttpHeaders({ //creat HTTP headers which allow the client and the server to pass additional information with the request or the response.
        "Content-Type": "application/json"
      })
    };
    // set header in your http request 
    return this.http.post(this.apiBaseurl+url, user, httpOptions);
  }

  encode(data) {
    const formBody = [];
    for (const property in data) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
    }
  encodedPostForm(url: any, data: any) {
    url = this.baseUrl + url;
    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  "application/json",
    'Authorization': localStorage.getItem('token')
    })
    }
    return this.http.post(url, this.encode(data), httpOptions);
  }
  
}
