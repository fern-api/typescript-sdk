/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";

export const PythonSnippet: core.serialization.ObjectSchema<
    serializers.snippets.PythonSnippet.Raw,
    Fern.snippets.PythonSnippet
> = core.serialization.object({
    sdk: core.serialization.lazyObject(async () => (await import("../../..")).snippets.PythonSdk),
    asyncClient: core.serialization.property("async_client", core.serialization.string()),
    syncClient: core.serialization.property("sync_client", core.serialization.string()),
});

export declare namespace PythonSnippet {
    interface Raw {
        sdk: serializers.snippets.PythonSdk.Raw;
        async_client: string;
        sync_client: string;
    }
}
