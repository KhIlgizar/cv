import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConsoleComponent} from "../feature/console/console.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsoleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv';
}
