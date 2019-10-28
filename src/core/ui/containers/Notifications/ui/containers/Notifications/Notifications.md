## NotificationsComponent

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**clearNotification** | `Function` |  | :white_check_mark: | Action that reset the `Notification` container
**notifications** | `Shape` | `{     type: 'info',     message: null,     props: null,     timeout: null, }` | :x: | The currently shown notification, with type, message, timeout
**notifications.message** | `String` |  | :x: | Message to be displayed in the `Notifications` component
**notifications.timeout** | `Number` |  | :x: | Defined in ms. When expired it the `Notifications` component will slide out
**notifications.type** | `String` |  | :x: | Notification type can be 'danger', 'info', 'success', 'warning'

