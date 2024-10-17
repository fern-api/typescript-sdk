import { Templates as GeneratedTemplatesClient } from "../api/resources/templates/client/Client";
import { Fern } from "../index";
import { Template } from "./Template";

export class TemplatesClient extends GeneratedTemplatesClient {
    /**
     * Get the endpoint's snippet template for a particular SDK.
     * @throws {@link Fern.UnauthorizedError}
     * @throws {@link Fern.SnippetNotFound}
     */
    public async get(
        request: Fern.GetSnippetTemplate,
        requestOptions?: GeneratedTemplatesClient.RequestOptions
    ): Promise<Template> {
        const innerTemplate = await super.get(request, requestOptions);
        return Template.from(innerTemplate);
    }
}
