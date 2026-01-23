# Template: Incident Report

> **Purpose**: Template for documenting errors, failures, and critical incidents
> **Usage**: For incident-reporter and any agent encountering errors
> **Location**: `/docs/reports/templates/incident-report.md`

---

## Frontmatter Template

```yaml
---
title: "Incident Report: [Incident Title]"
author: "incident-reporter|agent-name"
date: "YYYY-MM-DD"
version: "1.0.0"
category: "investigations"
tags: ["incident", "error", "severity-level"]
status: "investigating|resolved|closed"
incident:
  id: "INC-YYYYMMDD-XXX"
  severity: "critical|high|medium|low"
  type: "bug|error|crash|data_loss|security|performance"
  discovery: "automated|manual|user_reported"
  impact:
    affected_systems: ["system1", "system2"]
    users_affected: "count or estimate"
    business_impact: "description"
timeline:
  detected_at: "YYYY-MM-DD HH:MM:SS UTC"
  reported_at: "YYYY-MM-DD HH:MM:SS UTC"
  resolved_at: "YYYY-MM-DD HH:MM:SS UTC or ongoing"
root_cause:
  category: "code|configuration|infrastructure|human_error|external"
  identified: true|false
resolution:
  status: "investigating|mitigated|resolved|prevented_recurrence"
  workaround: true|false
related_incidents:
  - "INC-YYYYMMDD-XXX"
related_tasks:
  - "TASK-XXX"
---
```

---

## Incident Report Structure

### 1. Header

```markdown
# Incident Report: [Incident Title]

**Incident ID**: INC-YYYYMMDD-XXX
**Date**: YYYY-MM-DD
**Severity**: Critical/High/Medium/Low
**Status**: Investigating/Mitigated/Resolved/Closed
**Type**: Bug/Error/Crash/Data Loss/Security/Performance
**Duration**: X hours/minutes
**Version**: 1.0.0
```

### 2. Executive Summary

```markdown
## 📋 Résumé Exécutif

**Incident**: <One-line description>

**Severity**: [Level]

**Impact**: <Brief description of impact>

**Status**: [Current state]

**Root Cause**: [Brief description if known, else "Under investigation"]

**Summary**: <2-3 sentences describing what happened, impact, and current status>
```

### 3. Incident Timeline

```markdown
## ⏱️ Timeline de l'Incident

### Discovery

- **Detected At**: YYYY-MM-DD HH:MM:SS UTC
- **Discovered By**: [Agent/User/Monitoring]
- **How Discovered**: [Description of discovery method]

### Incident Progression

| Time (UTC) | Event | Details |
|------------|-------|---------|
| HH:MM:SS | Incident started | [Description] |
| HH:MM:SS | Impact detected | [Description] |
| HH:MM:SS | Mitigation began | [Description] |
| HH:MM:SS | Resolved | [Description] |

### Duration

- **Total Incident Duration**: X hours Y minutes
- **Time to Detection**: X minutes
- **Time to Mitigation**: X minutes
- **Time to Resolution**: X hours Y minutes
```

### 4. Impact Analysis

```markdown
## 💥 Analyse d'Impact

### Systems Affected

| System | Component | Impact | Status |
|--------|-----------|--------|--------|
| System 1 | Component A | Down/Degraded | Current status |
| System 2 | Component B | Affected | Current status |

### User Impact

- **Users Affected**: [Count or estimate]
- **Geographic Scope**: [If applicable]
- **User-Facing Symptoms**: [What users experienced]

### Business Impact

- **Revenue Impact**: [If applicable]
- **Operational Impact**: [Description]
- **Data Loss**: [Yes/No - details if yes]
- **Security Impact**: [Yes/No - details if yes]

### Severity Justification

**Severity: [High/Medium/Low/Critical]**

**Rationale**:
- [Reason 1]
- [Reason 2]
- [Reason 3]
```

### 5. Root Cause Analysis

```markdown
## 🔍 Root Cause Analysis

### Problem Statement

**What Happened**:
<Clear description of the failure>

**What Should Have Happened**:
<Description of expected behavior>

### Investigation Process

1. **Investigation Step 1**:
   - **Action Taken**: [Description]
   - **Findings**: [Results]
   - **Conclusion**: [What was learned]

2. **Investigation Step 2**:
   - **Action Taken**: [Description]
   - **Findings**: [Results]
   - **Conclusion**: [What was learned]

### Root Cause Identified

**Category**: Code/Configuration/Infrastructure/Human Error/External

**Root Cause**:
<Clear description of the root cause>

**Contributing Factors**:
1. Factor 1: [Description]
2. Factor 2: [Description]

### Evidence

**Logs**:
```log
[Relevant log entries]
```

**Error Messages**:
```
[Error message or stack trace]
```

**Screenshots/Diagrams**:
[If applicable, reference to images or diagrams]

### The "Five Whys" Analysis

1. **Why did the incident occur?**
   - Answer: [Direct cause]

2. **Why did [direct cause] happen?**
   - Answer: [Next level cause]

3. **Why did [next level cause] happen?**
   - Answer: [Deeper cause]

4. **Why did [deeper cause] happen?**
   - Answer: [Fundamental cause]

5. **Why did [fundamental cause] exist?**
   - Answer: [Root cause - systemic issue]
```

### 6. Resolution & Remediation

```markdown
## 🛠️ Résolution & Remediation

### Immediate Actions Taken

| Time | Action | Taken By | Result |
|------|--------|----------|--------|
| HH:MM | Action 1 | Agent/Person | Outcome |
| HH:MM | Action 2 | Agent/Person | Outcome |

### Mitigation Applied

**Workaround**: [Description if applicable]

**Temporary Fix**:
- [x] Applied
- [ ] Pending
- **Effectiveness**: [Description]

### Permanent Fix

**Fix Implemented**: [Description of permanent solution]

**Code Changes**:
- **File**: `/path/to/file`
- **Lines Changed**: +X/-Y
- **Pull Request**: [Link if applicable]

**Configuration Changes**:
- **File**: `/path/to/config`
- **Changes**: [Description]

**Deployment**:
- **Deployed At**: YYYY-MM-DD HH:MM:SS UTC
- **Deployed By**: [Agent/Person]
- **Verification**: [How fix was verified]

### Testing & Validation

- [x] Unit tests passed
- [x] Integration tests passed
- [x] Manual testing completed
- [x] Peer review completed
- [x] Production deployment verified
```

### 7. Prevention & Future Actions

```markdown
## 🛡️ Prévention & Actions Futures

### Short-Term Actions (This Week)

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | [Action description] | [Owner] | YYYY-MM-DD | ⏳ |
| 2 | [Action description] | [Owner] | YYYY-MM-DD | ⏳ |

### Long-Term Actions (This Month/Quarter)

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | [Action description] | [Owner] | YYYY-MM-DD | ⏳ |
| 2 | [Action description] | [Owner] | YYYY-MM-DD | ⏳ |

### Process Improvements

1. **Improvement 1**: [Description]
   - **Implementation**: [How]
   - **Timeline**: [When]

2. **Improvement 2**: [Description]
   - **Implementation**: [How]
   - **Timeline**: [When]

### Monitoring & Alerting Enhancements

1. **New Alert**: [Description]
   - **Threshold**: [Value]
   - **Notification**: [Channel]

2. **Improved Monitoring**: [Description]
   - **Metric**: [What to monitor]
   - **Tool**: [How]
```

### 8. Lessons Learned

```markdown
## 📚 Leçons Apprises

### What Went Well

1. **Success 1**: [Description]
   - **Why it worked**: [Analysis]
   - **Repeatable pattern**: [Yes/No]

2. **Success 2**: [Description]
   - **Why it worked**: [Analysis]
   - **Repeatable pattern**: [Yes/No]

### What Could Be Improved

1. **Improvement Area 1**: [Description]
   - **Impact**: [How this affected response]
   - **Action**: [What to do differently]

2. **Improvement Area 2**: [Description]
   - **Impact**: [How this affected response]
   - **Action**: [What to do differently]

### Knowledge Gaps Identified

1. **Gap 1**: [Description]
   - **Why this was a gap**: [Analysis]
   - **How to address**: [Training/Documentation needed]

2. **Gap 2**: [Description]
   - **Why this was a gap**: [Analysis]
   - **How to address**: [Training/Documentation needed]
```

### 9. Communication Log

```markdown
## 📢 Journal de Communication

### Internal Communication

| Time | Channel | Message | Audience |
|------|---------|---------|----------|
| HH:MM | Slack/Discord | [Message] | [Team] |
| HH:MM | Email | [Message] | [Stakeholders] |

### External Communication (if applicable)

| Time | Channel | Message | Audience |
|------|---------|---------|----------|
| HH:MM | Email/Twitter | [Message] | [Users/Public] |

### Status Updates Provided

- **Initial Incident Notification**: HH:MM UTC
- **First Update**: HH:MM UTC (Status: [Status])
- **Resolution Notification**: HH:MM UTC
- **Post-Incident Review**: HH:MM UTC
```

### 10. Related Incidents & References

```markdown
## 🔗 Incidents Connexes & Références

### Related Incidents

- [INC-YYYYMMDD-XXX](path/to/incident.md) - [Relationship description]
- [INC-YYYYMMDD-YYY](path/to/incident.md) - [Relationship description]

### Related Tasks

- [TASK-XXX](path/to/task.md) - [Description]
- [TASK-YYY](path/to/task.md) - [Description]

### References

- [Documentation Link 1](URL) - [Description]
- [Documentation Link 2](URL) - [Description]
- [Related Code](path/to/code) - [Description]

### Attachments

- [Attachment 1](path/to/file) - [Description]
- [Attachment 2](path/to/file) - [Description]
```

---

## Complete Example: Data File Corruption Incident

```markdown
# Incident Report: Room 01 Data Corruption in rooms.json

**Incident ID**: INC-20260117-001
**Date**: 2026-01-17
**Severity**: High
**Status**: Resolved
**Type**: Data Corruption
**Duration**: 2 hours 15 minutes
**Version**: 1.0.0

---

## 📋 Résumé Exécutif

**Incident**: Room 01 data in `rooms.json` corrupted with test data contamination

**Severity**: High

**Impact**: Room type name contains test data "Superior King (Superior King VillaUpdated)", 12 missing images (5 instead of 17), empty amenities array with 3 empty strings

**Status**: Resolved - Data cleaned, validation pending

**Root Cause**: Manual editing error during image migration - test data not cleaned up

**Summary**: During the image rescue operation (Phase 1), Room 01's data was contaminated with test data. The room type name includes duplicate test text, only 5 of 17 expected images are present, and amenities array contains 3 empty placeholder strings. Issue detected by data-sync-checker during routine validation.

---

## ⏱️ Timeline de l'Incident

### Discovery

- **Detected At**: 2026-01-17 14:30:00 UTC
- **Discovered By**: data-sync-checker agent
- **How Discovered**: Routine validation of rooms.json found anomalies

### Incident Progression

| Time (UTC) | Event | Details |
|------------|-------|---------|
| 13:00:00 | Image rescue operation | scripts/rescue_images.js executed |
| 13:15:00 | Manual data edit | Room 01 data manually updated |
| 13:20:00 | Test data left behind | Type name not cleaned, images incomplete |
| 14:30:00 | Anomaly detected | data-sync-checker flagged issues |
| 14:45:00 | Investigation started | auditor analyzed root cause |
| 15:30:00 | Fix applied | Cleaned room type, images, amenities |
| 16:45:00 | Verification completed | All 17 images present, data clean |

### Duration

- **Total Incident Duration**: 2 hours 15 minutes
- **Time to Detection**: 1 hour 30 minutes (from initial edit)
- **Time to Mitigation**: 45 minutes (from detection)
- **Time to Resolution**: 1 hour 15 minutes (from detection)

---

## 💥 Analyse d'Impact

### Systems Affected

| System | Component | Impact | Status |
|--------|-----------|--------|--------|
| Public Website | Room 01 page | Showing incorrect data | Resolved |
| Admin Dashboard | Room 01 details | Showing corrupted data | Resolved |
| OTA Platforms | Not yet synced | No impact | N/A |

### User Impact

- **Users Affected**: Potential guests viewing Room 01
- **User-Facing Symptoms**:
  - Confusing room type name with duplicate text
  - Only 5 images shown instead of expected 17
  - Empty amenities listed
- **Business Impact**: Medium - Could affect booking decisions

### Severity Justification

**Severity: High**

**Rationale**:
- Data integrity issue (core data corrupted)
- User-facing impact (public website affected)
- Business impact (could affect bookings)
- Not critical (no system outage, no data loss)

---

## 🔍 Root Cause Analysis

### Problem Statement

**What Happened**:
Room 01 data in `src/data/rooms.json` was corrupted with test contamination during manual editing after image rescue operation.

**What Should Have Happened**:
After image migration, Room 01 data should have been cleaned to production-ready state with correct type name, all 17 images, and proper amenities array.

### Investigation Process

1. **Investigation: Data Analysis**:
   - **Action Taken**: Read rooms.json, examined Room 01 object
   - **Findings**:
     - `type`: "Superior King (Superior King VillaUpdated)" ← duplicate test text
     - `images`: array with only 5 items (expected 17)
     - `amenities`: array with 3 empty strings ""
   - **Conclusion**: Test data contamination from image rescue

2. **Investigation: Root Cause Trace**:
   - **Action Taken**: Checked git history and recent edits
   - **Findings**: Manual edit at 13:15 UTC during image rescue
   - **Conclusion**: Human error - incomplete cleanup after test

3. **Investigation: Process Review**:
   - **Action Taken**: Reviewed image rescue script
   - **Findings**: Script migrates images but doesn't validate/clean metadata
   - **Conclusion**: Missing validation step in rescue process

### Root Cause Identified

**Category**: Human Error

**Root Cause**:
During manual editing of Room 01 data after image migration, the following test data was not cleaned up:
1. Room type name contained test suffix "(Superior King VillaUpdated)"
2. Only 5 images migrated instead of full 17
3. Amenities array populated with empty placeholder strings

**Contributing Factors**:
1. **No validation step**: Image rescue script doesn't validate data completeness
2. **Manual editing prone to error**: Human cleanup容易遗漏
3. **No pre-commit checks**: Git hooks don't validate JSON schema
4. **No automated testing**: Data changes not tested before commit

### Evidence

**Corrupted Data** (before fix):
```json
{
  "id": "01",
  "type": "Superior King (Superior King VillaUpdated)",
  "images": [
    "/images/rooms/01/01.jpg",
    "/images/rooms/01/02.jpg",
    "/images/rooms/01/03.jpg",
    "/images/rooms/01/04.jpg",
    "/images/rooms/01/05.jpg"
  ],
  "amenities": ["", "", ""]
}
```

**Expected Data** (after fix):
```json
{
  "id": "01",
  "type": "Superior King",
  "images": [
    "/images/rooms/01/01.jpg",
    "/images/rooms/01/02.jpg",
    // ... all 17 images
    "/images/rooms/01/17.jpg"
  ],
  "amenities": [
    "Air Conditioning",
    "King Bed",
    "Mountain View",
    "Private Bathroom"
  ]
}
```

### The "Five Whys" Analysis

1. **Why was Room 01 data corrupted?**
   - Answer: Test data was left behind after manual editing

2. **Why was test data left behind?**
   - Answer: Human error during cleanup - incomplete review

3. **Why was manual cleanup required?**
   - Answer: Image rescue script doesn't include data validation

4. **Why doesn't the script validate data?**
   - Answer: Script was designed only for image migration, not data cleaning

5. **Why wasn't validation included?**
   - Answer: Process gap - no data validation step defined in image rescue workflow

**Systemic Root Cause**: Missing data validation in image rescue workflow

---

## 🛠️ Résolution & Remediation

### Immediate Actions Taken

| Time | Action | Taken By | Result |
|------|--------|----------|--------|
| 14:45 | Read and analyze corrupted data | auditor | Root cause identified |
| 15:00 | Manually clean room type name | claude (manual) | Type corrected |
| 15:15 | Verify and add missing images | data-sync-checker | Found 12 missing |
| 15:30 | Add missing image paths | claude (manual) | All 17 images present |
| 15:45 | Clean amenities array | claude (manual) | Empty strings removed |
| 16:45 | Final validation | platform-validator | All checks pass |

### Mitigation Applied

**Workaround**: Manual cleanup and validation completed

**Temporary Fix**:
- [x] Applied
- **Effectiveness**: Resolved immediate issue
- **Limitation**: Manual process error-prone

### Permanent Fix

**Fix Implemented**: Enhanced image rescue script with validation

**Code Changes**:
- **File**: `/scripts/rescue_images.js`
- **Changes**: Added `validateRoomData()` function
  - Validates room type name (no test suffixes)
  - Validates image count (should be 17 for all rooms)
  - Validates amenities (no empty strings)
  - Auto-cleans common issues

**Configuration Changes**:
- **File**: `/scripts/.rescue-config.json`
- **Changes**: Added validation rules

**Deployment**:
- **Deployed At**: 2026-01-17 16:30:00 UTC
- **Deployed By**: claude (manual)
- **Verification**: Tested on Room 02-12, all pass

### Testing & Validation

- [x] Manual testing of Room 01 data
- [x] Automated validation of all rooms (01-12)
- [x] Regression test on rescue script
- [x] Peer review (self-correction during fix)
- [x] Production verification (rooms.json valid)

---

## 🛡️ Prévention & Actions Futures

### Short-Term Actions (This Week)

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | Validate all rooms (01-12) data | data-sync-checker | 2026-01-18 | ⏳ |
| 2 | Add pre-commit hook for JSON validation | meta-agent | 2026-01-19 | ⏳ |
| 3 | Document data schema in README | claude-md-agent | 2026-01-19 | ⏳ |

### Long-Term Actions (This Month)

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | Create data validation suite | test-runner | 2026-01-31 | ⏳ |
| 2 | Implement automated data quality checks | platform-validator | 2026-01-31 | ⏳ |
| 3 | Add data migration guide to docs | claude-md-agent | 2026-01-31 | ⏳ |

### Process Improvements

1. **Pre-commit Validation**:
   - **Implementation**: Add JSON schema validation to git pre-commit hook
   - **Timeline**: This week (2026-01-19)
   - **Benefit**: Catch data issues before commit

2. **Automated Testing**:
   - **Implementation**: Create data validation test suite
   - **Timeline**: This month (2026-01-31)
   - **Benefit**: Automated quality assurance

3. **Enhanced Rescue Script**:
   - **Implementation**: Add data validation to image rescue workflow
   - **Timeline**: Completed (2026-01-17)
   - **Benefit**: Prevent similar incidents

### Monitoring & Alerting Enhancements

1. **Data Quality Monitor**:
   - **Threshold**: Any data validation failure
   - **Notification**: Report to `/docs/reports/current/investigations/`
   - **Tool**: data-sync-checker agent

2. **Schema Validation**:
   - **Metric**: JSON schema compliance
   - **Tool**: platform-validator before any data operation
   - **Frequency**: On every data file change

---

## 📚 Leçons Apprises

### What Went Well

1. **Quick Detection**:
   - **Why it worked**: Routine validation by data-sync-checker
   - **Repeatable pattern**: Yes - continuous monitoring works

2. **Thorough Investigation**:
   - **Why it worked**: Five whys analysis identified systemic issue
   - **Repeatable pattern**: Yes - use structured RCA

3. **Comprehensive Fix**:
   - **Why it worked**: Not just fixed data, but improved process
   - **Repeatable pattern**: Yes - fix root cause, not symptoms

### What Could Be Improved

1. **No Automated Validation**:
   - **Impact**: Manual error went undetected for 1.5 hours
   - **Action**: Implement pre-commit hooks and automated tests

2. **Manual Data Editing**:
   - **Impact**: Prone to human error
   - **Action**: Automate data cleaning in rescue scripts

3. **No Data Schema Documentation**:
   - **Impact**: Unclear what valid data looks like
   - **Action**: Document JSON schema and validation rules

### Knowledge Gaps Identified

1. **Gap**: No clear data quality standards
   - **Why**: Data schema not documented
   - **Address**: Create data schema documentation this week

2. **Gap**: No validation tools in place
   - **Why**: Haven't implemented test-runner yet
   - **Address**: Prioritize test-runner agent activation (Phase 0)

---

## 📢 Journal de Communication

### Internal Communication

| Time | Channel | Message | Audience |
|------|---------|---------|----------|
| 14:30 | Agent log | Incident detected: Room 01 data corruption | Claude instances |
| 16:45 | Agent log | Incident resolved: Data cleaned, validation added | Claude instances |

### External Communication

**None** - Incident was internal only, no user-facing impact

### Status Updates Provided

- **Initial Incident Notification**: 14:30 UTC (agent log only)
- **Resolution Notification**: 16:45 UTC (agent log only)
- **Post-Incident Review**: This report (2026-01-17)

---

## 🔗 Incidents Connexes & Références

### Related Incidents

None (first data quality incident)

### Related Tasks

- [TASK-NOW-002](/ROADMAP.md#task-now-002) - Fix Room 01 Data Corruption (this incident)
- [TASK-009-IMAGES](/ROADMAP.md) - Rescue 307 Orphan Images (Phase 0)

### References

- [Data Schema](/src/data/README.md) - Rooms data structure (to be created)
- [Image Rescue Script](/scripts/rescue_images.js) - Enhanced with validation
- [Validation Report](/docs/reports/current/operations/room-01-validation-2026-01-17.md) - Post-fix validation

### Attachments

- [rooms.json before fix](/data/backup/rooms-20260117-1430.json) - Corrupted data backup
- [rooms.json after fix](/src/data/rooms.json) - Cleaned data
- [validation log](/docs/reports/current/operations/room-01-validation.log) - Validation output

---

## 📊 Incident Metrics

### Response Time

- **Detection to Mitigation**: 45 minutes (Target: <30 min) ⚠️
- **Detection to Resolution**: 1 hour 15 minutes (Target: <2 hours) ✅
- **Total Incident Duration**: 2 hours 15 minutes

### Impact Metrics

- **Data Records Affected**: 1 (Room 01)
- **Users Affected**: 0 (detected before user reports)
- **Business Impact**: Low (potential impact only)
- **Data Loss**: 0 (backup existed)

### Process Metrics

- **Root Cause Identified**: Yes ✅
- **Fix Implemented**: Yes ✅
- **Prevention Measures**: Yes ✅
- **Documentation Complete**: Yes ✅

---

## ✅ Incident Closure

**Status**: **CLOSED** - 2026-01-17 17:00:00 UTC

**Closure Criteria Met**:
- [x] Root cause identified and documented
- [x] Fix implemented and verified
- [x] Prevention measures in place
- [x] Incident report completed
- [x] Related tasks created/tracked
- [x] No residual impact

**Approved By**: auditor (sonnet)
**Closure Date**: 2026-01-17

---

**Report End**

Generated by: incident-reporter (haiku)
Date: 2026-01-17
Version: 1.0.0

**Next Review**: 2026-01-24 (1 week follow-up)
```

---

## Usage Guidelines

### When to Create an Incident Report

Create an incident report when:
1. **Critical Error**: System crash, data loss, security breach
2. **High Severity**: Significant user impact, business impact
3. **Medium Severity**: Degraded performance, partial outage
4. **Data Issues**: Corruption, inconsistency, integrity problems
5. **Learning Value**: Even minor incidents with learnings worth documenting

### Severity Guidelines

- **Critical (P0)**: System down, data loss, security breach, complete service outage
- **High (P1)**: Significant degradation, major feature broken, widespread user impact
- **Medium (P2)**: Partial degradation, some users affected, workaround available
- **Low (P3)**: Minor issue, limited impact, cosmetic

### Incident ID Format

Use format: `INC-YYYYMMDD-XXX`
- YYYY: Year
- MM: Month (01-12)
- DD: Day (01-31)
- XXX: Sequential number (001, 002, 003...)

### Report Timeline

1. **During Incident**: Quick incident log (what's happening)
2. **Post-Incident**: Full report (within 24 hours)
3. **Follow-Up**: Review at 1 week, 1 month

---

**Template Version**: 1.0.0
**Last Updated**: 2026-01-17
**Maintained By**: incident-reporter
