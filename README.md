# seed-ngx-library

Reusable Angular 21 npm library seed for Ngx-Workshop. Follows ngx-user-metadata,
ngx-shared-headers, ngx-navigational-list, ngx-asset-manager, and ngx-theme-picker:
a private workspace, a scoped library under projects/, and a separate demo app.

## Create a library

With the updated Ngx-Workshop Node CLI and this seed checkout:

```sh
ngx-workshop create-library example --template ./seed-ngx-library
# Default: ngx-example, package @tmdjr/ngx-example, demo port 4200
ngx-workshop create-library example --npm-scope @your-org --port 4300 --template ./seed-ngx-library
```

Once this seed is hosted at Ngx-Workshop/seed-ngx-library, omit --template to clone it.
Use --github to create and push a new repository. This does not publish to npm.
Read [seed adoption](docs/seed-adoption.md) for direct cloning and customization.

## Development

Use Node.js 22.12+ (or 24+) and npm 11.6+.

```sh
npm ci
npm start
# Second terminal: rebuild the library after editing its source
npm run watch
npm run check
npm run pack
```

The demo at http://localhost:4200 imports @tmdjr/seed-ngx-library from dist/.
Tests run with Vitest and jsdom, without a browser install. npm run check runs
the public input test and production builds for the library and demo. npm run pack
creates a tarball in the workspace root; install it in another Angular app to test consumption.

## Structure

- projects/seed-ngx-library/src/public-api.ts: supported public API.
- projects/seed-ngx-library/src/lib/: standalone OnPush component and behavior test.
- projects/seed-ngx-library/package.json: publishable package identity, version, peers.
- projects/seed-ngx-library-demo/: consumer app using the built public API.
- .github/workflows/ci.yml: tests, builds, package validation.
- .github/workflows/publish.yml: manual npm publication after trusted publisher setup.

The root package is private. Publish only dist/seed-ngx-library. Production uses
partial compilation and Angular peer dependencies. No backend, Material, service
contracts, or micro-frontend runtime is required by the starter.

See [development](docs/development.md), [architecture](docs/architecture.md), and
[publishing](docs/publishing.md).
