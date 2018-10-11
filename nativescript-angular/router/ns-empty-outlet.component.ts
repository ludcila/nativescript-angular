import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "ns-empty-outlet",
    moduleId: module.id,
    template: "<page-router-outlet isNSEmptyOutlet='true'></page-router-outlet>"
})
export class NSEmptyOutletComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}
