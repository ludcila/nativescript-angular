import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ModalRouterComponent } from "../modal/modal-router/modal-router.component";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalComponent } from "../modal/modal.component";

@Component({
    moduleId: module.id,
    selector: "second",
    templateUrl: "./second.component.html"
})
export class SecondComponent {
    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef, private routerExtension: RouterExtensions) { }

    onModalNoFrame() {
        const options: ModalDialogOptions = {
            context: {
                navigationVisibility: false
            },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ModalComponent, options).then((res: string) => {
            console.log("moda-no-frame closed");
        });
    }

    onModalFrame() {
        const options: ModalDialogOptions = {
            context: {
                navigationVisibility: true,
                modalRoute: "modal"
            },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ModalRouterComponent, options).then((res: string) => {
            console.log("moda-frame closed");
        });
    }

    goBack() {
        this.routerExtension.back();
    }
}
