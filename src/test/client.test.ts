import { Fern } from "WrappedClient";
import exp from "constants";

/**
* This is a test file for the SDK.
* 
* Add any tests here and make sure to mark this file
* in `.fernignore`. 
*/
describe("test", () => {
    it("basic snippet test", async () => {
        expect(true).toBe(true);
        const fern = new Fern({});
        const template = await fern.templates.get({})
        const snippet = template.resolve({});
        
        expect(snippet).toBeDefined();
        expect(snippet.type).toBe("python");
        if (snippet.type == "python") {
            expect(snippet.async_client).toBe("print('Hello, World!')");
        }

        const snippetAgain = template.resolve({});
        
        expect(snippetAgain).toBeDefined();
        expect(snippetAgain.type).toBe("python");
        if (snippetAgain.type == "python") {
            expect(snippetAgain.async_client).toBe("print('Hello, World!')");
        }
    });
});