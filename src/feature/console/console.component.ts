import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ICONS_PATH} from "../../consts/ICONS_PATH";

@Component({
  selector: 'app-console',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './console.component.html',
  styleUrl: './console.component.scss'
})
export class ConsoleComponent {
  buttons: string[] = ICONS_PATH;
}
