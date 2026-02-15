#!/usr/bin/env python3
"""Domain-level verification summary for Rooms (v1)."""

from __future__ import annotations

from pathlib import Path
import re
import sys

ROOMS_CANONICAL = Path("data/rooms/rooms.md")
ROOMS_RECON_LOG = Path("data/rooms/rooms-reconciliation-log.md")


def main() -> int:
    if not ROOMS_CANONICAL.exists():
        print("ERROR: missing canonical rooms.md")
        return 1
    if not ROOMS_RECON_LOG.exists():
        print("ERROR: missing rooms-reconciliation-log.md")
        return 1

    md = ROOMS_CANONICAL.read_text(encoding="utf-8")
    rows = [l for l in md.splitlines() if l.startswith("| R") and not l.startswith("| Room ID")]
    # Profiles may be inline (### R## — ) or in individual files (docs/rooms/*/R##_*.md)
    profile_count = len(re.findall(r"^### R\d{2} — ", md, flags=re.M))
    profile_files = list(Path("docs/rooms").glob("*/R[0-9][0-9]_*.md")) if Path("docs/rooms").exists() else []
    total_profiles = max(profile_count, len(profile_files))

    print("Rooms Domain Verify")
    print(f"- canonical file: {ROOMS_CANONICAL}")
    print(f"- room table rows: {len(rows)}")
    print(f"- inline profiles: {profile_count}")
    print(f"- individual profile files: {len(profile_files)}")
    print(f"- reconciliation log: {ROOMS_RECON_LOG}")

    if len(rows) != 12:
        print("ERROR: expected 12 room rows")
        return 1
    if total_profiles != 12:
        print(f"ERROR: expected 12 room profiles, found {total_profiles}")
        return 1

    print("OK: domain verification passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
