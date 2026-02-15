from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def run_script(*args: str, cwd: Path | None = None) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, *args],
        cwd=str(cwd or ROOT),
        text=True,
        capture_output=True,
        check=False,
    )


def test_domain_verify_passes() -> None:
    result = run_script("scripts/domain_verify.py")
    assert result.returncode == 0, result.stdout + result.stderr
    assert "OK: domain verification passed" in result.stdout


def test_validate_contracts_passes() -> None:
    result = run_script("scripts/validate_contracts.py")
    assert result.returncode == 0, result.stdout + result.stderr
    assert "OK: contracts validated for rooms.md" in result.stdout
