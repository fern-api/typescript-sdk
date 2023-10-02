# Fern Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/assemblyai)](https://www.npmjs.com/package/@fern-api/node-sdk)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Fern Node.js library provides access to the Fern's Public API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://fern.docs.buildwithfern.com/api-reference/overview/introduction).

## Installation

```
npm install --save @fern-api/node-sdk
# or
yarn add @fern-api/node-sdk
```

## Usage
```typescript
import { FernClient, Fern } from "@fern-api/node-sdk";

const fern = new FernClient({
    token: "YOUR_API_KEY",
});

const snippets = await fern.snippets.get({
  endpoint: {
    method: "GET",
    path: "/api/users",
  }
});
```

### Handling Errors
When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [FernError](./src/errors/FernError.ts)
will be thrown:

```ts
import { FernError } from "@fern-api/assemblyai";

try {
  await fern.snippets.get(...);
} catch (err) {
  if (err instanceof FernError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

### Request Options

The HTTP Client accepts a `RequestOptions` class where you can specify 
a customized timeout. 

```typescript
const snippets = await fern.snippets.get(
  {
    endpoint: {
      method: "GET",
      path: "/api/users",
    }
  }, 
  {
    timeoutInSeconds: 60 // increase timeout in second
  });
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we 
recommend pinning the package version to a specific version in your package.json file. This way, you can install the 
same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, otherwise 
they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, 
but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
