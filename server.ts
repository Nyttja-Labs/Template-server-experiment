import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// deno run --allow-all --watch server.ts
const DEFAULT_PORT = 3001;

const router = new Router();

/**
 * POST /prompt
 * Request body JSON: { "q": "some instruction" }
 */
router.post("/prompt", async (context: any) => {
    try {
        const body = await context.request.body.json();
        const prompt = body.q;

        console.log(body);
        console.log(prompt);

        if (!prompt) {
            context.response.status = 400;
            context.response.body = { error: "No prompt provided" };
            return;
        }

        const cmd = [
            "aider",
            "--model",
            "deepseek/deepseek-coder",
            "--no-show-model-warnings",
            "--no-browser",
            "--yes",
            "--stream",
            "--auto-commits",
            "--message",
            prompt
        ];

        const currentWorkingDirectory = Deno.cwd();
        console.log(currentWorkingDirectory);

        const process = Deno.run({
            cmd,
            cwd: currentWorkingDirectory,
            stdout: "piped",
            stderr: "piped",
        });

        // Wait for the process to finish
        const [status, rawOutput, rawError] = await Promise.all([
            process.status(),
            process.output(),
            process.stderrOutput(),
        ]);

        // Convert Uint8Array -> string
        const output = new TextDecoder().decode(rawOutput);
        const errorOutput = new TextDecoder().decode(rawError);

        // Close resources
        process.close();

        if (status.success) {
            // Aider finished successfully
            context.response.status = 200;
            context.response.body = { success: true, output };
        } else {
            // Aider errored or exited with non-zero code
            context.response.status = 500;
            context.response.body = {
                success: false,
                error: `Aider process exited with code ${status.code}`,
                logs: errorOutput || output,
            };
        }
    } catch (err) {
        console.error("Invocation failed:", err);
        context.response.status = 500;
        context.response.body = {
            success: false,
            error: err.message,
        };
    }
});

const app = new Application();

// Add the router to your application
app.use(router.routes());
app.use(router.allowedMethods());

// Start listening
const port = Number(Deno.env.get("PORT")) || DEFAULT_PORT;
console.log(`Server running on port ${port}`);
await app.listen({ port });
