import { Fern } from "../index";
import { SnippetTemplateResolver } from "@fern-api/template-resolver";
import { FernRegistry, FernRegistryClient } from "@fern-fern/fdr-cjs-sdk";

export class Template implements Fern.templates.EndpointSnippetTemplate {
    private endpointSnippetTemplate: Fern.EndpointSnippetTemplate;

    constructor(
        public readonly sdk: Fern.snippets.Sdk,
        public readonly endpointId: Fern.commons.EndpointIdentifier,
        public readonly snippetTemplate: Fern.templates.VersionedSnippetTemplate,
        public readonly apiDefinitionId?: Fern.ApiDefinitionId
    ) {
        this.endpointSnippetTemplate = { sdk, endpointId, snippetTemplate, apiDefinitionId };
    }

    /**
     * Resolves a particular request payload against the template to produce a snippet
     * @param payload the paylod to resolve against
     * @returns the snippet
     */
    public async resolve(payload: Fern.snippets.CustomSnippetPayload): Promise<Fern.snippets.Snippet> {
        const response = this.apiDefinitionId != null ? await new FernRegistryClient().api.v1.read.getApi(FernRegistry.ApiDefinitionId(this.apiDefinitionId)) : undefined;
        const _innerResolver = new SnippetTemplateResolver({
            payload: {
                ...payload,
                headers: payload.headers?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                pathParameters: payload.pathParameters?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                queryParameters: payload.queryParameters?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                requestBody: payload.requestBody ?? undefined,
                auth: payload.auth ?? undefined,
            },
            endpointSnippetTemplate: this.endpointSnippetTemplate as FernRegistry.EndpointSnippetTemplate,
        });
        if (response?.ok) {
            return _innerResolver.resolve(response.body);
        } else {
            return _innerResolver.resolve();
        }
    }

    /**
     * Resolves a particular request payload against the template to produce a snippet with
     * formatting.
     * @param payload the paylod to resolve against
     * @returns the snippet
     */
    public async resolveFormatted(payload: Fern.snippets.CustomSnippetPayload): Promise<Fern.snippets.Snippet> {
        const _innerResolver = new SnippetTemplateResolver({
            payload: {
                ...payload,
                headers: payload.headers?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                pathParameters: payload.pathParameters?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                queryParameters: payload.queryParameters?.map((header): FernRegistry.ParameterPayload => {
                    return { name: header.name, value: header.value ?? undefined };
                }),
                requestBody: payload.requestBody ?? undefined,
                auth: payload.auth ?? undefined,
            },
            endpointSnippetTemplate: this.endpointSnippetTemplate as FernRegistry.EndpointSnippetTemplate,
            apiDefinitionGetter: async (id) => {
                const response = await new FernRegistryClient().api.v1.read.getApi(FernRegistry.ApiDefinitionId(id));
                if (response.ok) {
                    return response.body;
                }
                throw new Error(JSON.stringify(response.error));
            },
        });

        return await _innerResolver.resolveWithFormatting();
    }

    public serialize(): string {
        return JSON.stringify(this.endpointSnippetTemplate);
    }

    public static from(template: Fern.templates.EndpointSnippetTemplate): Template {
        return new Template(template.sdk, template.endpointId, template.snippetTemplate, template.apiDefinitionId);
    }
}

export function isNonNullish<T>(x: T | null | undefined): x is T {
    return x != null;
}
