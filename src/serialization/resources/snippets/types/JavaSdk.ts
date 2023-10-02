/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";

export const JavaSdk: core.serialization.ObjectSchema<serializers.snippets.JavaSdk.Raw, Fern.snippets.JavaSdk> =
    core.serialization.object({
        group: core.serialization.string(),
        artifact: core.serialization.string(),
        version: core.serialization.string(),
    });

export declare namespace JavaSdk {
    interface Raw {
        group: string;
        artifact: string;
        version: string;
    }
}
