# HaarKliniek45 - Angular Application

Professional hair transplant clinic website built with Angular 21.

## 🚀 Quick Start

### Prerequisites
- Node.js 22.19.0 or higher
- npm 11.11.0 or higher

### Development Server
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Build
```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Testing
```bash
npm test                # Run tests with Vitest
npm run test:coverage   # Generate coverage report  
npm run test:ui         # Open Vitest UI
```

### Linting & Formatting
```bash
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting
```

## 📁 Project Structure

```
haarkliniek45/
├── .github/           # GitHub workflows and agent configurations
│   ├── agents/        # Agent system (Issue Creator, Architect, UX Dev, Tester)
│   └── mcp-config.json # MCP server configuration
├── docs/              # Documentation
│   ├── agents/        # Agent system documentation
│   └── architecture/  # Architecture Decision Records (ADRs)
├── src/               # Angular source code
│   ├── app/           # Application components and modules
│   ├── assets/        # Static assets (images, fonts, etc.)
│   │   └── images/    # Project images including logoTransparant.png
│   └── styles.scss    # Global styles
├── backup-static-site/ # Backup of original static HTML site
└── lessons.md         # Agent learning ledger
```

## 🛠️ Technology Stack

- **Framework**: Angular 21.1.0
- **Language**: TypeScript 5.9.2 (strict mode)
- **Testing**: Vitest 4.0.8
- **Styling**: SCSS
- **Linting**: ESLint with Angular rules
- **Formatting**: Prettier
- **MCP Servers**: Context7, Playwright, GitHub, FileSystem

## 🤖 Agent System

This project uses an intelligent multi-agent workflow system powered by MCP servers:

- **Issue Creator**: Analyzes requirements and creates structured GitHub issues
- **Architect**: Designs system architecture and technical solutions
- **UX Designer/Developer**: Implements UI/UX components with accessibility
- **Tester**: Ensures quality through comprehensive testing

See [Agent System Documentation](./docs/agents/README.md) for details.

## 📝 Development Workflow

1. **Create Feature Request**:
   ```bash
   gh issue create --label "type:feature,needs:architecture"
   ```

2. **Architect Agent** designs the feature
3. **UX Dev Agent** implements the design
4. **Tester Agent** validates with tests
5. **Human** reviews and merges

## 🎨 Design System

The application uses a custom design system with:
- Green color palette compatible with logoTransparant.png
- Playfair Display (headings) + Lato (body) typography
- 8px base grid spacing system
- WCAG 2.1 AA accessibility compliance

## 🧪 Testing Strategy

- **Unit Tests**: Vitest with 80% coverage target
- **E2E Tests**: Playwright for critical user flows
- **Visual Regression**: Automated screenshot comparison
- **Accessibility**: axe-core + manual screen reader testing

## 📊 Code Quality

- TypeScript strict mode enabled
- ESLint with Angular recommended rules
- Prettier for consistent formatting

## 🔒 Anti-Hallucination Measures

All agent decisions are:
- Grounded in Context7 documentation queries
- Validated against existing codebase patterns
- Cited with sources
- Subject to human review for critical changes

See [Anti-Hallucination Documentation](./docs/agents/anti-hallucination.md).

## 📚 Additional Resources

- [Agent Guidelines](./docs/agents/agent-guidelines.md)
- [Workflow Orchestration](./docs/agents/workflow-orchestration.md)
- [Rebuild Plan](./rebuild_plan.md)
- [Quick Start Guide](./QUICKSTART.md)
- [Lessons Learned](./lessons.md)

## 🤝 Contributing

This project uses automated agents for development. To contribute:

1. Read the [Agent Guidelines](./docs/agents/agent-guidelines.md)
2. Create an issue with appropriate labels
3. Let the agent system process it
4. Review and approve agent-generated PRs

## 📄 License

Private project - All rights reserved

---

**Built with** ❤️ **using Angular 21 and MCP-powered agents**
