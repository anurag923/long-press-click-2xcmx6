import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  value = 10;

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
}
