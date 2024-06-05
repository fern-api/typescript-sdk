import { FernClient as GeneratedClient } from "../Client";
import { TemplatesClient } from "./TemplatesClient";


export class FernClient extends GeneratedClient {

    protected _templates: TemplatesClient | undefined;

    public get templates(): TemplatesClient {
        return (this._templates ??= new TemplatesClient(this._options));
    }
}
