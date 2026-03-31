# HaarKliniek45 Agent System - Quick Start Guide

## 🎉 Welcome!

The agent system is now fully configured and ready to use. This guide will help you get started with the MCP-powered agent workflow.

## ✅ What's Already Done

- ✅ **4 Specialized Agents** configured with skills and anti-hallucination measures
- ✅ **29 GitHub Labels** created for workflow orchestration
- ✅ **MCP Configuration** file ready for server connections
- ✅ **Comprehensive Documentation** in `docs/agents/`
- ✅ **Learning System** with `lessons.md` for continuous improvement
- ✅ **First Issue Created**: [Issue #1 - Initialize Angular 21 Project](https://github.com/D-Matter-Forge/Haarkliniek45/issues/1)

## 🚀 Getting Started (3 Steps)

### Step 1: Install MCP Servers

```bash
# Install MCP servers globally
npm install -g @context7/mcp-server
npm install -g @playwright/mcp-server
npm install -g @modelcontextprotocol/server-github
npm install -g @modelcontextprotocol/server-filesystem

# Install Playwright browsers
npx playwright install
```

### Step 2: Configure GitHub Token

```bash
# Windows PowerShell
$env:GITHUB_TOKEN="your_github_personal_access_token"

# Linux/Mac
export GITHUB_TOKEN="your_github_personal_access_token"
```

**To create a token**:
1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Copy and use in the command above

### Step 3: Verify Setup

```bash
# Check GitHub CLI is authenticated
gh auth status

# Check labels were created
gh label list | findstr agent:

# Check MCP config exists
Get-Content .github\mcp-config.json

# View first issue
gh issue view 1
```

## 🎯 Using the Agent System

### Create a New Feature Request

```bash
gh issue create \
  --title "Implement contact form component" \
  --label "type:feature,priority:high,needs:architecture,status:triaged" \
  --body "Create a contact form with validation and accessibility"
```

**What happens next**:
1. ✅ Issue is created and triaged
2. 🤖 **Architect agent** picks up (`needs:architecture` label)
3. 📝 Architect designs the component structure
4. 🏗️ **UX Dev agent** implements (`needs:frontend` label added)
5. 🧪 **Tester agent** validates (`needs:testing` label added)
6. 👤 **Human** reviews and merges (`needs:review` label)

### Report a Bug

```bash
gh issue create \
  --title "Button color contrast fails WCAG AA" \
  --label "type:bug,priority:medium,needs:frontend,status:triaged" \
  --body "Submit button on contact form has insufficient contrast ratio (3.2:1, needs 4.5:1)"
```

### Request Architecture Review

```bash
gh issue create \
  --title "State management strategy for user data" \
  --label "type:architecture,priority:high,needs:architecture,needs:review" \
  --body "Need to decide between RxJS BehaviorSubject vs Angular Signals for user session state"
```

## 📊 Current Status

### Issues
- **Issue #1**: Initialize Angular 21 Project (assigned to Architect)
  - Labels: `type:feature`, `priority:critical`, `needs:architecture`
  - Status: `status:triaged`
  - Waiting for: Architect to design project structure

### Todos (from SQL)
- ✅ **Completed** (4): GitHub labels, agent configs, lessons.md, project board
- 🔄 **In Progress** (1): MCP server setup
- ⏳ **Pending** (9): Angular init, CI/CD, Phase 1 tasks

## 🤖 Agent Overview

| Agent | Trigger Label | Purpose | Output |
|-------|---------------|---------|--------|
| **Issue Creator** | Manual | Parse requirements → Create issues | GitHub issues |
| **Architect** | `needs:architecture` | Design architecture | ADRs, designs |
| **UX Dev** | `needs:design`, `needs:frontend` | Implement UI/UX | Components, tests |
| **Tester** | `needs:testing` | Quality assurance | Test suites, reports |

## 📚 Essential Documentation

### Quick References
- **Agent Guidelines**: `docs/agents/agent-guidelines.md`
- **Workflow Process**: `docs/agents/workflow-orchestration.md`
- **Anti-Hallucination**: `docs/agents/anti-hallucination.md`
- **Full Guide**: `docs/agents/README.md`

### Configuration Files
- **MCP Config**: `.github/mcp-config.json`
- **Agent Configs**: `.github/agents/{agent}/config.json`
- **Agent Skills**: `.github/agents/{agent}/skills.json`

### Learning System
- **Lessons Log**: `lessons.md` (track mistakes and improvements)
- **Pattern Library**: Successful patterns in `lessons.md`
- **Anti-Patterns**: Things to avoid in `lessons.md`

## 🔍 Monitoring Progress

### View Issues by Status
```bash
# New issues
gh issue list --label "status:new"

# In progress
gh issue list --label "status:in-design,status:in-development,status:testing"

# Awaiting review
gh issue list --label "status:review"

# Blocked
gh issue list --label "status:blocked"
```

### View Issues by Agent
```bash
# Architect's issues
gh issue list --label "agent:architect"

# UX Dev's issues
gh issue list --label "agent:ux-dev"

# Tester's issues
gh issue list --label "agent:tester"
```

### View by Priority
```bash
gh issue list --label "priority:critical"
gh issue list --label "priority:high"
```

## ⚡ Common Workflows

### Feature Development Flow
```
Requirement → Issue Creator → Structured Issue
                     ↓
                Architect → Design & ADR
                     ↓
                  UX Dev → Implementation + Tests
                     ↓
                  Tester → Validation
                     ↓
                  Human → Review & Merge
```

### Bug Fix Flow
```
Bug Report → Issue Creator → Bug Issue
                    ↓
                 UX Dev → Fix + Tests
                    ↓
                 Tester → Verify Fix
                    ↓
                 Human → Approve & Merge
```

## 🛠️ Troubleshooting

### Agent Not Picking Up Issue?
**Check**:
- ✅ Correct trigger label? (`needs:architecture`, `needs:frontend`, etc.)
- ✅ Status is `status:triaged`?
- ✅ Dependencies resolved?

**Fix**: Add correct labels and update status

### MCP Connection Failed?
**Check**:
- ✅ MCP servers installed? (`npm list -g`)
- ✅ `GITHUB_TOKEN` set? (`echo $env:GITHUB_TOKEN`)
- ✅ Internet connection for Context7?

**Fix**: Reinstall servers or set token

### Tests Failing?
**Check**:
- ✅ Playwright installed? (`npx playwright --version`)
- ✅ Dev server running? (`ng serve`)

**Fix**: `npx playwright install` and start dev server

## 🎓 Learning Resources

### For Humans
- Read `docs/agents/README.md` for comprehensive guide
- Check `lessons.md` for patterns and anti-patterns
- Review `docs/agents/agent-guidelines.md` for agent behavior

### For Agents
- Query Context7 before any decision
- Cite all sources in issue comments
- Update `lessons.md` when learning occurs
- Follow anti-hallucination checklist

## 🎯 Next Steps

1. **Complete MCP Setup**:
   ```bash
   # Set GitHub token
   $env:GITHUB_TOKEN="your_token"
   
   # Verify connection
   gh auth status
   ```

2. **Let Architect Design Angular Structure** (Issue #1):
   - Architect will query Context7 for Angular patterns
   - Create ADR for project structure
   - Design module organization
   - Update issue with design

3. **Implement Angular Project** (UX Dev):
   - Follow Architect's design
   - Initialize Angular 21
   - Configure TypeScript, ESLint, Prettier
   - Setup Vitest

4. **Validate Setup** (Tester):
   - Verify build works
   - Test dev server
   - Check configuration
   - Approve or create bug issues

## 📞 Support

**Questions?**
1. Check documentation in `docs/agents/`
2. Review `lessons.md` for similar situations
3. Create issue with `needs:review` label
4. Tag human reviewers

**Found an Issue?**
```bash
gh issue create \
  --title "[AGENT] Brief description" \
  --label "type:bug,priority:medium" \
  --body "Detailed description"
```

## 🌟 Key Success Factors

1. **Use Labels Correctly**: Labels drive the entire workflow
2. **Let Agents Work**: Trust the agent system for routine tasks
3. **Review Promptly**: Agents wait on `needs:review` - don't block them
4. **Provide Clear Requirements**: Better requirements = better results
5. **Learn and Adapt**: Check `lessons.md` regularly

---

## ✨ You're Ready!

The agent system is fully configured and Issue #1 is waiting for the Architect agent to begin work.

**Current State**:
- ✅ Agents configured
- ✅ Labels created
- ✅ Documentation complete
- ✅ First issue ready
- ⏳ Waiting for MCP token setup

**To Start**:
1. Set `GITHUB_TOKEN` environment variable
2. Architect will automatically design Angular structure
3. Development workflow begins!

---

**Need Help?** Check `docs/agents/README.md` or create an issue with `needs:review` label.

**Happy Building!** 🚀
