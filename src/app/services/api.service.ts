import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiDeals = 'https://www.cheapshark.com/api/1.0/deals';
apiSearchGame = 'https://www.cheapshark.com/api/1.0/games?title=';

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(this.apiDeals)
  }
  searchData(gameName:string):Observable<any>{
    return this.http.get(this.apiSearchGame + gameName)
  }
}