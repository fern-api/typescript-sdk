## Snippets

<details><summary> <code>fern.snippets.<a href="./src/api/resources/snippets/client/Client.ts">get</a>({ ...params }) -> Fern.Snippet[]</code> </summary>

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
await fern.snippets.get({
    endpoint: {
        method: Fern.EndpointMethod.Get,
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

**request: `Fern.GetSnippetRequest`**

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

<details><summary> <code>fern.snippets.<a href="./src/api/resources/snippets/client/Client.ts">load</a>({ ...params }) -> Fern.SnippetsPage</code> </summary>

<dl>

<dd>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fern.snippets.load({
    page: 1,
    orgId: "vellum",
    apiId: "vellum-ai",
    sdks: [
        {
            type: "python",
            package: "vellum-ai",
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

**request: `Fern.ListSnippetsRequest`**

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

<details><summary> <code>fern.templates.<a href="./src/api/resources/templates/client/Client.ts">register</a>({ ...params }) -> void</code> </summary>

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
await fern.templates.register({
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
            method: Fern.EndpointMethod.Put,
            identifierOverride: "string",
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
        additionalTemplates: {
            string: {
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

**request: `Fern.RegisterSnippetTemplateRequest`**

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

<details><summary> <code>fern.templates.<a href="./src/api/resources/templates/client/Client.ts">registerBatch</a>({ ...params }) -> void</code> </summary>

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
await fern.templates.registerBatch({
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
                method: Fern.EndpointMethod.Put,
                identifierOverride: "string",
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
            additionalTemplates: {
                string: {
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

**request: `Fern.RegisterSnippetTemplateBatchRequest`**

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

<details><summary> <code>fern.templates.<a href="./src/api/resources/templates/client/Client.ts">get</a>({ ...params }) -> Fern.EndpointSnippetTemplate</code> </summary>

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
await fern.templates.get({
    orgId: "string",
    apiId: "string",
    sdk: {
        type: "typescript",
        package: "string",
        version: "string",
    },
    endpointId: {
        path: "string",
        method: Fern.EndpointMethod.Put,
        identifierOverride: "string",
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

**request: `Fern.GetSnippetTemplate`**

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
