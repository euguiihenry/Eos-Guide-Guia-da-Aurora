import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private readonly url = 'https://pensador-api.vercel.app/?term=Jesus+Cristo';
  

  constructor(private http: HttpClient) { }

  public async phrase() {
    this.http.get(this.url)
      .subscribe((response: any) => {
        localStorage.setItem('phrase', JSON.stringify(response.frases));
      });
    
  }
}

