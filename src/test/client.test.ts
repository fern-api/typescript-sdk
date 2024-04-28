import { Fern } from "../WrappedClient";

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
        const template = await fern.templates.get({
            orgId: "octoai",
            apiId: "api",
            sdk: {
                type: "python",
                package: "octoai",
                version: "0.0.7"
            },
            endpointId: {
                path: "/v1/chat/completions",
                method: "POST"
            }
        })

        const snippet = template.resolve({
            requestBody: {  
                "messages": [       
                  {               
                      "role": "system",  
                      "content": "You are a helpful assistant."
                  },                                
                  {                  
                      "role": "user",
                      "content": "Hello world"      
                  }                               
                ],                
                "model": "qwen1.5-32b-chat",
                "max_tokens": 512,
                "presence_penalty": 0,
                "temperature": 0.1,
                "top_p": 0.9
            }
        });
        expect(snippet).toBeDefined();
        expect(snippet.type).toBe("python");
        if (snippet.type == "python") {
            expect(snippet.async_client).toBe("from .chat_message import ChatMessage\n\nfrom octoai.client import AsyncOctoAI\n\nclient = AsyncOctoAI(\n    api_key=\"YOUR_API_KEY\",\n)\n\nawait client.text_gen.create_chat_completion_stream(\n\tmax_tokens=512,\n\tmessages=[\n\t\tChatMessage(\n\t\t\tcontent=\"You are a helpful assistant.\",\n\t\t\trole=\"system\"\n\t\t),\n\t\tChatMessage(\n\t\t\tcontent=\"Hello world\",\n\t\t\trole=\"user\"\n\t\t)\n\t],\n\tmodel=\"qwen1.5-32b-chat\",\n\tpresence_penalty=0,\n\ttemperature=0.1,\n\ttop_p=0.9\n)");
        }

        const snippetAgain = template.resolve({
            requestBody: {  
                "messages": [],                
                "model": "test123",
                "max_tokens": 2,
                "presence_penalty": 0,
                "temperature": 0.1,
                "top_p": 0.9
            }
        });
        expect(snippetAgain).toBeDefined();
        expect(snippetAgain.type).toBe("python");
        if (snippetAgain.type == "python") {
            expect(snippetAgain.async_client).toBe("\n\nfrom octoai.client import AsyncOctoAI\n\nclient = AsyncOctoAI(\n    api_key=\"YOUR_API_KEY\",\n)\n\nawait client.text_gen.create_chat_completion_stream(\n\tmax_tokens=2,\n\tmessages=[\n\t\t\n\t],\n\tmodel=\"test123\",\n\tpresence_penalty=0,\n\ttemperature=0.1,\n\ttop_p=0.9\n)");
        }
    });
});