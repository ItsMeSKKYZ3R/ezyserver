# ezyserver
### An easier way for create your Node.JS server with express

## Documentation

Install it with npm

Developement dependency

```cmd
$ npm install --save-dev ezyserver
```

Or

```cmd
$ npm install ezyserver
```

## How to create a server and start it?

### For create a server, you need to require ezyserver into your .js or .ts file and you need to call the ezyserver class like it (example)

```js
const { ezyserver } = require("ezyserver");
const port = 5000;
const optionnalMessage = `Server started on http://localhost:${port}!`;

const app = new ezyserver(port, optionnalMessage).start();
```

## How to use the express' middleware functions?
### In ezyserver, you have some functions in the start function.

#### Example


```js
const { ezyserver } = require("ezyserver");
const port = 5000;
const optionnalMessage = `Server started on http://localhost:${port}!`;

const app = new ezyserver(port, optionnalMessage).start();

app.app.get("/", (req, res) => {
  res.send("Your server work correctly!");
});
```

## You can call express' function with the express value

#### Example

```js
app.express.Router(options);
```
