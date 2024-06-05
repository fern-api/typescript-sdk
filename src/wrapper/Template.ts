import { Fern } from "../index";
import { SnippetTemplateResolver } from "@fern-api/template-resolver";

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
            payload,
            endpointSnippetTemplate: this.endpointSnippetTemplate,
        });

        return _innerResolver.resolve();
    }

    public static from(template: Fern.templates.EndpointSnippetTemplate): Template {
        return new Template(template.sdk, template.endpointId, template.snippetTemplate);
    }
}