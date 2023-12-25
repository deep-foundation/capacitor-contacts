import { Contacts } from "@capacitor-community/contacts";

export async function checkPermissions() {
  return (await Contacts.checkPermissions()).contacts;
}