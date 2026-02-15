.PHONY: sync test verify-contracts verify-domain verify-rooms

sync:
	uv sync

verify-contracts:
	uv run python scripts/validate_contracts.py

verify-domain:
	uv run python scripts/domain_verify.py

verify-rooms: verify-contracts verify-domain

test:
	uv run pytest
