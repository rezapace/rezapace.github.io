# rezapace.github.io

Landing page pribadi Reza Hidayat — Backend Golang & Automation Engineer.

Live: https://rezapace.github.io/

## Stack

Static HTML, CSS, JavaScript. No build step, no framework.

## Struktur

```
index.html
assets/
  css/style.css
  js/main.js
```

## Jalankan lokal

Buka `index.html` langsung di browser, atau serve pakai static server:

```bash
python3 -m http.server 8000
```

## Deploy

Deploy otomatis ke GitHub Pages lewat GitHub Actions (`.github/workflows/deploy.yml`) setiap push ke branch `main`.
