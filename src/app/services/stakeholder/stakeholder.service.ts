import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StakeholderService {

  private API_SERVER = "http://localhost:8080/stakeholder/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllStakeholders(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public deleteStakeHolder(b_id:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+b_id)
  }
}
