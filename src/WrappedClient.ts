import * as environments from "./environments";
import * as core from "./core";
import { FernInternalClient } from "Client";
import { TemplateWrapper } from "api/resources/templates/client/wrapper/Client";

export declare namespace Fern {
    interface Options {
        environment?: core.Supplier<environments.FernInternalEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Fern extends FernInternalClient {
    constructor(protected readonly _options: Fern.Options = {}) {
        super(_options);
    }

    protected _templates: TemplateWrapper | undefined;

    public get templates(): TemplateWrapper {
        return (this._templates ??= new TemplateWrapper(this._options));
    }
}
