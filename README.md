# orchestrio-website

Fresh implementation of the orchestrio.li frontend using the agents-md workflow.

## Workflow
- `agents-md/` is included as git submodule.
- Root `agents.md` points to organization implementation rules.
- Project requirements are defined in `project.md`.

## Stack
- TypeScript + React
- Tailwind CSS
- Vite build
- Nginx runtime container
- Docker Compose + Traefik labels

## Quick start
```bash
make bootstrap
make up
```

## Reproducibility notes
- `agents-md` is pinned as a git submodule commit.
- Node toolchain is pinned via `.nvmrc` (`22.22.0`).
- npm dependencies are lockfile-based (`package-lock.json`) and installed with `npm ci`.
- Docker images are version-pinned in `Dockerfile`.

## Routing
Traefik labels in `docker-compose.yml` route:
- `orchestrio.li`
- `www.orchestrio.li`

to `orchestrio-web` on external network `edge-proxy`.
