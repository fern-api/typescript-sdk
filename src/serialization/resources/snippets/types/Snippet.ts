/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";
import { TypeScriptSnippet } from "./TypeScriptSnippet";
import { PythonSnippet } from "./PythonSnippet";
import { JavaSnippet } from "./JavaSnippet";
import { GoSnippet } from "./GoSnippet";
import { RubySnippet } from "./RubySnippet";

export const Snippet: core.serialization.Schema<serializers.Snippet.Raw, Fern.Snippet> = core.serialization
    .union("type", {
        typescript: TypeScriptSnippet,
        python: PythonSnippet,
        java: JavaSnippet,
        go: GoSnippet,
        ruby: RubySnippet,
    })
    .transform<Fern.Snippet>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Snippet {
    type Raw = Snippet.Typescript | Snippet.Python | Snippet.Java | Snippet.Go | Snippet.Ruby;

    interface Typescript extends TypeScriptSnippet.Raw {
        type: "typescript";
    }

    interface Python extends PythonSnippet.Raw {
        type: "python";
    }

    interface Java extends JavaSnippet.Raw {
        type: "java";
    }

    interface Go extends GoSnippet.Raw {
        type: "go";
    }

    interface Ruby extends RubySnippet.Raw {
        type: "ruby";
    }
}
