# Botika Socket Javascript Client

This Botika Socket client library supports web browsers, web workers and Node.js

Javascript Library for interacting with the Botika Socket Client.

## Installation

### Web

If you're using Botika Socket Client on a web page, you can install the library via:

#### Yarn (or NPM)

You can use any NPM-compatible package manager, including NPM itself and Yarn.

```bash
npm i botika-socket-client
```

Then:

```javascript
import Socket from 'botika-socket-client';
```

Or, if you're not using ES6 modules:

```javascript
const Socket = require('botika-socket-client');
```

#### UNPKG

```html
<script src="https://unpkg.com/botika-socket-client/dist/socket.js"></script>
```

### Typescript

We've provided typescript declarations since v1.x.x. Most things should work
out of the box but if you need access to specific types you can import them
like so:

```typescript
import Socket from 'botika-socket-client';
import * as SocketTypes from 'botika-socket-client';

var options: SocketTypes.SocketOptions;
...
```

## Initialization

```javascript
const baseURL = 'https://socket.example.com';
const auth = { token: 'JWT_TOKEN' };
const socket = new Socket(baseURL, auth);
```

## Subscribing to channels

### Public channels

The default method for subscribing to a channel involves invoking the `channel` method of your socket object:

```js
// Options get from https://socket.io/docs/v4/client-options/
const options = {};
const channel = socket.channel('my-channel', options);
```

This returns a Channel object which events can be bound to.

## Binding to events

Event binding takes a very similar form to the way events are handled in socket.io-client. You can use the following methods either on a channel object, to bind to events on a particular channel; or on the socket object, to bind to events on all subscribed channels simultaneously.

### `on` and `off`

Binding to "new-message" on channel: The following logs message data to the console when "new-message" is received

```javascript
channel.on('new-message', function (data) {
  console.log(data.message);
});
```

Unsubscribe behaviour varies depending on which parameters you provide it with. For example:

```javascript
// Remove just `handler` for the `new-comment` event
channel.off('new-comment', handler);
```
