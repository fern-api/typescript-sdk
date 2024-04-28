/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";
import { PayloadInput } from "./PayloadInput";

export const TemplateInput: core.serialization.Schema<serializers.TemplateInput.Raw, Fern.TemplateInput> =
    core.serialization
        .union("type", {
            template: core.serialization.object({
                value: core.serialization.lazy(async () => (await import("../../..")).Template),
            }),
            payload: PayloadInput,
        })
        .transform<Fern.TemplateInput>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace TemplateInput {
    type Raw = TemplateInput.Template | TemplateInput.Payload;

    interface Template {
        type: "template";
        value: serializers.Template.Raw;
    }

    interface Payload extends PayloadInput.Raw {
        type: "payload";
    }
}
