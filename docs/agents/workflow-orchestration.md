# Workflow Orchestration

## Overview

The HaarKliniek45 agent system uses GitHub Issues with labels as the primary workflow orchestration mechanism. Each agent monitors specific labels and processes issues according to defined workflows.

## Workflow State Machine

```
┌─────────────┐
│  New Issue  │
│ (status:new)│
└──────┬──────┘
       │
       ↓ (Issue Creator: triage)
┌──────────────────┐
│ Triaged & Labeled│
│(status:triaged)  │
└────────┬─────────┘
         │
         ├─→ (needs:architecture) → Architect
         ├─→ (needs:design) → UX Dev
         ├─→ (needs:frontend) → UX Dev
         └─→ (needs:testing) → Tester
         │
         ↓
┌──────────────────┐
│   Agent Work     │
│ (status:in-*)    │
└────────┬─────────┘
         │
         ↓ (work complete)
┌──────────────────┐
│     Review       │
│ (status:review)  │
│(needs:review)    │
└────────┬─────────┘
         │
         ↓ (approved)
┌──────────────────┐
│   Merged/Done    │
│ (status:done)    │
└──────────────────┘

         ↓ (if tests fail)
┌──────────────────┐
│ Bug Created      │
│ (type:bug)       │
└────────┬─────────┘
         │
         ↓
    [Back to Triage]
```

## Agent Workflows

### Issue Creator Workflow

**Trigger**: Manual invocation or new raw requirement

**Process**:
1. Receive requirement (form, email, manual)
2. Parse into structured format
3. Determine issue type (feature, bug, enhancement)
4. Assess priority (critical, high, medium, low)
5. Create GitHub issue with proper labels
6. Add acceptance criteria
7. Identify which agent should handle (`needs:*` label)
8. Link dependencies if applicable
9. Add to project board
10. Set status to `status:triaged`

**Output**: Structured GitHub issue ready for agent pickup

**Labels Applied**:
- `type:*` (feature/bug/enhancement)
- `priority:*` (critical/high/medium/low)
- `needs:*` (architecture/design/frontend/testing)
- `status:triaged`

**Handoff**: To Architect, UX Dev, or Tester based on needs label

---

### Architect Workflow

**Trigger**: Issue has `needs:architecture` label

**Process**:
1. Claim issue (add `agent:architect` label)
2. Update status to `status:in-design`
3. Post comment: Starting architectural design
4. Query Context7 for Angular patterns
5. Analyze existing codebase (FileSystem MCP)
6. Design component/module/service architecture
7. Create Architecture Decision Record (if significant)
8. Document design in issue
9. Create architecture files in `docs/architecture/`
10. Update status to `status:review`
11. Add `needs:review` label
12. Request human review

**Output**: 
- Architecture document
- ADR (if applicable)
- Design specifications

**Labels Updated**:
- Add: `agent:architect`, `type:architecture`
- Change: `status:triaged` → `status:in-design` → `status:review`
- May add: `needs:frontend` for implementation

**Handoff**: 
- To Human for review
- Then to UX Dev if frontend work needed

---

### UX Designer/Developer Workflow

**Trigger**: Issue has `needs:design` or `needs:frontend` label

**Process**:
1. Claim issue (add `agent:ux-dev` label)
2. Update status to `status:in-development`
3. Post comment: Starting implementation
4. Review architecture design (if exists)
5. Query Context7 for component patterns
6. Check design system tokens
7. Implement component/feature:
   - Generate Angular component
   - Apply design system styles
   - Implement logic
   - Add ARIA attributes
   - Create unit tests
8. Test locally
9. Run Playwright visual tests
10. Create pull request
11. Update status to `status:testing`
12. Add `needs:testing` label
13. Assign to Tester agent

**Output**:
- Angular component/service/module
- Unit tests
- Pull request

**Labels Updated**:
- Add: `agent:ux-dev`, `type:ui` or `type:component`
- Change: `status:triaged` → `status:in-development` → `status:testing`
- Add: `needs:testing`

**Handoff**: To Tester for validation

---

### Tester Workflow

**Trigger**: Issue has `needs:testing` label or PR created

**Process**:
1. Claim issue (add `agent:tester` label)
2. Update status to `status:testing`
3. Post comment: Starting testing
4. Review implementation
5. Query Context7 for testing patterns
6. Write/run unit tests:
   - Test all public methods
   - Test edge cases
   - Verify error handling
   - Check coverage (80% minimum)
7. Write/run E2E tests (Playwright):
   - Test user flows
   - Test responsive behavior
   - Visual regression testing
8. Run accessibility tests:
   - axe-core automated
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast
9. Run performance tests:
   - Lighthouse CI
   - Core Web Vitals
10. Generate test reports
11. If tests pass:
    - Approve PR
    - Update status to `status:review`
    - Add `needs:review` for human final review
12. If tests fail:
    - Create bug issues
    - Document failures
    - Assign back to UX Dev
    - Add `status:blocked` to original issue

**Output**:
- Test suite (unit + E2E)
- Test reports
- Bug issues (if failures)
- PR review/approval

**Labels Updated**:
- Add: `agent:tester`, `type:test`
- Change: `status:testing` → `status:review` (if pass)
- Change: `status:testing` → `status:blocked` (if fail)
- Add: `needs:review` (for final approval)

**Handoff**: 
- To Human for final review (if tests pass)
- Back to UX Dev (if tests fail with bug issues)

---

## Label-Based Routing

### Primary Routing Labels

These labels trigger agent assignment:

| Label | Triggers | Purpose |
|-------|----------|---------|
| `needs:architecture` | Architect | Requires design work |
| `needs:design` | UX Dev | Requires UI/UX design |
| `needs:frontend` | UX Dev | Requires implementation |
| `needs:testing` | Tester | Requires test coverage |
| `needs:review` | Human | Requires human approval |

### Status Tracking Labels

Track progress through workflow:

| Label | Meaning | Active Agent |
|-------|---------|--------------|
| `status:new` | Just created | None |
| `status:triaged` | Ready for work | Issue Creator |
| `status:in-design` | Being designed | Architect |
| `status:in-development` | Being implemented | UX Dev |
| `status:testing` | Being tested | Tester |
| `status:review` | Awaiting review | Human |
| `status:blocked` | Cannot proceed | Various |
| `status:done` | Completed | None |

### Agent Assignment Labels

Show which agent is actively working:

| Label | Agent |
|-------|-------|
| `agent:issue-creator` | Issue Creator |
| `agent:architect` | Architect |
| `agent:ux-dev` | UX Designer/Developer |
| `agent:tester` | Tester |

## Parallel Workflows

Multiple agents can work in parallel when tasks are independent:

### Example: Multi-Component Feature

```
Epic: Homepage Implementation
├─ Issue #1: Hero Component (UX Dev)
├─ Issue #2: Feature Cards (UX Dev)  ← Can work in parallel
├─ Issue #3: Testimonials (UX Dev)  ← Can work in parallel
└─ Issue #4: Integration Tests (Tester) ← Waits for #1-3
```

### Example: Architecture + Content

```
Feature: Treatment Pages
├─ Issue #1: Page Template Architecture (Architect)
├─ Issue #2: Content Writing (Human/External)  ← Parallel
└─ Issue #3: Implementation (UX Dev) ← Waits for #1
```

## Dependency Management

### Explicit Dependencies

Use issue references in description:

```markdown
## Dependencies

**Blocks**:
- #45 - Needs design system tokens first

**Blocked By**:
- #42 - Architecture must be approved

**Related**:
- #38 - Similar component pattern
```

### Dependency Resolution

Before starting work, agents check:
1. All "Blocked By" issues are `status:done`
2. All required "Blocks" are available
3. No circular dependencies exist

If blocked:
1. Add `status:blocked` label
2. Comment with blocking reason
3. Monitor blocking issues
4. Auto-resume when unblocked (future enhancement)

## Error Handling Workflows

### Test Failure Workflow

```
Tester finds bug
    ↓
Create bug issue
    ↓
Add labels: type:bug, priority:*, agent:ux-dev
    ↓
Link to original feature issue
    ↓
UX Dev fixes bug
    ↓
Tester re-tests
    ↓
If pass → merge
If fail → repeat
```

### Design Revision Workflow

```
Architect creates design
    ↓
Human reviews, requests changes
    ↓
Add comment with feedback
    ↓
Keep status:review, add needs:architecture
    ↓
Architect revises design
    ↓
Update issue with revision
    ↓
Human re-reviews
```

### Blocked Issue Workflow

```
Agent cannot proceed
    ↓
Add status:blocked label
    ↓
Document blocking reason in comment
    ↓
Create issue for blocker if doesn't exist
    ↓
Link blocking issue
    ↓
Wait for resolution
    ↓
When unblocked: resume work
```

## Human Review Checkpoints

### Required Reviews

Human must review:
- All architectural decisions (ADRs)
- Major design system changes
- Security-related changes
- Performance-critical optimizations
- Before merging to main branch

### Review Process

1. Agent adds `needs:review` label
2. Agent updates status to `status:review`
3. Agent posts summary comment with:
   - What was done
   - Why approach was chosen
   - Sources cited
   - What needs review
4. Human reviews within SLA (TBD)
5. Human approves or requests changes
6. If changes: back to appropriate agent
7. If approved: merge and close

## Project Board Integration

### Columns

| Column | Status Labels | Description |
|--------|---------------|-------------|
| **New** | `status:new` | Newly created issues |
| **Triaged** | `status:triaged` | Ready for assignment |
| **In Progress** | `status:in-design`, `status:in-development`, `status:testing` | Active work |
| **Review** | `status:review`, `needs:review` | Awaiting review |
| **Blocked** | `status:blocked` | Cannot proceed |
| **Done** | `status:done` | Completed |

### Automation

GitHub Actions automatically move cards:
- New issue → "New" column
- Add `status:triaged` → "Triaged" column
- Add `status:in-*` → "In Progress" column
- Add `status:review` → "Review" column
- Add `status:blocked` → "Blocked" column
- Close issue → "Done" column

## Metrics and Monitoring

### Workflow Metrics

Track these metrics for optimization:

- **Cycle Time**: Time from `status:new` to `status:done`
- **Agent Time**: Time each agent spends per issue
- **Review Time**: Time issues spend in `status:review`
- **Block Time**: Time issues spend `status:blocked`
- **Rework Rate**: Issues that return to previous stages

### Agent Performance

- **Throughput**: Issues completed per agent per week
- **Quality**: Percentage passing first review
- **Response Time**: Time to claim issue after trigger label
- **Error Rate**: Issues with bugs found in testing

### System Health

- **Blocked Issues**: Number currently blocked
- **Review Queue**: Number awaiting human review
- **WIP Limit**: Issues in progress (recommend max 10 total)
- **Label Accuracy**: Correct label usage percentage

## Future Enhancements

### Planned Improvements

1. **Automated Dependency Resolution**
   - Auto-resume blocked issues when dependencies complete
   - Dependency graph visualization

2. **Smart Assignment**
   - Load balancing across agents
   - Skill-based routing
   - Priority queue management

3. **Automated Testing Integration**
   - Tester agent triggers on PR creation
   - Automatic test runs in CI/CD
   - Auto-approval if all tests pass

4. **Learning Integration**
   - Auto-update agent skills from lessons.md
   - Pattern matching for similar issues
   - Suggested agent based on issue content

5. **Metrics Dashboard**
   - Real-time workflow visualization
   - Agent performance tracking
   - Bottleneck identification

---

## Quick Reference

### Starting a New Feature

1. Issue Creator: Create issue with `type:feature`, assess `priority:*`
2. Add `needs:architecture` if design needed
3. Set `status:triaged`
4. Architect: Design and document
5. Add `needs:frontend` when design complete
6. UX Dev: Implement and create PR
7. Add `needs:testing` when implementation done
8. Tester: Test and approve/reject
9. Human: Final review and merge

### Handling a Bug

1. Tester or Human: Create issue with `type:bug`
2. Add `priority:*` based on severity
3. Add `agent:ux-dev` and `needs:frontend`
4. Set `status:triaged`
5. UX Dev: Fix and create PR
6. Tester: Verify fix
7. Human: Review and merge

### Requesting Review

1. Complete work
2. Add `needs:review` label
3. Set `status:review`
4. Post summary comment
5. Wait for human response
6. Address feedback if needed
7. Proceed when approved

---

_For detailed agent behaviors, see [Agent Guidelines](./agent-guidelines.md)_
