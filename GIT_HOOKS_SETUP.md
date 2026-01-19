# Git Hooks Setup - Pre-commit Linting

This repository is now configured with Git hooks to ensure code quality before commits.

## What Was Installed

1. **Husky** - Git hooks manager that makes it easy to set up and share Git hooks across the team
2. **lint-staged** - Runs linters on Git staged files only (more efficient than linting the entire codebase)

## How It Works

When anyone tries to commit code, the following happens automatically:

1. Git triggers the pre-commit hook (`.husky/pre-commit`)
2. The hook runs `lint-staged`
3. `lint-staged` runs ESLint on all staged `.ts`, `.tsx`, `.js`, and `.jsx` files
4. If there are any linting errors, the commit is **blocked**
5. The developer must fix the errors before the commit can proceed
6. `eslint --fix` will automatically fix auto-fixable issues

## Configuration

### Pre-commit Hook
Location: `.husky/pre-commit`
```bash
npx lint-staged
```

### Lint-staged Configuration
Location: `package.json`
```json
"lint-staged": {
  "*.{ts,tsx,js,jsx}": [
    "eslint --fix"
  ]
}
```

## For Team Members

When team members clone or pull this repository, they need to run:
```bash
npm install
```

The `prepare` script in `package.json` will automatically set up Husky hooks after installation.

## Testing the Setup

To test if the pre-commit hook is working:

1. Make a change to any TypeScript/JavaScript file
2. Stage the file: `git add <file>`
3. Try to commit: `git commit -m "test"`
4. The linter will run automatically and block the commit if there are errors

## Manual Linting

You can still run linting manually at any time:
```bash
npm run lint
```

## Benefits

- ✅ Ensures all committed code passes linting rules
- ✅ Catches errors before they reach the repository
- ✅ Maintains consistent code quality across the team
- ✅ Automatic for everyone - no manual steps needed
- ✅ Fast - only lints changed files, not the entire codebase
