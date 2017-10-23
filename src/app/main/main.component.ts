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

        this.restaurants.push({
            name: 'TEST NAME 1',
            address: '123 TEST STREET 1',
            rating: 1337,
            image: 'nolink.1'
        });
        this.restaurants.push({
            name: 'TEST NAME 2',
            address: '123 TEST STREET 2',
            rating: 1337,
            image: 'nolink.2'
        })
        this.restaurants.push({
            name: 'TEST NAME 3',
            address: '123 TEST STREET 3',
            rating: 1337,
            image: 'nolink.3'
        })
    }

    ngOnInit(): void {


    }

    searchRestaurants(lat: string, lon: string): void {
        console.log(lat + ', ' + lon);
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
