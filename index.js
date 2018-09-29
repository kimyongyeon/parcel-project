import { Controller } from "./controller";

let fnTest = () => console.log("hello parcel");
fnTest();

class Main {
    constructor() {
        this.name = "hello parcel";
    }
}

let main = new Main();
console.log(`name => ${main.name}`);

var controller = new Controller();
console.log(controller.controllerName);