# Agent Learning Ledger

## Purpose

This file captures mistakes, edge cases, and improvements discovered during agent operation. Each lesson helps agents avoid repeating errors and continuously improve their performance.

## How to Use This File

### For Agents
1. **Read on startup**: Review recent lessons before starting work
2. **Add lessons**: When you make a mistake or learn something valuable
3. **Reference lessons**: When similar situations arise
4. **Share lessons**: Mention relevant lessons in issue comments

### For Humans
1. **Review regularly**: Check for patterns in agent mistakes
2. **Provide feedback**: Comment on lessons to guide future behavior
3. **Update skills**: Help refine agent skill configurations based on lessons

---

## Lesson Log

_Lessons are logged chronologically. Most recent first._

<!--
### Lesson Template (copy for new entries):

### Lesson #XXX
- **Date**: YYYY-MM-DD
- **Agent**: [agent-name]
- **Issue**: #[issue-number]
- **Context**: [what was the agent trying to do]
- **Mistake**: [what went wrong]
- **Root Cause**: [why it happened]
- **Correction**: [what was done to fix it]
- **Skill Updated**: [which skill was modified]
- **Prevention**: [how to prevent in future]
- **Related Lessons**: [links to similar lessons]
-->

### Lesson #001
- **Date**: 2026-03-23
- **Agent**: Human-AI Collaboration
- **Issue**: #1 (Angular Initialization)
- **Context**: User asked to "implement agent first then the angular initialization using the freshly setup agent stup"
- **Mistake**: Stopped after implementing agent system without continuing to Angular initialization
- **Root Cause**: Misinterpreted "implement" as setting up infrastructure rather than completing the entire task
- **Correction**: When user says "implement X then Y", continue through Y until fully complete, not just setup
- **Skill Updated**: Task completion understanding - "implement" means complete the work, not just prepare for it
- **Prevention**: When given multi-step instructions with "implement", execute all steps to completion without stopping for approval unless explicitly asked
- **Human Feedback**: "please add to the lessons learned that if i ask you to implement it you shouldnt stop until its done like you just did. Continue with angular initialization til the work is done"

### Lesson #002
- **Date**: 2026-03-24
- **Agent**: Human-AI Collaboration
- **Issue**: Website Recreation
- **Context**: Original request was to recreate hairclinicwolf.be website after setting up agents and Angular
- **Mistake**: Completed infrastructure (agents + Angular) but didn't start the MAIN OBJECTIVE: recreating the actual website
- **Root Cause**: Lost sight of primary goal - got absorbed in infrastructure setup and thought that was the deliverable
- **Correction**: Infrastructure is the MEANS, not the END. The actual request was to rebuild the hairclinicwolf.be website structure
- **Skill Updated**: Goal tracking - always keep the primary objective in focus, infrastructure is just preparation
- **Prevention**: After completing setup/infrastructure tasks, IMMEDIATELY ask "What was the original goal this was preparing for?" and continue to that
- **Human Feedback**: "Did you not start with recreating the hairclinicwolf.be website as per the prompt i gave?"
- **Next Action**: Start recreating website structure from hairclinicwolf.be with custom green styling

---

## Pattern Library

### Successful Patterns

Patterns that work well and should be repeated:

#### Pattern: Component Design Workflow
**Context**: Designing new Angular component  
**Process**:
1. Query Context7 for Angular component patterns
2. Check FileSystem for existing similar components
3. Design with reusability in mind
4. Create architecture document before implementation
5. Document component API clearly

**Success Rate**: TBD  
**Used By**: Architect, UX Dev

#### Pattern: Testing Workflow (TDD Approach)
**Context**: Implementing new feature  
**Process**:
1. Write failing test first (Vitest for unit, Playwright for E2E)
2. Implement minimum code to pass test
3. Refactor while keeping tests green
4. Add accessibility tests
5. Update test coverage metrics

**Success Rate**: TBD  
**Used By**: UX Dev, Tester

#### Pattern: Accessibility-First Implementation
**Context**: Creating UI components  
**Process**:
1. Use semantic HTML elements first
2. Add ARIA attributes as needed
3. Implement keyboard navigation
4. Test with Playwright screen reader simulation
5. Validate color contrast
6. Run axe-core automated tests

**Success Rate**: TBD  
**Used By**: UX Dev, Tester

#### Pattern: Context7 Citation
**Context**: Making any design or implementation decision  
**Process**:
1. Formulate specific question
2. Query Context7 with appropriate library
3. Read full response
4. Quote relevant sections in decision document
5. Include link to documentation
6. Cite in issue comments and code

**Success Rate**: TBD  
**Used By**: All agents

---

### Anti-Patterns to Avoid

Patterns that have caused problems and should be avoided:

#### Anti-Pattern: Creating Components Without Checking Existing
**Problem**: Duplicate component implementations  
**Why**: Agents didn't search FileSystem before creating new component  
**Prevention**: 
- Always search codebase for similar components first
- Check design system component library
- Query UX Dev for existing components
- Document why new component needed if similar exists

**Flagged By**: TBD  
**Agents Affected**: Architect, UX Dev

#### Anti-Pattern: Implementing Without Context7 Documentation Check
**Problem**: Non-standard Angular patterns, deprecated APIs  
**Why**: Agent assumed pattern without verifying with Context7  
**Prevention**:
- Query Context7 BEFORE implementation
- Check for "best practices" and "recommended" patterns
- Verify API is current (not deprecated)
- Cite Context7 source in implementation

**Flagged By**: TBD  
**Agents Affected**: All agents

#### Anti-Pattern: Merging Without Test Coverage
**Problem**: Untested code merged, causing regressions  
**Why**: Skipped testing phase or marked tests as "TODO"  
**Prevention**:
- Require 80% test coverage minimum
- Tester agent must approve all PRs
- No "TODO" tests in production code
- E2E tests for all user flows

**Flagged By**: TBD  
**Agents Affected**: UX Dev, Tester

#### Anti-Pattern: Designing Without Mobile-First Consideration
**Problem**: Desktop-focused designs don't work well on mobile  
**Why**: Designed for desktop first, tried to adapt to mobile  
**Prevention**:
- Always design mobile layout first
- Test at 320px viewport minimum
- Use design system breakpoints
- Validate touch targets (44x44px minimum)

**Flagged By**: TBD  
**Agents Affected**: Architect, UX Dev

#### Anti-Pattern: Making Architectural Decisions Without ADR
**Problem**: Decision rationale lost, inconsistent patterns  
**Why**: Agent made choice without documenting reasoning  
**Prevention**:
- Create ADR for all significant architectural decisions
- Document alternatives considered
- Explain tradeoffs explicitly
- Request human review for critical decisions

**Flagged By**: TBD  
**Agents Affected**: Architect

---

## Metrics

### Overall Performance

- **Total Lessons Logged**: 0
- **Lessons by Severity**:
  - Critical: 0
  - Major: 0
  - Minor: 0
  - Informational: 0

### Agent-Specific Metrics

#### Issue Creator
- **Total Lessons**: 0
- **Issue Quality Improvements**: 0
- **Clarification Requests Reduced**: 0
- **Skill Updates**: 0

#### Architect
- **Total Lessons**: 0
- **Design Revisions Required**: 0
- **ADRs Created**: 0
- **Skill Updates**: 0

#### UX Designer/Developer
- **Total Lessons**: 0
- **Accessibility Issues Fixed**: 0
- **Visual Regression Caught**: 0
- **Skill Updates**: 0

#### Tester
- **Total Lessons**: 0
- **Bugs Found**: 0
- **False Positives**: 0
- **Skill Updates**: 0

### Learning Velocity

- **Average Lessons Per Week**: TBD
- **Prevented Regressions**: 0 (mistakes avoided due to lessons learned)
- **Skills Updated**: 0
- **Patterns Documented**: 4 (successful) + 5 (anti-patterns)

---

## Related Documentation

- [Agent Guidelines](./agent-guidelines.md)
- [Workflow Orchestration](./workflow-orchestration.md)
- [Anti-Hallucination Measures](./anti-hallucination.md)
- [Agent Configurations](../../.github/agents/)

---

## Changelog

### Version 1.0.0 (2026-03-23)
- Initial lessons.md structure created
- Pattern library seeded with 4 successful patterns
- Anti-pattern library seeded with 5 common pitfalls
- Metrics tracking framework established
- Template for lesson entries defined

---

_This is a living document. As agents learn and improve, this file will grow with valuable lessons that benefit the entire agent system._

## Lesson #003: SCSS Module System and Component Architecture
- **Date**: 2026-03-24
- **Context**: Building all homepage components for hairclinicwolf.be recreation
- **Issue**: Build failures due to undefined SCSS variables across multiple components
- **Mistake**: Not properly importing typography variables in component SCSS files
- **Root Cause**: Used @use for colors and spacing but forgot typography imports in several components
- **Correction**: Added `@use '../../../styles/typography' as *;` to all component SCSS files
- **Learning**: In Angular with SCSS modules (@use), EVERY component SCSS file needs to explicitly import ALL design token files it uses. There is no global scope.
- **Prevention**: 
  - Create a component template with all @use imports pre-configured
  - Add build step before creating components to catch missing imports early
  - Consider creating a _all.scss that re-exports all design tokens for easier importing

## Lesson #004: Standalone Component Configuration in Angular 21
- **Date**: 2026-03-24
- **Context**: Converting generated components to standalone components
- **Mistake**: Initially tried to use create tool on already-generated component files
- **Root Cause**: Angular CLI already created .ts files when generating components
- **Correction**: Used edit tool to update existing TypeScript files to standalone configuration
- **Learning**: 
  - When using `ng generate component`, the .ts file already exists - use edit, not create
  - Standalone components in Angular 21 require `standalone: true` in @Component decorator
  - All dependencies must be in the imports array of the component decorator
  - Main App component must import and list all child components
- **Prevention**: 
  - Always check if file exists before deciding between create vs edit
  - Use `ng generate component --standalone` flag to create standalone components from the start

