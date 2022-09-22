# rush-roku-example

This project is a testbed that aims to prove out the concept of a Rush monorepo designed around Roku development and the BrighterScript toolchain.

## Changelog

 - rush init
 - copy https://github.com/rokudev/hello-world sample app
 - crib pieces from the following examples:
   - https://github.com/georgejecook/rooibos-roku-sample
   - https://github.com/rokucommunity/brighterscript-template
 - build a "roku-rig" containing bsconfig-base.json

## Challengelog

 - `rooibos-roku` seems to have an unmet dependency on `undent`
   - fix: patched in pnpmfile for now
 - `bsconfig.json` extending base file seems to bake real path of `rootDir` at read time
   - fix: override `rootDir` in each app's bsconfig for now
