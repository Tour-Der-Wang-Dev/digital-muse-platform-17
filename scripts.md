
# Development Tools & Scripts Guide

## Overview
This document provides comprehensive documentation for all npm scripts, development tools, and automation commands available in the Lovable AI Creative Platform project.

**Last Updated:** 2025-06-07  
**Version:** 1.0.0  
**Package Manager:** npm (also supports yarn, pnpm, bun)

---

## Table of Contents
1. [Core Development Scripts](#core-development-scripts)
2. [Build & Deployment](#build--deployment)
3. [Testing Utilities](#testing-utilities)
4. [Code Quality Tools](#code-quality-tools)
5. [Maintenance Scripts](#maintenance-scripts)
6. [Performance Analysis](#performance-analysis)
7. [Troubleshooting Commands](#troubleshooting-commands)

---

## Core Development Scripts

### Development Server
```bash
npm run dev
# Aliases: npm start, npm run start:dev
```
**Purpose**: Starts the Vite development server with hot module replacement  
**Port**: 8080 (configured in vite.config.ts)  
**Environment**: Development mode with source maps  
**Prerequisites**: Node.js 18+, dependencies installed

**Expected Output**:
```
  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.1.100:8080/
  ➜  ready in 1.2s
```

**Performance Considerations**:
- First start: ~2-3 seconds (cold start)
- Hot reload: ~100-300ms
- Memory usage: ~200-400MB

**Common Issues & Solutions**:
```bash
# Port already in use
npm run dev -- --port 3000

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev

# Network access issues
npm run dev -- --host 0.0.0.0
```

---

## Build & Deployment

### Production Build
```bash
npm run build
```
**Purpose**: Creates optimized production bundle  
**Output Directory**: `dist/`  
**Build Time**: ~30-60 seconds  
**Bundle Size Target**: < 1MB gzipped

**Build Process**:
1. TypeScript compilation
2. Asset optimization (images, fonts)
3. CSS optimization and purging
4. JavaScript minification
5. Code splitting by routes
6. Source map generation

**Success Criteria**:
```
✓ built in 45.23s
✓ dist/index.html                   2.45 kB │ gzip:  1.23 kB
✓ dist/assets/index-a1b2c3d4.css   125.67 kB │ gzip: 18.34 kB
✓ dist/assets/index-e5f6g7h8.js    456.89 kB │ gzip: 89.12 kB
```

### Preview Production Build
```bash
npm run preview
```
**Purpose**: Preview production build locally  
**Port**: 4173  
**Use Case**: Final testing before deployment

### Build Analysis
```bash
npm run build:analyze
```
**Purpose**: Analyze bundle size and dependencies  
**Output**: Interactive bundle analyzer  
**Threshold Alerts**:
- Bundle size > 1MB (warning)
- Single chunk > 500KB (warning)
- Duplicate dependencies (error)

---

## Testing Utilities

### Unit Testing
```bash
npm run test
# Run all unit tests
```
**Framework**: Vitest + Testing Library  
**Coverage Target**: > 80%  
**Test Location**: `src/**/*.test.{ts,tsx}`

**Test Categories**:
- Component rendering tests
- Hook behavior tests
- Utility function tests
- Service integration tests

### Test Watching
```bash
npm run test:watch
```
**Purpose**: Continuous testing during development  
**Auto-runs**: On file changes  
**Recommended**: Keep running during development

### Coverage Report
```bash
npm run test:coverage
```
**Output**: HTML coverage report in `coverage/`  
**Thresholds**:
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

**Coverage Example**:
```
=============================== Coverage summary ===============================
Statements   : 85.34% ( 1234/1446 )
Branches     : 78.92% ( 567/718 )
Functions    : 87.45% ( 234/267 )
Lines        : 84.78% ( 1123/1324 )
================================================================================
```

### End-to-End Testing
```bash
npm run test:e2e
```
**Framework**: Playwright  
**Browsers**: Chrome, Firefox, Safari  
**Test Scenarios**:
- User registration flow
- Image generation workflow
- Style system interactions
- Responsive design testing

### Component Testing
```bash
npm run test:components
```
**Purpose**: Visual regression testing  
**Tool**: Storybook + Chromatic  
**Output**: Visual diff reports

---

## Code Quality Tools

### Linting
```bash
npm run lint
```
**Tool**: ESLint with TypeScript rules  
**Configuration**: `eslint.config.js`  
**Rules**: 
- TypeScript strict mode
- React best practices
- Accessibility rules (eslint-plugin-jsx-a11y)
- Import organization

**Auto-fix Available**:
```bash
npm run lint:fix
```

### Type Checking
```bash
npm run type-check
```
**Tool**: TypeScript Compiler (tsc)  
**Purpose**: Static type analysis without emission  
**Performance**: ~5-10 seconds for full check

**Type Check with Watch**:
```bash
npm run type-check:watch
```

### Code Formatting
```bash
npm run format
```
**Tool**: Prettier  
**Configuration**: `.prettierrc`  
**Scope**: All TypeScript, JavaScript, CSS, and Markdown files

**Format Check Only**:
```bash
npm run format:check
```

### Pre-commit Hooks
```bash
npm run pre-commit
```
**Runs Automatically**: On git commit  
**Includes**:
1. Lint staged files
2. Type check
3. Run affected tests
4. Format code

---

## Maintenance Scripts

### Dependency Management
```bash
npm run deps:check
```
**Purpose**: Check for outdated dependencies  
**Tool**: npm-check-updates  
**Output**: List of available updates

```bash
npm run deps:update
```
**Purpose**: Update dependencies safely  
**Strategy**: 
- Patch updates: Automatic
- Minor updates: Semi-automatic
- Major updates: Manual review required

### Dependency Audit
```bash
npm run security:audit
```
**Purpose**: Security vulnerability scanning  
**Tool**: npm audit + additional security tools  
**Auto-fix**: Available for compatible issues

```bash
npm run security:audit:fix
```

### Cache Management
```bash
npm run cache:clear
```
**Purpose**: Clear all development caches  
**Includes**:
- Node modules cache
- Vite cache
- TypeScript cache
- Test cache

### Database Scripts
```bash
npm run db:generate
```
**Purpose**: Generate TypeScript types from Supabase schema  
**Output**: `src/integrations/supabase/types.ts`  
**Frequency**: Run after schema changes

```bash
npm run db:reset
```
**Purpose**: Reset development database  
**⚠️ Warning**: Destructive operation - development only

---

## Performance Analysis

### Bundle Analysis
```bash
npm run analyze:bundle
```
**Tool**: Webpack Bundle Analyzer  
**Metrics**:
- Bundle size by module
- Duplicate dependencies
- Tree-shaking effectiveness
- Code splitting efficiency

### Performance Audit
```bash
npm run audit:performance
```
**Tool**: Lighthouse CI  
**Metrics**:
- Performance score (target: > 90)
- First Contentful Paint (target: < 1.5s)
- Largest Contentful Paint (target: < 2.5s)
- Cumulative Layout Shift (target: < 0.1)

### Memory Profiling
```bash
npm run profile:memory
```
**Purpose**: Analyze memory usage patterns  
**Tool**: Node.js memory profiler  
**Output**: Memory usage reports and heap snapshots

### Load Testing
```bash
npm run test:load
```
**Tool**: Artillery.js  
**Scenarios**:
- Concurrent user simulation
- API endpoint stress testing
- Database connection pooling
- Image generation load testing

---

## Environment-Specific Scripts

### Development Environment
```bash
npm run dev:reset
```
**Purpose**: Complete development environment reset  
**Actions**:
1. Clear all caches
2. Reinstall dependencies
3. Reset database
4. Clear local storage

### Staging Environment
```bash
npm run deploy:staging
```
**Purpose**: Deploy to staging environment  
**Requirements**: Staging environment variables  
**Validation**: Automated smoke tests post-deployment

### Production Environment
```bash
npm run deploy:production
```
**Purpose**: Deploy to production environment  
**Requirements**:
- Production environment variables
- Manual approval
- Rollback plan
- Health checks enabled

**Pre-deployment Checks**:
```bash
npm run deploy:check
```

---

## Troubleshooting Commands

### Diagnostic Tools
```bash
npm run doctor
```
**Purpose**: Comprehensive system health check  
**Checks**:
- Node.js version compatibility
- Dependency integrity
- Environment variable validation
- Port availability
- Database connectivity

### Debug Mode
```bash
npm run dev:debug
```
**Purpose**: Start development server with enhanced debugging  
**Features**:
- Verbose logging
- Source map debugging
- Performance monitoring
- Network request logging

### System Information
```bash
npm run info
```
**Output**: System and project information  
**Includes**:
- Node.js version
- npm version
- Operating system
- Project dependencies
- Environment variables (non-sensitive)

### Clean Installation
```bash
npm run clean:install
```
**Purpose**: Fresh installation from scratch  
**Actions**:
1. Remove node_modules
2. Remove package-lock.json
3. Clear npm cache
4. Fresh npm install

---

## Custom Development Tools

### Component Generator
```bash
npm run generate:component ComponentName
```
**Purpose**: Generate new component with boilerplate  
**Creates**:
- Component file with TypeScript interface
- Test file with basic tests
- Storybook story
- Export from index file

### Service Generator
```bash
npm run generate:service ServiceName
```
**Purpose**: Create new service class  
**Template**: Includes error handling, TypeScript types, tests

### API Documentation
```bash
npm run docs:api
```
**Purpose**: Generate API documentation  
**Tool**: TypeDoc  
**Output**: `docs/api/` directory

### Storybook
```bash
npm run storybook
```
**Purpose**: Component development environment  
**Port**: 6006  
**Features**: Interactive component testing

---

## Performance Benchmarks

### Script Execution Times
| Script | Cold Start | Warm Start | Memory Usage |
|--------|------------|------------|--------------|
| `npm run dev` | 2.5s | 1.2s | 250MB |
| `npm run build` | 45s | 35s | 500MB |
| `npm run test` | 8s | 3s | 150MB |
| `npm run lint` | 12s | 5s | 100MB |

### Optimization Tips
1. **Use npm scripts directly** instead of running through package.json
2. **Keep dependencies updated** for performance improvements
3. **Use `--parallel` flag** for independent script execution
4. **Enable caching** in CI/CD environments

---

## Script Categories Summary

### 🚀 Daily Development
- `npm run dev` - Start development server
- `npm run test:watch` - Continuous testing
- `npm run lint:fix` - Fix code issues

### 🔧 Pre-Commit
- `npm run lint` - Check code quality
- `npm run type-check` - Verify types
- `npm run test` - Run tests

### 📦 Build & Deploy
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run deploy:staging` - Deploy to staging

### 🔍 Analysis & Debugging
- `npm run analyze:bundle` - Analyze bundle
- `npm run audit:performance` - Performance audit
- `npm run doctor` - System diagnostics

---

**Document Version:** 1.0.0  
**Last Updated:** 2025-06-07  
**Next Review:** 2025-07-07  
**Maintainer:** Development Team
