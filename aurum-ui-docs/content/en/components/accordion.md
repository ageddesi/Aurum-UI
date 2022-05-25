---
title: Accordion
description: ''
category: 'components'
---
## Selector

```html
<aurum-accordion></aurum-accordion>
```

## Properties
| Name       | type   | default | Description                                                                                            | Allowed Values                                  |
|------------|--------|---------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| design     | string | blocked | Defines the style of the accordion group and its children                                              |  |
| index      | string | 0       | The order position of the accordion in relation to its parent accordion-group                          |                                |
| header     | string | ""      | The header text to display in the accordion                                                            |                                |
| subHeader  | string | ""      | The subHeader text to display in the accordion, if empty than no space will be taken up in the design. |                                |
| isExpanded | string | false   | Inform the accordion if itself is expanded or not by default                                           |                                |

## Events
accordion-toggled

this event is fired of whenever the header of the accordion has been clicked. It will provide an object of the following data.
```json
{
  detail: {
    index: 1, // The index of the accordion
    status: true // The new expanded state of the accordion
  }
}
```
