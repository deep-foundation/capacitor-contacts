import { UseContactsSyncOptions, useContactsSync } from "../hooks/use-contacts-sync.js";

export function WithContactsSync(options: WithContactsSyncOptions) {
  useContactsSync(options)
  return options.children ?? null
}

export interface WithContactsSyncOptions extends UseContactsSyncOptions {
  children?: JSX.Element
}