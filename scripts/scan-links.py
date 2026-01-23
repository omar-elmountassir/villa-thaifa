#!/usr/bin/env python3
"""
Scan all markdown files in the Villa Thaifa project for broken links.
"""
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import urlparse
import json

def extract_markdown_links(content: str, file_path: str) -> List[Dict]:
    """Extract all markdown links from content."""
    links = []

    # Pattern for markdown links: [text](url)
    pattern = r'\[([^\]]+)\]\(([^)]+)\)'

    for match in re.finditer(pattern, content):
        text = match.group(1)
        url = match.group(2)

        links.append({
            'text': text,
            'url': url,
            'file': file_path
        })

    return links

def categorize_link(url: str, base_path: str) -> Dict:
    """Categorize link and determine if it's internal or external."""
    parsed = urlparse(url)

    # Check if it's an external URL
    if parsed.scheme in ['http', 'https', 'ftp', 'mailto']:
        return {
            'type': 'external',
            'url': url,
            'reachable': None  # Would need HTTP check
        }

    # Internal link
    if url.startswith('#'):
        return {
            'type': 'anchor',
            'url': url,
            'reachable': None  # Would need to check anchors in file
        }

    # Relative path
    target_path = Path(base_path).parent / url

    # Remove fragment if present
    if '#' in target_path.as_posix():
        target_path = Path(target_path.as_posix().split('#')[0])

    return {
        'type': 'internal',
        'url': url,
        'target_path': str(target_path),
        'reachable': target_path.exists() if target_path.as_posix() else False
    }

def validate_internal_link(target_path: str) -> bool:
    """Validate if an internal link target exists."""
    return Path(target_path).exists()

def main():
    project_root = Path('/home/omar/omar-el-mountassir/projects/clients/villa-thaifa')

    # Find all markdown files (excluding archive and legacy)
    md_files = []
    for md_file in project_root.rglob('*.md'):
        # Skip archive and legacy directories
        if 'archive' in md_file.parts or 'legacy' in md_file.parts:
            continue
        md_files.append(md_file)

    print(f"Found {len(md_files)} markdown files")

    # Scan all files
    all_links = []
    broken_links = []
    adr002_references = []

    for md_file in md_files:
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            links = extract_markdown_links(content, str(md_file))

            for link in links:
                category = categorize_link(link['url'], str(md_file))
                link['category'] = category

                # Track ADR-002 references
                if 'ADR-002' in link['text'] or 'ADR-002' in link['url']:
                    adr002_references.append(link)

                # Track broken internal links
                if category['type'] == 'internal' and not category['reachable']:
                    broken_links.append(link)

                all_links.append(link)

        except Exception as e:
            print(f"Error reading {md_file}: {e}")

    # Generate report
    report = {
        'summary': {
            'total_files': len(md_files),
            'total_links': len(all_links),
            'broken_links': len(broken_links),
            'adr002_references': len(adr002_references)
        },
        'broken_links': broken_links,
        'adr002_references': adr002_references,
        'all_links': all_links
    }

    # Print summary
    print("\n" + "="*80)
    print("LINK SCAN REPORT")
    print("="*80)
    print(f"Total files scanned: {report['summary']['total_files']}")
    print(f"Total links found: {report['summary']['total_links']}")
    print(f"Broken internal links: {report['summary']['broken_links']}")
    print(f"ADR-002 references: {report['summary']['adr002_references']}")

    # Print broken links
    if broken_links:
        print("\n" + "="*80)
        print("BROKEN INTERNAL LINKS")
        print("="*80)
        for link in broken_links:
            print(f"\n❌ {link['file']}")
            print(f"   [{link['text']}]({link['url']})")
            print(f"   Target: {link['category'].get('target_path', 'N/A')}")

    # Print ADR-002 references
    if adr002_references:
        print("\n" + "="*80)
        print("ADR-002 REFERENCES")
        print("="*80)
        for link in adr002_references:
            print(f"\n📍 {link['file']}")
            print(f"   [{link['text']}]({link['url']})")

    # Save detailed report
    output_file = project_root / 'docs' / 'reports' / 'current' / 'audit' / 'links-scan-report.json'
    output_file.parent.mkdir(parents=True, exist_ok=True)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\nDetailed report saved to: {output_file}")

    # Return exit code based on findings
    return 1 if broken_links else 0

if __name__ == '__main__':
    exit(main())
