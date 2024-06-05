/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../../index";

export type Sdk = Fern.Sdk.Typescript | Fern.Sdk.Python | Fern.Sdk.Go | Fern.Sdk.Ruby | Fern.Sdk.Java;

export declare namespace Sdk {
    interface Typescript extends Fern.TypeScriptSdk {
        type: "typescript";
    }

    interface Python extends Fern.PythonSdk {
        type: "python";
    }

    interface Go extends Fern.GoSdk {
        type: "go";
    }

    interface Ruby extends Fern.RubySdk {
        type: "ruby";
    }

    interface Java extends Fern.JavaSdk {
        type: "java";
    }
}
