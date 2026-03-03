# Project Requirements v2

## Change summary from v1
- Add a dedicated Services section on the landing page.
- Add an entry for `clock.orchestrio.li` with a short description.
- Establish a requirement to add newly deployed services to this section.

## Base Requirements
- Frontend-only web application (no backend service required).
- Must be usable on modern desktop and mobile browsers.

## Functional Requirements
1. The landing page shall look premium/fancy and visually distinct.
2. The page shall include a strong hero section with clear value proposition.
3. The page shall include at least three feature highlight cards.
4. The page shall include a visible live-status style indicator.
5. The frontend shall be implemented with TypeScript + React + Tailwind.
6. The service shall be deployed as a lightweight Docker-based web service.
7. The service shall integrate with Traefik via Docker labels on external `edge-proxy` network.
8. The page shall include a Services section listing live tools with name, URL, and short description.
9. The Services section shall include `clock.orchestrio.li`.
10. Newly deployed orchestrio services shall be added to the Services section in future updates.
