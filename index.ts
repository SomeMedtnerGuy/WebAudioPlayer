import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const fastify = Fastify()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(fastifyStatic, {
  root: __dirname
});

fastify.get("/", async (_req, reply) => {
    reply.type('text/html').send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Audio Test</title>
        </head>
        <body>
            <button id="loader">Load AudioPlayer</button>
            <button id="play-btn">Play</button>
            <script type="module" src="/main.js"></script>
        </body>
        </html>
    `);
});

try {
    fastify.listen({ port: 7777, host: '127.0.0.1'})
    console.log("server started")
} catch (err) {
    fastify.log.error(err);
}