import { serve } from "https://deno.land/std@0.93.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 3000 });
console.log("http://localhost:3000/");

for await (const request of server) {
  request.respond({ body: "<h1>Hello World</h1>" })
 
}