import { useEffect } from "react"
import { saveAllContacts } from "../../saveAllContacts.js"
import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js"

export function useContactsSync(options: UseContactsSyncOptions) {
  const {intervalInMs = 60*1000, deep, containerLinkId} = options
  useEffect(() => {
    saveAllContacts({deep, containerLinkId})
    const interval = setInterval(() => {
      saveAllContacts({deep, containerLinkId})
    }, intervalInMs)
    return () => {
      clearInterval(interval)
    }
  })
}

export interface UseContactsSyncOptions {
  deep: DeepClient;
  containerLinkId: number;
  intervalInMs?: number
}