import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurant/restaurant';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    restaurants: Restaurant[];

    constructor() {
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

    searchRestaurants(input: string): void {
        console.log(input);
    }
}
