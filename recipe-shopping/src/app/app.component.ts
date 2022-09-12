import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-shopping';

  selectedFeature: string = 'recipe';

  onSelctFeature(feature: string) {
    // console.log(feature);
    this.selectedFeature = feature;
  }
}
