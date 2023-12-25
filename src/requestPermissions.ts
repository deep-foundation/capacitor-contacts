import { Contacts } from "@capacitor-community/contacts";
import { emitter } from "./emitter.js";

export async function requestPermissions() {
  const {contacts: permissionStatus} = await Contacts.requestPermissions()
  emitter.emit("permissionsChanged", permissionStatus);
  return permissionStatus;
}