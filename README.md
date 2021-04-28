Access the following URL, target resource will be returned compressed with `brotli`.

```
https://brotli-compression.deno.dev/?src={URL}
```

# Development

Build wasm from `src/lib.rs`.

```
$ wasm-pack build --target web
```

Run scripts local.

```
$ deployctl run --watch mod.js
```
