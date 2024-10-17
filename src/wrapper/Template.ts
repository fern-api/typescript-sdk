import { Fern } from "../index";
import { SnippetTemplateResolver } from "@fern-api/template-resolver";
import { FdrClient, FdrAPI } from "@fern-api/fdr-sdk";

export class Template implements Fern.templates.EndpointSnippetTemplate {
    private endpointSnippetTemplate: Fern.EndpointSnippetTemplate;
    
    constructor(
        public readonly sdk: Fern.snippets.Sdk,
        public readonly endpointId: Fern.commons.EndpointIdentifier,
        public readonly snippetTemplate: Fern.templates.VersionedSnippetTemplate
    ) {
        this.endpointSnippetTemplate = {sdk, endpointId, snippetTemplate};
    }

    /**
     * Resolves a particular request payload against the template to produce a snippet
     * @param payload the paylod to resolve against
     * @returns the snippet
     */
    public resolve(payload: Fern.snippets.CustomSnippetPayload): Fern.snippets.Snippet {
        const _innerResolver = new SnippetTemplateResolver({
            payload: {
                ...payload,
                headers: payload.headers?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                pathParameters: payload.pathParameters?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                queryParameters: payload.queryParameters?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                requestBody: payload.requestBody ?? undefined,
                auth: payload.auth ?? undefined,
            },
            endpointSnippetTemplate: this.endpointSnippetTemplate as FdrAPI.EndpointSnippetTemplate,
            provideFdrClient: () => new FdrClient(),
        });

        return _innerResolver.resolve();
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
                headers: payload.headers?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                pathParameters: payload.pathParameters?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                queryParameters: payload.queryParameters?.map((header): FdrAPI.ParameterPayload => { return { name: header.name, value: header.value ?? undefined } }),
                requestBody: payload.requestBody ?? undefined,
                auth: payload.auth ?? undefined,
            },
            endpointSnippetTemplate: this.endpointSnippetTemplate as FdrAPI.EndpointSnippetTemplate,
            provideFdrClient: () => new FdrClient(),
        });

        return await _innerResolver.resolveWithFormatting();
    }

    public serialize(): string {
        return JSON.stringify(this.endpointSnippetTemplate);
    }

    public static from(template: Fern.templates.EndpointSnippetTemplate): Template {
        return new Template(template.sdk, template.endpointId, template.snippetTemplate);
    }
}

export function isNonNullish<T>(x: T | null | undefined): x is T {
    return x != null;
}