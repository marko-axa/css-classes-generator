/*
  This script only copy one file from A to B.
  Reckless decision: Script will override destination (Use the Force, Luke!)

  Example: node copyAtoB.js user.md ./home/user.md

  Out of scope:
    - no directory copy
    - no multiple files

*/
const fs = require('fs-extra');
const path = require('path');

const src = process.argv.at(2);
const target = process.argv.at(3);

if (!src || !target) {
  console.error('usage: node copy.js <src> <target>');
  process.exit(1);
}

const srcPath = path.resolve(src);
const targetPath = path.resolve(target);

fs.stat(srcPath)
  .then(stats => {
    if (!stats.isFile()) {
      throw new Error('I checked your "file", and this is not a file :(');
    }
    return fs.pathExists(targetPath);
  })
  .then(targetExist => {
    return fs.copy(srcPath, targetPath, {overwrite: true});
  })
  .then(() => {
    return fs.pathExists(srcPath);
  })
  .then(exists => {
    if (!exists) {
      throw new Error("I can't verify our files are copied!");
    }
    // success is silent friend
  })
  .catch(err => {
    console.log(`We got an error, here is more context!\n` + err?.message);
  });
