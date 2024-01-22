# starter-ts-bun

starter repository for typescript projects with bun

## prisma

### Prerequisistes

1. A DB exists. If you want to run one in docker, you can simply run `bun docker:up` to create a docker container with the latest postgres.
2. A DB connection is configured in `.env`. You can use `env/sample.env` as template.

### Existing DB schema

1. Run `bun prisma:introspect` to introspect the schema and populate `schema.prisma` with the model.
2. Run `bun prisma:migrate` to create the migration SQL files and update the prisma client types.

### New DB schema

1. Populate `schema.prisma` with your model as desired.
2. Run `bun prisma:migrate` to create the migration SQL files, sync the DB schema and update the prisma client types.
