import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { LinhVuc } from 'src/app/_models/LinhVuc';


const apiUrl:string = 'https://localhost:44387/LinhVuc';


const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class LinhVucService {


  constructor(private httpClient:HttpClient) { }

  getAll():Observable<LinhVuc[]>{
    return this.httpClient.get<LinhVuc[]>(`${apiUrl}/search`);
  }
  getPage(pageNumber:number, pageSize :number):Observable<LinhVuc[]>{
    return this.httpClient.get<LinhVuc[]>(`${apiUrl}/get?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  Creat(newLinhvuc : LinhVuc) : Observable<LinhVuc>{
    return this.httpClient.post(`${apiUrl}/Add`, newLinhvuc , httpOptions);
  }

  Delete(id: number): Observable<LinhVuc> {
    return this.httpClient.delete(`${apiUrl}/Delete/${id}`);
  }

  Edit(id:number ,newLinhvuc : LinhVuc) : Observable<LinhVuc>{
    return this.httpClient.put(`${apiUrl}/Edit/${id}`, newLinhvuc,httpOptions);
  }

}
