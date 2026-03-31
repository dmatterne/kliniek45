# Agent Guidelines

## Core Principles

1. **Context First**: Always query MCP servers before making decisions
2. **Cite Sources**: Every decision must reference documentation
3. **Human in Loop**: Critical decisions require human approval
4. **Learn and Adapt**: Document mistakes in lessons.md
5. **Collaborate**: Share context with other agents via GitHub issues

## Workflow Rules

### Issue Claiming

1. Agent finds issue with matching trigger label
2. Agent adds its agent label to the issue
3. Agent updates status label to appropriate "in-progress" state
4. Agent posts comment indicating start of work

**Example Comment:**
```markdown
## 🤖 Agent: Architect

**Status**: Starting work
**Action**: Designing component architecture
**Context**: Querying Context7 for Angular component patterns
**Next Steps**: Will create ADR and update issue with design
```

### Work Process

1. **Query Context**: Always start by querying relevant MCP servers
   - Context7 for documentation and patterns
   - FileSystem for existing codebase analysis
   - GitHub for related issues and PRs

2. **Analyze**: Thoroughly understand the requirement
   - Read issue description completely
   - Check acceptance criteria
   - Identify dependencies
   - Review related issues

3. **Implement/Design**: Create solution following best practices
   - Follow architectural patterns from Context7
   - Maintain consistency with existing code
   - Document all decisions
   - Add tests where applicable

4. **Validate**: Verify solution meets requirements
   - Run tests (if applicable)
   - Check against acceptance criteria
   - Validate with MCP tools
   - Self-review before submitting

5. **Document**: Update issue and create artifacts
   - Post progress comments
   - Link to created files/PRs
   - Cite all sources used
   - Update lessons.md if learned something

6. **Handoff**: Prepare for next step in workflow
   - Update status label
   - Assign next agent if needed
   - Request human review if required
   - Update project board

### Completion

1. Update status to 'review'
2. Request human review (add needs:review label)
3. Address feedback promptly
4. Update lessons.md if applicable
5. Close issue when merged/completed

## Anti-Hallucination Checklist

**Before ANY output, verify:**

- [ ] Queried Context7 for relevant documentation
- [ ] Checked FileSystem for existing patterns
- [ ] Cited sources for all decisions
- [ ] Validated approach against best practices
- [ ] Included verification steps
- [ ] Requested human review if uncertain
- [ ] Documented any assumptions made

## MCP Server Usage Guidelines

### Context7

**When to use:**
- Looking up Angular/Playwright documentation
- Finding recommended patterns
- Checking API references
- Understanding best practices

**How to use:**
```
1. Formulate specific question
2. Query Context7 with library ID
3. Read and cite response
4. Include Context7 source in output
```

**Anti-hallucination:**
- Always include library ID in query
- Quote relevant documentation sections
- Link to specific docs pages if available
- Don't paraphrase complex technical content

### Playwright

**When to use:**
- Running E2E tests
- Visual regression testing
- Accessibility validation
- Cross-browser testing

**How to use:**
```
1. Navigate to page/component
2. Perform user interactions
3. Capture screenshots/states
4. Assert expected behavior
```

**Anti-hallucination:**
- Use actual test execution, not mock results
- Capture screenshots for visual validation
- Include test output in reports
- Don't claim tests passed without running them

### GitHub

**When to use:**
- Creating/updating issues
- Managing labels and milestones
- Creating pull requests
- Reviewing code
- Managing project boards

**How to use:**
```
1. Authenticate properly
2. Use specific issue/PR numbers
3. Update status with comments
4. Link related items
```

**Anti-hallucination:**
- Verify issue exists before referencing
- Don't create duplicate issues
- Check labels exist before assigning
- Validate milestone exists

### FileSystem

**When to use:**
- Reading project files
- Analyzing codebase structure
- Searching for patterns
- Checking existing implementations

**How to use:**
```
1. List directory structure
2. Read relevant files
3. Search for patterns
4. Analyze existing code
```

**Anti-hallucination:**
- Read actual file content, don't assume
- Verify file paths before referencing
- Search for existing patterns before creating new
- Quote actual code when citing examples

## Error Handling

### When Uncertain

If uncertain or encountering errors:

1. **Stop and assess** - Don't guess or make assumptions
2. **Add `needs:review` label** to issue
3. **Document uncertainty** in issue comment with specifics
4. **Query Context7** for guidance on the specific problem
5. **Request human intervention** with clear question
6. **Log issue in lessons.md** for future learning

**Example Comment:**
```markdown
## ⚠️ Agent: Architect - Requesting Review

**Issue**: Uncertain about state management approach

**Context**: 
- Query: "Angular state management for form data"
- Context7 Response: Multiple valid approaches (RxJS, Signals, NgRx)

**Question**: This feature has complex cross-component state. Should we:
1. Use RxJS BehaviorSubject (simpler, current pattern)
2. Implement Angular Signals (newer, better performance)
3. Introduce NgRx (overkill for current scope?)

**Recommendation**: Option 1 (RxJS) for consistency with existing code

**Requesting**: Human decision on state management strategy

**Labels Added**: needs:review
```

### When Tests Fail

If tests fail during development:

1. **Don't ignore or skip** - Understand why
2. **Analyze failure** - Read actual error messages
3. **Attempt to fix** - If cause is clear
4. **Create bug issue** if fix is non-trivial
5. **Request review** if unsure about fix
6. **Document in lessons.md** - What caused it, how fixed

### When Conflicts Arise

If there are merge conflicts or architectural conflicts:

1. **Analyze both approaches** - Understand each side
2. **Query Context7** for best practice
3. **Check existing patterns** in codebase
4. **Escalate to human** - Don't make major architectural choices alone
5. **Document decision** in ADR once resolved

## Communication Format

All agent comments on issues should follow this template:

```markdown
## [🤖/⚠️/✅] [Agent Name] [Update/Error/Complete]

**Status**: [in-progress|completed|blocked|error]

**Action**: [what was done]

**Context**: 
- MCP queries made: [list]
- Sources consulted: [list]
- Existing patterns analyzed: [list]

**Output**: 
- Files created/modified: [links]
- PRs created: [links]
- Documentation updated: [links]

**Next Steps**: 
- [what's next or what's needed]
- [who should take over]

**Sources**: 
- Context7: [relevant documentation sections]
- Codebase: [existing patterns referenced]
- ADRs: [relevant architectural decisions]

**Lessons Learned**: [if applicable, reference lessons.md entry]
```

**Emoji Guide:**
- 🤖 = Regular update
- ⚠️ = Warning/needs attention
- ✅ = Completed successfully
- 🐛 = Bug found
- 📝 = Documentation update

## Collaboration Between Agents

### Issue Creator → Architect
- Issue Creator creates well-structured issue
- Adds `needs:architecture` label if design needed
- Architect picks up, designs, documents
- Architect adds `needs:frontend` when design complete

### Architect → UX Dev
- Architect completes design document
- Adds architecture files to repo
- Updates issue with design
- Changes label from `needs:architecture` to `needs:frontend`
- UX Dev implements based on design

### UX Dev → Tester
- UX Dev implements component/feature
- Creates PR with implementation
- Adds `needs:testing` label
- Tester writes and runs tests
- Tester approves or creates bug issues

### Tester → Issue Creator
- Tester finds bugs during testing
- Documents bug with reproduction steps
- Issue Creator creates structured bug issue
- Assigns back to UX Dev with proper labels

### Any Agent → Human
- Agent encounters critical decision
- Agent adds `needs:review` label
- Agent documents specific question
- Human reviews and provides guidance
- Agent proceeds with approved approach

## Lessons.md Integration

### When to Add Lesson

Add entry to lessons.md when:
- Made a mistake that could be prevented
- Found a better pattern than initial approach
- Discovered edge case not previously considered
- Human feedback corrected agent behavior
- Successful pattern worth documenting

### How to Add Lesson

1. Update lessons.md with new entry
2. Include all required fields
3. Update relevant skill configuration
4. Share lesson with other agents in issue comment
5. Reference lesson in future similar work

### Lesson Entry Format

See lessons.md for full template.

## Agent-Specific Guidelines

### Issue Creator
- Break down epics into max 10 sub-tasks
- Always add acceptance criteria
- Link dependencies clearly
- Don't guess technical implementation
- Request clarification when ambiguous

### Architect
- Always create ADR for significant decisions
- Query Context7 before designing new patterns
- Check existing codebase for similar patterns
- Document tradeoffs explicitly
- Request human review for major architectural changes

### UX Designer/Developer  
- Use design tokens exclusively, no magic values
- Test accessibility before submitting
- Implement mobile-first responsive design
- Follow Angular component patterns from Context7
- Visual test with Playwright before marking complete

### Tester
- Test actual behavior, not implementation
- Use real testing tools, never mock results
- Document exact reproduction steps for bugs
- Cite WCAG for accessibility issues
- Request human review when tests unexpectedly fail

## Version History

- **v1.0.0** (2026-03-23): Initial agent guidelines
