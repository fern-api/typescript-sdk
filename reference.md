## Snippets

<details><summary> <code>fernInternal.snippets.<a href="./src/api/resources/snippets/client/Client.ts">get</a>({ ...params }) -> FernInternal.Snippet[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get snippet by endpoint method and path

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fernInternal.snippets.get({
    endpoint: {
        method: FernInternal.EndpointMethod.Get,
        path: "/v1/search",
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FernInternal.GetSnippetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Snippets.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fernInternal.snippets.<a href="./src/api/resources/snippets/client/Client.ts">load</a>({ ...params }) -> FernInternal.SnippetsPage</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fernInternal.snippets.load({
    page: 1,
    orgId: "vellum",
    apiId: "vellum-ai",
    sdks: [
        {
            type: "python",
            package: "vellum-ai",
            version: "1.2.1",
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FernInternal.ListSnippetsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Snippets.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Templates

<details><summary> <code>fernInternal.templates.<a href="./src/api/resources/templates/client/Client.ts">register</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Store endpoint snippet for a particular SDK.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fernInternal.templates.register({
    orgId: "string",
    apiId: "string",
    apiDefinitionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    snippet: {
        sdk: {
            type: "typescript",
            package: "string",
            version: "string",
        },
        endpointId: {
            path: "string",
            method: FernInternal.EndpointMethod.Put,
        },
        snippetTemplate: {
            type: "v1",
            clientInstantiation: "string",
            functionInvocation: {
                type: "generic",
                imports: ["string"],
                isOptional: true,
                templateString: "string",
                templateInputs: [
                    {
                        type: "template",
                        value: {
                            key: "value",
                        },
                    },
                ],
                inputDelimiter: "string",
            },
        },
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FernInternal.RegisterSnippetTemplateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Templates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fernInternal.templates.<a href="./src/api/resources/templates/client/Client.ts">registerBatch</a>({ ...params }) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Store endpoint snippets for a particular SDK.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fernInternal.templates.registerBatch({
    orgId: "string",
    apiId: "string",
    apiDefinitionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
    snippets: [
        {
            sdk: {
                type: "typescript",
                package: "string",
                version: "string",
            },
            endpointId: {
                path: "string",
                method: FernInternal.EndpointMethod.Put,
            },
            snippetTemplate: {
                type: "v1",
                clientInstantiation: "string",
                functionInvocation: {
                    type: "generic",
                    imports: ["string"],
                    isOptional: true,
                    templateString: "string",
                    templateInputs: [
                        {
                            type: "template",
                            value: {
                                key: "value",
                            },
                        },
                    ],
                    inputDelimiter: "string",
                },
            },
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FernInternal.RegisterSnippetTemplateBatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Templates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fernInternal.templates.<a href="./src/api/resources/templates/client/Client.ts">get</a>({ ...params }) -> FernInternal.EndpointSnippetTemplate</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get the endpoint's snippet template for a particular SDK.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fernInternal.templates.get({
    orgId: "string",
    apiId: "string",
    sdk: {
        type: "typescript",
        package: "string",
        version: "string",
    },
    endpointId: {
        path: "string",
        method: FernInternal.EndpointMethod.Put,
    },
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FernInternal.GetSnippetTemplate`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Templates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
