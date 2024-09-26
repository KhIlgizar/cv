import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ICONS_PATH} from "../../consts/ICONS_PATH";
import {HintDirective} from "./directives/hint.directive";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {PREFIX} from "../../consts/PREFIX";
import {ConsoleService} from "./services/console.service";
import {COMMAND_LIST_PROVIDER} from "../../providers/hint.provider";

@Component({
  selector: 'app-console',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HintDirective,
    ReactiveFormsModule
  ],
  templateUrl: './console.component.html',
  styleUrl: './console.component.scss',
  providers: [COMMAND_LIST_PROVIDER, ConsoleService]
})
export class ConsoleComponent implements AfterViewInit {
  hint: string = "";
  control: FormControl = new FormControl<string>("");
  @ViewChild(HintDirective) hint_input!: HintDirective;
  @ViewChild("input") input!: ElementRef<HTMLElement>;
  @ViewChild("span") span!: ElementRef<HTMLElement>;

  buttons: string[] = ICONS_PATH;
  protected readonly PREFIX = PREFIX;

  constructor(public consoleService: ConsoleService) {}

  ngAfterViewInit(): void {
    this.control.valueChanges.subscribe(_asd => {
      this.span.nativeElement.innerHTML = this.control.value.replace(/\s/g, '&nbsp;');
      this.input.nativeElement.style.width = this.span.nativeElement.offsetWidth + 'px';
      this.hint = this.hint_input.hint;
    })
  }

  onEnter() {
    this.consoleService.add(this.control.value);
    this.control.setValue("")
  }

  @HostListener("click")
  click(_: Event): void {
    this.input.nativeElement.focus();
  }
}
