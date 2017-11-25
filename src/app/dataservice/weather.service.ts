import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherService {
  private cityName = 'london';

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private apiKey = '7023923dd26a725da995c75b65864de5';
  private tempUnits = 'metric';

  constructor(private http: HttpClient) { }

  getWeatherDetialByCityName(cityName: string) {
    cityName = cityName || this.cityName;

    const params = new HttpParams()
    .set('q', cityName)
    .set('units', this.tempUnits)
    .set('appid', this.apiKey);

    const options = {'params': params};
    const tempUrl = 'http://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=7023923dd26a725da995c75b65864de5';
    this.http.get<Response>(this.apiUrl, options).subscribe(
      (data) => {
          console.log(data);
      },

      (err) => {
          console.log(err);
      }
    );
  }

}
