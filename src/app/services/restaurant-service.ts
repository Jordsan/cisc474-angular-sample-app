import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Restaurant } from '../restaurant/restaurant'


@Injectable()
export class RestaurantService {

    private apiURL = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'user-key' : 'd1b68f3bad58bedf80c1b481857c0f30'
    });

    constructor(private http: Http) { }

    getRestaurants(): Promise<Restaurant[]> {
        return this.http.get(this.apiURL, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}
