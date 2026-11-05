# Exported documentation

## View locally

Run `node serve.js` (or double-click `Start Docs.command` on macOS, `Start Docs.bat` on Windows) and open `http://localhost:3000`. Requires Node.js.

## Host on your own server

Serve this folder as static files with these rules:

1. **Pages:** a request for `/<path>` serves `<path>/index.html`.
2. **Caching:** serve `_mintlify/assets/*` and `_mintlify/export-assets/*` with `Cache-Control: public, max-age=31536000, immutable`, and pages with `Cache-Control: no-cache`.

`serve.js` implements both rules and can be used as a reference.
