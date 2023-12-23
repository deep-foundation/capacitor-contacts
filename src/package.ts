
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const contactTypeLinkId = await package["Contact"].id();
const contactValueLinkId = await package["contactValue"].id();
const handleContactUpdateLinkId = await package["handleContactUpdate"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const contactTypeLinkId = package["Contact"].idLocal();
const contactValueLinkId = package["contactValue"].idLocal();
const handleContactUpdateLinkId = package["handleContactUpdate"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const contact = package["Contact"].name;
const contactValue = package["contactValue"].name;
const handleContactUpdate = package["handleContactUpdate"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/capacitor-contacts',
    });
  }


      /**
      @example
      #### Use id method to get the id of the Contact link
      ```ts
      const package = new Package({deep});
      const contactTypeLinkId = await package["Contact"].id();
      ```
      #### Use localId method to get the local id of the Contact link
      ```ts
      const package = new Package({deep});
      const contactTypeLinkId = await package["Contact"].localId();
      ```
      #### Use name field to get the name of the Contact link
      ```ts
      const package = new Package({deep});
      const contact = await package["Contact"].name;
      ```
      */
      public "Contact" = this.createEntity("Contact");
      /**
      @example
      #### Use id method to get the id of the contactValue link
      ```ts
      const package = new Package({deep});
      const contactValueLinkId = await package["contactValue"].id();
      ```
      #### Use localId method to get the local id of the contactValue link
      ```ts
      const package = new Package({deep});
      const contactValueLinkId = await package["contactValue"].localId();
      ```
      #### Use name field to get the name of the contactValue link
      ```ts
      const package = new Package({deep});
      const contactValue = await package["contactValue"].name;
      ```
      */
      public "contactValue" = this.createEntity("contactValue");
      /**
      @example
      #### Use id method to get the id of the handleContactUpdate link
      ```ts
      const package = new Package({deep});
      const handleContactUpdateLinkId = await package["handleContactUpdate"].id();
      ```
      #### Use localId method to get the local id of the handleContactUpdate link
      ```ts
      const package = new Package({deep});
      const handleContactUpdateLinkId = await package["handleContactUpdate"].localId();
      ```
      #### Use name field to get the name of the handleContactUpdate link
      ```ts
      const package = new Package({deep});
      const handleContactUpdate = await package["handleContactUpdate"].name;
      ```
      */
      public "handleContactUpdate" = this.createEntity("handleContactUpdate");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
