"use strict";
const bsc = require("brighterscript");
const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const jju = require("jju");
require("dotenv").config();

// options
const argv = yargs
    .option("env", {
        description: "Target Deploy Environment, default: test)",
        type: "string",
        default: "test",
    }).argv;
const { env } = argv;

function applyStagingDir(baseConfig, env) {
    return {
        ...baseConfig,
        stagingDir: `./build/${env}`
    };
}

function applyConfigScript(baseConfig, env) {
    try {
        baseConfig = require('../brightscript.config.js').createConfig(baseConfig, env);
    } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') throw e;
    }
    return baseConfig;
}

function fail(message) {
    console.error(message);
    process.exit(1);
}

let baseConfig;

try {
    baseConfig = jju.parse(fs.readFileSync("bsconfig.json"))
} catch (e) {
    fail(`Error: Could not read JSON data from bsconfig.json: ${String(e)}`)
}

try {
    let config = applyStagingDir(baseConfig, env);
    config = applyConfigScript(config, env);
    new bsc.ProgramBuilder().run(config);
} catch (e) {
    fail(`Error: Could not compile program: ${String(e)}`)
}
