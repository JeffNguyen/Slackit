# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## message Cycles

### message API Request Actions

* `fetchAllMessages`
  0. invoked from `messageView.jsx` `componentWillMount`
  0. `GET /api/messages` is called.
  0. `_messagesChanged` is set as the callback.

* `createMessage`
  0. invoked from new message input `onKeyPress`
  0. `POST /api/messages` is called.
  0. `_onMessage` is set as the callback.

### channels API Response Actions

* `receiveMessages`
  0. invoked from an API callback.
  0. `channel` store resets and updates `_messages` and emits change.

* `receiveSingleMessage`
  0. invoked from an API callback.
  0. `message` store updates `_messages` and emits change.

### Store Listeners

* `messageView.jsx` component listens to `message` store.

