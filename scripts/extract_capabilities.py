#!/usr/bin/env python3
"""
Extract capabilities from all agent .md files and generate capabilities.json files.
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path

# Project root
PROJECT_ROOT = Path("/home/omar/omar-el-mountassir/projects/clients/villa-thaifa")
AGENTS_DIR = PROJECT_ROOT / ".claude" / "agents"

# List of all agents
AGENTS = [
    "pricing-analyst",
    "reservation-manager",
    "calendar-agent",
    "platform-validator",
    "guest-communicator",
    "meta-agent",
    "research-agent",
    "security-auditor",
    "translation-agent",
    "data-sync-checker",
    "incident-reporter",
    "html-report-generator",
    "smart-contract-auditor",
    "decision-evaluator",
    "claude-md-agent",
    "browser-agent",
    "auditor",
    "context-builder",
    "knowledge-interviewer",
    "test-runner",
    "dashboard-generator",
    "capability-extractor"
]

def extract_frontmatter(file_path):
    """Extract YAML frontmatter from markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract frontmatter between --- markers
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return None

    yaml_text = match.group(1)

    # Parse YAML manually (simple key-value pairs)
    frontmatter = {}
    for line in yaml_text.split('\n'):
        if ':' in line and not line.strip().startswith('#'):
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()

            # Handle different value types
            if value.startswith('"') and value.endswith('"'):
                value = value[1:-1]
            elif value.startswith('[') and value.endswith(']'):
                # Parse list
                value = value[1:-1].split(',')
                value = [v.strip().strip('"').strip("'") for v in value if v.strip()]
            elif value.lower() in ['true', 'yes']:
                value = True
            elif value.lower() in ['false', 'no']:
                value = False

            frontmatter[key] = value

    return frontmatter

def normalize_tools(tools_value):
    """Normalize tools field to list."""
    if isinstance(tools_value, list):
        return tools_value
    if isinstance(tools_value, str):
        # Split by comma and clean
        return [t.strip() for t in tools_value.split(',')]
    return []

def generate_capabilities(agent_name):
    """Generate capabilities.json for an agent."""
    agent_file = AGENTS_DIR / f"{agent_name}.md"

    if not agent_file.exists():
        print(f"❌ Agent file not found: {agent_file}")
        return None

    # Extract frontmatter
    frontmatter = extract_frontmatter(agent_file)
    if not frontmatter:
        print(f"❌ No frontmatter found in: {agent_file}")
        return None

    # Extract fields
    capabilities = {
        "agent_id": frontmatter.get("agent_id", agent_name),
        "description": frontmatter.get("description", ""),
        "tools": normalize_tools(frontmatter.get("tools", [])),
        "model": frontmatter.get("model", "sonnet"),
        "color": frontmatter.get("color", "gray"),
        "permission_mode": frontmatter.get("permission_mode") or frontmatter.get("permissionMode", "default"),
        "skills": frontmatter.get("skills", []),
        "generated_at": datetime.now().strftime("%Y-%m-%d"),
        "version": "1.0.0"
    }

    return capabilities

def validate_json(json_path):
    """Validate JSON file using jq."""
    import subprocess
    try:
        result = subprocess.run(
            ['jq', '.', str(json_path)],
            capture_output=True,
            text=True,
            check=True
        )
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ JSON validation failed for {json_path}: {e.stderr}")
        return False
    except FileNotFoundError:
        # jq not available, skip validation
        print(f"⚠️  jq not found, skipping validation for {json_path}")
        return True

def main():
    """Extract capabilities for all agents."""
    print("🚀 Extracting capabilities for all agents...")
    print(f"📁 Agents directory: {AGENTS_DIR}")
    print()

    summary = []

    for agent_name in AGENTS:
        print(f"📋 Processing: {agent_name}")

        # Generate capabilities
        capabilities = generate_capabilities(agent_name)
        if not capabilities:
            continue

        # Write capabilities.json
        cap_file = AGENTS_DIR / f"{agent_name}-capabilities.json"
        with open(cap_file, 'w', encoding='utf-8') as f:
            json.dump(capabilities, f, indent=2)

        # Validate JSON
        if validate_json(cap_file):
            print(f"✅ Generated: {cap_file.name}")
            summary.append({
                "agent": agent_name,
                "tools": len(capabilities["tools"]),
                "model": capabilities["model"],
                "color": capabilities["color"]
            })
        else:
            print(f"❌ Validation failed for {cap_file}")

        print()

    # Generate summary report
    print("=" * 80)
    print("📊 SUMMARY")
    print("=" * 80)
    print()

    # Group by model
    by_model = {}
    for item in summary:
        model = item["model"]
        if model not in by_model:
            by_model[model] = []
        by_model[model].append(item)

    print("🤖 By Model:")
    for model, agents in sorted(by_model.items()):
        print(f"  {model.upper()}: {len(agents)} agents")

    print()
    print("🎨 By Color:")
    color_count = {}
    for item in summary:
        color = item["color"]
        color_count[color] = color_count.get(color, 0) + 1
    for color, count in sorted(color_count.items(), key=lambda x: x[1], reverse=True):
        print(f"  {color}: {count} agents")

    print()
    print("📦 Full List:")
    for item in summary:
        print(f"  {item['agent']:25} | {item['model']:8} | {item['color']:8} | {item['tools']} tools")

    print()
    print(f"✅ Total agents processed: {len(summary)}")
    print(f"📁 Output directory: {AGENTS_DIR}")

if __name__ == "__main__":
    main()
