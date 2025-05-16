import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Novedad, Tutorial } from '../common/novedad';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly url = 'http://localhost:3000/api/circusLab/';

  constructor() {}

  // Métodos existentes
  getNovedades(): Observable<Novedad[]> {
    return this.http.get<Novedad[]>(this.url);
  }

  getOneNovedad(id: string): Observable<Novedad> {
    return this.http.get<Novedad>(this.url + 'novedad/' + id);
  }

  updateNovedad(novedad: Novedad): Observable<StatusMessageUpdate> {
    return this.http.put<StatusMessageUpdate>(this.url + novedad._id, novedad);
  }

  deleteNovedad(id: string): Observable<StatusMessage> {
    return this.http.delete<StatusMessage>(this.url + id);
  }

  addNovedad(novedad: Novedad): Observable<StatusMessage> {
    return this.http.post<StatusMessage>(this.url, novedad);
  }

  getTutoriales(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.url + 'tutoriales');
  }

  getOneTutorial(id: string): Observable<Tutorial> {
    return this.http.get<Tutorial>(this.url + 'tutorial/' + id);
  }

  updateTutorial(tutorial: Tutorial): Observable<StatusMessageUpdate2> {
    return this.http.put<StatusMessageUpdate2>(this.url + 'tutorial/' + tutorial._id, tutorial);
  }

  deleteTutorial(id: string): Observable<StatusMessage> {
    return this.http.delete<StatusMessage>(this.url + 'tutorial/' + id);
  }

  getDificultad(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'getDificultad');
  }

  addTutorial(tutorial: Tutorial): Observable<StatusMessage> {
    return this.http.post<StatusMessage>(this.url + 'tutorial', tutorial);
  }


  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(this.url + 'upload', formData);
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
