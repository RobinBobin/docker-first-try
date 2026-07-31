FROM node:24-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.18.0 --activate
COPY package.json pnpm-lock.yaml ./

FROM base AS common
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
  pnpm install --frozen-lockfile

FROM common AS dev
ENV NODE_ENV=development
CMD ["pnpm", "dev"]

FROM common AS build
COPY . .
RUN pnpm build
RUN pnpm prune --prod

FROM node:24-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production

RUN chown node:node /app

COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/package.json ./

USER node

CMD ["node", "dist/src/index.js"]
