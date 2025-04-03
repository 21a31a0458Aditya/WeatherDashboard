import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, WeatherComponent,FormsModule],
})
export class AppComponent {
  title = 'Weather Dashboard';
  currentWeather: any;
  weatherForecast: any;
}
