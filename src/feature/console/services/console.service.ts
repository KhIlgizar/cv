import {Inject, Injectable, Optional, signal} from '@angular/core';
import {COMMAND, COMMAND_LIST, COMMAND_LIST_PROVIDER, COMMANDS_ENUM} from "../../../providers/hint.provider";
import {PREFIX} from "../../../consts/PREFIX";
import {NeverError} from "../../../errors/never-error";

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  public lines = signal<string[]>([]);

  constructor(@Optional() @Inject(COMMAND_LIST) readonly commands: COMMAND[]) { }

  add(command: string) {
    this.lines.update(lines => [...lines, PREFIX+command]);
    const COMMAND = command.toUpperCase() as keyof typeof COMMANDS_ENUM
    if(COMMAND in COMMANDS_ENUM) {
      this.do(COMMANDS_ENUM[COMMAND]);
    }
    else {
      this.lines.update(lines => [...lines,
        `"${command}" is not recognized as an internal or external command,`,
        "operable program or batch file, try \"help\"", ]);
    }
  }

  clear() {
    this.lines.set([]);
  }

  help() {
    const commands = Object.values(COMMANDS_ENUM).map(command => `${command}`);
    this.lines.update(lines => [...lines,...commands]);
  }

  private do(command: COMMANDS_ENUM){
    switch (command) {
      case COMMANDS_ENUM.BIO:
        break;
      case COMMANDS_ENUM.CLEAR:
        this.clear();
        break;
      case COMMANDS_ENUM.HELP:
        this.help();
        break;
      case COMMANDS_ENUM.WORK:
        break;
      case COMMANDS_ENUM.PROJECTS:
        break;
      default:
        throw new NeverError(command);
    }
  }
}
