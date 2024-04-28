import * as Fern from "../../..";
import * as TemplateResolver from "@fern-api/template-resolver"

export class Template implements Fern.snippets.EndpointSnippetTemplate {
    private endpointSnippetTemplate: Fern.EndpointSnippetTemplate;
    constructor(
        public readonly sdk: Fern.snippets.Sdk,
        public readonly endpointId: Fern.snippets.EndpointIdentifier,
        public readonly snippetTemplate: Fern.snippets.VersionedSnippetTemplate
    ) {
        this.endpointSnippetTemplate = {sdk, endpointId, snippetTemplate};
    }

    public resolve(payload: Fern.snippets.CustomSnippetPayload): Fern.snippets.Snippet {
        const _innerResolver = new TemplateResolver.SnippetTemplateResolver({
            payload,
            endpointSnippetTemplate: this.endpointSnippetTemplate,
        });

        return _innerResolver.resolve();
    }

    public static from(template: Fern.snippets.EndpointSnippetTemplate): Template {
        return new Template(template.sdk, template.endpointId, template.snippetTemplate);
    }
}