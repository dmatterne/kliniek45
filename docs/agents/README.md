# Agent System Documentation

## Overview

The HaarKliniek45 project uses an intelligent multi-agent system powered by Model Context Protocol (MCP) servers to automate development workflows. Four specialized agents work collaboratively through GitHub Issues to design, implement, and test the application.

## Quick Start

### Prerequisites

1. **Node.js & npm** (v18+ recommended)
2. **GitHub CLI** (`gh`) installed and authenticated
3. **GitHub Personal Access Token** with repo permissions

### Setup MCP Servers

```bash
# Install MCP servers globally
npm install -g @context7/mcp-server
npm install -g @playwright/mcp-server
npm install -g @modelcontextprotocol/server-github
npm install -g @modelcontextprotocol/server-filesystem

# Install Playwright browsers
npx playwright install

# Set GitHub token
export GITHUB_TOKEN="your_github_personal_access_token"
```

### Verify Setup

```bash
# Check GitHub CLI
gh --version

# Check labels created
gh label list | grep agent:

# Check MCP config
cat .github/mcp-config.json
```

## Architecture

### Agents

#### 1. Issue Creator Agent
- **Purpose**: Analyzes requirements and creates structured GitHub issues
- **MCP Servers**: GitHub, FileSystem
- **Trigger**: Manual invocation
- **Output**: GitHub issues with proper labels and structure

#### 2. Architect Agent
- **Purpose**: Designs system architecture and technical solutions
- **MCP Servers**: Context7 (Angular), GitHub, FileSystem
- **Trigger**: `needs:architecture` label
- **Output**: Architecture documents, ADRs, design specifications

#### 3. UX Designer/Developer Agent
- **Purpose**: Designs and implements UI/UX components
- **MCP Servers**: Context7 (Angular), Playwright, GitHub, FileSystem
- **Trigger**: `needs:design` or `needs:frontend` labels
- **Output**: Angular components, tests, PRs

#### 4. Tester Agent
- **Purpose**: Ensures quality through comprehensive testing
- **MCP Servers**: Playwright, Context7, GitHub, FileSystem
- **Trigger**: `needs:testing` label
- **Output**: Test suites, test reports, bug issues

### MCP Servers

| Server | Purpose | Used By |
|--------|---------|---------|
| **Context7** | Angular/Playwright documentation | Architect, UX Dev, Tester |
| **Playwright** | E2E testing, visual regression | UX Dev, Tester |
| **GitHub** | Issue/PR management | All agents |
| **FileSystem** | Codebase access | All agents |

## Workflow

### Standard Feature Development

```
1. Requirement → Issue Creator → Creates structured issue
2. Issue (needs:architecture) → Architect → Designs solution
3. Issue (needs:frontend) → UX Dev → Implements component
4. Issue (needs:testing) → Tester → Tests and validates
5. Issue (needs:review) → Human → Reviews and merges
```

### Label-Based Routing

Agents automatically pick up issues with specific labels:

- `needs:architecture` → Architect starts design work
- `needs:design` or `needs:frontend` → UX Dev implements
- `needs:testing` → Tester creates and runs tests
- `needs:review` → Human reviews and approves

### Status Tracking

Issues progress through status labels:

```
status:new → status:triaged → status:in-* → status:review → status:done
```

## Documentation

### Core Documents

1. **[Agent Guidelines](./agents/agent-guidelines.md)**
   - Core principles and rules for all agents
   - Workflow processes
   - Communication formats
   - Error handling

2. **[Workflow Orchestration](./agents/workflow-orchestration.md)**
   - State machine diagram
   - Agent workflows in detail
   - Label-based routing
   - Dependency management

3. **[Anti-Hallucination](./agents/anti-hallucination.md)**
   - Safeguards against AI hallucination
   - MCP validation requirements
   - Source citation standards
   - Quality checks

4. **[Lessons Learned](../lessons.md)**
   - Agent learning ledger
   - Successful patterns
   - Anti-patterns to avoid
   - Metrics tracking

### Agent Configurations

Each agent has:
- `config.json` - Core configuration and workflow settings
- `skills.json` - Detailed skill definitions and anti-hallucination rules
- `prompts/` - Prompt templates for common tasks

Location: `.github/agents/{agent-name}/`

## Usage Examples

### Creating a New Feature

1. **Manual Issue Creation**:
   ```bash
   gh issue create \
     --title "Implement hero section component" \
     --body "Create a responsive hero section with CTA button" \
     --label "type:feature,priority:high,needs:architecture"
   ```

2. **Architect Designs**:
   - Agent picks up issue with `needs:architecture`
   - Queries Context7 for component patterns
   - Creates design document
   - Updates issue and adds `needs:frontend`

3. **UX Dev Implements**:
   - Agent picks up issue with `needs:frontend`
   - Reads architecture design
   - Implements component with tests
   - Creates PR and adds `needs:testing`

4. **Tester Validates**:
   - Agent picks up issue with `needs:testing`
   - Runs unit and E2E tests
   - Validates accessibility
   - Approves or creates bug issues

5. **Human Reviews and Merges**:
   - Reviews PR
   - Merges if approved
   - Closes issue

### Reporting a Bug

```bash
gh issue create \
  --title "Button not keyboard accessible" \
  --body "The submit button cannot be activated with Enter key" \
  --label "type:bug,priority:high,needs:frontend"
```

### Requesting Architecture Review

```bash
gh issue create \
  --title "State management strategy for multi-step form" \
  --body "Need to decide between RxJS, Signals, or NgRx for form state" \
  --label "type:architecture,priority:medium,needs:architecture,needs:review"
```

## Anti-Hallucination Measures

### Required Practices

1. **Context First**: Always query MCP servers before decisions
2. **Cite Sources**: Every decision must reference documentation
3. **Human Checkpoints**: Critical decisions require approval
4. **Actual Testing**: Use real tools, not mock results
5. **Lessons Learned**: Document mistakes for improvement

### Validation Checks

- ✅ Context7 query performed
- ✅ Sources cited in output
- ✅ Existing patterns checked
- ✅ Tests actually executed
- ✅ Human review requested when needed

## Monitoring

### Key Metrics

Track these metrics in lessons.md:

- **Cycle Time**: Issue creation to completion
- **Quality Rate**: First-time approval percentage
- **Hallucination Rate**: Outputs requiring correction
- **Test Coverage**: Percentage of code tested
- **Accessibility Score**: WCAG compliance rate

### Health Indicators

Monitor for:
- Issues stuck in `status:blocked`
- Long review times (> 24 hours)
- High bug creation rate
- Low test coverage
- Frequent revision requests

## Troubleshooting

### Agent Not Picking Up Issue

**Check**:
1. Is the trigger label present? (`needs:*`)
2. Is the issue status correct? (should be `status:triaged`)
3. Are dependencies resolved?
4. Is the agent running/monitoring?

**Fix**:
- Add correct labels
- Update status
- Resolve blocking issues
- Restart agent monitoring

### MCP Server Connection Issues

**Check**:
1. Are MCP servers installed?
2. Is `GITHUB_TOKEN` set?
3. Is network connection available?
4. Are MCP server processes running?

**Fix**:
```bash
# Reinstall MCP servers
npm install -g @context7/mcp-server

# Set token
export GITHUB_TOKEN="your_token"

# Test connection
npx @context7/mcp-server --help
```

### Tests Failing Unexpectedly

**Check**:
1. Did tests actually run? (check logs)
2. Is Playwright installed? (`npx playwright install`)
3. Are browsers available?
4. Is dev server running?

**Fix**:
```bash
# Install browsers
npx playwright install

# Run tests manually
npm test

# Check Playwright
npx playwright --version
```

## Best Practices

### For Humans

1. **Write Clear Requirements**
   - Be specific about desired behavior
   - Include acceptance criteria
   - Provide examples when helpful

2. **Review Promptly**
   - Agents wait on `needs:review` label
   - Provide clear feedback
   - Approve or request specific changes

3. **Update Labels**
   - Keep issue labels accurate
   - Remove outdated labels
   - Add `status:blocked` when stuck

### For Agents

1. **Query Before Deciding**
   - Always use MCP servers
   - Don't assume or guess
   - Cite all sources

2. **Test Before Submitting**
   - Run actual tests
   - Include test output
   - Validate accessibility

3. **Document Decisions**
   - Explain rationale
   - List alternatives considered
   - Cite sources

4. **Learn from Mistakes**
   - Update lessons.md
   - Modify skills
   - Share with other agents

## Configuration Files

### MCP Configuration
- **Location**: `.github/mcp-config.json`
- **Purpose**: MCP server settings and agent assignments
- **Edit**: To add/modify MCP servers or agent settings

### Agent Configurations
- **Location**: `.github/agents/{agent}/config.json`
- **Purpose**: Agent-specific settings and workflow rules
- **Edit**: To modify agent behavior or triggers

### Agent Skills
- **Location**: `.github/agents/{agent}/skills.json`
- **Purpose**: Detailed skill definitions and safeguards
- **Edit**: To add new skills or update anti-hallucination rules

## Contributing

### Adding a New Skill

1. Update `skills.json` for relevant agent
2. Add anti-hallucination rules
3. Document in agent guidelines
4. Test with sample issue
5. Update lessons.md with results

### Modifying Workflow

1. Update workflow orchestration docs
2. Modify agent config.json
3. Update relevant skills
4. Test with sample issues
5. Document changes

### Reporting Issues

```bash
gh issue create \
  --title "[AGENT] Brief description" \
  --body "Detailed description of agent issue" \
  --label "type:bug,priority:medium,agent:system"
```

## Resources

### Documentation
- [Angular Documentation](https://angular.dev)
- [Playwright Documentation](https://playwright.dev)
- [MCP Specification](https://modelcontextprotocol.io)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Internal
- [Project Plan](../../../plan.md)
- [Rebuild Plan](../../../rebuild_plan.md)
- [Lessons Learned](../../lessons.md)

## Support

For questions or issues:
1. Check documentation in `docs/agents/`
2. Review lessons.md for similar situations
3. Create issue with `needs:review` label
4. Tag human reviewers

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-23  
**Maintainers**: HaarKliniek45 Development Team
