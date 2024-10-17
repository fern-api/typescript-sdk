/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../../index";

export interface EndpointSnippetTemplate {
    sdk: Fern.Sdk;
    endpointId: Fern.EndpointIdentifier;
    apiDefinitionId?: Fern.ApiDefinitionId;
    /** The default snippet template to use */
    snippetTemplate: Fern.VersionedSnippetTemplate;
    /**
     * Additional templates to use for this endpoint, for example if you wanted
     * an async example, you could have { "async": Template(...) }.
     */
    additionalTemplates?: Record<string, Fern.VersionedSnippetTemplate>;
}
