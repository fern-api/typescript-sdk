/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../../../index";

/**
 * @example
 *     {
 *         orgId: "string",
 *         scope: "string"
 *     }
 */
export interface GenerateTokenRequest {
    /**
     * The organization to generate a token for.
     *
     */
    orgId: Fern.OrgId;
    /**
     * The scope of the token. Valid scopes include:
     *   - admin
     *   - sdk:read:{package_name}
     *
     */
    scope: string;
}
