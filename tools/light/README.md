# @acme/light

A wrapper for the brighterscript toolchain that provides a standardized dev experience.

In this example monorepo, we separate what are really just "dev scripts" into their own folder so we can write them in TypeScript, write unit tests for them if they grow too big, etc.

It's possible these could be standardized enough that you'd release them as their own small open-source wrapper, but it depends on scope -- some things (like injecting version and metadata into app at build time) are universally needed, but perhaps not something you'd bake a specific implementation for.
