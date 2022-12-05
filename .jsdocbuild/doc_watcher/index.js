//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const hound = require('hound');
const { exec } = require('child_process');

//joining path of directory
const directoryPath = path.join(__dirname, '../', '../', 'src');

// Create a directory tree watcher.
const watcher = hound.watch(directoryPath);
console.log('Watcher initialized...');

// Add callbacks for file and directory events.  The change event only applies
// to files.

const CREATE = 'create';
const CHANGE = 'change';
const DELETE = 'delete';

const onChange = (file, stats, type) => {
  console.log(type, 'in ', file);
  exec(`sh ${__dirname}/buildjsdoc.sh`, (error, stdout, stderr) => {
    console.log(' ---------- Building jsDoc ---------- ', stdout);
    console.log(' ---------- Building END -------- ');
    if (error !== null) {
      console.log(' ---------- Error while building jsDoc ---------- ', stderr);
      console.log(`exec error: ${error}`);
      console.log(' ---------- Error END ---------- ', stderr);
    }
  });
};

watcher.on(CREATE, function (file, stats) {
  return onChange(file, stats, CREATE);
});
console.log(`Watcher on ${CREATE} mounted`);

watcher.on(CHANGE, function (file, stats) {
  return onChange(file, stats, CHANGE);
});
console.log(`Watcher on ${CHANGE} mounted`);

watcher.on(DELETE, function (file) {
  return onChange(file, stats, DELETE);
});
console.log(`Watcher on ${DELETE} mounted`);

// // Unwatch all watched files and directories.
// watcher.clear()
