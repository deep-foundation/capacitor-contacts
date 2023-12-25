import { Contacts } from '@capacitor-community/contacts';
import { DeepClient, SerialOperation } from "@deep-foundation/deeplinks/imports/client.js";
import { packageLog } from './packageLog.js';




export interface SaveAllContactsOptions {
  deep: DeepClient;
  containerLinkId: number;
}

export async function saveAllContacts({ deep, containerLinkId }: SaveAllContactsOptions) {
  const log = packageLog.extend(saveAllContacts.name)
  const contactTypeLinkId = await deep.id("@deep-foundation/capacitor-contacts", "Contact");
  const containTypeLinkId = await deep.id("@deep-foundation/core", "Contain");

  const { contacts } = await Contacts.getContacts(
    {
      projection: {
        name: true,
        organization: true,
        birthday: true,
        note: true,
        phones: true,
        emails: true,
        urls: true,
        postalAddresses: true,
        image: true,
      }
    });
    log({contacts})

  const { data: existingContactLinks } = await deep.select({
    type_id: contactTypeLinkId,
    object: {
      _or: contacts.map(contact => ({
        value: {
          _eq: contact.contactId
        },
      }))
    },
    in: {
      type_id: containTypeLinkId,
      from_id: containerLinkId
    }
  });
  log({existingContactLinks})
  const operations: Array<SerialOperation> = [];
  const updateOperations: SerialOperation[] = existingContactLinks.map(existingContactLink => {
    const contact = contacts.find(contact => contact.contactId === existingContactLink.value!.value.contactId);
    return {
      type: "update",
      table: "links",
      exp: {
        id: existingContactLink.id,
      },
      value: {
        value: contact
      }
    };
  });
  log({updateOperations})
  operations.push(...updateOperations);
  const newContacts = contacts.filter(contact => existingContactLinks.some(existingContactLink => existingContactLink.value!.value.contactId === contact.contactId));
  log({newContacts})
  const insertOperation: SerialOperation = {
    type: 'insert',
    table: 'links',
    objects: newContacts.map((contact) => ({
      type_id: contactTypeLinkId,
      object: {
        data: {
          value: contact
        }
      },
      in: {
        data: {
          type_id: containTypeLinkId,
          from_id: containerLinkId
        }
      }
    }))
  };
  log({insertOperation})
  operations.push(insertOperation);
  log({operations})
  const serialResult = await deep.serial({
    operations
  });
  log({serialResult}) 
}
