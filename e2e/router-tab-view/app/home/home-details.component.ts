import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "HomeDetail",
	moduleId: module.id,
	templateUrl: "./home-details.component.html"
})
export class HomeDetailComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	goBack() {
		console.log('Go back clicked');
		this.routerExtensions.back();
	}
}