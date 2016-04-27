# Phase 2: Flux Architecture and Channel CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ChanelIndex
  - ChannelIndexItem
* ChannelForm
* MessageForm

### Stores
* Channel
* Message

### Actions
* ApiActions.receiveAllChannels -> triggered by ApiUtil
* ApiActions.receiveSingleChannel
* ApiActions.deleteChannel
* ChannelActions.fetchAllChannels -> triggers ApiUtil
* ChannelActions.fetchSingleChannel
* ChannelActions.createChannel
* ChannelActions.editChannel
* ChannelActions.destroyChannel

### ApiUtil
* ApiUtil.fetchAllChannels
* ApiUtil.fetchSingleChannel
* ApiUtil.createChannel
* ApiUtil.editChannel
* ApiUtil.destroyChannel

## Gems/Libraries
* Flux Dispatcher (npm)
* Foundation
