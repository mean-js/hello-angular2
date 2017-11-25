import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  private cityName = 'london';

  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private apiKey = '7023923dd26a725da995c75b65864de5';
  private tempUnits = 'metric';

  constructor(private http: HttpClient) { }


  getWeatherDetialByCityName(cityName: string) {
    cityName = cityName || this.cityName;

    let params = new HttpParams();
    params = params.set('q', 'mumbai');
    params = params.set('units', this.tempUnits);
    params = params.set('appid', this.apiKey);

    const options = {'params': params};
    this.http.get(this.apiUrl, options).subscribe(
      (data) => {
          console.log(data);
      },

      (err) => {
          console.log(err);
      }
    );
  }


  getWeatherDetialByCityNameReturnAsPromise(cityName: string): Promise<any> {
    cityName = cityName || this.cityName;

    let params = new HttpParams();
    params = params.set('q', 'mumbai');
    params = params.set('units', this.tempUnits);
    params = params.set('appid', this.apiKey);

    const options = {'params': params};
    return this.http.get(this.apiUrl, options).toPromise();
  }


  getWeatherDetialByCityNameReturnAsObservable(cityName: string): Observable<any> {
    cityName = cityName || this.cityName;

    let params = new HttpParams();
    params = params.set('q', 'mumbai');
    params = params.set('units', this.tempUnits);
    params = params.set('appid', this.apiKey);

    const options = {'params': params};
    return this.http.get(this.apiUrl, options);
  }



}
