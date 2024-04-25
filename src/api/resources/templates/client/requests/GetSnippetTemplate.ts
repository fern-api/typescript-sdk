/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../../..";

export interface GetSnippetTemplate {
    /**
     * The organization to create snippets for.
     *
     */
    orgId: Fern.OrgId;
    /**
     * The API name.
     *
     */
    apiId: Fern.ApiId;
    sdk: Fern.Sdk;
    endpointId: Fern.EndpointIdentifier;
}
