# Anti-Hallucination Measures

## Overview

Anti-hallucination measures ensure agents provide accurate, verified, and well-sourced outputs. These safeguards prevent agents from "making up" information, using outdated patterns, or providing unverified solutions.

## Core Principles

### 1. **Ground All Decisions in Context**

Every agent decision must be grounded in one or more of these sources:

- **Context7 Documentation**: Official Angular/Playwright docs
- **Existing Codebase**: Patterns already in the project
- **Architecture Decision Records (ADRs)**: Documented decisions
- **Human Guidance**: Explicit instructions or approvals

**Rule**: Never implement based on assumed knowledge alone.

### 2. **Require Source Citations**

All outputs must cite their sources:

```markdown
**Implementation**: Using Angular Signals for state management

**Source**: Context7 - Angular Signals Documentation
- URL: https://angular.dev/guide/signals
- Queried: 2026-03-23
- Relevant Section: "Signals provide a reactive primitive for managing state"

**Rationale**: Angular Signals provide better performance than RxJS 
BehaviorSubject for this use case, as documented in the performance 
comparison section.
```

### 3. **MCP Validation Before Action**

Before any significant action, agents must:

1. Query relevant MCP server
2. Read and parse response
3. Cite specific information
4. Validate against current project context
5. Proceed with implementation

**Example Flow**:
```
Task: Create form component
    ↓
Query Context7: "Angular reactive forms best practices"
    ↓
Read response: Reactive forms vs Template-driven
    ↓
Check codebase: What form approach is currently used?
    ↓
Decision: Use Reactive Forms (consistent with existing code)
    ↓
Implementation: Create component with cited pattern
    ↓
Update issue: Include Context7 citation
```

### 4. **Human Checkpoints**

Certain decisions **require** human approval:

- **Critical Architectural Decisions**
  - State management strategy
  - Module structure changes
  - Third-party library additions
  - Breaking API changes

- **Security-Related Changes**
  - Authentication patterns
  - Authorization logic
  - Data encryption
  - API security

- **Performance-Critical Optimizations**
  - Lazy loading strategy
  - Bundle splitting
  - Caching mechanisms
  - Database query optimization

- **Design System Changes**
  - Color palette modifications
  - Typography scale changes
  - Spacing system updates
  - Component API changes

**Process**:
1. Agent recognizes critical decision point
2. Add `needs:review` label to issue
3. Document decision options with pros/cons
4. Cite sources for each option
5. Recommend preferred option with rationale
6. Wait for human approval
7. Proceed with approved approach

### 5. **Temperature and Token Limits**

Agent responses are constrained:

- **Temperature**: 0.3 (deterministic, focused)
- **Max Tokens**: 4000 (concise, structured outputs)
- **Format**: Structured JSON/Markdown (not free-form)

Lower temperature reduces creative hallucination, focusing on factual responses.

## Agent-Specific Safeguards

### Issue Creator

**Hallucination Risks**:
- Inventing acceptance criteria
- Assuming technical implementation
- Creating duplicate issues
- Misassigning priority

**Safeguards**:
1. ✅ Only extract explicitly stated requirements
2. ✅ Flag ambiguous requirements for clarification
3. ✅ Search GitHub for existing similar issues before creating
4. ✅ Don't infer technical details - leave for Architect
5. ✅ Request human input for priority if uncertain

**Validation**:
```python
def validate_issue_creation(requirement):
    # Check: requirement is explicit
    if contains_assumptions(requirement):
        return "REQUEST_CLARIFICATION"
    
    # Check: no duplicates
    existing = search_github_issues(requirement.keywords)
    if existing:
        return f"POSSIBLE_DUPLICATE: {existing}"
    
    # Check: acceptance criteria are from requirement
    if invented_criteria(acceptance_criteria):
        return "ERROR: Don't invent criteria"
    
    return "OK"
```

### Architect

**Hallucination Risks**:
- Using deprecated Angular patterns
- Inventing architecture without research
- Copying patterns from wrong framework
- Overengineering simple requirements

**Safeguards**:
1. ✅ **Always** query Context7 before designing
2. ✅ Validate pattern exists in Angular docs
3. ✅ Check codebase for existing similar patterns
4. ✅ Cite specific Angular style guide sections
5. ✅ Request review for novel architectural patterns
6. ✅ Create ADR to document reasoning

**Validation**:
```python
def validate_architecture_design(design):
    # Check: Context7 was queried
    if not design.context7_queries:
        return "ERROR: Must query Context7 first"
    
    # Check: pattern exists in Angular docs
    if not verify_pattern_in_docs(design.pattern):
        return "ERROR: Pattern not found in Angular docs"
    
    # Check: similar pattern exists in codebase
    existing = search_codebase(design.component_type)
    if existing and not design.justification_for_new:
        return f"WARNING: Similar exists at {existing}"
    
    # Check: ADR created for significant decisions
    if design.is_significant and not design.adr:
        return "ERROR: Significant decision requires ADR"
    
    return "OK"
```

### UX Designer/Developer

**Hallucination Risks**:
- Using hardcoded values instead of design tokens
- Implementing without accessibility
- Using deprecated component APIs
- Skipping tests

**Safeguards**:
1. ✅ Design tokens usage enforced (no magic numbers)
2. ✅ Accessibility checklist required before completion
3. ✅ Context7 query for component API before implementation
4. ✅ Playwright visual validation required
5. ✅ Test coverage checked automatically
6. ✅ Code review checks for pattern compliance

**Validation**:
```python
def validate_component_implementation(component):
    # Check: uses design tokens
    hardcoded_values = find_hardcoded_values(component.styles)
    if hardcoded_values:
        return f"ERROR: Hardcoded values found: {hardcoded_values}"
    
    # Check: accessibility attributes
    aria_issues = check_accessibility(component)
    if aria_issues:
        return f"ERROR: Accessibility issues: {aria_issues}"
    
    # Check: Context7 was consulted
    if not component.context7_citation:
        return "ERROR: Must cite Context7 for pattern"
    
    # Check: tests exist
    test_coverage = get_coverage(component)
    if test_coverage < 0.8:
        return f"ERROR: Coverage {test_coverage} below 80%"
    
    return "OK"
```

### Tester

**Hallucination Risks**:
- Claiming tests passed without running them
- Creating mock test results
- Inventing bug details
- Skipping actual browser testing

**Safeguards**:
1. ✅ All test results must include actual tool output
2. ✅ Screenshots required for visual bugs
3. ✅ Playwright must actually execute (not simulated)
4. ✅ Coverage numbers from actual coverage tool
5. ✅ Bug reports must include exact reproduction steps
6. ✅ Accessibility violations must cite WCAG guideline

**Validation**:
```python
def validate_test_results(test_report):
    # Check: actual test output included
    if not test_report.test_tool_output:
        return "ERROR: Must include actual test output"
    
    # Check: Playwright actually ran
    if test_report.playwright_tests:
        if not test_report.playwright_logs:
            return "ERROR: Missing Playwright execution logs"
    
    # Check: coverage from tool
    if test_report.coverage:
        if not test_report.coverage_tool_output:
            return "ERROR: Must provide coverage tool output"
    
    # Check: bug has reproduction steps
    if test_report.bugs:
        for bug in test_report.bugs:
            if not bug.reproduction_steps:
                return f"ERROR: Bug #{bug.id} missing reproduction"
    
    return "OK"
```

## MCP-Specific Safeguards

### Context7 MCP

**Usage Pattern**:
```typescript
// Correct: Specific query with library
const result = await context7.query({
  library: "/angular/angular",
  query: "How to implement reactive forms with validation?"
});

// Include in output
const citation = {
  source: "Context7 - Angular Documentation",
  library: "/angular/angular",
  query: result.query,
  response_summary: result.summary,
  url: result.sourceUrl
};
```

**Anti-Hallucination Rules**:
- ❌ Don't paraphrase technical content - quote directly
- ❌ Don't cite Context7 without actually querying it
- ❌ Don't use "I remember from docs" - always query
- ✅ Include query and response in decision documents
- ✅ Quote relevant sections verbatim
- ✅ Link to specific documentation pages

### Playwright MCP

**Usage Pattern**:
```typescript
// Correct: Actually navigate and test
await page.goto('http://localhost:4200/component');
await page.getByRole('button', { name: 'Submit' }).click();
const screenshot = await page.screenshot();

// Include actual output
const testResult = {
  passed: true,
  screenshot: screenshot,
  logs: page.console.logs,
  errors: page.errors
};
```

**Anti-Hallucination Rules**:
- ❌ Don't claim test passed without actually running
- ❌ Don't invent test scenarios
- ❌ Don't describe expected behavior without verifying
- ✅ Capture screenshots for visual validation
- ✅ Include console logs and errors
- ✅ Provide actual Playwright test output

### GitHub MCP

**Usage Pattern**:
```typescript
// Correct: Verify before referencing
const issue = await github.getIssue(42);
if (!issue) {
  throw new Error("Issue #42 not found");
}

// Link with verification
const reference = {
  type: "issue",
  number: issue.number,
  title: issue.title,
  status: issue.state,
  verified: true
};
```

**Anti-Hallucination Rules**:
- ❌ Don't reference issue numbers without verifying they exist
- ❌ Don't assume label exists - check first
- ❌ Don't create duplicate issues
- ✅ Verify issue/PR exists before linking
- ✅ Check labels exist before assigning
- ✅ Search for duplicates before creating

### FileSystem MCP

**Usage Pattern**:
```typescript
// Correct: Read actual file content
const designTokens = await filesystem.readFile(
  'src/styles/tokens.scss'
);

// Parse actual values
const colors = parseScssVariables(designTokens);

// Use actual values in decision
const decision = {
  color: colors.primary, // from actual file
  source: "src/styles/tokens.scss",
  verified: true
};
```

**Anti-Hallucination Rules**:
- ❌ Don't assume file structure - read directory first
- ❌ Don't guess file contents - read actual file
- ❌ Don't cite non-existent files
- ✅ Read actual file before referencing
- ✅ Search codebase for existing patterns
- ✅ Quote actual code when citing examples

## Output Format Requirements

### Standard Decision Document

All agent decisions must follow this format:

```markdown
## Decision: [Short Title]

### Context
[What problem are we solving? What's the current state?]

### Research Conducted
**Context7 Queries**:
1. Library: /angular/angular
   Query: "..."
   Summary: "..."
   Source: [URL]

**Codebase Analysis**:
- Analyzed: [files/components checked]
- Found: [existing patterns discovered]

**Other Sources**:
- [ADRs consulted]
- [Human guidance received]

### Options Considered

#### Option 1: [Name]
- **Description**: [what it is]
- **Pros**: [benefits]
- **Cons**: [drawbacks]
- **Source**: [where this pattern comes from]

#### Option 2: [Name]
- [same structure]

### Decision
**Chosen**: Option [N] - [Name]

**Rationale**: [why this option was selected]

**Tradeoffs**: [what we're giving up]

### Implementation Plan
1. [step 1]
2. [step 2]

### Verification
- [ ] Context7 pattern confirmed
- [ ] Existing codebase compatible
- [ ] Tests planned
- [ ] Documentation updated
- [ ] Human review requested (if needed)

### Sources
- Context7: [citations]
- Codebase: [file references]
- ADRs: [relevant decisions]
- Human: [approval references]
```

## Monitoring and Enforcement

### Automated Checks

**Pre-Commit Hooks**:
```yaml
- Check: All code has corresponding tests
- Check: No hardcoded values in components
- Check: All ARIA attributes present on interactive elements
- Check: Design tokens used for all styling values
```

**PR Validation**:
```yaml
- Check: Context7 citation in PR description
- Check: Test coverage meets minimum (80%)
- Check: Accessibility tests pass
- Check: Visual regression tests pass
- Check: Human reviewer assigned for critical changes
```

### Lesson Tracking

When anti-hallucination measures catch an issue:

1. Log in lessons.md
2. Update agent skill configuration
3. Add to pattern library (anti-pattern)
4. Share with all agents
5. Monitor for similar issues

**Example Lesson**:
```markdown
### Lesson #001
- **Date**: 2026-03-23
- **Agent**: ux-dev
- **Issue**: Used hardcoded color value
- **Root Cause**: Didn't check design tokens file
- **Prevention**: Added FileSystem check to skill workflow
- **Skill Updated**: implement-angular-component
```

## Success Metrics

### Hallucination Detection Rate

**Track**:
- Decisions without Context7 citation
- Code without test coverage
- Components without accessibility
- Bugs from incorrect assumptions

**Target**: < 5% of outputs require correction for hallucination

### Source Citation Rate

**Track**:
- Percentage of decisions with sources
- Context7 queries per decision
- Codebase checks performed
- Human reviews requested

**Target**: 100% of significant decisions cite sources

### Quality Scores

**Track**:
- First-time-right rate (no revisions needed)
- Human approval rate
- Test pass rate
- Accessibility compliance rate

**Target**: > 90% approval on first submission

---

## Quick Checklist

Before submitting any work, verify:

- [ ] Queried Context7 for relevant patterns
- [ ] Checked existing codebase for similar implementations
- [ ] Cited all sources in decision document
- [ ] Included actual test results (not descriptions)
- [ ] Requested human review if critical decision
- [ ] Updated lessons.md if learned something
- [ ] Followed established patterns from ADRs
- [ ] Provided verification steps
- [ ] No assumptions left undocumented
- [ ] All claims are verifiable

---

_Anti-hallucination is not about perfection, but about honesty, verification, and continuous improvement through learning._
