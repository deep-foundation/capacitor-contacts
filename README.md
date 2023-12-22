[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-contact.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-contact) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-contact) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

A deep package based on [`@capacitor/contact`](https://www.npmjs.com/package/@capacitor/contact) 

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
- [Table Of Contents](#table-of-contents)
- [Prerequisitions](#prerequisitions)
- [Quick Start](#quick-start)
- [Contact Object Value](#contact-object-value)
- [Update Handling](#update-handling)
- [Contribution](#contribution)

<!-- TABLE_OF_CONTENTS_END -->

# Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

# Quick Start

1. Insert a link of type [`Contact`] 
2. Change its object value to the object with properties described in [Contact Object Value](#contact-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Contact`] object value as links
or  
Insert a link of any type with a any name of the list described in [Contact Object Value](#contact-object-value) from [`Contact`] link to the same [`Contact`] link and set its value to the value of the corresponding property of the [`Contact`] object value

Note: You can use library of this package to do operations described above. Read about it in [Documentation]

# Contact Object Value

The [`Contact`] link can have object value.  
No one field is required. You can add any fields as you want.  Only the fields that are supported by this package will be represented as links   
[Supported fields can be found in the `ContactInfo` interface](https://deep-foundation.github.io/capacitor-contact/types/ContactInfo.html)  
[Example of Contact Object Value](https://deep-foundation.github.io/capacitor-contact/types/ContactInfo.html#md:contact-info-example)

# Update Handling

[`Contact`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`Contact`] object value as links

# Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`Contact`]: https://deep-foundation.github.io/capacitor-contact/classes/Package.html#Contact
[Documentation]: https://deep-foundation.github.io/capacitor-contact/