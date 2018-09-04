import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    goToDetail() {

		this.routerExtensions.navigate([ "detail"] , { relativeTo: this.activeRoute });
		
    }
}
