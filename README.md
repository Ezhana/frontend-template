# Frontend Template

A pnpm-based frontend monorepo providing reusable ESLint and Prettier configurations, plus Vue and React + Vite project templates.

## Features

- pnpm workspace monorepo
- Centralized dependency versions with pnpm Catalog
- ESLint 10 Flat Config
- TypeScript ESLint configuration
- Vue 3 ESLint configuration
- React ESLint configuration
- Shared Prettier configuration
- Vue + Vite + TypeScript template
- React + Vite + TypeScript template
- lint-staged with simple-git-hooks
- GitHub Actions CI
- Changesets for package versioning and releases

## Requirements

- Node.js 24 LTS
- pnpm 12

The repository pins the package manager in the root `package.json` and defines the supported Node.js version through `engines`.

## Repository Structure

```text
frontend-template/
├── apps/
│   ├── vue-vite/
│   └── react-vite/
│
├── packages/
│   ├── eslint-config-base/
│   ├── eslint-config-typescript/
│   ├── eslint-config-vue/
│   ├── eslint-config-react/
│   └── prettier-config/
│
├── docs/
├── external/
├── scripts/
│
├── .changeset/
├── .github/
│   └── workflows/
│
├── eslint.config.mjs
├── prettier.config.mjs
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Packages

### ESLint

#### `@ezhana/eslint-config-base`

Base ESLint Flat Config for frontend JavaScript projects.

Includes:

- ESLint recommended rules
- Browser globals
- Basic JavaScript rules
- Prettier compatibility

Usage:

```js
import config from '@ezhana/eslint-config-base'

export default config
```

#### `@ezhana/eslint-config-typescript`

TypeScript ESLint configuration built on top of the base configuration.

Usage:

```js
import config from '@ezhana/eslint-config-typescript'

export default config
```

#### `@ezhana/eslint-config-vue`

Vue 3 + TypeScript ESLint configuration.

Usage:

```js
import config from '@ezhana/eslint-config-vue'

export default config
```

#### `@ezhana/eslint-config-react`

React + TypeScript ESLint configuration.

Usage:

```js
import config from '@ezhana/eslint-config-react'

export default config
```

### Prettier

#### `@ezhana/prettier-config`

Shared Prettier configuration for frontend projects.

Usage:

```js
export { default } from '@ezhana/prettier-config'
```

## Templates

### Vue + Vite

```text
apps/vue-vite
```

Stack:

- Vue 3
- Vite
- TypeScript
- ESLint
- Prettier

Run locally:

```bash
pnpm --filter @ezhana/template-vue-vite dev
```

Build:

```bash
pnpm --filter @ezhana/template-vue-vite build
```

### React + Vite

```text
apps/react-vite
```

Stack:

- React
- Vite
- TypeScript
- ESLint
- Prettier

Run locally:

```bash
pnpm --filter @ezhana/template-react-vite dev
```

Build:

```bash
pnpm --filter @ezhana/template-react-vite build
```

## Getting Started

Clone the repository and install dependencies:

```bash
pnpm install
```

Run the complete validation:

```bash
pnpm check
```

This performs:

```text
format:check
lint
build:templates
```

Run linting:

```bash
pnpm lint
```

Automatically fix lint issues:

```bash
pnpm lint:fix
```

Check formatting:

```bash
pnpm format:check
```

Format the repository:

```bash
pnpm format
```

## Development Workflow

The repository uses a layered ESLint configuration model:

```text
@ezhana/eslint-config-base
            │
            ▼
@ezhana/eslint-config-typescript
            │
      ┌─────┴─────┐
      ▼           ▼
    Vue         React
```

This allows projects to opt into only the configuration they need.

For example:

```text
JavaScript
  → @ezhana/eslint-config-base

TypeScript
  → @ezhana/eslint-config-typescript

Vue
  → @ezhana/eslint-config-vue

React
  → @ezhana/eslint-config-react
```

Prettier is managed independently through:

```text
@ezhana/prettier-config
```

## Git Hooks

The repository uses:

- `simple-git-hooks`
- `lint-staged`

Before a commit, only staged files are processed.

The workflow is:

```text
git commit
    ↓
pre-commit
    ↓
lint-staged
    ├── Prettier
    └── ESLint
```

This keeps the local commit check fast while CI performs the complete repository validation.

## CI

GitHub Actions validates:

```text
format:check
lint
build:templates
```

The local equivalent is:

```bash
pnpm check
```

## Versioning and Releases

Publishable packages are located under `packages/`.

The repository uses Changesets for package versioning:

```bash
pnpm changeset
```

Review pending releases:

```bash
pnpm changeset:status
```

Apply version changes:

```bash
pnpm changeset:version
```

Publish packages:

```bash
pnpm changeset:publish
```

The `apps/` templates and the root workspace are private and are not published as npm packages.

## Package Version Management

Core development tooling is managed through pnpm Catalog:

```yaml
catalog:
  eslint: ...
  prettier: ...
  typescript: ...
```

This keeps shared tooling versions consistent across the workspace.

Framework and build-tool versions such as Vue, React, Vite, `vue-tsc`, and framework-specific plugins are maintained by their respective templates.

## Design Principles

### Explicit dependencies

Each workspace package declares the dependencies it directly uses instead of relying on transitive dependencies.

### Layered configuration

Shared ESLint configurations are composed from small, focused layers rather than one large configuration package.

### Framework-specific ownership

Vue and React specific linting dependencies belong to their corresponding ESLint configuration packages.

### Templates remain lightweight

Application templates consume shared tooling instead of duplicating the implementation dependencies of those tools.

### Local checks and CI have different responsibilities

Local Git hooks prioritize fast feedback on changed files.

CI validates the complete workspace.

## License

MIT
