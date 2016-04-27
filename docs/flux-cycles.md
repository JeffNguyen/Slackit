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


## channel Cycles

### channels API Request Actions

* `fetchAllchannels`
  0. invoked from `channelsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/channels` is called.
  0. `receiveAllchannels` is set as the callback.

* `createchannel`
  0. invoked from new channel button `onClick`
  0. `POST /api/channels` is called.
  0. `receiveSinglechannel` is set as the callback.

* `fetchSinglechannel`
  0. invoked from `channelDetail` `didMount`/`willReceiveProps`
  0. `GET /api/channels/:id` is called.
  0. `receiveSinglechannel` is set as the callback.

* `updatechannel`
  0. invoked from `channelForm` `onSubmit`
  0. `POST /api/channels` is called.
  0. `receiveSinglechannel` is set as the callback.

* `destroychannel`
  0. invoked from delete channel button `onClick`
  0. `DELETE /api/channels/:id` is called.
  0. `removechannel` is set as the callback.

### channels API Response Actions

* `receiveAllchannels`
  0. invoked from an API callback.
  0. `channel` store updates `_channels` and emits change.

* `receiveSinglechannel`
  0. invoked from an API callback.
  0. `channel` store updates `_channels[id]` and emits change.

* `removechannel`
  0. invoked from an API callback.
  0. `channel` store removes `_channels[id]` and emits change.


### message API Response Actions

* `receiveAllmessages`
  0. invoked from an API callback.
  0. `message` store updates `_channels` and emits change.

### Store Listeners

* `channelsIndex` component listens to `channel` store.

