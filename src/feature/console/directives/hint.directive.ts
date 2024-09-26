import {Directive, ElementRef, HostBinding, HostListener, inject, Input, OnInit} from '@angular/core';
import {COMMANDS} from "../../../providers/hint.provider";
import {FormControl} from "@angular/forms";

@Directive({
  selector: '[hint]',
  standalone: true
})
export class HintDirective {
  @Input() formControl!: FormControl<string>;

  get value(): string {
    return this.formControl.value;
  }

  get hint(): string {
    if(!this.value || this.value.length < 2) return "";
    return COMMANDS.find(COMMAND => COMMAND.title.startsWith(this.formControl.value))?.title.substring(this.value.length) || "";
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key === "ArrowRight") this.formControl.setValue(this.formControl.value+this.hint);
  }
}
