import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import * as rimu from "https://raw.github.com/srackham/rimu/master/mod.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
const index = new TextDecoder("utf-8").decode(await Deno.readFile("./src/index.md" as string));
for await (const req of s) {
  req.respond({ 
    body: rimu.render(index) 
  });
}