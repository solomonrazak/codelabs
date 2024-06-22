import { HousingLocation } from "../housinglocation";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="HousingLocation.photo"
        alt="Exterior photo of {{ HousingLocation.name }}"
      />
      <h2 class="listing-heading">{{ HousingLocation.name }}</h2>
      <p class="listing-location">{{ HousingLocation.city }}, {{HousingLocation.state}}</p>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() HousingLocation!: HousingLocation;
}
