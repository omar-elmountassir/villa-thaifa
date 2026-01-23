#!/usr/bin/env python3
"""
Fix broken internal markdown links in the Villa Thaifa project.
"""
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple
import json

def should_skip_directory(path: Path) -> bool:
    """Check if directory should be skipped."""
    skip_dirs = {
        'node_modules', '.git', 'archive', 'legacy',
        '.next', 'dist', 'build', '.cache', 'coverage'
    }
    return any(part in skip_dirs for part in path.parts)

def extract_markdown_links(content: str, file_path: str) -> List[Dict]:
    """Extract all markdown links from content."""
    links = []
    pattern = r'\[([^\]]+)\]\(([^)]+)\)'

    for match in re.finditer(pattern, content):
        text = match.group(1)
        url = match.group(2)
        links.append({
            'text': text,
            'url': url,
            'file': file_path,
            'full_match': match.group(0)
        })
    return links

def validate_link(url: str, base_path: str) -> Dict:
    """Validate if an internal link target exists."""
    # Skip external URLs and anchors
    if url.startswith(('http://', 'https://', 'mailto:', '#')):
        return {'valid': True, 'type': 'external', 'reason': 'External URL or anchor'}

    # Handle relative paths
    target_path = Path(base_path).parent / url

    # Remove fragment if present
    if '#' in target_path.as_posix():
        target_path = Path(target_path.as_posix().split('#')[0])

    # Check if it's a directory link
    if url.endswith('/'):
        if target_path.exists() and target_path.is_dir():
            return {'valid': True, 'type': 'directory', 'path': str(target_path)}
        else:
            return {'valid': False, 'type': 'directory', 'path': str(target_path), 'reason': 'Directory not found'}

    # Check file existence
    if target_path.exists():
        return {'valid': True, 'type': 'file', 'path': str(target_path)}
    else:
        return {'valid': False, 'type': 'file', 'path': str(target_path), 'reason': 'File not found'}

def main():
    project_root = Path('/home/omar/omar-el-mountassir/projects/clients/villa-thaifa')

    # Find all markdown files
    md_files = []
    for md_file in project_root.rglob('*.md'):
        if should_skip_directory(md_file):
            continue
        md_files.append(md_file)

    print(f"Found {len(md_files)} markdown files")

    # Scan for broken links
    all_links = []
    broken_links = []

    for md_file in md_files:
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            links = extract_markdown_links(content, str(md_file))

            for link in links:
                validation = validate_link(link['url'], str(md_file))
                link['validation'] = validation

                if not validation['valid']:
                    broken_links.append(link)

                all_links.append(link)

        except Exception as e:
            print(f"Error reading {md_file}: {e}")

    # Generate report
    report = {
        'summary': {
            'total_files': len(md_files),
            'total_links': len(all_links),
            'broken_links': len(broken_links)
        },
        'broken_links': broken_links
    }

    # Print summary
    print("\n" + "="*80)
    print("LINK SCAN REPORT (Project Files Only)")
    print("="*80)
    print(f"Total files scanned: {report['summary']['total_files']}")
    print(f"Total links found: {report['summary']['total_links']}")
    print(f"Broken internal links: {report['summary']['broken_links']}")

    # Print broken links grouped by category
    if broken_links:
        print("\n" + "="*80)
        print("BROKEN INTERNAL LINKS (Grouped by Category)")
        print("="*80)

        # Group by issue type
        missing_files = []
        missing_dirs = []
        other_issues = []

        for link in broken_links:
            v = link['validation']
            rel_path = os.path.relpath(link['file'], project_root)

            if v['type'] == 'file' and 'File not found' in v['reason']:
                missing_files.append(link)
            elif v['type'] == 'directory' and 'Directory not found' in v['reason']:
                missing_dirs.append(link)
            else:
                other_issues.append(link)

        if missing_files:
            print(f"\n❌ Missing Files ({len(missing_files)}):")
            for link in missing_files:
                rel_file = os.path.relpath(link['file'], project_root)
                rel_target = os.path.relpath(link['validation']['path'], project_root)
                print(f"   {rel_file}")
                print(f"      → [{link['text']}]({link['url']})")
                print(f"      → Target: {rel_target}")

        if missing_dirs:
            print(f"\n❌ Missing Directories ({len(missing_dirs)}):")
            for link in missing_dirs:
                rel_file = os.path.relpath(link['file'], project_root)
                rel_target = os.path.relpath(link['validation']['path'], project_root)
                print(f"   {rel_file}")
                print(f"      → [{link['text']}]({link['url']})")
                print(f"      → Target: {rel_target}")

        if other_issues:
            print(f"\n❌ Other Issues ({len(other_issues)}):")
            for link in other_issues:
                rel_file = os.path.relpath(link['file'], project_root)
                print(f"   {rel_file}")
                print(f"      → [{link['text']}]({link['url']})")
                print(f"      → Reason: {link['validation'].get('reason', 'Unknown')}")

    # Save detailed report
    output_file = project_root / 'docs' / 'reports' / 'current' / 'audit' / 'links-scan-detailed.json'
    output_file.parent.mkdir(parents=True, exist_ok=True)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\nDetailed report saved to: {output_file}")

    # Create human-readable report
    md_report = output_file.parent / 'links-scan-report.md'
    with open(md_report, 'w', encoding='utf-8') as f:
        f.write("# Link Scan Report\n\n")
        f.write(f"**Date**: 2026-01-17\n\n")
        f.write(f"**Summary**:\n")
        f.write(f"- Files scanned: {report['summary']['total_files']}\n")
        f.write(f"- Total links: {report['summary']['total_links']}\n")
        f.write(f"- Broken links: {report['summary']['broken_links']}\n\n")

        if broken_links:
            f.write("## Broken Links\n\n")

            # Group by source file
            by_file = {}
            for link in broken_links:
                rel_file = os.path.relpath(link['file'], project_root)
                if rel_file not in by_file:
                    by_file[rel_file] = []
                by_file[rel_file].append(link)

            for file_path, links in sorted(by_file.items()):
                f.write(f"### {file_path}\n\n")
                for link in links:
                    rel_target = os.path.relpath(link['validation']['path'], project_root)
                    f.write(f"- ❌ `[{link['text']}]({link['url']})`\n")
                    f.write(f"  - Target: `{rel_target}`\n")
                    f.write(f"  - Reason: {link['validation']['reason']}\n\n")
        else:
            f.write("✅ No broken links found!\n\n")

    print(f"Human-readable report saved to: {md_report}")

    return 1 if broken_links else 0

if __name__ == '__main__':
    exit(main())
