/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class InvalidPageError extends errors.FernError {
    constructor(body: string) {
        super({
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, InvalidPageError.prototype);
    }
}
