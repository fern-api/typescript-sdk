/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../../index";

export type TemplateInput = Fern.TemplateInput.Template | Fern.TemplateInput.Payload;

export declare namespace TemplateInput {
    interface Template {
        type: "template";
        value: Fern.Template;
    }

    interface Payload extends Fern.PayloadInput {
        type: "payload";
    }
}
