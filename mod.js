import init, { compress_by_brotli } from "./pkg/compress.js";

if (Deno.env.get("ENVIRONMENT") === "production") {
  const res = await fetch(
    "https://raw.githubusercontent.com/numb86/brotli-compression/main/pkg/compress_bg.wasm"
  );
  await init(await res.arrayBuffer());
} else {
  await init(Deno.readFile("./pkg/compress_bg.wasm"));
}

addEventListener("fetch", async (event) => {
  if (event.request.method !== "GET") {
    return event.respondWith(
      new Response("Method Not Allowed", {
        status: 405,
      })
    );
  }

  const originalResourceUrl = new URL(event.request.url).searchParams.get(
    "src"
  );

  if (!originalResourceUrl) {
    return event.respondWith(
      new Response("Require `src` query", {
        status: 400,
      })
    );
  }

  try {
    new URL(originalResourceUrl);
  } catch {
    return event.respondWith(
      new Response(`${originalResourceUrl} is not URL`, {
        status: 400,
      })
    );
  }

  const response = await fetch(originalResourceUrl);
  if (!response.ok) {
    return event.respondWith(
      new Response("Failed to get target resource", {
        status: response.status,
      })
    );
  }

  if (!response.headers.has("content-type")) {
    return event.respondWith(
      new Response("Target resource has not `content-type`", {
        status: 500,
      })
    );
  }

  const isTargetResource = ((contentTypeFieldValue) => {
    const ALLOW_LIST = [/^text\//, /^application\/json/, /^application\/xml/];
    return ALLOW_LIST.some((reg) => contentTypeFieldValue.match(reg));
  })(response.headers.get("content-type"));

  const hasAcceptEncodingField = event.request.headers.has("accept-encoding");
  const isAbleToAcceptBrotli =
    hasAcceptEncodingField &&
    event.request.headers.get("accept-encoding").includes("br");

  if (isTargetResource && isAbleToAcceptBrotli) {
    const text = await response.text();
    const body = compress_by_brotli(text);

    const varyFieldValue = response.headers.get("vary");

    let vary = "";
    if (!varyFieldValue) {
      vary = "Accept-Encoding";
    } else {
      const hasAcceptEncoding = varyFieldValue.includes("Accept-Encoding");
      vary = hasAcceptEncoding
        ? varyFieldValue
        : `${varyFieldValue}, Accept-Encoding`;
    }

    const customHeader = {};
    for (const [key, value] of response.headers.entries()) {
      if (key !== "content-encoding") {
        customHeader[key] = value;
      }
    }

    return event.respondWith(
      new Response(body, {
        status: 200,
        headers: {
          ...customHeader,
          vary,
          "content-encoding": "br",
        },
      })
    );
  }

  const body = await response.arrayBuffer();
  event.respondWith(
    new Response(body, {
      status: 200,
      headers: response.headers,
    })
  );
});
