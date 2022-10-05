# rush-roku-example

This project is a testbed that aims to prove out the concept of a Rush monorepo designed around Roku development and the BrighterScript toolchain.

In order to run unit tests you will need a Roku device in developer mode, see https://developer.roku.com/docs/developer-program/getting-started/developer-setup.md for more information.

## Changelog

 - rush init
 - copy https://github.com/rokudev/hello-world sample app
 - crib pieces from the following examples:
   - https://github.com/georgejecook/rooibos-roku-sample
   - https://github.com/rokucommunity/brighterscript-template
 - build a "roku-rig" containing bsconfig-base.json
 - enable phased builds
 - created a simple "library" that just exports a file with some functions
   - this shows off consuming library functions from an app component (not possible normally)
   - first iteration uses bsconfig file mapping for imports

## Challengelog

 - `rooibos-roku` seems to have an unmet dependency on `undent`
   - fix: patched in pnpmfile for now
   - FIXED! Undent is now a dependency
 - `bsconfig.json` extending base file seems to bake real path of `rootDir` at read time
   - fix: override `rootDir` in each app's bsconfig for now
 - I don't think there is a way to limit parallelism on only the "test" phase
   - Since each unit test pass requires a device, some limit/gate would be necessary
   - For now, disable parallelism at command level for bulk commands (command-line.json)
 - Both "rushx build" and "rushx dev" (bsc and roku-deploy) read the bs-config file, but roku-deploy is stricter
   - For example, comments are NOT ALLOWED by roku-deploy, but they ARE by bsc
   - This is very restrictive, comments are crucial for config json files
   - fix: delete comments (but hopefully we can fix upstream)
   - FIXED: This was actually a JSON.parse in the build script!
 - Make SURE that you make a Main.bs, not a Main.brs, otherwise Rooibos can't patch your main()

## Next steps

 - Move "dev script" into tools/ folder
   - It could be written in typescript and added as dependency of hello-world
   - Move dotenv requirement out of app and into the tool
 - Try out vscode extension
   - Setup a bsfmt.json
   - Do we need to add bsfmt itself to package.json of every project, or does extension handle it?
 - bslint
   - Make lint run as part of build?
   - Make lint run on pre-commit?
 - rooibos
   - add a unit test for hello-world app
   - ensure it runs
 - libraries
   - can we run a "library's" unit tests independent of an app with a manifest file?
 - ropm
   - convert library to use ropm
   - test when ropm happens (at build time?)
   - experiment with turning ropm directory copies into symlinks into node_modules
   - can ropm "install" from node_modules instead of searching itself? (rely on pnpm cache)

