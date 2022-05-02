# Express MongoDB License API Template

A minimal template for a hardware based licensing and authentication system, written in TypeScript using Express &amp; MongoDB (Mongoose).

&nbsp;

## Getting Started

1. Git clone https://github.com/IdekDude/express-mongo-nft-authentication-template.git
2. npm install

3. Rename the ".env.example.ts" file to ".env"
4. Provide your MongoURI & Update Authority within this file.

&nbsp;

## NPM Commands

| Command        | Effect                                                            |
| -------------- | ----------------------------------------------------------------- |
| `dev:start`    | Launches the api in development mode, with hot reloading enabled. |
| `dev:webpack`  | Compiles a development build of the project                       |
| `prod:webpack` | Compiles a production build of the project                        |

&nbsp;

## API Specification

The following below is a minimal API specification to provide a quick overview of the template functionality.

&nbsp;

### Auth/Verify (POST)

---

The verify route provides an API route for sending a wallet public key and machineId. This route will check if the wallet public key is currently bound to a machine & holds an NFT. If it is bound to a machine it will verify it is the current machine being requested. If the key is not bound or does not hold an NFT, it will then be bound the requesting machine.

_Example Payload_

```
POST

{
    "key":"123456",
    "machineId":"000000"
}
```

&nbsp;

### Auth/Reset (POST)

---

The request route provides a convenient API route for removing the association of a machineId to a license key.

_Example Payload_

```
POST

{
    "key":"123456"
}
```

&nbsp;

### Auth/Heartbeat (Get)

---

The heartbeat route provides a simple api route for verifying a machineId is still registered to a key within this database. This helps prevent key abuse by authenticating, then resetting and allowing someone else to reuse a key.

**The machineID & wallet public key is passed as a URL parameter.**

Example Request

```
GET /auth/heartbeat/machineId/walletAddress
```

&nbsp;

## API Responses

To keep the project minimal and simplified the API provides a preset number of responses corresponding to the result of the data result.

&nbsp;

### Success Messages (HTTP Status Code 200)

```
{
    "message": "Success"
}
```

```
{
    "message":"Key reset"
}
```

&nbsp;

### Failure Messages (HTTP Status Code 400 or 401)

---

```
{
    "message": "Invalid key"
}
```

```
{
    "message":"Bad request"
}
```

```
{
    "message":"The key is already bound or NFT is not in wallet."
}
```

&nbsp;

### Credits
Credits go to [arevi](https://github.com/arevi) for the original [template](https://github.com/arevi/express-mongo-license-api-template)
