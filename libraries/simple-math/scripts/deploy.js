"use strict";

const path = require("path");
const yargs = require("yargs");
const {
  deleteInstalledChannel,
  publish,
  rokuDeploy,
} = require("roku-deploy");

// This loads default environment variables from our .env file
require("dotenv").config();

const buildDirectory = "build";
const appDirectory = "out";

const { _: targets } = yargs.argv;

const buildType = targets[0];
if (!buildType) {
  fail("Missing build type to deploy");
}

const stagingDir = path.join(buildDirectory, buildType);
const outDir = path.join(appDirectory, buildType);
const outFile = `${buildType}.zip`;

async function zip() {
    console.log("Zipping app files")
    return rokuDeploy.zipPackage({
        outDir,
        stagingDir,
        outFile
    })
}

async function deploy() {
  console.log("Uninstalling existing channel...");
  try {
    await deleteInstalledChannel(options);
  } catch (err) {
    // ignore
  }

  console.log(`Installing ${buildType}.zip...`);
  const publishResult = await publish({
    outDir,
    outFile,
    host: process.env.ROKU_IP,
    password: process.env.ROKU_PASSWORD,
  });
  console.log("Done:", publishResult.message);
}

function fail(message) {
    console.error(message);
    process.exit(1);
}

zip().then(() => deploy()).catch(err => {
    fail(`An error occurred: ${String(err)}`);
})
