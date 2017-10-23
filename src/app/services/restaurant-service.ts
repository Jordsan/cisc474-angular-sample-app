import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Restaurant } from '../restaurant/restaurant'


@Injectable()
export class RestaurantService {

    private apiURL = 'https://developers.zomato.com/api/v2.1/search?';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'user-key' : 'd1b68f3bad58bedf80c1b481857c0f30'
    });

    constructor(private http: Http) { }

    // lat=41.1408&lon=-73.2613&radius=1000

    getRestaurants(lat: string, lon: string): Promise<Restaurant[]> {
        let finalUrl: string = this.apiURL + 'lat=' + lat + '&lon=' + lon + '&radius=1000&sort=rating';
        return this.http.get(finalUrl, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}
