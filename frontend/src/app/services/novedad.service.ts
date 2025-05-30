import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Novedad, Tutorial } from '../common/novedad';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NovedadService {
  private readonly http: HttpClient = inject(HttpClient);


  constructor() {}

  // Métodos existentes
  getNovedades(): Observable<Novedad[]> {
    return this.http.get<Novedad[]>(environment.baseUrl);
  }

  getOneNovedad(id: string): Observable<Novedad> {
    return this.http.get<Novedad>(environment.baseUrl + 'novedad/' + id);
  }

  updateNovedad(novedad: Novedad): Observable<StatusMessageUpdate> {
    return this.http.put<StatusMessageUpdate>(environment.baseUrl + novedad._id, novedad);
  }

  deleteNovedad(id: string): Observable<StatusMessage> {
    return this.http.delete<StatusMessage>(environment.baseUrl + id);
  }

  addNovedad(novedad: Novedad): Observable<StatusMessage> {
    return this.http.post<StatusMessage>(environment.baseUrl, novedad);
  }

  getTutoriales(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(environment.baseUrl + 'tutoriales');
  }

  getOneTutorial(id: string): Observable<Tutorial> {
    return this.http.get<Tutorial>(environment.baseUrl + 'tutorial/' + id);
  }

  updateTutorial(tutorial: Tutorial): Observable<StatusMessageUpdate2> {
    return this.http.put<StatusMessageUpdate2>(environment.baseUrl + 'tutorial/' + tutorial._id, tutorial);
  }

  deleteTutorial(id: string): Observable<StatusMessage> {
    return this.http.delete<StatusMessage>(environment.baseUrl + 'tutorial/' + id);
  }

  getDificultad(): Observable<string[]> {
    return this.http.get<string[]>(environment.baseUrl + 'getDificultad');
  }

  addTutorial(tutorial: Tutorial): Observable<StatusMessage> {
    return this.http.post<StatusMessage>(environment.baseUrl + 'tutorial', tutorial);
  }


  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(environment.baseUrl + 'upload', formData);
  }
}

export interface StatusMessage {
  status: string;
}

export interface StatusMessageUpdate {
  status: string;
  data: Novedad;
}

export interface StatusMessageUpdate2 {
  status: string;
  data: Tutorial;
}
