import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import * as rimu from "https://raw.github.com/srackham/rimu/master/mod.ts";
import { Application, Router } from "https://deno.land/x/denotrain@v0.4.3/mod.ts";

const index = new TextDecoder("utf-8").decode(await Deno.readFile("./src/index.md" as string));
const indexHTML = rimu.render(index);

const app = new Application({port: 3001});

app.use((ctx) => {
  ctx.cookies["content-type"] = "html";
  return;
});

app.get("/", (ctx) => {
  ctx.res.setMimeType('text/html')
  return indexHTML; 
});

await app.run();
