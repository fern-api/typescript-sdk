
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
        path: "/v1/search"
    }
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
    sdks: [{
            type: "python",
            package: "vellum-ai",
            version: "1.2.1"
        }]
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



