import { Component } from "@angular/core";
import { View } from "ui/core/view"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "modal-second",
    templateUrl: "./modal-second.component.html"
})
export class ModalSecondComponent {
    constructor(private routerExtension: RouterExtensions) { }

    onLoaded() {
        console.log("modal-second loaded");
    }

    goBack() {
        this.routerExtension.back();
    }

    close(layoutRoot: View) {
        layoutRoot.closeModal();
    }
}
