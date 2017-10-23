import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurant/restaurant';
import { RestaurantService } from '../services/restaurant-service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    restaurants: Restaurant[];

    constructor(private restaurantService: RestaurantService) {
        this.restaurants = new Array();
    }

    ngOnInit(): void {


    }

    searchRestaurants(lat: string, lon: string): void {
        this.restaurantService.getRestaurants(lat, lon).then(list => this.parseJSON(list));
    }

    parseJSON(list): void {
        let returnList: Restaurant[] = new Array();

        for (let item of list.restaurants){
            returnList.push({
                name: item.restaurant.name,
                address: item.restaurant.location.address,
                rating: item.restaurant.user_rating.aggregate_rating,
                image: item.restaurant.photos_url
            })
        }

        this.restaurants = returnList;
    }
}
