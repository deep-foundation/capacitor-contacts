import { Contacts } from "@capacitor-community/contacts";

export async function requestPermissions() {
  return await Contacts.requestPermissions();
}