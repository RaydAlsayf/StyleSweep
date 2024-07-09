import { Component } from "@angular/core";
import { NavigationService } from "src/app/services/language/navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private NavigationService: NavigationService) {}
  navigate(arg0: string) {
    this.NavigationService.navigate([arg0]);
  }
}
