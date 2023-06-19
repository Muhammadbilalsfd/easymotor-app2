# syntax = docker/dockerfile:1.2
# --------------> The build image
FROM node:14-alpine AS build
WORKDIR app
COPY package*.json /app/
COPY cicd/use-npmrc.sh ./
RUN --mount=type=secret,id=npmrc,dst=/tmp/npmrc_token sh ./use-npmrc.sh

# --------------> The production image
FROM node:14-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR app
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node tsconfig.prod.runtime.json /app
COPY --chown=node:node dist /app/dist
ENV TS_NODE_PROJECT tsconfig.prod.runtime.json
CMD ["dumb-init", "node", "-r", "tsconfig-paths/register", "/app/dist/src"]
