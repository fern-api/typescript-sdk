/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fern from "../../..";

export type Snippet =
    | Fern.snippets.Snippet.Typescript
    | Fern.snippets.Snippet.Python
    | Fern.snippets.Snippet.Java
    | Fern.snippets.Snippet.Go;

export declare namespace Snippet {
    interface Typescript extends Fern.snippets.TypeScriptSnippet {
        type: "typescript";
    }

    interface Python extends Fern.snippets.PythonSnippet {
        type: "python";
    }

    interface Java extends Fern.snippets.JavaSnippet {
        type: "java";
    }

    interface Go extends Fern.snippets.GoSnippet {
        type: "go";
    }
}
