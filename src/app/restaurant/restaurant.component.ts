import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from './restaurant';

@Component({
    selector: 'app-restaurant-component',
    templateUrl: './restaurant.component.html',
    styleUrls: [ './restaurant.component.css' ]
})
export class RestaurantComponent implements OnInit {

    @Input()
    restaurant: Restaurant;

    constructor() {
    }

    ngOnInit(): void {
    }

    searchRestaurants(input: string): void {
        console.log(input);
    }
}
