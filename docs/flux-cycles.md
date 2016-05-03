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
  0. invoked from `messageView` `componentWillMount`
  0. `GET /api/messages` is called.
  0. `_messagesChanged` is set as the callback.

* `fetchAllMessages`
  0. invoked from `channelIndexItem` `_setUrl`
  0. `GET /api/messages` is called.
  0. no callback set - this is meant to trigger a response in messageView

* `createMessage`
  0. invoked from new message input `onKeyPress`
  0. `POST /api/messages` is called.
  0. `this.chatroom.bind('new_message')` is set to listen to any newly created messages
  0. `_messagesChanged` will be invoked from the MessageStore 

### message API Response Actions

* `receiveMessages`
  0. invoked from an API callback.
  0. `message` store resets and updates `_messages` and emits change.

* `receiveSingleMessage`
  0. invoked from an API callback.
  0. `message` store updates `_messages` with new message and emits change.

### Store Listeners

* `messageView` component listens to `message` store.

## channel Cycles

### channel API Request Actions

* `fetchAllChannels`
  0. invoked from `channelView` `componentWillMount`
  0. `GET /api/channels` is called.
  0. `_channelViewChanged` is set as the callback.

* `createChannel`
  0. invoked from `createChannelItem` `handleSubmit`
  0. `POST /api/channels` is called.
  0. this will reference the callback set in `channelView` `_channelViewsChanged`

### channel API Response Actions

* `receiveChannels`
  0. invoked from an API callback.
  0. `channel` store resets and updates `_channels` and emits change.

* `receiveChannel`
  0. invoked from an API callback.
  0. `channel` store updates `_messages` with new channel and emits change.

### Store Listeners

* `channelView` component listens to `channel` store.

## channel_user Cycles

### channel_user API Request Actions

* `createChannelUserEntry`
  0. invoked from `addPeopleChannelItem` `_handleSubmit`
  0. `POST /api/channel_users` is called
  0. will create an entry to the join table linking specified user with specified channel
  0. user is specified through passing in client side email parameter



  