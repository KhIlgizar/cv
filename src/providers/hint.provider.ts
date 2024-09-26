import {InjectionToken, Provider} from "@angular/core";
import {ConsoleService} from "../feature/console/services/console.service";

export type COMMAND = {
  title: string;
  variants: string[];
  description: string;
}

export const COMMANDS: COMMAND[] = [
  {
    title: "help",
    variants: ["h"],
    description: "Provides help and usage instructions for available commands."
  },
  {
    title: "bio",
    variants: ["b"],
    description: "Displays the user's biography and personal information."
  },
  {
    title: "work",
    variants: ["w"],
    description: "Shows current work-related information."
  },
  {
    title: "projects",
    variants: ["proj"],
    description: "Lists the user's projects."
  },
  {
    title: "clear",
    variants: ["cl"],
    description: "Clears the terminal or command history."
  }
];

export enum COMMANDS_ENUM {
  HELP = "HELP",
  BIO = "BIO",
  WORK = "WORK",
  PROJECTS = "PROJECTS",
  CLEAR = "CLEAR",
}

export const COMMAND_LIST = new InjectionToken<COMMAND[]>("List of terminal commands");
export const COMMAND_LIST_PROVIDER: Provider[] = [{
  provide: COMMAND_LIST,
  useFactory: () => COMMANDS
}]
