# AI Output Directory

> **Purpose**: Storage for browser-agent screenshots, scraped data, and automation outputs.
> **Created**: 2026-01-20

---

## Contents

| Type             | Pattern  | Description                 |
| ---------------- | -------- | --------------------------- |
| **Screenshots**  | `*.png`  | Browser automation evidence |
| **Data Exports** | `*.json` | Scraped/extracted data      |
| **Reports**      | `*.md`   | Temporary agent reports     |

## Naming Convention

```
YYYY-MM-DD-platform-action-seq.ext

Examples:
2026-01-20-expedia-login-001.png
2026-01-20-hotelrunner-rates-001.json
2026-01-20-booking-reservations-001.md
```

## Cleanup Policy

- Files older than 30 days may be archived to `archive/`
- Important screenshots should be referenced in reports

---

_browser-agent output directory_
