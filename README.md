# Turbo Monorepo

This is a monorepo built with [Turbo](https://turbo.build/).

## Structure

```
├── apps/
│   └── web/          # Main React application
├── packages/
│   ├── ui/           # Shared UI components
│   ├── config-eslint/    # Shared ESLint configuration
│   └── config-typescript/   # Shared TypeScript configuration
└── turbo.json        # Turbo configuration
```

## Setup

**Important**: You need to manually update the root `package.json` to add workspace configuration:

```json
{
  "name": "turbo-monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "type-check": "turbo type-check"
  },
  "devDependencies": {
    "turbo": "latest"
  },
  "packageManager": "npm@10.0.0"
}
```

## Development

Run the development server:

```bash
npm run dev
```

Build all packages:

```bash
npm run build
```

Lint all packages:

```bash
npm run lint
```

## Adding New Apps/Packages

- Add new apps in `apps/` directory
- Add new packages in `packages/` directory
- Update the workspace pattern in `package.json` if needed

## Commands

- `turbo dev` - Start all apps in development mode
- `turbo build` - Build all apps and packages
- `turbo lint` - Lint all apps and packages
- `turbo type-check` - Type check all apps and packages

## Technologies

This project is built with:

- Turbo (monorepo management)
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
