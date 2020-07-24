import { createContext } from "react";
import { ChatStore } from "./ChatStore";
import { SettingsStore } from "./SettingsStore";

export const chatStore = createContext(new ChatStore());
export const settingsStore = createContext(new SettingsStore());
